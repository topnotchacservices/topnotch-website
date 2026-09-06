"use client";

import Link from "next/link";
import { useSiteContent } from "@/components/content-provider";
import { ActionButton, SiteFooter, SiteHeader } from "@/components/site-shell";

const reasons = [
	["01", "Licensed & insured", "Professional HVAC service backed by the credentials and care your property deserves."],
	["02", "24/7 emergency AC help", "When cooling problems cannot wait, our local team is ready to help you take the next step."],
	["03", "Clear diagnostics", "We look for the actual condition, explain it plainly, and provide honest recommendations."],
	["04", "Homes and businesses", "Respectful residential and commercial service for the properties South Florida depends on."],
	["05", "Complete comfort expertise", "HVAC, indoor-air, air-duct, and dryer-vent service from one experienced local team."],
	["06", "Responsive local service", "Serving Pompano Beach, Fort Lauderdale, and surrounding South Florida communities."],
];

const services = [
	["AC Repair", "/ac-repair", "Diagnosis and repair for cooling, electrical, drainage, and airflow concerns."],
	["Emergency AC Repair", "/emergency-ac-repair", "Responsive help for urgent AC problems and unexpected system breakdowns."],
	["AC Installation", "/ac-installation", "Thoughtful system installation with professional setup and startup testing."],
	["AC Maintenance", "/ac-maintenance", "Preventive care to help keep your cooling system operating reliably."],
	["Air Duct Cleaning", "/air-duct-cleaning", "Professional cleaning for accessible ductwork, vents, and return-air areas."],
	["Dryer Vent Cleaning", "/dryer-vent-cleaning", "Lint removal, airflow testing, and accessible dryer vent inspection."],
	["Service Areas", "/service-areas", "See the South Florida communities our local team serves."],
	["Contact Top Notch", "/contact", "Talk with our team or request the service your property needs."],
];

export default function AboutPage() {
	const content = useSiteContent();
	const schema = {
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		name: content.companyName,
		telephone: content.phone,
		url: "https://topnotch-acservices.com",
		identifier: `Florida HVAC License ${content.license}`,
		description: "Family-owned, licensed and insured HVAC, indoor-air, air-duct, and dryer-vent service in Pompano Beach and South Florida.",
		areaServed: ["Pompano Beach", "Fort Lauderdale", "South Florida"],
	};

	return <><SiteHeader /><main className="overflow-hidden bg-white text-slate-900">
		<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
		<section className="relative isolate overflow-hidden bg-[#edf8fc]"><div className="absolute -right-32 top-0 h-96 w-96 rounded-full border-[48px] border-sky-100/80" /><div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-22"><div className="max-w-3xl"><p className="text-xs font-black tracking-[.16em] text-sky-700">ABOUT TOP NOTCH AC SERVICES</p><h1 className="mt-4 text-4xl font-black leading-tight text-[#082544] sm:text-5xl">Family-Owned HVAC Care Built on Trust.</h1><p className="mt-5 max-w-2xl text-base leading-7 text-slate-700">Top Notch AC Services serves Pompano Beach and South Florida with honest HVAC, air-duct, and dryer-vent service for homes, condos, and businesses.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><ActionButton>Book Service</ActionButton><ActionButton phone className="bg-[#082544] hover:bg-[#061c32]">Call Now {content.phone}</ActionButton></div><div className="mt-8 flex flex-wrap gap-x-4 gap-y-2 text-xs font-bold text-slate-600"><span>Licensed & Insured</span><span className="text-sky-600">|</span><span>Florida HVAC License {content.license}</span><span className="text-sky-600">|</span><span>Serving South Florida</span></div></div></div></section>

		<section className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[.9fr_1.1fr] lg:items-center"><div><p className="text-xs font-black tracking-[.14em] text-sky-700">OUR STORY</p><h2 className="mt-2 text-3xl font-black text-[#082544]">A neighborly approach to serious home comfort work.</h2></div><div className="border-l-4 border-sky-500 pl-6 text-lg font-semibold leading-8 text-slate-700">{content.familyMessage} Our approach is simple: give clear guidance, do careful workmanship, and treat every home, business, and property with the respect we would expect for our own family.</div></section>

		<section className="bg-[#082544] py-14 text-white sm:py-20"><div className="mx-auto max-w-7xl px-5 sm:px-8"><div className="max-w-3xl"><p className="text-xs font-black tracking-[.14em] text-sky-300">WHY HOMEOWNERS CHOOSE US</p><h2 className="mt-2 text-3xl font-black">Practical service. Clear communication. Respect for your property.</h2></div><div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{reasons.map(([number, title, text]) => <article key={number} className="rounded-xl border border-white/15 bg-white/8 p-6"><span className="text-sm font-black text-sky-300">{number}</span><h3 className="mt-4 text-lg font-black">{title}</h3><p className="mt-2 text-sm leading-6 text-sky-100">{text}</p></article>)}</div></div></section>

		<section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20"><div className="mx-auto max-w-3xl text-center"><p className="text-xs font-black tracking-[.14em] text-sky-700">WHAT WE SERVICE</p><h2 className="mt-2 text-3xl font-black text-[#082544]">One trusted team for comfort, airflow, and maintenance.</h2><p className="mt-4 leading-7 text-slate-600">Explore the services available for your home, condominium, business, or managed property.</p></div><div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{services.map(([title, href, text]) => <Link key={href} href={href} className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"><span className="grid size-9 place-items-center rounded-full bg-sky-50 text-lg font-black text-sky-700 transition group-hover:bg-sky-500 group-hover:text-white">→</span><h3 className="mt-4 text-base font-black text-[#082544]">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{text}</p></Link>)}</div></section>

		<section className="bg-sky-50 py-14 sm:py-20"><div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center"><div><p className="text-xs font-black tracking-[.14em] text-sky-700">LOCAL SOUTH FLORIDA SERVICE</p><h2 className="mt-2 text-3xl font-black text-[#082544]">Local care for Pompano Beach, Fort Lauderdale, and surrounding communities.</h2><p className="mt-4 max-w-2xl leading-7 text-slate-600">From Pompano Beach and Fort Lauderdale to neighboring Broward and South Florida communities, Top Notch provides professional service with the responsiveness of a local team.</p><div className="mt-7"><ActionButton href="/service-areas">View Service Areas</ActionButton></div></div><div className="rounded-xl bg-white p-7 shadow-sm"><p className="text-sm font-black text-sky-700">TOP NOTCH AC SERVICES</p><p className="mt-4 text-2xl font-black leading-tight text-[#082544]">Professional comfort care from a team that knows South Florida.</p><p className="mt-4 text-sm leading-6 text-slate-600">Call us for AC, indoor-air, air-duct, and dryer-vent service tailored to your property and its needs.</p></div></div></section>

		<section className="bg-[#061c32]"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 px-5 py-14 text-white sm:px-8 lg:flex-row lg:items-center"><div><p className="text-xs font-black tracking-[.14em] text-sky-300">TOP NOTCH AC SERVICES</p><h2 className="mt-2 max-w-2xl text-3xl font-black">Comfort Starts With a Team You Can Trust.</h2><p className="mt-3 text-sky-100">Book professional HVAC service with a local South Florida team.</p></div><div className="flex flex-col gap-3 sm:flex-row"><ActionButton light>Book Service</ActionButton><ActionButton phone className="border border-sky-300 bg-transparent hover:bg-white/10">Call Now {content.phone}</ActionButton></div></div></section>
	</main><SiteFooter /></>;
}
