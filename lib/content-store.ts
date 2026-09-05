import "server-only";

import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";
import type { EditableContent } from "@/data/content-types";
import { homepageServices, siteContent } from "@/data/site-content";
import { defaultServiceAreas } from "@/data/service-areas";

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
  serviceAreas: defaultServiceAreas,
  acRepair: {
    heroTitle: "AC Repair in Pompano Beach & Fort Lauderdale",
    heroDescription: "AC not cooling? Our local technicians diagnose and repair residential and commercial AC systems throughout South Florida.",
    symptoms: ["AC Not Cooling", "Warm Air", "AC Won't Turn On", "Water Leaking", "Frozen Coil", "Weak Airflow", "Strange Noise", "Short Cycling", "Thermostat Problems", "High Energy Bills"],
    diagnostics: ["Thermostat", "Electrical components", "Capacitor", "Contactor", "Condenser fan motor", "Compressor", "Refrigerant pressures", "Superheat/subcooling", "Evaporator coil", "Airflow", "Blower wheel", "Drain line", "Temperature split"],
    repairs: ["AC System Diagnostic", "Capacitor Replacement", "Condenser Fan Motor Repair", "Refrigerant Leak Detection", "AC Drain Line Cleaning", "Evaporator Coil Repair/Replacement", "Air Handler Repair", "Thermostat Repair", "Blower Motor Repair", "Compressor Diagnosis"],
    localMessage: "Florida heat and humidity can place heavy demand on air conditioning systems. Coastal conditions may also contribute to corrosion and equipment wear. Top Notch technicians inspect the complete system to identify the actual cause before recommending a repair.",
    faqs: [
      { question: "Why is my AC running but not cooling?", answer: "Several issues can reduce cooling, including airflow restrictions, electrical components, refrigerant concerns or thermostat settings. A complete diagnostic identifies the cause." },
      { question: "Why does my AC keep turning on and off?", answer: "Short cycling can be caused by thermostat, airflow, electrical or equipment issues. Prompt diagnosis helps prevent further wear." },
      { question: "Why is water leaking from my air handler?", answer: "A blocked drain line, frozen coil or drainage concern can cause a leak. Turn the system off if water is accumulating and arrange service." },
      { question: "What causes a frozen evaporator coil?", answer: "Low airflow, dirty components or refrigerant problems can contribute to a frozen coil. The system should be inspected before being restarted." },
      { question: "Should I repair or replace my AC?", answer: "The right choice depends on system age, repair scope, reliability and efficiency. We explain the findings and let you decide." },
      { question: "Do you provide same-day AC repair?", answer: "Same-day availability depends on the schedule and service area. Call us for the fastest available appointment." },
      { question: "Do you repair condo AC systems?", answer: "Yes. We service residential systems, including many condo air handler and cooling configurations." },
      { question: "Do you service commercial HVAC equipment?", answer: "Yes. Top Notch supports residential and commercial HVAC customers throughout our service area." },
    ],
  },
  sections: { reviews: true, acServices: true, airDuct: true, dryerVent: true, family: true, areas: true },
};

function isContent(value: unknown): value is EditableContent {
  if (!value || typeof value !== "object") return false;
  const content = value as Partial<EditableContent>;
  return typeof content.companyName === "string" && typeof content.phone === "string" && typeof content.license === "string" && Array.isArray(content.services) && Array.isArray(content.serviceAreas) && !!content.acRepair && !!content.hero && !!content.seo && !!content.ctas && !!content.sections;
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
