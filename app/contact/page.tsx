"use client";

import Script from "next/script";
import { FormEvent, useEffect, useRef, useState } from "react";
import { useSiteContent } from "@/components/content-provider";
import { ActionButton, SiteFooter, SiteHeader } from "@/components/site-shell";

const serviceOptions = [
  "AC Repair",
  "Emergency AC Repair",
  "AC Installation",
  "AC Maintenance",
  "Air Duct Cleaning",
  "Dryer Vent Cleaning",
  "Indoor Air Quality",
  "Other",
];
const trustPoints = [
  "Family-Owned",
  "Licensed & Insured",
  "24/7 Emergency Support",
  "Residential & Commercial Service",
  "Honest Recommendations",
];
const emptyForm = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  address: "",
  city: "",
  serviceNeeded: "",
  preferredContact: "Phone",
  message: "",
  consent: false,
  website: "",
  turnstileToken: "",
};

declare global {
  interface Window {
    turnstile?: {
      render: (
        element: HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback": () => void;
        },
      ) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

export default function ContactPage() {
  const content = useSiteContent();
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [turnstileLoaded, setTurnstileLoaded] = useState(false);
  const turnstileContainer = useRef<HTMLDivElement>(null);
  const turnstileWidgetId = useRef<string | undefined>(undefined);
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const update = <K extends keyof typeof emptyForm>(
    key: K,
    value: (typeof emptyForm)[K],
  ) => setForm((current) => ({ ...current, [key]: value }));
  useEffect(() => {
    if (
      !turnstileLoaded ||
      !turnstileSiteKey ||
      !turnstileContainer.current ||
      !window.turnstile
    )
      return;
    turnstileWidgetId.current = window.turnstile.render(
      turnstileContainer.current,
      {
        sitekey: turnstileSiteKey,
        callback: (turnstileToken) =>
          setForm((current) => ({ ...current, turnstileToken })),
        "expired-callback": () =>
          setForm((current) => ({ ...current, turnstileToken: "" })),
      },
    );
    return () => {
      if (turnstileWidgetId.current)
        window.turnstile?.remove(turnstileWidgetId.current);
    };
  }, [turnstileLoaded, turnstileSiteKey]);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);
    if (!form.consent) {
      setStatus({
        type: "error",
        text: "Please agree to be contacted before submitting your request.",
      });
      return;
    }
    if (!form.turnstileToken) {
      setStatus({
        type: "error",
        text: "Please complete the security verification before submitting.",
      });
      return;
    }
    setSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await response.json().catch(() => null);
      if (!response.ok)
        throw new Error(
          result?.error ??
            "We could not send your request. Please call us directly for immediate help.",
        );
      setForm(emptyForm);
      window.turnstile?.reset(turnstileWidgetId.current);
      setStatus({
        type: "success",
        text: "Thank you. Your request was received and the Top Notch team will follow up soon.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        text:
          error instanceof Error
            ? error.message
            : "We could not send your request. Please call us directly for immediate help.",
      });
    } finally {
      setSubmitting(false);
    }
  }
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        name: `Contact ${content.companyName}`,
        url: "https://topnotch-acservices.com/contact",
      },
      {
        "@type": "LocalBusiness",
        name: content.companyName,
        telephone: content.phone,
        email: content.email,
        url: "https://topnotch-acservices.com",
        identifier: `Florida HVAC License ${content.license}`,
        areaServed: ["Pompano Beach", "Fort Lauderdale", "South Florida"],
      },
    ],
  };

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onLoad={() => setTurnstileLoaded(true)}
      />
      <SiteHeader />
      <main className="overflow-hidden bg-white text-slate-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <section className="bg-[#edf8fc]">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-22">
            <div className="max-w-3xl">
              <p className="text-xs font-black tracking-[.16em] text-sky-700">
                CONTACT TOP NOTCH AC SERVICES
              </p>
              <h1 className="mt-4 text-4xl font-black leading-tight text-[#082544] sm:text-5xl">
                Need HVAC Help? We&apos;re Ready to Help.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-700">
                From 24/7 emergency AC repair to air duct and dryer vent
                service, Top Notch AC Services is ready to help homes, condos,
                and businesses across Pompano Beach and South Florida.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ActionButton>Book Service</ActionButton>
                <ActionButton phone className="bg-[#082544] hover:bg-[#061c32]">
                  Call Now {content.phone}
                </ActionButton>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#082544] py-10 text-white">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 px-5 sm:px-8 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-black tracking-[.14em] text-sky-300">
                24/7 EMERGENCY SUPPORT
              </p>
              <h2 className="mt-2 text-2xl font-black">
                AC Emergency? Call Us 24/7.
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-sky-100">
                For no cooling, unusual system behavior, or urgent comfort
                concerns, call directly for faster help.
              </p>
            </div>
            <ActionButton phone light className="min-h-13 px-7 text-base">
              Call {content.phone}
            </ActionButton>
          </div>
        </section>
        <section className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[.84fr_1.16fr]">
          <aside className="space-y-6">
            <div>
              <p className="text-xs font-black tracking-[.14em] text-sky-700">
                CONTACT DETAILS
              </p>
              <h2 className="mt-2 text-3xl font-black text-[#082544]">
                Talk with a local comfort team.
              </h2>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-xs font-black tracking-[.13em] text-slate-500">
                CALL
              </p>
              <a
                href={`tel:${content.phone.replace(/\D/g, "")}`}
                className="mt-2 block text-2xl font-black text-[#082544] hover:text-sky-600"
              >
                {content.phone}
              </a>
              <p className="mt-5 text-xs font-black tracking-[.13em] text-slate-500">
                EMAIL
              </p>
              <a
                href={`mailto:${content.email}`}
                className="mt-2 block break-words text-sm font-bold text-[#082544] hover:text-sky-600"
              >
                {content.email}
              </a>
              <p className="mt-5 text-sm font-bold text-[#082544]">
                Licensed & Insured
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Florida HVAC License {content.license}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={content.socialLinks.facebook}
                className="rounded-full border border-slate-300 px-4 py-2 text-sm font-bold text-[#082544] hover:border-sky-500 hover:text-sky-700"
              >
                Facebook
              </a>
              <a
                href={content.socialLinks.instagram}
                className="rounded-full border border-slate-300 px-4 py-2 text-sm font-bold text-[#082544] hover:border-sky-500 hover:text-sky-700"
              >
                Instagram
              </a>
            </div>
          </aside>
          <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
            <p className="text-xs font-black tracking-[.14em] text-sky-700">
              REQUEST SERVICE
            </p>
            <h2 className="mt-2 text-2xl font-black text-[#082544]">
              Tell us how we can help.
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Share a few details and our team will follow up about your service
              request.
            </p>
            <form className="mt-7 grid gap-4 sm:grid-cols-2" onSubmit={submit}>
              <label className="text-sm font-bold text-[#082544]">
                First Name
                <input
                  required
                  value={form.firstName}
                  onChange={(event) => update("firstName", event.target.value)}
                  autoComplete="given-name"
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5"
                />
              </label>
              <label className="text-sm font-bold text-[#082544]">
                Last Name
                <input
                  required
                  value={form.lastName}
                  onChange={(event) => update("lastName", event.target.value)}
                  autoComplete="family-name"
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5"
                />
              </label>
              <label className="text-sm font-bold text-[#082544]">
                Phone Number
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(event) => update("phone", event.target.value)}
                  autoComplete="tel"
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5"
                />
              </label>
              <label className="text-sm font-bold text-[#082544]">
                Email Address
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(event) => update("email", event.target.value)}
                  autoComplete="email"
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5"
                />
              </label>
              <label className="text-sm font-bold text-[#082544] sm:col-span-2">
                Service Address
                <input
                  required
                  value={form.address}
                  onChange={(event) => update("address", event.target.value)}
                  autoComplete="street-address"
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5"
                />
              </label>
              <label className="text-sm font-bold text-[#082544]">
                City
                <input
                  required
                  value={form.city}
                  onChange={(event) => update("city", event.target.value)}
                  autoComplete="address-level2"
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5"
                />
              </label>
              <label className="text-sm font-bold text-[#082544]">
                Service Needed
                <select
                  required
                  value={form.serviceNeeded}
                  onChange={(event) =>
                    update("serviceNeeded", event.target.value)
                  }
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5"
                >
                  <option value="">Select a service</option>
                  {serviceOptions.map((service) => (
                    <option key={service}>{service}</option>
                  ))}
                </select>
              </label>
              <fieldset className="sm:col-span-2">
                <legend className="text-sm font-bold text-[#082544]">
                  Preferred Contact Method
                </legend>
                <div className="mt-2 flex flex-wrap gap-4">
                  {["Phone", "Text", "Email"].map((method) => (
                    <label
                      key={method}
                      className="flex items-center gap-2 text-sm text-slate-700"
                    >
                      <input
                        type="radio"
                        name="preferredContact"
                        checked={form.preferredContact === method}
                        onChange={() => update("preferredContact", method)}
                        className="size-4 accent-sky-600"
                      />
                      {method}
                    </label>
                  ))}
                </div>
              </fieldset>
              <label className="text-sm font-bold text-[#082544] sm:col-span-2">
                Message
                <textarea
                  value={form.message}
                  onChange={(event) => update("message", event.target.value)}
                  rows={4}
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5"
                />
              </label>
              <label className="hidden" aria-hidden="true">
                Website
                <input
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.website}
                  onChange={(event) => update("website", event.target.value)}
                />
              </label>
              <label className="flex items-start gap-3 text-sm leading-6 text-slate-700 sm:col-span-2">
                <input
                  required
                  type="checkbox"
                  checked={form.consent}
                  onChange={(event) => update("consent", event.target.checked)}
                  className="mt-1 size-4 shrink-0 accent-sky-600"
                />
                I agree to be contacted by Top Notch AC Services about my
                request.
              </label>
              <div className="sm:col-span-2">
                {turnstileSiteKey ? (
                  <div ref={turnstileContainer} aria-label="Security verification" />
                ) : (
                  <p className="rounded-lg bg-amber-50 p-3 text-sm font-semibold text-amber-900">
                    Online requests are temporarily unavailable. Please call us directly.
                  </p>
                )}
              </div>
              {status && (
                <p
                  role="status"
                  className={`rounded-lg p-4 text-sm font-bold sm:col-span-2 ${status.type === "success" ? "bg-emerald-50 text-emerald-800" : "bg-red-50 text-red-700"}`}
                >
                  {status.text}
                </p>
              )}
              <button
                disabled={submitting}
                className="min-h-12 rounded-full bg-sky-500 px-6 text-sm font-extrabold text-white transition hover:bg-sky-600 disabled:opacity-60 sm:col-span-2"
              >
                {submitting ? "Sending request..." : "Send Service Request"}
              </button>
            </form>
          </section>
        </section>
        <section className="bg-sky-50 py-14 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-7 px-5 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            <div>
              <p className="text-xs font-black tracking-[.14em] text-sky-700">
                SERVICE AREA
              </p>
              <h2 className="mt-2 text-3xl font-black text-[#082544]">
                Serving Pompano Beach and South Florida.
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                Top Notch serves Pompano Beach, Fort Lauderdale, and nearby
                communities with responsive AC, air-duct, and dryer-vent
                service. See our service-area coverage before you book.
              </p>
              <div className="mt-7">
                <ActionButton href="/service-areas">
                  View Service Areas
                </ActionButton>
              </div>
            </div>
            <div className="rounded-xl bg-white p-7 shadow-sm">
              <p className="text-sm font-black text-sky-700">
                TRUSTED LOCAL SERVICE
              </p>
              <div className="mt-5 grid gap-3">
                {trustPoints.map((point) => (
                  <p
                    key={point}
                    className="flex items-center gap-3 text-sm font-bold text-[#082544]"
                  >
                    <span className="grid size-6 place-items-center rounded-full bg-sky-500 text-xs text-white">
                      +
                    </span>
                    {point}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#061c32]">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 px-5 py-14 text-white sm:px-8 lg:flex-row lg:items-center">
            <div>
              <p className="text-xs font-black tracking-[.14em] text-sky-300">
                TOP NOTCH AC SERVICES
              </p>
              <h2 className="mt-2 text-3xl font-black">
                Let&apos;s Restore Your Comfort.
              </h2>
              <p className="mt-3 text-sky-100">
                Book the service your property needs with a local South Florida
                team.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ActionButton light>Book Service</ActionButton>
              <ActionButton
                phone
                className="border border-sky-300 bg-transparent hover:bg-white/10"
              >
                Call Now {content.phone}
              </ActionButton>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
