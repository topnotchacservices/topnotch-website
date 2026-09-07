import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("AC Services in Pompano Beach and Fort Lauderdale", "Top Notch AC Services provides AC repair, installation, replacement, maintenance, and HVAC diagnostics throughout South Florida.", "/ac-services");

export default function AcServicesLayout({ children }: { children: React.ReactNode }) { return children; }
