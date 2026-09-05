import "server-only";

import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";
import type { EditableContent } from "@/data/content-types";
import { homepageServices, serviceAreas, siteContent } from "@/data/site-content";

export type { EditableContent } from "@/data/content-types";

const storeDirectory = path.join(process.cwd(), ".topnotch-content");
const storeFile = path.join(storeDirectory, "site-content.json");

export const defaultContent: EditableContent = {
  companyName: siteContent.companyName,
  phone: siteContent.phone,
  license: siteContent.license,
  domain: siteContent.domain,
  email: siteContent.email,
  hero: siteContent.hero,
  familyMessage: siteContent.familyMessage,
  socialLinks: siteContent.socialLinks,
  seo: { title: "Top Notch AC Services | South Florida HVAC Experts", description: "AC, air duct and dryer vent services for South Florida homes and businesses." },
  ctas: { primary: "Call Now", secondary: "Book Service" },
  services: homepageServices.map((service) => ({ ...service, description: "Professional service from a local South Florida team." })),
  serviceAreas: [...serviceAreas],
  sections: { reviews: true, acServices: true, airDuct: true, dryerVent: true, family: true, areas: true },
};

function isContent(value: unknown): value is EditableContent {
  if (!value || typeof value !== "object") return false;
  const content = value as Partial<EditableContent>;
  return typeof content.companyName === "string" && typeof content.phone === "string" && typeof content.license === "string" && Array.isArray(content.services) && Array.isArray(content.serviceAreas) && !!content.hero && !!content.seo && !!content.ctas && !!content.sections;
}

export async function getSiteContent(): Promise<EditableContent> {
  try {
    const stored = JSON.parse(await readFile(storeFile, "utf8")) as unknown;
    return isContent(stored) ? stored : defaultContent;
  } catch {
    return defaultContent;
  }
}

export async function saveSiteContent(content: EditableContent) {
  await mkdir(storeDirectory, { recursive: true });
  const temporaryFile = `${storeFile}.tmp`;
  await writeFile(temporaryFile, `${JSON.stringify(content, null, 2)}\n`, "utf8");
  await rename(temporaryFile, storeFile);
}
