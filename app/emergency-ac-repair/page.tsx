"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useSiteContent } from "@/components/content-provider";
import { ActionButton, SiteFooter, SiteHeader } from "@/components/site-shell";

const urgentProblems = [
  ["AC stopped cooling", "Your system is running but the home is getting warmer."],
  ["AC will not turn on", "The thermostat is calling for cooling but the system does not start."],
  ["Warm air from vents", "Air is moving, but it is not providing the cooling you expect."],
  ["Water leaking", "Water is collecting around the air handler, drain pan, or nearby floor."],
  ["Frozen coil", "Ice is visible on the evaporator coil, refrigerant line, or air handler."],
  ["Repeated short cycling", "The system turns on and off frequently without cooling the space properly."],
];

const emergencyRepairs = [
  "AC system diagnostics",
  "Capacitor replacement",
  "Contactor and electrical repair",
  "Condenser fan motor diagnosis",
  "Drain line clearing",
  "Air handler repair",
  "Thermostat troubleshooting",
  "Frozen coil diagnosis",
  "Refrigerant leak evaluation",
  "Evaporator coil diagnosis",
  "Blower and airflow troubleshooting",
  "Compressor diagnosis",
];

const responseSteps = [
  ["1", "Contact Top Notch", "Call or request service online and tell us what your AC is doing."],
  ["2", "System diagnosis", "A technician checks the electrical, airflow, drainage, thermostat, and cooling operation."],
  ["3", "Clear recommendation", "We explain what we found and review the repair or next-step options with you."],
  ["4", "Repair and testing", "After approved work, the system is tested for proper operation and cooling performance."],
];

const strengths = [
  "Family-Owned & Operated",
  "Licensed & Insured",
  "24/7 Emergency Service",
  "Honest Recommendations",
  "Professional Workmanship",
  "Residential & Commercial Service",
];

const areaNames = ["Pompano Beach", "Fort Lauderdale", "Deerfield Beach", "Coconut Creek", "Coral Springs", "Boca Raton", "Margate", "Oakland Park"];

function MediaPanel({ src, alt, label, className = "", priority = false }: { src: string; alt: string; label: string; className?: string; priority?: boolean }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-sky-500 via-sky-800 to-[#061c32] ${className}`}>
      {!failed && <Image src={src} alt={alt} fill priority={priority} sizes="(min-width: 1024px) 50vw, 100vw" onError={() => setFailed(true)} className="object-cover object-center" />}
      {failed && (
        <div className="absolute inset-0 grid place-items-center p-6 text-center text-white">
          <div>
            <p className="text-sm font-black tracking-[.14em]">{label}</p>
            <p className="mt-2 text-xs text-sky-100">PHOTO PLACEHOLDER</p>
          </div>
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061c32]/25 via-transparent to-transparent" />
    </div>
  );
}

export default function EmergencyAcRepairPage() {
  const content = useSiteContent();
  const repair = content.acRepair;
  const areas = areaNames
    .map((name) => content.serviceAreas.find((area) => area.name === name && area.enabled))
    .filter((area): area is NonNullable<typeof area> => Boolean(area));

  return (
    <>
      <SiteHeader />
      <main className="overflow-hidden bg-white text-slate-900">
        <section className="bg-[#082544] text-white">
          <div className="mx-auto grid max-w-7xl lg:grid-cols-[.95fr_1.05fr]">
            <div className="px-5 py-14 sm:px-8 sm:py-18 lg:py-20">
              <p className="text-xs font-black tracking-[.16em] text-red-400">24/7 EMERGENCY AC REPAIR</p>
              <h1 className="mt-4 max-w-xl text-4xl font-black leading-[1.03] sm:text-5xl">
                AC Down? <span className="block text-sky-300">Top Notch Is Ready to Help.</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-sky-100">
                Fast, professional AC diagnostics and repair for urgent cooling problems in Pompano Beach, Fort Lauderdale, and nearby South Florida communities.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <ActionButton phone className="bg-red-600 hover:bg-red-700">Call {content.phone}</ActionButton>
                <ActionButton light>Book Emergency Service</ActionButton>
              </div>
              <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2 text-xs font-bold text-sky-100">
                <span>24/7 Emergency Service</span>
                <span className="text-sky-400">|</span>
                <span>Licensed & Insured</span>
                <span className="text-sky-400">|</span>
                <span>{content.license}</span>
              </div>
            </div>
            <MediaPanel src={repair.heroImage} alt="Top Notch AC Services technician diagnosing an urgent air conditioning problem in South Florida" label="EMERGENCY AC REPAIR" priority className="min-h-80 lg:min-h-full" />
          </div>
        </section>

        <section className="border-b border-red-100 bg-red-50">
          <div className="mx-auto max-w-7xl px-5 py-4 text-sm leading-6 text-red-950 sm:px-8">
            <strong>Safety first:</strong> If you see smoke, smell something burning, or believe there is an electrical hazard, turn the HVAC system off if it is safe to do so and contact the appropriate emergency or electrical professional before continuing to operate it.
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-18">
          <p className="text-xs font-black tracking-[.14em] text-sky-700">WHEN TO CALL</p>
          <h2 className="mt-3 text-3xl font-black text-[#082544]">Urgent AC Problems We Diagnose</h2>
          <p className="mt-3 max-w-2xl leading-7 text-slate-600">If your AC suddenly stops keeping the property comfortable, a professional diagnostic can help identify the actual cause before the problem gets worse.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {urgentProblems.map(([title, description]) => (
              <article key={title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="grid size-10 place-items-center rounded-full bg-red-50 text-lg font-black text-red-600">!</div>
                <h3 className="mt-4 text-lg font-black text-[#082544]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#eef7fb] py-14 sm:py-18">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <p className="text-xs font-black tracking-[.14em] text-sky-700">WHAT TO EXPECT</p>
            <h2 className="mt-3 text-3xl font-black text-[#082544]">Our Emergency AC Repair Process</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {responseSteps.map(([number, title, description]) => (
                <article key={number} className="rounded-xl bg-white p-6 shadow-sm">
                  <span className="grid size-10 place-items-center rounded-full bg-[#082544] text-sm font-black text-white">{number}</span>
                  <h3 className="mt-4 text-lg font-black text-[#082544]">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 sm:py-18 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="text-xs font-black tracking-[.14em] text-sky-700">COMMON REPAIRS</p>
            <h2 className="mt-3 text-3xl font-black text-[#082544]">Emergency AC Repairs We Handle</h2>
            <p className="mt-3 max-w-xl leading-7 text-slate-600">Our technicians diagnose electrical, airflow, drainage, thermostat, refrigerant, and mechanical cooling problems on many residential and commercial systems.</p>
            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {emergencyRepairs.map((item) => (
                <p key={item} className="flex items-center gap-3 rounded-lg border border-slate-200 px-4 py-3 text-sm font-bold text-[#082544]">
                  <span className="grid size-5 shrink-0 place-items-center rounded-full bg-sky-600 text-xs text-white">+</span>{item}
                </p>
              ))}
            </div>
          </div>
          <div className="rounded-xl bg-[#082544] p-7 text-white sm:p-9">
            <p className="text-xs font-black tracking-[.14em] text-sky-300">WHY TOP NOTCH</p>
            <h2 className="mt-3 text-3xl font-black">Local Service You Can Call When Cooling Cannot Wait</h2>
            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {strengths.map((item) => <p key={item} className="rounded-lg bg-white/10 px-4 py-3 text-sm font-bold">+ {item}</p>)}
            </div>
            <p className="mt-7 border-l-4 border-sky-400 pl-4 text-sm leading-6 text-sky-100">We focus on diagnosing the problem, explaining the findings clearly, and recommending the appropriate repair or next step for the condition of your system.</p>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-50 py-14 sm:py-18">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-black tracking-[.14em] text-sky-700">SERVICE AREAS</p>
                <h2 className="mt-3 text-3xl font-black text-[#082544]">Emergency AC Service Across South Florida</h2>
              </div>
              <Link href="/service-areas" className="text-sm font-black text-sky-700 hover:text-sky-900">View All Service Areas +</Link>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              {areas.map((area) => (
                <Link key={area.slug} href={`/service-areas/${area.slug}`} className="rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-bold text-[#082544] transition hover:border-sky-500 hover:text-sky-700">{area.name}</Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-18">
          <p className="text-xs font-black tracking-[.14em] text-sky-700">EMERGENCY AC FAQ</p>
          <h2 className="mt-3 text-3xl font-black text-[#082544]">Common Questions</h2>
          <div className="mt-7 grid gap-3">
            <details className="rounded-xl border border-slate-200 bg-white p-5"><summary className="cursor-pointer font-black text-[#082544]">What should I do if my AC suddenly stops cooling?</summary><p className="mt-3 leading-7 text-slate-600">Check that the thermostat is set to cool and that the system has power. If it still is not cooling, avoid repeatedly resetting equipment and schedule a diagnostic so the cause can be identified.</p></details>
            <details className="rounded-xl border border-slate-200 bg-white p-5"><summary className="cursor-pointer font-black text-[#082544]">Why is my AC turning on and off every few minutes?</summary><p className="mt-3 leading-7 text-slate-600">Frequent cycling can be related to thermostat, airflow, electrical, refrigerant, equipment sizing, or other system conditions. A diagnostic inspection is the best way to identify the reason.</p></details>
            <details className="rounded-xl border border-slate-200 bg-white p-5"><summary className="cursor-pointer font-black text-[#082544]">Is a leaking air handler an emergency?</summary><p className="mt-3 leading-7 text-slate-600">A leak can damage ceilings, floors, or nearby property if it continues. Turn the system off if water is actively overflowing or threatening the property and request service to inspect the drain, pan, coil, and related components.</p></details>
            <details className="rounded-xl border border-slate-200 bg-white p-5"><summary className="cursor-pointer font-black text-[#082544]">Do you repair residential and commercial AC systems?</summary><p className="mt-3 leading-7 text-slate-600">Yes. Top Notch provides AC diagnostics and repair for many homes, condos, businesses, and accessible commercial HVAC systems throughout the service area.</p></details>
          </div>
        </section>

        <section className="bg-[#061c32] text-white">
          <div className="mx-auto grid max-w-7xl lg:grid-cols-[1fr_.95fr]">
            <div className="px-5 py-14 sm:px-8 sm:py-18">
              <p className="text-xs font-black tracking-[.14em] text-red-400">NEED HELP NOW?</p>
              <h2 className="mt-3 max-w-lg text-3xl font-black sm:text-4xl">AC Not Cooling? Call Top Notch.</h2>
              <p className="mt-4 max-w-xl leading-7 text-sky-100">Contact our local team for emergency AC diagnostics and repair throughout Pompano Beach, Fort Lauderdale, and nearby South Florida communities.</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <ActionButton phone className="bg-red-600 hover:bg-red-700">Call {content.phone}</ActionButton>
                <ActionButton light>Book Service</ActionButton>
              </div>
            </div>
            <MediaPanel src={repair.finalImage} alt="Top Notch AC Services branded service van" label="TOP NOTCH AC SERVICES" className="min-h-64 lg:min-h-full" />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
