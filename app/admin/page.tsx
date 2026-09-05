import Link from "next/link";

const adminSections = [
  { title: "Dashboard", description: "Content overview and publishing status" },
  { title: "Homepage", description: "Hero, calls to action and visibility controls" },
  { title: "Services", description: "Service names, descriptions and links" },
  { title: "Media", description: "Logo, photography and hero video library" },
  { title: "Service Areas", description: "Cities and coverage messaging" },
  { title: "About", description: "Family story and company information" },
  { title: "Contact Information", description: "Phone, email and social links" },
  { title: "SEO", description: "Page titles, descriptions and search settings" },
];

export default function AdminPage() {
  return <main className="min-h-screen bg-slate-100 p-5 text-slate-900 sm:p-8"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-5 border-b border-slate-200 pb-7 sm:flex-row sm:items-end"><div><p className="text-xs font-extrabold tracking-[.16em] text-sky-700">DEVELOPMENT ONLY</p><h1 className="mt-2 text-3xl font-black text-[#082544]">Top Notch Website Admin</h1><p className="mt-2 max-w-2xl text-slate-600">Foundation shell for secure content editing. Login, publishing and data storage are intentionally not connected yet.</p></div><Link href="/" className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#082544] px-5 text-sm font-bold text-[#082544] transition hover:bg-[#082544] hover:text-white">View Website</Link></div><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{adminSections.map((section) => <section key={section.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"><h2 className="font-bold text-[#082544]">{section.title}</h2><p className="mt-2 text-sm leading-6 text-slate-600">{section.description}</p><span className="mt-5 inline-block rounded-full bg-sky-50 px-3 py-1 text-xs font-bold text-sky-700">Coming in secure editing phase</span></section>)}</div></div></main>;
}
