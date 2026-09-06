import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Air Duct Cleaning in South Florida | Top Notch AC Services",
  description:
    "Professional residential, condo, and commercial air duct cleaning in Pompano Beach, Fort Lauderdale, and nearby South Florida communities. Negative-pressure and Rotobrush duct cleaning from Top Notch AC Services.",
};

export default function AirDuctCleaningLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
