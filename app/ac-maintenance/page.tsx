"use client";

import Image from "next/image";
import { useState } from "react";
import { useSiteContent } from "@/components/content-provider";
import { ActionButton, SiteFooter, SiteHeader } from "@/components/site-shell";

const warningSigns = [
  "Warm air coming from vents",
  "Weak airflow throughout the home",
  "Unusual noises or odors",
  "Frequent cycling on and off",
  "Rising energy bills",
  "Uneven cooling between rooms",
  "Excess indoor humidity",
];

const tuneUpItems = [
  "Thermostat and system operation check",
  "Electrical component inspection",
  "Condenser and evaporator coil inspection",
  "Drain line inspection and cleaning",
  "Refrigerant performance check",
  "Airflow and temperature testing",
];

function MaintenanceHeroImage() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative min-h-[360px] overflow-hidden bg-[#082544] lg:min-h-full">
      {!failed ? (
        <Image
          src="/images/ac/ac-maintenance.jpg"
          alt="Top Notch AC Services technician performing AC maintenance and tune-up service"
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          onError={() => setFailed(true)}
          className="object-cover object-center"
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center p-8 text-center text-white">
          <div>
            <p className="text-xl font-black">AC MAINTENANCE & TUNE-UPS</p>
            <p className="mt-2 text-sm text-sky-100">Add ac-maintenance.jpg</p>
          </div>
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061c32]/25 via-transparent to-transparent" />
    </div>
  );
}

export default function AcMaintenancePage() {
  const content = useSiteContent();

  return (
    <>
      <SiteHeader />
      <main className="bg-white text-slate-900">
        <section className="bg-[#eef7fb]">
          <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
            <div className="flex items-center px-5 py-14 sm:px-8 lg:py-20">
              <div className="max-w-xl">
                <p className="text-xs font-black tracking-[.16em] text-blue-700">AC MAINTENANCE & TUNE-UPS</p>
                <h1 className="mt-4 text-4xl font-black leading-tight text-[#082544] sm:text-5xl">
                  Keep your AC running strong all year long.
                </h1>
                <p className="mt-5 text-base leading-7 text-slate-700">
                  When your air conditioning system struggles to keep your home or business comfortable, Top Notch provides dependable AC repair and maintenance services designed to restore performance, improve efficiency, and reduce the risk of costly breakdowns.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <ActionButton>Schedule Your Tune-Up</ActionButton>
                  <ActionButton phone className="bg-[#082544] hover:bg-[#061c32]">Call {content.phone}</ActionButton>
                </div>
                <div className="mt-6 flex flex-wrap gap-3 text-xs font-bold text-slate-600">
                  <span>Licensed & Insured</span>
                  <span>•</span>
                  <span>{content.license}</span>
                  <span>•</span>
                  <span>Family Owned & Operated</span>
                </div>
              </div>
            </div>
            <MaintenanceHeroImage />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black tracking-[.14em] text-blue-700">SOUTH FLORIDA AC CARE</p>
            <h2 className="mt-2 text-3xl font-black text-[#082544]">Keeping South Florida comfortable year-round</h2>
            <p className="mt-4 leading-7 text-slate-600">
              In South Florida’s heat and humidity, air conditioning systems work hard throughout the year. Routine maintenance and timely repairs help your system operate efficiently while supporting reliable indoor comfort during every season.
            </p>
          </div>
        </section>

        <section className="bg-slate-50 py-14 sm:py-16">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-black tracking-[.14em] text-blue-700">COMMON WARNING SIGNS</p>
              <h2 className="mt-2 text-3xl font-black text-[#082544]">Signs your AC system may need repair</h2>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {warningSigns.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-sky-100 font-black text-blue-700">✓</span>
                  <span className="font-bold text-[#082544]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#082544] py-14 text-white sm:py-16">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-xs font-black tracking-[.14em] text-sky-300">AC TUNE-UP SERVICE</p>
              <h2 className="mt-2 text-3xl font-black">Simple preventive maintenance for your cooling system.</h2>
              <p className="mt-4 leading-7 text-sky-100">
                We inspect the key parts of your system, check performance, and let you know if anything needs attention.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {tuneUpItems.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-4 text-sm font-bold">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-sky-400 text-xs font-black text-[#082544]">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#eef7fb]">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-5 py-12 sm:px-8 lg:flex-row lg:items-center">
            <div>
              <p className="text-xs font-black tracking-[.14em] text-blue-700">READY TO SCHEDULE?</p>
              <h2 className="mt-2 text-3xl font-black text-[#082544]">Book your AC maintenance & tune-up.</h2>
              <p className="mt-2 text-slate-600">Professional HVAC service for South Florida homes and businesses.</p>
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
