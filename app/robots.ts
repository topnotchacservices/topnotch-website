import type { MetadataRoute } from "next";
import { productionUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/", disallow: ["/admin", "/api/"] }, sitemap: `${productionUrl}/sitemap.xml` };
}
