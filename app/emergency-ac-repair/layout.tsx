import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
export const metadata: Metadata = pageMetadata("Emergency AC Repair in South Florida", "Prompt help for urgent AC breakdowns in South Florida.", "/emergency-ac-repair");
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
