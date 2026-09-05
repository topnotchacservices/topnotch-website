"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navigation } from "@/data/site-content";
import { useSiteContent } from "@/components/content-provider";

export function ActionButton({ children, href = "/book-service", phone = false, light = false, className = "" }: { children: React.ReactNode; href?: string; phone?: boolean; light?: boolean; className?: string }) {
  const content = useSiteContent();
  return <Link href={phone ? `tel:${content.phone.replace(/\D/g, "")}` : href} className={`inline-flex min-h-11 items-center justify-center rounded-full px-5 text-sm font-extrabold transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 active:scale-[.98] ${light ? "bg-white text-[#082544] hover:bg-sky-100" : "bg-sky-500 text-white hover:bg-sky-600"} ${className}`}>{children}</Link>;
}

function Brand({ light = false }: { light?: boolean }) {
  const content = useSiteContent();
  const [logoFailed, setLogoFailed] = useState(false);
  return <Link href="/" className="flex items-center gap-2.5" aria-label={`${content.companyName} home`}>{!logoFailed && <Image src="/images/brand/logo.png" alt={content.companyName} width={180} height={70} priority onError={() => setLogoFailed(true)} className="h-11 w-auto object-contain" />}<span className={`${logoFailed ? "flex" : "hidden"} items-center gap-2.5`}><span className="grid size-10 place-items-center rounded-full bg-sky-500 text-sm font-black text-white">TN</span><span className={`text-base font-black leading-none ${light ? "text-white" : "text-[#082544]"}`}>TOP NOTCH<span className={`mt-1 block text-[9px] tracking-[.22em] ${light ? "text-sky-200" : "text-sky-700"}`}>AC SERVICES</span></span></span></Link>;
}

export function SiteHeader() {
  const content = useSiteContent();
  const [open, setOpen] = useState(false);
  return <><div className="bg-[#061c32] text-sky-100"><div className="mx-auto flex max-w-7xl items-center gap-3 px-5 py-2 text-xs sm:px-8"><span className="font-bold">Serving Broward + South Florida</span><span className="hidden h-3 w-px bg-sky-500/60 sm:block" /><Link className="font-bold hover:text-white" href={`tel:${content.phone.replace(/\D/g, "")}`}>{content.phone}</Link><ActionButton className="ml-auto min-h-8 px-3 py-1.5 text-xs">Book Service</ActionButton></div></div><header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur"><div className="mx-auto flex min-h-19 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8"><Brand /><nav className="hidden items-center gap-5 lg:flex" aria-label="Main navigation">{navigation.slice(1).map((item) => <Link key={item.href} href={item.href} className="text-xs font-bold text-slate-600 transition hover:text-sky-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-500">{item.label}</Link>)}</nav><div className="hidden md:block"><ActionButton>Book Service</ActionButton></div><button type="button" onClick={() => setOpen(!open)} className="grid size-10 place-items-center rounded-full border border-slate-300 transition hover:border-sky-500 hover:text-sky-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 lg:hidden" aria-label="Toggle navigation" aria-expanded={open}><span className="space-y-1"><span className="block h-0.5 w-5 bg-current" /><span className="block h-0.5 w-5 bg-current" /><span className="block h-0.5 w-5 bg-current" /></span></button></div>{open && <nav className="absolute left-0 right-0 z-30 border-b border-slate-200 bg-white px-5 py-4 shadow-lg lg:hidden" aria-label="Mobile navigation">{navigation.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="block border-b border-slate-100 py-3 text-sm font-bold text-[#082544] hover:text-sky-600">{item.label}</Link>)}<div className="mt-4 grid grid-cols-2 gap-3"><ActionButton phone>Call Now</ActionButton><ActionButton>Book Service</ActionButton></div></nav>}</header></>;
}

export function SiteFooter() {
  const content = useSiteContent();
  return <footer className="bg-[#061c32] py-12 text-sky-100"><div className="mx-auto grid max-w-7xl gap-9 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8"><div><Brand light /><p className="mt-5 text-sm leading-6 text-sky-200">Licensed & Insured<br />Florida HVAC License {content.license}</p></div><div><h2 className="text-sm font-extrabold text-white">Services</h2><div className="mt-4 grid gap-2 text-sm"><Link href="/ac-services">AC Services</Link><Link href="/air-duct-cleaning">Air Duct Cleaning</Link><Link href="/dryer-vent-cleaning">Dryer Vent Cleaning</Link></div></div><div><h2 className="text-sm font-extrabold text-white">Company</h2><div className="mt-4 grid gap-2 text-sm"><Link href="/service-areas">Service Areas</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></div></div><div><h2 className="text-sm font-extrabold text-white">Contact</h2><div className="mt-4 grid gap-2 text-sm"><Link href={`tel:${content.phone.replace(/\D/g, "")}`}>{content.phone}</Link><span>Email: {content.email}</span><span>{content.domain}</span></div></div></div></footer>;
}

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) { return <section className="bg-[#082544] py-16 text-white sm:py-22"><div className="mx-auto max-w-7xl px-5 sm:px-8"><p className="text-xs font-extrabold tracking-[.16em] text-sky-200">{eyebrow}</p><h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">{title}</h1><p className="mt-5 max-w-2xl leading-7 text-sky-100">{description}</p></div></section>; }

export function TemporaryPage({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) { return <><SiteHeader /><main><PageHero eyebrow={eyebrow} title={title} description={description} /><section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24"><p className="max-w-2xl text-lg leading-8 text-slate-600">This page is being prepared with full service details. Call our local team for help today, or request service online.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><ActionButton phone>Call Now</ActionButton><ActionButton>Book Service</ActionButton></div></section></main><SiteFooter /></>; }
