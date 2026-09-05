"use client";

import Image from "next/image";
import { useState } from "react";
import { useSiteContent } from "@/components/content-provider";
import { ActionButton, SiteFooter, SiteHeader } from "@/components/site-shell";

const installationOptions = [
  ["Central AC Systems", "Professional installation of matched indoor and outdoor central air conditioning equipment."],
  ["Heat Pump Systems", "Efficient cooling and heating solutions for compatible South Florida homes and properties."],
  ["Air Handler Installation", "Indoor equipment installation with attention to airflow, drainage, electrical, and access."],
  ["Ductless Mini-Splits", "Flexible comfort for additions, rooms, garages, offices, and spaces without traditional ductwork."],
];

const processSteps = [
  ["1", "Evaluate the property", "We review the existing equipment, comfort concerns, electrical, drainage, return air, and accessible ductwork."],
  ["2", "Recommend the system", "We explain appropriate equipment options based on the property and installation conditions."],
  ["3", "Professional installation", "The old equipment is removed as needed and the new matched system is installed and connected."],
  ["4", "Startup and testing", "We test system operation, airflow, thermostat control, drainage, and cooling performance before completion."],
];

const included = [
  "Matched indoor and outdoor equipment",
  "Equipment removal and installation",
  "Air handler and condenser setup",
  "Refrigerant-line connections as required",
  "Condensate drain connection and testing",
  "Electrical connection and startup checks",
  "Thermostat compatibility check",
  "Airflow and temperature testing",
  "Duct and return-air evaluation when needed",
  "Final system operation review",
];

function InstallationHeroImage() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative min-h-[360px] overflow-hidden bg-gradient-to-br from-sky-600 to-[#082544] lg:min-h-full">
      {!failed ? (
        <Image
          src="/images/ac/ac-installation.jpg"
          alt="Top Notch AC Services professional air conditioning installation in South Florida"
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          onError={() => setFailed(true)}
          className="object-cover object-center"
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center p-8 text-center text-white">
          <div>
            <p className="text-lg font-black">AC INSTALLATION</p>
            <p className="mt-2 text-sm text-sky-100">Add ac-installation.jpg</p>
          </div>
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061c32]/30 via-transparent to-transparent" />
    </div>
  );
}

export default function AcInstallationPage() {
  const content = useSiteContent();

  return (
    <>
      <SiteHeader />
      <main className="bg-white text-slate-900">
        <section className="bg-[#edf7fc]">
          <div className="mx-auto grid max-w-7xl lg:grid-cols-[.95fr_1.05fr]">
            <div className="flex items-center px-5 py-14 sm:px-8 lg:py-20">
              <div className="max-w-xl">
                <p className="text-xs font-black tracking-[.16em] text-blue-700">AC INSTALLATION</p>
                <h1 className="mt-4 text-4xl font-black leading-tight text-[#082544] sm:text-5xl">
                  Professional AC installation built around your property.
                </h1>
                <p className="mt-5 text-base leading-7 text-slate-700">
                  Top Notch AC Services installs new central air conditioning, air handlers, heat pumps, and ductless systems for homes, condos, and businesses throughout South Florida.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <ActionButton>Request Installation Estimate</ActionButton>
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
            <InstallationHeroImage />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16">
          <div className="max-w-2xl">
            <p className="text-xs font-black tracking-[.14em] text-blue-700">NEW SYSTEM OPTIONS</p>
            <h2 className="mt-2 text-3xl font-black text-[#082544]">AC systems we install</h2>
            <p className="mt-3 leading-7 text-slate-600">The right installation depends on the property, existing equipment, airflow, electrical requirements, and comfort needs.</p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {installationOptions.map(([title, description]) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <span className="grid size-10 place-items-center rounded-full bg-sky-50 text-lg font-black text-blue-700">+</span>
                <h3 className="mt-4 text-lg font-black text-[#082544]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#082544] py-14 text-white sm:py-16">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-xs font-black tracking-[.14em] text-sky-300">WHAT IS INCLUDED</p>
              <h2 className="mt-2 text-3xl font-black">More than setting equipment in place.</h2>
              <p className="mt-4 leading-7 text-sky-100">A good installation also considers airflow, drainage, electrical connections, thermostat control, and proper startup testing.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {included.map((item) => (
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
            <p className="text-xs font-black tracking-[.14em] text-blue-700">OUR INSTALLATION PROCESS</p>
            <h2 className="mt-2 text-3xl font-black text-[#082544]">From evaluation to final startup</h2>
          </div>
          <div className="mt-9 grid gap-4 md:grid-cols-4">
            {processSteps.map(([number, title, description]) => (
              <article key={number} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
                <span className="grid size-11 place-items-center rounded-full bg-blue-600 text-sm font-black text-white">{number}</span>
                <h3 className="mt-4 text-lg font-black text-[#082544]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-50 py-14 sm:py-16">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-black tracking-[.14em] text-blue-700">BEFORE WE UPSIZE</p>
              <h2 className="mt-2 text-3xl font-black text-[#082544]">Capacity should match the home and airflow system.</h2>
            </div>
            <p className="leading-7 text-slate-600">
              Bigger is not automatically better. When capacity changes are being considered, Top Notch can review the return air, accessible ductwork, airflow, and property conditions so the new system can be selected and installed appropriately.
            </p>
          </div>
        </section>

        <section className="bg-[#edf7fc]">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-5 py-12 sm:px-8 lg:flex-row lg:items-center">
            <div>
              <p className="text-xs font-black tracking-[.14em] text-blue-700">READY FOR A NEW AC?</p>
              <h2 className="mt-2 text-3xl font-black text-[#082544]">Request an AC installation estimate.</h2>
              <p className="mt-2 text-slate-600">Professional installation for South Florida homes, condos, and businesses.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ActionButton>Request Estimate</ActionButton>
              <ActionButton phone className="bg-[#082544] hover:bg-[#061c32]">Call {content.phone}</ActionButton>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
