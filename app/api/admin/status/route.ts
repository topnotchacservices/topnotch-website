import { NextResponse } from "next/server";
import { getAdminSession, isAdminConfigured } from "@/lib/admin-auth";
export async function GET() { return NextResponse.json({ configured: isAdminConfigured(), authenticated: Boolean(await getAdminSession()) }); }
