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
  acHub: {
    heroTitle: "Professional AC Services in Pompano Beach, Fort Lauderdale & South Florida",
    heroDescription: "From emergency AC repair and system diagnostics to installation, replacement, maintenance and indoor comfort solutions, Top Notch AC Services provides dependable air conditioning service for homes, condos and businesses throughout South Florida.",
    heroVideo: "/videos/ac-services-hero.mp4",
    heroPoster: "/images/ac/ac-services-hero.png",
    heroMedia: { fit: "cover", position: "center", autoplay: true, loop: true, controls: false },
    problems: ["AC Not Cooling", "Warm Air From Vents", "AC Won't Turn On", "Weak Airflow", "Water Leaking From Air Handler", "Frozen Evaporator Coil", "AC Short Cycling", "Strange AC Noises", "Thermostat Problems", "High Energy Bills", "Outdoor Unit Not Running", "AC Running Constantly"],
    serviceCards: [
      { title: "AC Repair", description: "Professional diagnosis and repair for systems that are not cooling, failing to start, leaking, cycling improperly or experiencing electrical, refrigerant or airflow problems.", href: "/ac-repair", image: "/images/ac/ac-repair.jpg", active: true },
      { title: "Emergency AC Repair", description: "Fast service for urgent cooling problems and unexpected AC breakdowns when your system stops working properly.", href: "/emergency-ac-repair", image: "/images/ac/emergency-ac-repair.jpg", active: true },
      { title: "AC Installation", description: "Professional installation of new central air conditioning systems with careful setup, connections and startup testing.", href: "/ac-installation", image: "/images/ac/ac-installation.jpg", active: true },
      { title: "AC Replacement", description: "Replacement options for aging, inefficient or failed equipment with properly selected matched systems.", href: "/ac-replacement", image: "/images/ac/ac-replacement.jpg", active: true },
      { title: "AC Maintenance & Tune-Ups", description: "Preventive maintenance for system operation, airflow, electrical components, drainage and cooling performance.", href: "/ac-maintenance", image: "/images/ac/ac-maintenance.jpg", active: true },
      { title: "AC System Diagnostics", description: "Complete diagnostics for electrical, airflow, refrigerant, thermostat and mechanical cooling concerns.", href: "/ac-diagnostics", image: "/images/ac/ac-diagnostics.jpg", active: true },
      { title: "Air Handler Service", description: "Inspection, repair, cleaning and replacement for blower, drainage, coil, electrical and airflow problems.", href: "/air-handler-service", image: "/images/ac/air-handler-service.jpg", active: true },
      { title: "Ductless Mini-Split Services", description: "Installation, maintenance and repair for ductless mini-split air conditioning systems.", href: "/ductless-mini-split", image: "/images/ac/ductless-mini-split.jpg", active: true },
      { title: "Thermostat Services", description: "Thermostat installation, replacement and troubleshooting for compatible HVAC systems.", href: "/thermostat-services", image: "/images/ac/thermostat-services.jpg", active: true },
    ],
    repairs: ["AC Capacitor Replacement", "Condenser Fan Motor Repair", "Blower Motor Repair", "Contactor Replacement", "Refrigerant Leak Detection", "Evaporator Coil Repair", "Evaporator Coil Replacement", "AC Drain Line Cleaning", "Air Handler Repair", "Thermostat Repair", "Compressor Diagnosis", "Electrical Troubleshooting", "Float Switch Problems", "Frozen Coil Diagnosis", "Condenser Service", "Airflow Problems"],
    diagnostics: ["Thermostat operation", "Supply and return temperature", "Temperature split", "Airflow", "Air filter condition", "Blower operation", "Evaporator coil", "Condenser coil", "Capacitor", "Contactor", "Electrical connections", "Compressor operation", "Condenser fan motor", "Refrigerant pressures", "Superheat", "Subcooling", "Condensate drain line", "Drain pan", "Safety switches", "Visible refrigerant leaks", "Overall system performance"],
    maintenance: ["System inspection", "Coil inspection", "Drain line inspection/cleaning", "Refrigerant performance check", "Electrical inspection", "Capacitor check", "Blower inspection", "Thermostat check", "Temperature testing", "System operation testing"],
    installation: ["Central AC Installation", "AC Replacement", "Air Handler Installation", "Condenser Installation", "Heat Pump Systems", "Ductless Mini-Splits", "Thermostat Upgrades", "Duct/Return Evaluation"],
    faqs: [
      { question: "Why is my AC running but not cooling?", answer: "Airflow problems, dirty coils, electrical failures, refrigerant-related issues or component problems can all affect cooling. A diagnostic inspection identifies the cause." },
      { question: "Why does my AC keep turning on and off?", answer: "Short cycling may be related to thermostat problems, airflow restrictions, electrical issues, equipment sizing or other system conditions." },
      { question: "Why is water leaking from my air handler?", answer: "Common causes include a clogged condensate drain, drainage problems, frozen coils or issues with the drain pan or safety controls." },
      { question: "What causes an AC coil to freeze?", answer: "Restricted airflow, dirty filters, blower problems, coil buildup and refrigerant-related issues are among the possible causes." },
      { question: "How often should AC maintenance be performed?", answer: "Maintenance frequency depends on usage and system condition. In South Florida, regular inspection is especially important because AC systems operate heavily much of the year." },
      { question: "Should I repair or replace my AC?", answer: "The decision depends on system age, condition, repair cost, efficiency and the type of failure. Top Notch can explain the available options." },
      { question: "Do you service condos?", answer: "Yes. Top Notch provides HVAC service for homes, condos and other accessible residential equipment." },
      { question: "Do you provide commercial HVAC service?", answer: "Yes. Top Notch provides HVAC service for many commercial properties and businesses." },
    ],
  },
  acRepair: {
    heroTitle: "AC Repair in Pompano Beach, Fort Lauderdale & South Florida",
    heroDescription: "Is your AC not cooling, leaking water, making unusual noises, or refusing to turn on? Top Notch AC Services provides professional AC diagnostics and repair for homes, condos, and businesses throughout South Florida.",
    heroImage: "/images/ac/ac-repair-hero.jpg",
    finalImage: "/images/about/branded-van.jpg",
    symptoms: ["AC Not Cooling", "AC Won't Turn On", "Weak Airflow", "Water Leaking", "Frozen Coil", "AC Short Cycling"],
    diagnostics: ["Thermostat", "Electrical components", "Capacitor", "Contactor", "Condenser fan motor", "Refrigerant pressures", "Evaporator coil", "Airflow", "Drain line"],
    repairs: ["AC System Diagnostics", "Capacitor Replacement", "Condenser Fan Motor Repair", "Refrigerant Leak Detection", "Drain Line Cleaning", "Air Handler Repair", "Thermostat Repair", "Evaporator Coil Repair"],
    localMessage: "Florida heat and humidity can place heavy demand on air conditioning systems. Coastal conditions may also contribute to corrosion and equipment wear. Top Notch technicians inspect the complete system to identify the actual cause before recommending a repair.",
    faqs: [
      { question: "Why is my AC running but not cooling?", answer: "Possible causes include airflow problems, dirty coils, electrical failures, refrigerant issues, or component failure." },
      { question: "Why is my AC leaking water?", answer: "A clogged drain line, frozen coil, drain pan issue, or drainage problem may be causing the leak." },
      { question: "Why does my AC keep turning on and off?", answer: "Short cycling may be caused by thermostat problems, airflow restrictions, electrical issues, or other system conditions." },
      { question: "Should I repair or replace my AC?", answer: "It depends on system age, condition, repair cost, and the type of failure. Top Notch can inspect the system and explain the options." },
    ],
  },
  sections: { reviews: true, acServices: true, airDuct: true, dryerVent: true, family: true, areas: true },
};

function isContent(value: unknown): value is EditableContent {
  if (!value || typeof value !== "object") return false;
  const content = value as Partial<EditableContent>;
  return typeof content.companyName === "string" && typeof content.phone === "string" && typeof content.license === "string" && Array.isArray(content.services) && Array.isArray(content.serviceAreas) && !!content.acHub && !!content.acRepair && !!content.hero && !!content.seo && !!content.ctas && !!content.sections;
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
