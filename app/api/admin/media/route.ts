import { randomUUID } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/admin-auth";

export const runtime = "nodejs";
const maxBytes = 100 * 1024 * 1024;
const allowed = {
  video: new Set(["video/mp4", "video/webm"]),
  poster: new Set(["image/png", "image/jpeg", "image/webp"]),
};

export async function POST(request: Request) {
  if (!(await getAdminSession())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const formData = await request.formData();
  const mediaType = formData.get("type");
  const file = formData.get("file");
  if ((mediaType !== "video" && mediaType !== "poster") || !(file instanceof File)) return NextResponse.json({ error: "Choose a video or poster image to upload." }, { status: 400 });
  if (!allowed[mediaType].has(file.type)) return NextResponse.json({ error: mediaType === "video" ? "Use an MP4 or WebM video." : "Use a PNG, JPEG, or WebP poster image." }, { status: 400 });
  if (file.size > maxBytes) return NextResponse.json({ error: "Media files must be 100 MB or smaller." }, { status: 413 });
  const extension = file.type === "video/mp4" ? "mp4" : file.type === "video/webm" ? "webm" : file.type === "image/png" ? "png" : file.type === "image/webp" ? "webp" : "jpg";
  const folder = path.join(process.cwd(), "public", "uploads", "ac-services");
  const fileName = `${mediaType}-${randomUUID()}.${extension}`;
  await mkdir(folder, { recursive: true });
  await writeFile(path.join(folder, fileName), Buffer.from(await file.arrayBuffer()));
  return NextResponse.json({ path: `/uploads/ac-services/${fileName}` });
}
