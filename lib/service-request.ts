const services = [
  "AC Repair", "Emergency AC Repair", "AC Installation", "AC Maintenance",
  "Air Duct Cleaning", "Dryer Vent Cleaning", "Indoor Air Quality", "Other",
];

const serviceByPath: Record<string, string> = {
  "/ac-repair": "AC Repair",
  "/ac-diagnostics": "AC Repair",
  "/emergency-ac-repair": "Emergency AC Repair",
  "/ac-installation": "AC Installation",
  "/ac-replacement": "AC Installation",
  "/ac-maintenance": "AC Maintenance",
  "/air-duct-cleaning": "Air Duct Cleaning",
  "/dryer-vent-cleaning": "Dryer Vent Cleaning",
};

export function validService(value: string | string[] | undefined): string {
  return typeof value === "string" && services.includes(value) ? value : "";
}

export function serviceRequestHref(pathname: string): string {
  const service = serviceByPath[pathname.replace(/\/$/, "")];
  return service
    ? `/contact?service=${encodeURIComponent(service)}#request-service`
    : "/contact#request-service";
}
