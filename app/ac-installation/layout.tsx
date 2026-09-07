import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
export const metadata: Metadata = pageMetadata("AC Installation in South Florida", "Right-sized AC installation for South Florida homes and businesses.", "/ac-installation");
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
