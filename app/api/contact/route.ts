import { NextResponse } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const services = new Set([
  "AC Repair",
  "Emergency AC Repair",
  "AC Installation",
  "AC Maintenance",
  "Air Duct Cleaning",
  "Dryer Vent Cleaning",
  "Indoor Air Quality",
  "Other",
]);
const methods = new Set(["Phone", "Text", "Email"]);
const text = (value: unknown) =>
  typeof value === "string" ? value.trim() : "";
const requiredEnvironment = [
  "SUPABASE_URL",
  "SUPABASE_SERVICE_ROLE_KEY",
  "RESEND_API_KEY",
  "LEAD_NOTIFICATION_FROM",
  "LEAD_NOTIFICATION_TO",
  "UPSTASH_REDIS_REST_URL",
  "UPSTASH_REDIS_REST_TOKEN",
  "TURNSTILE_SECRET_KEY",
];

type ContactRequest = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  serviceNeeded: string;
  preferredContact: string;
  message: string;
  consent: boolean;
  turnstileToken: string;
  website?: string;
};

function clientIp(request: Request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}
async function verifyTurnstile(token: string, remoteip: string) {
  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: process.env.TURNSTILE_SECRET_KEY!,
        response: token,
        remoteip,
      }),
    },
  );
  const result = (await response.json().catch(() => null)) as {
    success?: boolean;
  } | null;
  return Boolean(response.ok && result?.success);
}

export async function POST(request: Request) {
  const body = (await request
    .json()
    .catch(() => null)) as Partial<ContactRequest> | null;
  if (!body)
    return NextResponse.json(
      { error: "Please complete the service request form." },
      { status: 400 },
    );
  if (text(body.website)) return NextResponse.json({ ok: true });
  if (requiredEnvironment.some((key) => !process.env[key]))
    return NextResponse.json(
      {
        error:
          "Online requests are temporarily unavailable. Please call us directly for immediate help.",
      },
      { status: 503 },
    );
  const contact: ContactRequest = {
    firstName: text(body.firstName),
    lastName: text(body.lastName),
    phone: text(body.phone),
    email: text(body.email),
    address: text(body.address),
    city: text(body.city),
    serviceNeeded: text(body.serviceNeeded),
    preferredContact: text(body.preferredContact),
    message: text(body.message),
    consent: body.consent === true,
    turnstileToken: text(body.turnstileToken),
  };
  if (
    !contact.firstName ||
    !contact.lastName ||
    contact.phone.replace(/\D/g, "").length < 10 ||
    !/^\S+@\S+\.\S+$/.test(contact.email) ||
    !contact.address ||
    !contact.city ||
    !services.has(contact.serviceNeeded) ||
    !methods.has(contact.preferredContact) ||
    !contact.consent ||
    !contact.turnstileToken
  )
    return NextResponse.json(
      {
        error:
          "Please complete all required fields with valid contact information.",
      },
      { status: 400 },
    );
  const ip = clientIp(request);
  const limiter = new Ratelimit({
    redis: new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL!,
      token: process.env.UPSTASH_REDIS_REST_TOKEN!,
    }),
    limiter: Ratelimit.slidingWindow(5, "10 m"),
    analytics: true,
    prefix: "contact",
  });
  const limit = await limiter.limit(ip);
  if (!limit.success)
    return NextResponse.json(
      {
        error:
          "Too many requests. Please wait a few minutes or call us directly.",
      },
      {
        status: 429,
        headers: {
          "Retry-After": String(Math.ceil((limit.reset - Date.now()) / 1000)),
        },
      },
    );
  if (!(await verifyTurnstile(contact.turnstileToken, ip)))
    return NextResponse.json(
      { error: "Security verification failed. Please try again." },
      { status: 400 },
    );
  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
  );
  const { error: databaseError } = await supabase
    .from("contact_leads")
    .insert({
      first_name: contact.firstName,
      last_name: contact.lastName,
      phone: contact.phone,
      email: contact.email,
      service_address: contact.address,
      city: contact.city,
      service_needed: contact.serviceNeeded,
      preferred_contact: contact.preferredContact,
      message: contact.message,
      consent: contact.consent,
    });
  if (databaseError)
    return NextResponse.json(
      {
        error:
          "We could not save your request. Please call us directly for immediate help.",
      },
      { status: 502 },
    );
  const { error: emailError } = await new Resend(
    process.env.RESEND_API_KEY!,
  ).emails.send({
    from: process.env.LEAD_NOTIFICATION_FROM!,
    to: [process.env.LEAD_NOTIFICATION_TO!],
    replyTo: contact.email,
    subject: `New ${contact.serviceNeeded} request from ${contact.firstName} ${contact.lastName}`,
    text: `New service request\n\nName: ${contact.firstName} ${contact.lastName}\nPhone: ${contact.phone}\nEmail: ${contact.email}\nAddress: ${contact.address}, ${contact.city}\nService: ${contact.serviceNeeded}\nPreferred contact: ${contact.preferredContact}\nMessage: ${contact.message || "None"}`,
  });
  if (emailError)
    return NextResponse.json(
      {
        error:
          "Your request was saved, but we could not notify the team. Please call us directly for immediate help.",
      },
      { status: 502 },
    );
  return NextResponse.json({ ok: true });
}
