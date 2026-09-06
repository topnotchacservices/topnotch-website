import { NextResponse } from "next/server";
import { saveContactRequest, type ContactRequest } from "@/lib/contact-request-store";

const services = new Set(["AC Repair", "Emergency AC Repair", "AC Installation", "AC Maintenance", "Air Duct Cleaning", "Dryer Vent Cleaning", "Indoor Air Quality", "Other"]);
const methods = new Set(["Phone", "Text", "Email"]);
const text = (value: unknown) => typeof value === "string" ? value.trim() : "";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null) as Partial<ContactRequest> | null;
  if (!body) return NextResponse.json({ error: "Please complete the service request form." }, { status: 400 });
  if (text(body.website)) return NextResponse.json({ ok: true });
  const contact: ContactRequest = { firstName: text(body.firstName), lastName: text(body.lastName), phone: text(body.phone), email: text(body.email), address: text(body.address), city: text(body.city), serviceNeeded: text(body.serviceNeeded), preferredContact: text(body.preferredContact), message: text(body.message), consent: body.consent === true };
  if (!contact.firstName || !contact.lastName || contact.phone.replace(/\D/g, "").length < 10 || !/^\S+@\S+\.\S+$/.test(contact.email) || !contact.address || !contact.city || !services.has(contact.serviceNeeded) || !methods.has(contact.preferredContact) || !contact.consent) return NextResponse.json({ error: "Please complete all required fields with valid contact information." }, { status: 400 });
  try { await saveContactRequest(contact); return NextResponse.json({ ok: true }); }
  catch { return NextResponse.json({ error: "We could not save your request. Please call us directly for immediate help." }, { status: 500 }); }
}