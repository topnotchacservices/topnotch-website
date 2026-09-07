import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
export const metadata: Metadata = pageMetadata("Contact Top Notch AC Services", "Contact Top Notch for professional AC, air duct, and dryer vent service throughout South Florida.", "/contact");
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
