import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
export const metadata: Metadata = pageMetadata("South Florida Service Areas", "Top Notch provides AC, air duct, and dryer vent service across Broward County and nearby South Florida communities.", "/service-areas");
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
