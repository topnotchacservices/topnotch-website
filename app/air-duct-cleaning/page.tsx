"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useSiteContent } from "@/components/content-provider";
import { ActionButton, SiteFooter, SiteHeader } from "@/components/site-shell";

const reasons = [
  ["Dust & debris buildup", "Visible dust around supply vents or debris inside accessible ductwork may be a sign that the system should be inspected."],
  ["Musty or stale odors", "Persistent odors when the HVAC system runs can be related to buildup, moisture, filters, coils, drain issues, or duct conditions."],
  ["Recent renovation", "Construction and remodeling can introduce fine dust into the return and supply system if the HVAC equipment is operating during the work."],
  ["Reduced airflow", "Airflow problems can have several causes, including dirty components, restrictions, duct issues, or equipment problems. We inspect before recommending a solution."],
];

const process = [
  ["1", "Protect the work area", "We prepare the area around vents and registers and protect nearby surfaces before cleaning begins."],
  ["2", "Remove & inspect registers", "Accessible supply and return grilles are removed so the duct openings and visible conditions can be inspected."],
  ["3", "Create negative pressure", "A professional vacuum system is connected to help pull loosened dust and debris toward the collection equipment."],
  ["4", "Clean each duct run", "Each accessible vent line is cleaned individually using professional agitation tools such as Rotobrush equipment when appropriate."],
  ["5", "Clean registers & returns", "Registers, return openings, and accessible connection areas are cleaned before the system is reassembled."],
  ["6", "Final review", "We reinstall the grilles, clean the work area, and review the service with you before completion."],
];

const services = [
  "Residential air duct cleaning",
  "Condo air duct cleaning",
  "Commercial air duct cleaning",
  "Supply vent cleaning",
  "Return air cleaning",
  "Register and grille cleaning",
  "Negative-pressure duct cleaning",
  "Rotobrush duct cleaning",
  "Duct system inspection",
  "Duct coating evaluation when appropriate",
];

const properties = [
  ["Homes", "Professional duct cleaning for single-family homes and residential HVAC systems."],
  ["Condos", "Careful service for condominium duct systems, accessible returns, vents, and air-handling equipment."],
  ["Businesses", "Air duct cleaning for offices, retail spaces, property managers, and other commercial properties."],
];

function HeroImage() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative min-h-[390px] overflow-hidden bg-gradient-to-br from-[#0b4f7d] via-[#0878b6] to-[#082544] lg:min-h-full">
      {!failed ? (
        <Image
          src="/images/air-duct/air-duct-cleaning-hero.jpg"
          alt="Top Notch AC Services air duct cleaning service in South Florida"
          fill
          priority
          sizes="(min-width: 1024px) 52vw, 100vw"
          onError={() => setFailed(true)}
          className="object-cover object-center"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center p-10 text-center text-white">
          <div className="max-w-sm">
            <p className="text-sm font-black tracking-[.18em] text-sky-200">TOP NOTCH AC SERVICES</p>
            <p className="mt-3 text-3xl font-black">Professional Air Duct Cleaning</p>
            <p className="mt-3 text-sm leading-6 text-sky-100">Add air-duct-cleaning-hero.jpg to this section.</p>
          </div>
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061c32]/40 via-transparent to-transparent" />
    </div>
  );
}

export default function AirDuctCleaningPage() {
  const content = useSiteContent();

  return (
    <>
      <SiteHeader />
      <main className="overflow-hidden bg-white text-slate-900">
        <section className="bg-[#edf8fc]">
          <div className="mx-auto grid max-w-7xl lg:grid-cols-[.92fr_1.08fr]">
            <div className="flex items-center px-5 py-14 sm:px-8 lg:py-20">
              <div className="max-w-xl">
                <p className="text-xs font-black tracking-[.17em] text-sky-700">AIR DUCT CLEANING • SOUTH FLORIDA</p>
                <h1 className="mt-4 text-4xl font-black leading-tight text-[#082544] sm:text-5xl">
                  Cleaner ductwork. Professional service. Better peace of mind.
                </h1>
                <p className="mt-5 text-base leading-7 text-slate-700">
                  Top Notch AC Services provides professional air duct cleaning for homes, condos, property managers, and businesses throughout South Florida using negative-pressure collection and professional duct-cleaning equipment.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <ActionButton>Book Air Duct Cleaning</ActionButton>
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
            <HeroImage />
          </div>
        </section>

        <section className="border-b border-sky-100 bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-slate-200 px-5 sm:grid-cols-4 sm:divide-y-0 sm:px-8">
            {["Negative Pressure", "Rotobrush Cleaning", "Homes & Condos", "Commercial Service"].map((item) => (
              <div key={item} className="px-4 py-5 text-center text-sm font-black text-[#082544]">{item}</div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-18">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black tracking-[.14em] text-sky-700">SOUTH FLORIDA DUCT CONDITIONS</p>
            <h2 className="mt-2 text-3xl font-black text-[#082544]">Why homeowners call us for air duct cleaning</h2>
            <p className="mt-4 leading-7 text-slate-600">
              South Florida HVAC systems run for much of the year. Dust, renovation debris, moisture, pet hair, and normal household buildup can collect around vents and inside accessible ductwork over time.
            </p>
          </div>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map(([title, text]) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <span className="grid size-10 place-items-center rounded-full bg-sky-50 text-lg font-black text-sky-700">+</span>
                <h3 className="mt-4 text-lg font-black text-[#082544]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#082544] py-14 text-white sm:py-18">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-black tracking-[.14em] text-sky-300">OUR CLEANING PROCESS</p>
              <h2 className="mt-2 text-3xl font-black">Professional duct cleaning from vent to vent.</h2>
              <p className="mt-4 leading-7 text-sky-100">
                We use a structured cleaning process designed to keep the work organized, protect the property, and remove loosened debris from accessible duct runs.
              </p>
            </div>
            <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {process.map(([number, title, text]) => (
                <article key={number} className="rounded-2xl border border-white/15 bg-white/8 p-6">
                  <span className="grid size-11 place-items-center rounded-full bg-sky-400 text-sm font-black text-[#082544]">{number}</span>
                  <h3 className="mt-4 text-lg font-black">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-sky-100">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 sm:py-18 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-black tracking-[.14em] text-sky-700">AIR DUCT SERVICES</p>
            <h2 className="mt-2 text-3xl font-black text-[#082544]">One professional team for your duct system.</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Every property is different. We inspect accessible conditions first and explain what service is appropriate before starting the work.
            </p>
            <div className="mt-7">
              <ActionButton>Request Duct Cleaning</ActionButton>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {services.map((service) => (
              <div key={service} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-bold text-[#082544]">
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-sky-500 text-xs font-black text-white">✓</span>
                {service}
              </div>
            ))}
          </div>
        </section>

        <section className="bg-sky-50 py-14 sm:py-18">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="text-center">
              <p className="text-xs font-black tracking-[.14em] text-sky-700">WHO WE SERVE</p>
              <h2 className="mt-2 text-3xl font-black text-[#082544]">Air duct cleaning for South Florida properties</h2>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {properties.map(([title, text]) => (
                <article key={title} className="rounded-2xl border border-sky-100 bg-white p-7 shadow-sm">
                  <h3 className="text-xl font-black text-[#082544]">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-18">
          <div className="grid gap-8 rounded-3xl bg-[#061c32] p-7 text-white sm:p-10 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
            <div>
              <p className="text-xs font-black tracking-[.14em] text-sky-300">LOCAL SOUTH FLORIDA SERVICE</p>
              <h2 className="mt-2 text-3xl font-black">Serving Pompano Beach, Fort Lauderdale & nearby communities.</h2>
              <p className="mt-4 max-w-2xl leading-7 text-sky-100">
                Top Notch provides air duct cleaning throughout Broward County and nearby South Florida areas, including homes, condos, offices, and commercial properties.
              </p>
              <Link href="/service-areas" className="mt-5 inline-block text-sm font-black text-sky-300 hover:text-white">View Service Areas →</Link>
            </div>
            <div className="rounded-2xl bg-white/10 p-6">
              <p className="text-sm font-black text-sky-300">TOP NOTCH AC SERVICES</p>
              <p className="mt-3 text-2xl font-black">Professional. Local. Family-Owned.</p>
              <p className="mt-3 text-sm leading-6 text-sky-100">Licensed & Insured Florida HVAC Contractor • {content.license}</p>
            </div>
          </div>
        </section>

        <section className="bg-[#edf8fc]">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-5 py-12 sm:px-8 lg:flex-row lg:items-center">
            <div>
              <p className="text-xs font-black tracking-[.14em] text-sky-700">READY TO CLEAN YOUR DUCTS?</p>
              <h2 className="mt-2 text-3xl font-black text-[#082544]">Schedule professional air duct cleaning.</h2>
              <p className="mt-2 text-slate-600">Service for homes, condos, property managers, and businesses across South Florida.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ActionButton>Book Duct Cleaning</ActionButton>
              <ActionButton phone className="bg-[#082544] hover:bg-[#061c32]">Call {content.phone}</ActionButton>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
