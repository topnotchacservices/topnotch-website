import { NextResponse } from "next/server";
import type { EditableContent } from "@/data/content-types";
import { getAdminSession } from "@/lib/admin-auth";
import { getSiteContent, saveSiteContent } from "@/lib/content-store";

function validContent(value: unknown): value is EditableContent {
  if (!value || typeof value !== "object") return false;
  const content = value as Partial<EditableContent>;
  return typeof content.companyName === "string" && content.companyName.trim().length > 1 && /^\d{10}$/.test(content.phone?.replace(/\D/g, "") ?? "") && typeof content.license === "string" && content.license.trim().length > 2 && typeof content.email === "string" && !!content.hero && content.hero.headline.trim().length > 4 && content.hero.description.trim().length > 9 && !!content.seo && content.seo.title.trim().length > 4 && content.seo.description.trim().length > 9 && !!content.ctas && Boolean(content.ctas.primary.trim() && content.ctas.secondary.trim()) && Array.isArray(content.services) && content.services.length > 0 && content.services.every((service) => service.title?.trim() && service.description?.trim() && service.href?.startsWith("/")) && Array.isArray(content.serviceAreas) && content.serviceAreas.filter(Boolean).length > 0 && !!content.sections;
}
async function authorized() { return Boolean(await getAdminSession()); }
export async function GET() { if (!(await authorized())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 }); return NextResponse.json(await getSiteContent()); }
export async function PUT(request: Request) { if (!(await authorized())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 }); const content = await request.json().catch(() => null); if (!validContent(content)) return NextResponse.json({ error: "Please complete all required fields with valid values." }, { status: 400 }); await saveSiteContent(content); return NextResponse.json({ ok: true, content }); }
