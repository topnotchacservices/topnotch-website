import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("AC Diagnostics in South Florida", "Get clear AC diagnostics for cooling, airflow, electrical, thermostat, drainage, and refrigerant concerns.", "/ac-diagnostics");

export default function AcDiagnosticsLayout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
