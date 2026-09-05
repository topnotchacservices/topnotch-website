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
      { title: "AC Repair", description: "Professional diagnosis and repair for systems that are not cooling, failing to start, leaking, cycling improperly or experiencing electrical, refrigerant or airflow problems.", href: "/ac-repair" },
      { title: "Emergency AC Repair", description: "Fast service for urgent cooling problems and unexpected AC breakdowns when your system stops working properly.", href: "/ac-repair" },
      { title: "AC Installation", description: "Professional installation of new central air conditioning systems with careful setup, connections and startup testing.", href: "/ac-installation" },
      { title: "AC Replacement", description: "Replacement options for aging, inefficient or failed equipment with properly selected matched systems.", href: "/ac-installation" },
      { title: "AC Maintenance & Tune-Ups", description: "Preventive maintenance for system operation, airflow, electrical components, drainage and cooling performance.", href: "/ac-maintenance" },
      { title: "AC System Diagnostics", description: "Complete diagnostics for electrical, airflow, refrigerant, thermostat and mechanical cooling concerns.", href: "/ac-repair" },
      { title: "Air Handler Service", description: "Inspection, repair, cleaning and replacement for blower, drainage, coil, electrical and airflow problems.", href: "/ac-repair" },
      { title: "Ductless Mini-Split Services", description: "Installation, maintenance and repair for ductless mini-split air conditioning systems.", href: "/ac-installation" },
      { title: "Thermostat Services", description: "Thermostat installation, replacement and troubleshooting for compatible HVAC systems.", href: "/ac-repair" },
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
