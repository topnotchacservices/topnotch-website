import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
export const metadata: Metadata = pageMetadata("AC Maintenance and Tune-Ups", "Preventive AC maintenance and tune-ups for reliable South Florida cooling.", "/ac-maintenance");
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
