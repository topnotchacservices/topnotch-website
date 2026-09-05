"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useSiteContent } from "@/components/content-provider";
import { ActionButton, SiteFooter, SiteHeader } from "@/components/site-shell";

const problemStyles = ["thermo", "power", "air", "drop", "snow", "cycle"];
const problemImages = [
  "/images/ac/problems/ac-not-cooling.png",
  "/images/ac/problems/ac-wont-turn-on.png",
  "/images/ac/problems/weak-airflow.png",
  "/images/ac/problems/water-leaking.png",
  "/images/ac/problems/frozen-coil.png",
  "/images/ac/problems/ac-short-cycling.png",
];
const strengths = ["Family-Owned & Operated", "Licensed & Insured", "Honest Recommendations", "Professional Workmanship", "Residential & Commercial Service", "Local South Florida Company"];
const mainAreas = ["Pompano Beach", "Fort Lauderdale", "Deerfield Beach", "Coconut Creek", "Coral Springs", "Boca Raton", "Margate", "Oakland Park"];

function MediaPanel({ src, alt, label, className = "" }: { src: string; alt: string; label: string; className?: string }) {
  const [failed, setFailed] = useState(false);
  return <div className={`relative overflow-hidden bg-gradient-to-br from-sky-400 via-sky-700 to-[#061c32] ${className}`}>{failed ? <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_44%,rgba(255,255,255,.22)_45%,transparent_46%)]" /> : <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 50vw, 100vw" onError={() => setFailed(true)} className="object-cover object-right" />}{failed && <p className="absolute bottom-5 left-5 border-l-2 border-white pl-3 text-xs font-extrabold tracking-[.16em] text-white">{label}<span className="mt-2 block text-[10px] font-medium tracking-normal text-sky-100">IMAGE PLACEHOLDER</span></p>}</div>;
}
function Icon({ kind, large = false }: { kind: string; large?: boolean }) {
  const stroke = "currentColor";
  return (
    <span className={`mx-auto grid place-items-center rounded-full ${large ? "size-24" : "size-12"} ${kind === "power" ? "bg-red-50 text-red-600" : "bg-sky-50 text-blue-600"}`} aria-hidden="true">
      <svg viewBox="0 0 24 24" className={large ? "size-12" : "size-6"} fill="none" stroke={stroke} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        {kind === "thermo" && <><path d="M14 14.8V5a3 3 0 0 0-6 0v9.8a5 5 0 1 0 6 0Z" /><path d="M11 8v8" /></>}
        {kind === "power" && <><path d="M12 2v9" /><path d="M6.2 5.8a8 8 0 1 0 11.6 0" /></>}
        {kind === "air" && <><path d="M3 8h10a2.5 2.5 0 1 0-2.1-3.9" /><path d="M3 12h15a2.5 2.5 0 1 1-2.1 3.9" /><path d="M3 16h7" /></>}
        {kind === "drop" && <path d="M12 2.8S6 9.7 6 14a6 6 0 0 0 12 0c0-4.3-6-11.2-6-11.2Z" />}
        {kind === "snow" && <><path d="M12 2v20" /><path d="m7 5 5 3 5-3" /><path d="m7 19 5-3 5 3" /><path d="M3.3 7 20.7 17" /><path d="m3.8 12.8.4-5.8 5.2-2.6" /><path d="m20.2 11.2-.4 5.8-5.2 2.6" /><path d="M20.7 7 3.3 17" /></>}
        {kind === "cycle" && <><path d="M20 7v5h-5" /><path d="M4 17v-5h5" /><path d="M6.1 8.2A7 7 0 0 1 18.7 10" /><path d="M17.9 15.8A7 7 0 0 1 5.3 14" /></>}
      </svg>
    </span>
  );
}

function ProblemCardMedia({ src, title, kind }: { src: string; title: string; kind: string }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-b from-white to-sky-50">
      {!failed && <Image src={src} alt={`${title} HVAC problem illustration`} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" onError={() => setFailed(true)} className="object-contain p-5 transition duration-300 group-hover:scale-[1.03]" />}
      {failed && <div className="absolute inset-0 grid place-items-center"><Icon kind={kind} large /></div>}
    </div>
  );
}

export default function AcRepairPage() {
  const content = useSiteContent();
  const repair = content.acRepair;
  const areas = mainAreas.map((name) => content.serviceAreas.find((area) => area.name === name && area.enabled)).filter((area): area is NonNullable<typeof area> => Boolean(area));
  return <><SiteHeader /><main className="overflow-hidden bg-white text-slate-900">
    <section className="relative isolate overflow-hidden bg-[#eaf6fc]"><div className="absolute inset-y-0 right-0 hidden w-3/5 bg-gradient-to-r from-transparent via-white/10 to-transparent lg:block" /><div className="relative mx-auto grid max-w-7xl lg:grid-cols-[.92fr_1.08fr]"><div className="px-5 py-12 sm:px-8 lg:py-16"><p className="text-xs font-black tracking-[.14em] text-red-600">EMERGENCY <span className="text-[#082544]">AC REPAIR 24/7</span></p><h1 className="mt-3 max-w-xl text-4xl font-black leading-[1.02] text-[#082544] sm:text-5xl">Fast AC Repair <span className="block text-blue-600">When You Need It Most</span></h1><p className="mt-5 max-w-xl text-base leading-7 text-slate-700">{repair.heroDescription}</p><div className="mt-7 flex flex-col gap-3 sm:flex-row"><ActionButton phone className="bg-red-600 hover:bg-red-700">Call Now<br className="sm:hidden" /> {content.phone}</ActionButton><ActionButton>Book Service</ActionButton></div><div className="mt-7 flex flex-wrap gap-x-4 gap-y-2 text-xs font-bold text-[#082544]"><span>24/7 Emergency Service</span><span className="text-sky-500">|</span><span>Licensed & Insured</span><span className="text-sky-500">|</span><span>{content.license}</span></div></div><MediaPanel src={repair.heroImage} alt="Top Notch AC Services technician performing an emergency air conditioning repair" label="EMERGENCY AC REPAIR PHOTO" className="min-h-80 lg:min-h-full" /></div></section>
    <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16"><div className="text-center"><h2 className="text-3xl font-black text-[#082544] sm:text-4xl">Common <span className="text-red-600">AC Problems</span></h2><p className="mt-2 text-base font-medium text-slate-600">We diagnose and repair all major AC issues.</p></div><div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">{repair.symptoms.map((symptom, index) => <Link key={symptom} href="/book-service" aria-label={`Book service for ${symptom}`} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"><ProblemCardMedia src={problemImages[index] ?? problemImages[0]} title={symptom} kind={problemStyles[index] ?? "cycle"} /><div className="flex items-center justify-between gap-4 px-5 py-4"><span className="text-lg font-black text-[#082544]">{symptom}</span><span className="grid size-10 shrink-0 place-items-center rounded-full bg-blue-600 text-xl font-black text-white transition group-hover:bg-red-600" aria-hidden="true">→</span></div></Link>)}</div></section>
    <section className="mx-auto grid max-w-7xl gap-5 px-5 pb-11 sm:px-8 sm:pb-14 lg:grid-cols-2"><section><h2 className="text-2xl font-black text-[#082544]">AC Repairs We Handle</h2><p className="mt-1 text-sm text-slate-600">Our experienced technicians service all makes and models.</p><div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">{repair.repairs.map((item) => <p key={item} className="flex items-center gap-2 text-sm font-semibold text-slate-700"><span className="grid size-5 shrink-0 place-items-center rounded-full bg-blue-600 text-xs text-white">+</span>{item}</p>)}</div></section><section className="rounded-xl bg-[#eef7fb] p-6"><h2 className="text-2xl font-black text-[#082544]">Why Choose Top Notch</h2><div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-4">{strengths.map((item, index) => <p key={item} className="flex items-center gap-2 text-sm font-semibold text-[#082544]"><span className="grid size-6 shrink-0 place-items-center rounded-md bg-white text-sm font-black text-blue-600">{index + 1}</span>{item}</p>)}</div></section></section>
    <section className="mx-auto max-w-7xl px-5 pb-12 sm:px-8 sm:pb-16"><div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><h2 className="text-2xl font-black text-[#082544]">Our Service Areas</h2><p className="mt-1 text-sm text-slate-600">We proudly serve homes and businesses throughout South Florida.</p></div><Link href="/service-areas" className="inline-flex min-h-10 items-center justify-center rounded-lg border border-blue-600 px-4 text-sm font-bold text-blue-700 transition hover:bg-blue-600 hover:text-white">View All Service Areas <span className="ml-2" aria-hidden="true">&gt;</span></Link></div><div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">{areas.map((area) => <Link key={area.slug} href={`/service-areas/${area.slug}`} className="group overflow-hidden rounded-lg border border-slate-200 bg-white text-center shadow-sm transition hover:-translate-y-0.5 hover:border-sky-400 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"><MediaPanel src={`/images/areas/${area.slug}.jpg`} alt={`${area.name}, Florida service area`} label={area.name.toUpperCase()} className="h-20" /><span className="block px-2 py-2 text-[11px] font-black text-[#082544]">{area.name}</span></Link>)}</div></section>
    <section className="mx-auto max-w-7xl px-5 pb-12 sm:px-8 sm:pb-16"><h2 className="text-2xl font-black text-[#082544]">Frequently Asked Questions</h2><div className="mt-5 grid gap-3 md:grid-cols-2">{repair.faqs.map((faq) => <details key={faq.question} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"><summary className="cursor-pointer list-none pr-6 text-sm font-black text-[#082544]"><span className="mr-3 text-xl font-normal text-blue-600">+</span>{faq.question}</summary><p className="mt-3 pl-7 text-sm leading-6 text-slate-600">{faq.answer}</p></details>)}</div></section>
    <section className="bg-[#062c55]"><div className="mx-auto grid max-w-7xl overflow-hidden lg:grid-cols-[1fr_.95fr]"><div className="px-5 py-12 text-white sm:px-8"><h2 className="max-w-lg text-3xl font-black">AC Not Cooling? Call Top Notch Today.</h2><p className="mt-3 text-sky-100">Professional AC repair and diagnostics throughout South Florida.</p><div className="mt-7 flex flex-col gap-3 sm:flex-row"><ActionButton phone className="bg-red-600 hover:bg-red-700">Call {content.phone}</ActionButton><ActionButton>Book Service</ActionButton></div></div><MediaPanel src={repair.finalImage} alt="Top Notch AC Services branded van" label="TOP NOTCH BRANDED VAN" className="min-h-60 lg:min-h-full" /></div></section>
  </main><SiteFooter /></>;
}
