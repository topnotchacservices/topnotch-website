"use client";

import Image from "next/image";
import { useState } from "react";
import { useSiteContent } from "@/components/content-provider";
import { ActionButton, SiteFooter, SiteHeader } from "@/components/site-shell";

const maintenanceChecks = [
  "System operation inspection",
  "Condenser coil inspection",
  "Evaporator coil inspection",
  "Drain line inspection and cleaning",
  "Refrigerant performance check",
  "Capacitor and electrical inspection",
  "Blower operation inspection",
  "Thermostat check",
  "Supply and return temperature testing",
  "Final cooling performance test",
];

const benefits = [
  ["Better reliability", "Routine service can help identify worn or failing components before they become larger problems."],
  ["Improved performance", "Clean, properly operating equipment can support stronger airflow and more consistent cooling."],
  ["Drain protection", "Inspecting and clearing the condensate drain can help reduce the risk of water-related shutdowns and leaks."],
  ["Longer equipment life", "Regular inspection and maintenance can help protect the system from unnecessary strain and neglect."],
];

const process = [
  ["1", "Inspect", "We check the system, thermostat, electrical components, airflow, coils, drain line, and overall operation."],
  ["2", "Clean & test", "We perform the maintenance items appropriate for the visit and test cooling performance."],
  ["3", "Review", "We explain what we found and let you know if any repair or follow-up service should be considered."],
];

function MaintenanceImage() {
  const [failed, setFailed] = useState(false);
  return (
    <div className="relative min-h-[360px] overflow-hidden bg-gradient-to-br from-sky-600 to-[#082544] lg:min-h-full">
      {!failed ? (
        <Image
          src="/images/ac/ac-maintenance.jpg"
          alt="Top Notch AC Services technician performing air conditioning maintenance in South Florida"
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          onError={() => setFailed(true)}
          className="object-cover object-center"
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center p-8 text-center text-white">
          <div>
            <p className="text-lg font-black">AC MAINTENANCE & TUNE-UPS</p>
            <p className="mt-2 text-sm text-sky-100">Add ac-maintenance.jpg</p>
          </div>
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061c32]/30 via-transparent to-transparent" />
    </div>
  );
}

export default function AcMaintenancePage() {
  const content = useSiteContent();

  return (
    <>
      <SiteHeader />
      <main className="bg-white text-slate-900">
        <section className="bg-[#eef8fc]">
          <div className="mx-auto grid max-w-7xl lg:grid-cols-[.95fr_1.05fr]">
            <div className="flex items-center px-5 py-14 sm:px-8 lg:py-20">
              <div className="max-w-xl">
                <p className="text-xs font-black tracking-[.16em] text-blue-700">AC MAINTENANCE & TUNE-UPS</p>
                <h1 className="mt-4 text-4xl font-black leading-tight text-[#082544] sm:text-5xl">
                  Keep your AC ready for South Florida heat.
                </h1>
                <p className="mt-5 text-base leading-7 text-slate-700">
                  Preventive AC maintenance helps support reliable cooling, proper drainage, airflow, electrical performance, and overall system operation during Florida’s long cooling season.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <ActionButton>Schedule AC Tune-Up</ActionButton>
                  <ActionButton phone className="bg-[#082544] hover:bg-[#061c32]">Call {content.phone}</ActionButton>
                </div>
                <div className="mt-6 flex flex-wrap gap-3 text-xs font-bold text-slate-600">
                  <span>Licensed & Insured</span>
                  <span>•</span>
                  <span>{content.license}</span>
                  <span>•</span>
                  <span>Residential & Commercial</span>
                </div>
              </div>
            </div>
            <MaintenanceImage />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16">
          <div className="text-center">
            <p className="text-xs font-black tracking-[.14em] text-blue-700">WHY MAINTENANCE MATTERS</p>
            <h2 className="mt-2 text-3xl font-black text-[#082544]">Small service now can help prevent bigger problems later.</h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(([title, description]) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <span className="grid size-10 place-items-center rounded-full bg-sky-50 text-lg font-black text-blue-700">✓</span>
                <h3 className="mt-4 text-lg font-black text-[#082544]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#082544] py-14 text-white sm:py-16">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="text-xs font-black tracking-[.14em] text-sky-300">TUNE-UP CHECKLIST</p>
              <h2 className="mt-2 text-3xl font-black">What we inspect during an AC maintenance visit.</h2>
              <p className="mt-4 leading-7 text-sky-100">
                Maintenance focuses on the components that affect comfort, reliability, drainage, airflow, and cooling performance.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {maintenanceChecks.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-4 text-sm font-bold">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-sky-400 text-xs font-black text-[#082544]">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16">
          <div className="text-center">
            <p className="text-xs font-black tracking-[.14em] text-blue-700">WHAT TO EXPECT</p>
            <h2 className="mt-2 text-3xl font-black text-[#082544]">A simple maintenance visit from start to finish.</h2>
          </div>
          <div className="mx-auto mt-8 grid max-w-5xl gap-4 md:grid-cols-3">
            {process.map(([number, title, description]) => (
              <article key={number} className="rounded-2xl border border-slate-200 p-6 text-center shadow-sm">
                <span className="mx-auto grid size-11 place-items-center rounded-full bg-blue-600 text-sm font-black text-white">{number}</span>
                <h3 className="mt-4 text-lg font-black text-[#082544]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-50 py-14 sm:py-16">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-black tracking-[.14em] text-blue-700">SOUTH FLORIDA CONDITIONS</p>
              <h2 className="mt-2 text-3xl font-black text-[#082544]">Your AC works hard for much of the year.</h2>
            </div>
            <p className="leading-7 text-slate-600">
              Heat, humidity, long run times, condensate production, and coastal conditions can all place extra demand on HVAC equipment. Regular maintenance helps us check the system before those conditions contribute to avoidable breakdowns.
            </p>
          </div>
        </section>

        <section className="bg-[#edf7fc]">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-5 py-12 sm:px-8 lg:flex-row lg:items-center">
            <div>
              <p className="text-xs font-black tracking-[.14em] text-blue-700">READY FOR A TUNE-UP?</p>
              <h2 className="mt-2 text-3xl font-black text-[#082544]">Schedule your AC maintenance visit.</h2>
              <p className="mt-2 text-slate-600">Preventive service for South Florida homes, condos, and businesses.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ActionButton>Schedule Tune-Up</ActionButton>
              <ActionButton phone className="bg-[#082544] hover:bg-[#061c32]">Call {content.phone}</ActionButton>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
