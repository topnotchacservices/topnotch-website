import Link from "next/link";
import { ActionButton, PageHero, SiteFooter, SiteHeader } from "@/components/site-shell";
import { regionOrder } from "@/data/service-areas";
import { getSiteContent } from "@/lib/content-store";

export default async function ServiceAreasPage() {
	const content = await getSiteContent();
	const visibleAreas = content.serviceAreas.filter((area) => area.enabled);
	return <><SiteHeader /><main><PageHero eyebrow="SERVICE AREAS" title="Local service across Broward and South Florida." description="Top Notch AC Services is ready to help homeowners and businesses with cooling, duct cleaning and dryer vent service throughout the region." /><section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">{regionOrder.map((region) => { const areas = visibleAreas.filter((area) => area.region === region); return areas.length ? <section key={region} className="mt-12 first:mt-0"><h2 className="text-2xl font-black text-[#082544]">{region}</h2><div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">{areas.map((area) => <Link key={area.slug} href={`/service-areas/${area.slug}`} className="rounded-lg border border-sky-100 bg-sky-50 px-4 py-4 text-center text-sm font-bold text-[#082544] transition hover:-translate-y-0.5 hover:border-sky-400 hover:bg-white hover:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 active:translate-y-0">{area.name}</Link>)}</div></section> : null; })}<div className="mt-10"><ActionButton>Book Service</ActionButton></div></section></main><SiteFooter /></>;
}
