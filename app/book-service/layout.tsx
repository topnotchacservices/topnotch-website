import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
export const metadata: Metadata = pageMetadata("Book HVAC Service", "Request AC, air duct, dryer vent, and indoor air quality service from Top Notch in South Florida.", "/book-service");
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
