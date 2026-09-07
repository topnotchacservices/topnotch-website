import type { MetadataRoute } from "next";
import { getSiteContent } from "@/lib/content-store";
import { productionUrl } from "@/lib/seo";

const publicRoutes = ["", "/about", "/ac-services", "/ac-installation", "/ac-maintenance", "/ac-repair", "/air-duct-cleaning", "/dryer-vent-cleaning", "/book-service", "/contact", "/service-areas"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const content = await getSiteContent();
  const areaRoutes = content.serviceAreas.filter((area) => area.enabled).map((area) => `/service-areas/${area.slug}`);
  return [...new Set([...publicRoutes, ...areaRoutes])].map((path) => ({ url: `${productionUrl}${path}`, changeFrequency: "weekly", priority: path === "" ? 1 : 0.7 }));
}
