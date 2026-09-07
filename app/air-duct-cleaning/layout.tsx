import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("Air Duct Cleaning in South Florida", "Professional residential, condo, and commercial air duct cleaning in Pompano Beach, Fort Lauderdale, and nearby South Florida communities.", "/air-duct-cleaning");

export default function AirDuctCleaningLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
