import "server-only";

import { createHmac, scryptSync, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

const cookieName = "top_notch_admin";
const maxAge = 60 * 60 * 8;

type Session = { username: string; expiresAt: number };

function secret() { return process.env.ADMIN_SESSION_SECRET; }
function credentials() { return { username: process.env.ADMIN_USERNAME, passwordHash: process.env.ADMIN_PASSWORD_HASH }; }
function signature(value: string) { return createHmac("sha256", secret() ?? "").update(value).digest("base64url"); }

export function isAdminConfigured() { const config = credentials(); return Boolean(config.username && config.passwordHash && secret()); }
export function verifyPassword(password: string) {
  const config = credentials();
  if (!isAdminConfigured() || !config.passwordHash) return false;
  const [salt, expected] = config.passwordHash.split(":");
  if (!salt || !expected) return false;
  const actual = scryptSync(password, salt, 64).toString("hex");
  return actual.length === expected.length && timingSafeEqual(Buffer.from(actual), Buffer.from(expected));
}

export async function createAdminSession() {
  const config = credentials();
  if (!config.username || !secret()) throw new Error("Admin credentials are not configured.");
  const payload = Buffer.from(JSON.stringify({ username: config.username, expiresAt: Date.now() + maxAge * 1000 })).toString("base64url");
  const store = await cookies();
  store.set(cookieName, `${payload}.${signature(payload)}`, { httpOnly: true, sameSite: "strict", secure: process.env.NODE_ENV === "production", path: "/", maxAge });
}

export async function getAdminSession(): Promise<Session | null> {
  if (!isAdminConfigured() || !secret()) return null;
  const value = (await cookies()).get(cookieName)?.value;
  if (!value) return null;
  const [payload, receivedSignature] = value.split(".");
  if (!payload || !receivedSignature || receivedSignature.length !== signature(payload).length) return null;
  if (!timingSafeEqual(Buffer.from(receivedSignature), Buffer.from(signature(payload)))) return null;
  try { const session = JSON.parse(Buffer.from(payload, "base64url").toString("utf8")) as Session; return session.expiresAt > Date.now() ? session : null; } catch { return null; }
}

export async function clearAdminSession() { (await cookies()).set(cookieName, "", { httpOnly: true, sameSite: "strict", secure: process.env.NODE_ENV === "production", path: "/", maxAge: 0 }); }
