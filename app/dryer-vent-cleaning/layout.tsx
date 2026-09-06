import type { Metadata } from "next";

const title = "Dryer Vent Cleaning in Pompano Beach | Top Notch AC Services";
const description = "Need dryer vent cleaning in Pompano Beach? Top Notch AC Services removes lint, restores airflow, clears D80/D90 issues, and repairs roof or wall vent flaps.";
const canonical = "https://topnotch-acservices.com/dryer-vent-cleaning";

export const metadata: Metadata = { title, description, alternates: { canonical }, openGraph: { title, description, url: canonical, type: "website" } };

export default function DryerVentCleaningLayout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }