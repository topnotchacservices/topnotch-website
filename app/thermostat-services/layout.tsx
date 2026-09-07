import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
export const metadata: Metadata = pageMetadata("Thermostat Services in South Florida", "Thermostat installation, replacement, and troubleshooting in South Florida.", "/thermostat-services");
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
