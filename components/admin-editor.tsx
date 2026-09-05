"use client";

import { useEffect, useState } from "react";
import type { EditableContent } from "@/data/content-types";

const inputClass = "mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-sky-500";

type FieldProps = { label: string; value: string; onChange: (value: string) => void; multiline?: boolean };
function Field({ label, value, onChange, multiline = false }: FieldProps) {
  return <label className="block text-sm font-bold text-[#082544]">{label}{multiline ? <textarea value={value} onChange={(event) => onChange(event.target.value)} rows={4} className={inputClass} /> : <input value={value} onChange={(event) => onChange(event.target.value)} className={inputClass} />}</label>;
}
function Panel({ title, children }: { title: string; children: React.ReactNode }) { return <section className="rounded-xl bg-white p-6 shadow-sm"><h2 className="text-lg font-black text-[#082544]">{title}</h2><div className="mt-5 grid gap-4">{children}</div></section>; }

export function AdminEditor({ initialContent }: { initialContent: EditableContent }) {
  const [content, setContent] = useState(initialContent);
  const [saved, setSaved] = useState(initialContent);
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);
  const dirty = JSON.stringify(content) !== JSON.stringify(saved);

  useEffect(() => {
    const warning = (event: BeforeUnloadEvent) => { if (dirty) { event.preventDefault(); event.returnValue = ""; } };
    window.addEventListener("beforeunload", warning);
    return () => window.removeEventListener("beforeunload", warning);
  }, [dirty]);

  const update = <K extends keyof EditableContent>(key: K, value: EditableContent[K]) => setContent((current) => ({ ...current, [key]: value }));
  const updateService = (index: number, key: "title" | "description" | "href", value: string) => update("services", content.services.map((service, serviceIndex) => serviceIndex === index ? { ...service, [key]: value } : service));

  async function save() {
    setSaving(true); setMessage("");
    const response = await fetch("/api/admin/content", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(content) });
    const result = await response.json();
    if (response.ok) { setContent(result.content); setSaved(result.content); setMessage("Changes saved. Refresh the public site to see the latest published content."); }
    else setMessage(result.error ?? "Unable to save changes.");
    setSaving(false);
  }
  function cancel() { if (!dirty || window.confirm("Discard unsaved changes?")) { setContent(saved); setMessage("Unsaved changes discarded."); } }

  return <main className="min-h-screen bg-slate-100 p-5 sm:p-8"><div className="mx-auto max-w-6xl">
    <div className="flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-xs font-extrabold tracking-[.16em] text-sky-700">SECURE ADMIN</p><h1 className="mt-2 text-3xl font-black text-[#082544]">Website content</h1><p className="mt-2 text-sm text-slate-600">Edit and save content for the public Top Notch website.</p></div><div className="flex flex-wrap gap-3"><a href="/" target="_blank" className="inline-flex min-h-10 items-center rounded-full border border-[#082544] px-4 text-sm font-bold text-[#082544]">Preview website</a><button onClick={cancel} disabled={!dirty} className="min-h-10 rounded-full border border-slate-300 px-4 text-sm font-bold disabled:opacity-40">Cancel</button><button onClick={save} disabled={!dirty || saving} className="min-h-10 rounded-full bg-sky-500 px-5 text-sm font-extrabold text-white disabled:opacity-50">{saving ? "Saving..." : "Save changes"}</button></div></div>
    {dirty && <p className="mt-4 rounded-lg bg-amber-50 p-3 text-sm font-bold text-amber-900">You have unsaved changes.</p>}{message && <p role="status" className="mt-4 rounded-lg bg-sky-50 p-3 text-sm font-bold text-sky-800">{message}</p>}
    <div className="mt-7 grid gap-5 lg:grid-cols-2">
      <Panel title="Business information"><Field label="Company name" value={content.companyName} onChange={(value) => update("companyName", value)} /><Field label="Phone number" value={content.phone} onChange={(value) => update("phone", value)} /><Field label="Florida HVAC license" value={content.license} onChange={(value) => update("license", value)} /><Field label="Domain" value={content.domain} onChange={(value) => update("domain", value)} /><Field label="Email" value={content.email} onChange={(value) => update("email", value)} /></Panel>
      <Panel title="Homepage and calls to action"><Field label="Hero eyebrow" value={content.hero.eyebrow} onChange={(value) => update("hero", { ...content.hero, eyebrow: value })} /><Field label="Hero headline" value={content.hero.headline} onChange={(value) => update("hero", { ...content.hero, headline: value })} multiline /><Field label="Hero description" value={content.hero.description} onChange={(value) => update("hero", { ...content.hero, description: value })} multiline /><Field label="Hero video path" value={content.hero.video} onChange={(value) => update("hero", { ...content.hero, video: value })} /><Field label="Hero poster path" value={content.hero.poster} onChange={(value) => update("hero", { ...content.hero, poster: value })} /><Field label="Primary CTA label" value={content.ctas.primary} onChange={(value) => update("ctas", { ...content.ctas, primary: value })} /><Field label="Secondary CTA label" value={content.ctas.secondary} onChange={(value) => update("ctas", { ...content.ctas, secondary: value })} /></Panel>
      <Panel title="Services and service areas">{content.services.map((service, index) => <div key={`${service.title}-${index}`} className="rounded-lg border border-slate-200 p-4"><Field label={`Service ${index + 1} name`} value={service.title} onChange={(value) => updateService(index, "title", value)} /><div className="mt-3"><Field label="Description" value={service.description} onChange={(value) => updateService(index, "description", value)} multiline /></div><div className="mt-3"><Field label="Link" value={service.href} onChange={(value) => updateService(index, "href", value)} /></div></div>)}<Field label="Service areas (one per line)" value={content.serviceAreas.join("\n")} onChange={(value) => update("serviceAreas", value.split("\n").map((area) => area.trim()).filter(Boolean))} multiline /></Panel>
      <Panel title="About, social and SEO"><Field label="Family-owned message" value={content.familyMessage} onChange={(value) => update("familyMessage", value)} multiline /><Field label="Facebook link" value={content.socialLinks.facebook} onChange={(value) => update("socialLinks", { ...content.socialLinks, facebook: value })} /><Field label="Instagram link" value={content.socialLinks.instagram} onChange={(value) => update("socialLinks", { ...content.socialLinks, instagram: value })} /><Field label="SEO title" value={content.seo.title} onChange={(value) => update("seo", { ...content.seo, title: value })} /><Field label="Meta description" value={content.seo.description} onChange={(value) => update("seo", { ...content.seo, description: value })} multiline /><h3 className="pt-2 text-sm font-black text-[#082544]">Section visibility</h3>{Object.entries(content.sections).map(([key, visible]) => <label key={key} className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-3 text-sm font-bold capitalize text-[#082544]"><span>{key.replace(/([A-Z])/g, " $1")}</span><input type="checkbox" checked={visible} onChange={(event) => update("sections", { ...content.sections, [key]: event.target.checked })} className="size-4 accent-sky-600" /></label>)}</Panel>
    </div>
  </div></main>;
}
