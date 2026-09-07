import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
export const metadata: Metadata = pageMetadata("AC Repair in South Florida", "Professional AC repair and diagnostics for South Florida homes and businesses.", "/ac-repair");
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
