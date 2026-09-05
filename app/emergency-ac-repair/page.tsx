"use client";

import Image from "next/image";
import { useState } from "react";
import { useSiteContent } from "@/components/content-provider";
import { ActionButton, SiteFooter, SiteHeader } from "@/components/site-shell";

const emergencyProblems = [
  ["AC stopped cooling", "The system is running but the home keeps getting warmer."],
  ["AC will not turn on", "The thermostat is calling for cooling but the equipment will not start."],
  ["Water leaking", "Water is coming from the air handler, drain pan, or nearby floor."],
  ["AC keeps shutting off", "The system starts and stops repeatedly without cooling properly."],
];

const checks = [
  "Thermostat operation",
  "Capacitor and contactor",
  "Electrical connections",
  "Condenser fan and compressor",
  "Refrigerant pressures",
  "Airflow and filter condition",
  "Evaporator coil",
  "Drain line and safety switches",
];

const steps = [
  ["1", "Call or book", "Tell us what the AC is doing and where service is needed."],
  ["2", "We diagnose", "A technician checks the system to identify the cause of the failure."],
  ["3", "You get options", "We explain what we found before approved repair work begins."],
];

function EmergencyImage() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative min-h-[340px] overflow-hidden bg-[#0b2d4d] lg:min-h-full">
      {!failed ? (
        <Image
          src="/images/ac/emergency-ac-repair.jpg"
          alt="Top Notch AC Services emergency air conditioning repair"
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          onError={() => setFailed(true)}
          className="object-cover object-center"
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-[#0b2d4d] to-[#1769aa] p-8 text-center text-white">
          <div>
            <p className="text-lg font-black">24/7 EMERGENCY AC REPAIR</p>
            <p className="mt-2 text-sm text-sky-100">Add emergency-ac-repair.jpg</p>
          </div>
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061c32]/35 via-transparent to-transparent" />
    </div>
  );
}

export default function EmergencyAcRepairPage() {
  const content = useSiteContent();

  return (
    <>
      <SiteHeader />
      <main className="bg-white text-slate-900">
        <section className="bg-[#071f36] text-white">
          <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
            <div className="flex items-center px-5 py-14 sm:px-8 lg:py-20">
              <div className="max-w-xl">
                <div className="inline-flex rounded-full bg-red-600 px-4 py-2 text-xs font-black tracking-[.14em] text-white">
                  24/7 EMERGENCY AC REPAIR
                </div>
                <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
                  Urgent AC service when cooling cannot wait.
                </h1>
                <p className="mt-5 text-base leading-7 text-sky-100">
                  If your AC suddenly stops cooling, will not start, leaks water, or keeps shutting off, Top Notch AC Services is ready to diagnose the problem and explain the next step.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <ActionButton phone className="bg-red-600 hover:bg-red-700">Call {content.phone}</ActionButton>
                  <ActionButton light>Book Emergency Service</ActionButton>
                </div>
                <div className="mt-6 flex flex-wrap gap-3 text-xs font-bold text-sky-100">
                  <span>Licensed & Insured</span>
                  <span>•</span>
                  <span>{content.license}</span>
                  <span>•</span>
                  <span>South Florida</span>
                </div>
              </div>
            </div>
            <EmergencyImage />
          </div>
        </section>

        <section className="border-b border-red-100 bg-red-50">
          <div className="mx-auto max-w-7xl px-5 py-4 text-sm leading-6 text-red-950 sm:px-8">
            <strong>Electrical or burning smell?</strong> Turn the system off if it is safe to do so and do not continue operating equipment that appears unsafe.
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16">
          <div className="max-w-2xl">
            <p className="text-xs font-black tracking-[.14em] text-red-600">CALL US WHEN</p>
            <h2 className="mt-2 text-3xl font-black text-[#082544]">Common emergency AC problems</h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {emergencyProblems.map(([title, description]) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <span className="grid size-10 place-items-center rounded-full bg-red-50 text-lg font-black text-red-600">!</span>
                <h3 className="mt-4 text-lg font-black text-[#082544]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#eef7fb] py-14 sm:py-16">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-xs font-black tracking-[.14em] text-sky-700">COMPLETE DIAGNOSTIC</p>
              <h2 className="mt-2 text-3xl font-black text-[#082544]">We check the system before recommending a repair.</h2>
              <p className="mt-4 max-w-xl leading-7 text-slate-600">
                Emergency service should start with a proper diagnosis. We inspect the main electrical, airflow, refrigerant, drainage, and cooling components related to the problem.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {checks.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl bg-white px-4 py-4 text-sm font-bold text-[#082544] shadow-sm">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-sky-600 text-xs text-white">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16">
          <div className="text-center">
            <p className="text-xs font-black tracking-[.14em] text-sky-700">WHAT TO EXPECT</p>
            <h2 className="mt-2 text-3xl font-black text-[#082544]">Simple emergency service process</h2>
          </div>
          <div className="mx-auto mt-8 grid max-w-5xl gap-4 md:grid-cols-3">
            {steps.map(([number, title, description]) => (
              <article key={number} className="rounded-2xl border border-slate-200 p-6 text-center shadow-sm">
                <span className="mx-auto grid size-11 place-items-center rounded-full bg-[#082544] text-sm font-black text-white">{number}</span>
                <h3 className="mt-4 text-lg font-black text-[#082544]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#0a2d50] text-white">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-5 py-12 sm:px-8 lg:flex-row lg:items-center">
            <div>
              <p className="text-xs font-black tracking-[.14em] text-red-400">NEED AC HELP NOW?</p>
              <h2 className="mt-2 text-3xl font-black">Call Top Notch AC Services.</h2>
              <p className="mt-2 text-sky-100">24/7 emergency AC service for homes, condos, and businesses throughout our South Florida service area.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ActionButton phone className="bg-red-600 hover:bg-red-700">Call {content.phone}</ActionButton>
              <ActionButton light>Book Service</ActionButton>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
