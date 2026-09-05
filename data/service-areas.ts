import type { ServiceArea } from "@/data/content-types";

const priorityAreas = new Set(["Pompano Beach", "Fort Lauderdale", "Deerfield Beach", "Coconut Creek", "Coral Springs", "Boca Raton", "Margate", "Oakland Park", "Tamarac", "Plantation", "Hollywood", "Davie", "Pembroke Pines", "Weston", "Miramar"]);
const groups: Record<ServiceArea["region"], string[]> = {
  "North Broward": ["Pompano Beach", "Deerfield Beach", "Coconut Creek", "Coral Springs", "Margate", "Oakland Park", "Lauderdale-by-the-Sea", "Lighthouse Point", "Parkland", "Hillsboro Beach", "Sea Ranch Lakes", "North Lauderdale", "Lauderhill", "Lauderdale Lakes"],
  "Central Broward": ["Fort Lauderdale", "Tamarac", "Sunrise", "Plantation", "Wilton Manors"],
  "South Broward": ["Hollywood", "Davie", "Cooper City", "Pembroke Pines", "Weston", "Miramar", "Dania Beach", "Hallandale Beach", "Southwest Ranches", "Pembroke Park", "West Park"],
  "Palm Beach County": ["Boca Raton", "Delray Beach", "Boynton Beach", "Highland Beach", "Lake Worth Beach", "Greenacres", "Palm Beach Gardens", "Wellington", "Lake Worth Corridor"],
  "Miami-Dade / Southern Service Area": ["North Miami Beach"],
};
const slugify = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const priorityIntros: Record<string, string> = {
  "Pompano Beach": "From waterfront homes to local businesses, Top Notch AC Services brings thorough HVAC diagnostics, indoor-air care and dryer vent service to Pompano Beach.",
  "Fort Lauderdale": "Fort Lauderdale property owners rely on prompt, professional cooling and airflow service. Our team supports homes, condos and commercial spaces across the city.",
  "Deerfield Beach": "Top Notch serves Deerfield Beach with practical solutions for AC performance, duct cleanliness and dryer vent airflow in coastal South Florida conditions.",
  "Coconut Creek": "For Coconut Creek homeowners and businesses, we provide attentive AC repair, maintenance and indoor-air services focused on reliable everyday comfort.",
  "Coral Springs": "Our Coral Springs service visits start with careful diagnostics and clear recommendations, whether you need AC service, duct cleaning or dryer vent support.",
  "Boca Raton": "Top Notch provides Boca Raton homes, condos and businesses with detailed cooling, air-duct and dryer-vent service from a local South Florida team.",
  "Margate": "Margate customers can count on Top Notch for straightforward AC repairs, planned maintenance and airflow services that respect their property and time.",
  "Oakland Park": "We help Oakland Park property owners keep cooling systems, ductwork and dryer vents operating safely and efficiently through demanding South Florida weather.",
  "Tamarac": "Tamarac families and businesses receive honest guidance and professional service for AC concerns, cleaner indoor air and dryer vent performance.",
  "Plantation": "Top Notch delivers Plantation customers a complete approach to comfort: cooling diagnostics, dependable repairs and practical preventative care.",
  "Hollywood": "For Hollywood homes, condos and commercial properties, our team offers responsive HVAC, air-duct and dryer-vent service with clear communication.",
  "Davie": "Davie property owners can call Top Notch for professional cooling support, indoor-air services and dryer vent work tailored to their system and property.",
  "Pembroke Pines": "Top Notch serves Pembroke Pines with full-service AC care and airflow solutions designed around comfort, reliability and respect for your space.",
  "Weston": "Weston homeowners and businesses receive detailed system checks and clear service recommendations for AC, air ducts and dryer vents.",
  "Miramar": "Miramar customers can turn to Top Notch for thorough AC diagnostics, repair options and clean-air services from a local, family-owned team.",
};

export const defaultServiceAreas: ServiceArea[] = Object.entries(groups).flatMap(([region, names]) => names.map((name) => ({
  name,
  slug: slugify(name),
  region: region as ServiceArea["region"],
  enabled: true,
  cityTitle: `AC Repair, Air Duct & Dryer Vent Service in ${name}`,
  metaTitle: `AC Repair in ${name} | Top Notch AC Services`,
  metaDescription: `AC repair, installation, maintenance, air duct cleaning and dryer vent service in ${name}, Florida from Top Notch AC Services.`,
  intro: priorityIntros[name] ?? `Top Notch AC Services serves homes and businesses in ${name} with dependable AC, air duct and dryer vent service.`,
  services: ["AC Repair", "AC Installation", "AC Maintenance", "Air Duct Cleaning", "Dryer Vent Cleaning"],
  priority: priorityAreas.has(name),
})));

export const regionOrder = ["North Broward", "Central Broward", "South Broward", "Palm Beach County", "Miami-Dade / Southern Service Area"] as const;
