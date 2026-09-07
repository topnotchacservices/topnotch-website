import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
export const metadata: Metadata = pageMetadata("Air Handler Service in South Florida", "Air handler inspection, repair, cleaning, and airflow service in South Florida.", "/air-handler-service");
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
