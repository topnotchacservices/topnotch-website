import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
export const metadata: Metadata = pageMetadata("Dryer Vent Cleaning in South Florida", "Professional dryer vent cleaning, inspection, airflow testing, and repair in South Florida.", "/dryer-vent-cleaning");
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
