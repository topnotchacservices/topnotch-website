import type { Metadata } from "next";

const title = "Contact Top Notch AC Services | 24/7 AC Repair in Pompano Beach";
const description = "Contact Top Notch AC Services for 24/7 emergency AC repair, HVAC service, air duct cleaning, and dryer vent cleaning in Pompano Beach and South Florida. Call or request service online today.";
const canonical = "https://topnotch-acservices.com/contact";

export const metadata: Metadata = { title, description, alternates: { canonical }, openGraph: { title, description, url: canonical, type: "website" } };

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }