"use client";

import Image from "next/image";
import Link from "next/link";
import { ActionButton, SiteFooter, SiteHeader } from "@/components/site-shell";
import { siteContent } from "@/data/site-content";

type ServiceLandingPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  highlights: string[];
  processTitle: string;
  process: string[];
};

export function ServiceLandingPage({ eyebrow, title, description, image, imageAlt, highlights, processTitle, process }: ServiceLandingPageProps) {
  return (
    <>
      <SiteHeader />
      <main className="overflow-hidden bg-white text-slate-900">
        <section className="bg-[#edf8fc]">
          <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
            <div className="flex items-center px-5 py-14 sm:px-8 sm:py-20">
              <div className="max-w-xl">
                <p className="text-xs font-black tracking-[.16em] text-sky-700">{eyebrow}</p>
                <h1 className="mt-4 text-4xl font-black leading-tight text-[#082544] sm:text-5xl">{title}</h1>
                <p className="mt-5 text-base leading-7 text-slate-700">{description}</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <ActionButton>Book Service</ActionButton>
                  <ActionButton phone className="bg-[#082544] hover:bg-[#061c32]">Call {siteContent.phone}</ActionButton>
                </div>
                <p className="mt-6 text-sm font-bold text-slate-600">Licensed & Insured · Florida HVAC License {siteContent.license}</p>
              </div>
            </div>
            <div className="relative min-h-[360px] overflow-hidden bg-[#082544]">
              <Image src={image} alt={imageAlt} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061c32]/45 via-transparent to-transparent" />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
          <div className="grid gap-4 sm:grid-cols-3">
            {highlights.map((highlight) => (
              <article key={highlight} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <span className="grid size-10 place-items-center rounded-full bg-sky-50 text-lg font-black text-sky-700">✓</span>
                <h2 className="mt-4 text-lg font-black text-[#082544]">{highlight}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">Professional local service with clear communication and respectful care for your property.</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#082544] py-14 text-white sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <p className="text-xs font-black tracking-[.16em] text-sky-300">OUR PROCESS</p>
            <h2 className="mt-3 text-3xl font-black">{processTitle}</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {process.map((step, index) => (
                <article key={step} className="rounded-2xl border border-white/15 bg-white/8 p-6">
                  <span className="text-sm font-black text-sky-300">0{index + 1}</span>
                  <p className="mt-4 text-lg font-black">{step}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-sky-50 py-14 sm:py-20">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 px-5 sm:px-8 lg:flex-row lg:items-center">
            <div>
              <p className="text-xs font-black tracking-[.16em] text-sky-700">TOP NOTCH AC SERVICES</p>
              <h2 className="mt-3 text-3xl font-black text-[#082544]">Ready to schedule service?</h2>
              <p className="mt-3 text-slate-600">Call {siteContent.phone} or email <a className="font-bold text-sky-700 underline" href={"mailto:" + siteContent.email}>{siteContent.email}</a>.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ActionButton>Book Service</ActionButton>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-lg border border-[#082544] px-5 py-3 font-extrabold text-[#082544] transition hover:bg-[#082544] hover:text-white">Contact Us</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
