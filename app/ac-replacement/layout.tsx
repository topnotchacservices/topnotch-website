import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
export const metadata: Metadata = pageMetadata("AC Replacement in South Florida", "Explore AC replacement options for aging or failed systems in South Florida.", "/ac-replacement");
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
