import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description: "How Top Notch Dryer Vent Cleaning Inc handles website service requests.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white text-slate-900">
        <header className="border-b border-sky-100 bg-[#edf8fc] px-5 py-14 sm:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-black text-[#082544]">Privacy Notice</h1>
            <p className="mt-4 leading-7 text-slate-700">
              Top Notch Dryer Vent Cleaning Inc handles the information you provide when requesting service through this website.
            </p>
          </div>
        </header>
        <div className="mx-auto max-w-3xl space-y-10 px-5 py-12 leading-7 text-slate-700 sm:px-8 sm:py-16">
          <section>
            <h2 className="text-xl font-bold text-[#082544]">Service requests</h2>
            <p className="mt-3">
              Our contact form collects your name, phone number, email address, service address and city, requested service,
              preferred contact method, any message you choose to provide, and your agreement to be contacted about your request.
              We use this information to respond, arrange service, and maintain records of your request. The form agreement is
              for contact about your request, not consent to advertising tracking.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#082544]">Services involved</h2>
            <p className="mt-3">
              Supabase stores submitted requests. Resend delivers a notification containing the request to our business email.
              Cloudflare Turnstile verifies the form against automated submissions. Upstash processes request IP addresses for
              rate limiting when that service is available. These providers process information needed to perform those tasks.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#082544]">Retention and requests</h2>
            <p className="mt-3">
              Service requests remain in our database and notification email until removed through our recordkeeping process;
              there is currently no automatic deletion schedule for those records. We may need to retain information for service
              records or legal obligations. To request access, correction, or deletion, email us and we will review the request.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#082544]">Advertising measurement</h2>
            <p className="mt-3">
              Google Ads tracking is not currently active on this website. We will review this notice and the appropriate
              consent choice before enabling optional advertising measurement.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#082544]">Contact</h2>
            <p className="mt-3">
              Questions or requests about your information can be sent to{" "}
              <a className="font-bold text-sky-700 underline" href="mailto:topnotch.acservices@gmail.com">
                topnotch.acservices@gmail.com
              </a>. You can also <Link className="font-bold text-sky-700 underline" href="/contact">contact our team</Link>.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}