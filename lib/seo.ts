import type { Metadata } from "next";

export const productionUrl = "https://www.topnotchdryerventcleaning.com";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const canonical = `${productionUrl}${path}`;
  return { title, description, alternates: { canonical }, openGraph: { type: "website", title, description, url: canonical }, twitter: { card: "summary_large_image", title, description } };
}
