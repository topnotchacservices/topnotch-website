import { NextResponse } from "next/server";
import { createAdminSession, isAdminConfigured, verifyPassword } from "@/lib/admin-auth";

export async function POST(request: Request) {
  if (!isAdminConfigured()) return NextResponse.json({ error: "Admin credentials are not configured on this server." }, { status: 503 });
  const body = await request.json().catch(() => null) as { username?: string; password?: string } | null;
  if (!body?.username || !body.password || body.username !== process.env.ADMIN_USERNAME || !verifyPassword(body.password)) return NextResponse.json({ error: "Invalid username or password." }, { status: 401 });
  await createAdminSession();
  return NextResponse.json({ ok: true });
}
