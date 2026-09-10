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
  const [acOpen, setAcOpen] = useState(false);
  const activeAcServices = content.acHub.serviceCards.filter((service) => service.active);
  return <><div className="bg-[#061c32] text-sky-100"><div className="mx-auto flex flex-wrap items-center gap-x-4 gap-y-1 px-5 py-2 sm:px-8"><span className="hidden text-xs font-bold sm:inline">Serving Broward + South Florida</span><Link className="text-base font-black tracking-wide text-white hover:text-sky-200" href={`tel:${content.phone.replace(/\D/g, "")}`}><span className="mr-1 text-[10px] uppercase tracking-[.12em] text-sky-300">Office</span>{content.phone}</Link><Link className="text-sm font-extrabold text-red-300 hover:text-red-200" href="tel:7543660055"><span className="mr-1 text-[10px] uppercase tracking-[.12em] text-red-200">24/7 Emergency</span>754-366-0055</Link><ActionButton className="ml-auto min-h-8 px-3 py-1.5 text-xs">Book Service</ActionButton></div></div><header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur"><div className="mx-auto flex min-h-19 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8"><Brand /><nav className="hidden items-center gap-5 lg:flex" aria-label="Main navigation"><div className="group relative"><Link href="/ac-services" className="inline-flex py-7 text-xs font-bold text-slate-600 transition hover:text-sky-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-500">AC Services <span className="ml-1" aria-hidden="true">+</span></Link><div className="invisible absolute left-0 top-full w-75 translate-y-1 rounded-xl border border-slate-200 bg-white p-3 opacity-0 shadow-xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">{activeAcServices.map((service) => <Link key={service.href} href={service.href} className="block rounded-lg px-3 py-2.5 text-sm font-bold text-[#082544] transition hover:bg-sky-50 hover:text-sky-700 focus-visible:outline-2 focus-visible:outline-sky-500">{service.title}</Link>)}<Link href="/ac-services" className="mt-2 block rounded-lg bg-[#082544] px-3 py-2.5 text-sm font-extrabold text-white hover:bg-sky-700">View All AC Services</Link></div></div>{navigation.slice(2).map((item) => <Link key={item.href} href={item.href} className="text-xs font-bold text-slate-600 transition hover:text-sky-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-500">{item.label}</Link>)}</nav><div className="hidden md:block"><ActionButton>Book Service</ActionButton></div><button type="button" onClick={() => setOpen(!open)} className="grid size-10 place-items-center rounded-full border border-slate-300 transition hover:border-sky-500 hover:text-sky-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 lg:hidden" aria-label="Toggle navigation" aria-expanded={open}><span className="space-y-1"><span className="block h-0.5 w-5 bg-current" /><span className="block h-0.5 w-5 bg-current" /><span className="block h-0.5 w-5 bg-current" /></span></button></div>{open && <nav className="absolute left-0 right-0 z-30 border-b border-slate-200 bg-white px-5 py-4 shadow-lg lg:hidden" aria-label="Mobile navigation"><Link href="/" onClick={() => setOpen(false)} className="block border-b border-slate-100 py-3 text-sm font-bold text-[#082544] hover:text-sky-600">Home</Link><button type="button" onClick={() => setAcOpen(!acOpen)} className="flex w-full items-center justify-between border-b border-slate-100 py-3 text-left text-sm font-bold text-[#082544]" aria-expanded={acOpen}>AC Services <span aria-hidden="true">{acOpen ? "-" : "+"}</span></button>{acOpen && <div className="border-b border-slate-100 bg-sky-50 px-3 py-2">{activeAcServices.map((service) => <Link key={service.href} href={service.href} onClick={() => setOpen(false)} className="block py-2 text-sm font-bold text-sky-800">{service.title}</Link>)}<Link href="/ac-services" onClick={() => setOpen(false)} className="block py-2 text-sm font-extrabold text-[#082544]">View All AC Services</Link></div>}{navigation.slice(2).map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="block border-b border-slate-100 py-3 text-sm font-bold text-[#082544] hover:text-sky-600">{item.label}</Link>)}<div className="mt-4 grid gap-3"><ActionButton phone>Call Office: {content.phone}</ActionButton><Link href="tel:7543660055" className="inline-flex min-h-11 items-center justify-center rounded-full bg-red-600 px-5 text-sm font-extrabold text-white hover:bg-red-700">24/7 Emergency: 754-366-0055</Link><ActionButton>Book Service</ActionButton></div></nav>}</header></>;
}

export function SiteFooter() {
  const content = useSiteContent();
  const trustLogos = [
    { src: "/images/footer/trust/nadca.jpg", alt: "National Air Duct Cleaners Association logo" },
    { src: "/images/footer/trust/bbb-rating.jpg", alt: "Better Business Bureau rating badge" },
    { src: "/images/footer/trust/google-reviews.jpg", alt: "Google reviews badge" },
    { src: "/images/footer/trust/instagram.jpg", alt: "Top Notch AC Services on Instagram" },
  ];
  const paymentMethods = [
    { src: "/images/footer/payments/visa.png", alt: "Visa accepted" },
    { src: "/images/footer/payments/mastercard.png", alt: "Mastercard accepted" },
    { src: "/images/footer/payments/discover.png", alt: "Discover accepted" },
    { src: "/images/footer/payments/cash.png", alt: "Cash accepted" },
    { src: "/images/footer/payments/check.png", alt: "Check accepted" },
    { src: "/images/footer/payments/financing.png", alt: "Financing available" },
  ];

  return <footer className="relative isolate overflow-hidden bg-[#061c32] text-sky-100">
    <div className="absolute inset-0 -z-20 bg-[url('/images/footer/south-florida-hvac-footer.jpg')] bg-cover bg-center" aria-hidden="true" />
    <div className="absolute inset-0 -z-10 bg-[#061c32]/85" aria-hidden="true" />
    <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8">
      <div className="grid gap-10 border-b border-sky-100/25 pb-10 sm:grid-cols-2 lg:grid-cols-[1.25fr_.8fr_.8fr_1.15fr]">
        <div><Brand light /><p className="mt-5 max-w-sm text-sm leading-6 text-sky-100">Professional AC repair, installation, maintenance, air duct cleaning and dryer vent service throughout South Florida.</p><p className="mt-4 text-xs font-bold tracking-wide text-sky-200">LICENSED & INSURED · FLORIDA HVAC LICENSE {content.license}</p></div>
        <div><h2 className="text-sm font-extrabold uppercase tracking-[.14em] text-white">Services</h2><div className="mt-4 grid gap-2 text-sm"><Link className="hover:text-white" href="/ac-services">AC Services</Link><Link className="hover:text-white" href="/air-duct-cleaning">Air Duct Cleaning</Link><Link className="hover:text-white" href="/dryer-vent-cleaning">Dryer Vent Cleaning</Link></div></div>
        <div><h2 className="text-sm font-extrabold uppercase tracking-[.14em] text-white">Company</h2><div className="mt-4 grid gap-2 text-sm"><Link className="hover:text-white" href="/service-areas">Service Areas</Link><Link className="hover:text-white" href="/about">About Us</Link><Link className="hover:text-white" href="/contact">Contact</Link></div></div>
        <div className="rounded-2xl border border-white/25 bg-[#061c32]/70 p-5 shadow-xl backdrop-blur-sm"><h2 className="text-sm font-extrabold uppercase tracking-[.14em] text-white">Contact</h2><div className="mt-4 grid gap-3 text-sm"><Link className="text-xl font-black tracking-wide text-white hover:text-sky-200" href={`tel:${content.phone.replace(/\D/g, "")}`}><span className="mr-2 text-[10px] uppercase tracking-[.14em] text-sky-300">Office</span>{content.phone}</Link><Link className="font-extrabold text-red-400 hover:text-red-300" href="tel:7543660055">24/7 Emergency: 754-366-0055</Link><a className="hover:text-white" href="mailto:topnotch.acservices@gmail.com">Email: topnotch.acservices@gmail.com</a><a className="hover:text-white" href="https://topnotchdryerventcleaning.com">topnotchdryerventcleaning.com</a></div></div>
      </div>
      <section className="grid gap-5 border-b border-sky-100/25 py-8 lg:grid-cols-[.8fr_1.2fr]" aria-label="Business hours and payment options">
        <div className="rounded-2xl border border-white/15 bg-[#061c32]/70 p-5 shadow-xl backdrop-blur-sm">
          <h2 className="text-sm font-extrabold uppercase tracking-[.14em] text-white">Business hours</h2>
          <dl className="mt-4 grid gap-2 text-sm text-sky-100"><div className="flex justify-between gap-4"><dt>Monday–Friday</dt><dd className="font-bold text-white">7:30 AM–11:00 PM</dd></div><div className="flex justify-between gap-4"><dt>Saturday–Sunday</dt><dd className="font-bold text-white">8:00 AM–6:00 PM</dd></div></dl>
          <p className="mt-4 border-t border-white/15 pt-4 text-sm font-extrabold text-red-300">24-hour emergency service available</p>
        </div>
        <div className="rounded-2xl border border-white/15 bg-[#061c32]/70 p-5 shadow-xl backdrop-blur-sm">
          <div className="flex flex-wrap items-baseline justify-between gap-2"><h2 className="text-sm font-extrabold uppercase tracking-[.14em] text-white">Payment options</h2><p className="text-sm font-extrabold text-sky-200">Financing also available</p></div>
          <div className="mt-4 grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:gap-3">{paymentMethods.map((method) => <div key={method.src} className="flex h-14 items-center justify-center rounded-lg bg-white px-2"><Image src={method.src} alt={method.alt} width={100} height={63} className="h-auto max-h-10 w-auto max-w-full object-contain" /></div>)}</div>
        </div>
      </section>
      <section className="border-b border-sky-100/25 py-8" aria-labelledby="footer-trust-heading">
        <h2 id="footer-trust-heading" className="text-center text-xs font-extrabold uppercase tracking-[.16em] text-sky-200">Trusted &amp; connected</h2>
        <div className="mx-auto mt-5 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {trustLogos.map((logo) => <div key={logo.src} className="flex h-24 items-center justify-center rounded-xl border border-white/15 bg-white p-3 shadow-lg sm:h-28 sm:p-4"><Image src={logo.src} alt={logo.alt} width={300} height={160} className="max-h-full w-auto max-w-full object-contain" /></div>)}
        </div>
      </section>
      <div className="flex flex-col gap-3 pt-6 text-xs text-sky-200 sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} Top Notch AC Services. All rights reserved.</span><span>Family-Owned & Operated · Faith · Family · Community</span></div>
    </div>
  </footer>;
}

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) { return <section className="bg-[#082544] py-16 text-white sm:py-22"><div className="mx-auto max-w-7xl px-5 sm:px-8"><p className="text-xs font-extrabold tracking-[.16em] text-sky-200">{eyebrow}</p><h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">{title}</h1><p className="mt-5 max-w-2xl leading-7 text-sky-100">{description}</p></div></section>; }
export function TemporaryPage({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) { return <><SiteHeader /><main><PageHero eyebrow={eyebrow} title={title} description={description} /><section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24"><p className="max-w-2xl text-lg leading-8 text-slate-600">This page is being prepared with full service details. Call our local team for help today, or request service online.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><ActionButton phone>Call Now</ActionButton><ActionButton>Book Service</ActionButton></div></section></main><SiteFooter /></>; }
