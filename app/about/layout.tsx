import type { Metadata } from "next";

const title = "About Top Notch AC Services | Family-Owned HVAC in Pompano Beach";
const description = "Meet Top Notch AC Services, a family-owned, licensed and insured HVAC company serving Pompano Beach and South Florida with AC repair, installation, indoor-air, air-duct and dryer-vent services.";
const canonical = "https://topnotch-acservices.com/about";

export const metadata: Metadata = { title, description, alternates: { canonical }, openGraph: { title, description, url: canonical, type: "website" } };

export default function AboutLayout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }