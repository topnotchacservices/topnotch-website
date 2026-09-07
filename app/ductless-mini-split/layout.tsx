import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
export const metadata: Metadata = pageMetadata("Ductless Mini-Split Services", "Ductless mini-split installation, maintenance, and repair in South Florida.", "/ductless-mini-split");
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
