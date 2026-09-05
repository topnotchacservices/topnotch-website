export const siteContent = {
  companyName: "Top Notch AC Services",
  phone: "754-366-0055",
  phoneHref: "tel:7543660055",
  license: "CAC1824888",
  domain: "topnotchdryerventcleaning.com",
  email: "[EMAIL]",
  hero: {
    eyebrow: "SOUTH FLORIDA COMFORT SPECIALISTS",
    headline: "South Florida AC, Air Duct & Dryer Vent Experts",
    description: "Professional AC repair, installation, maintenance, air duct cleaning and dryer vent services for homes and businesses throughout South Florida.",
    video: "/videos/topnotch-van-hero.mp4",
    poster: "/images/hero/topnotch-van-hero.png",
  },
  familyMessage: "We are a proud family-owned and operated company built on faith, family, and community. Top Notch is more than a business to us-it is part of the future we are building for our family and the communities we serve.",
  socialLinks: { facebook: "#", instagram: "#" },
} as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "AC Services", href: "/ac-services" },
  { label: "Air Duct Cleaning", href: "/air-duct-cleaning" },
  { label: "Dryer Vent Cleaning", href: "/dryer-vent-cleaning" },
  { label: "Maintenance", href: "/ac-maintenance" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const homepageServices = [
  { title: "AC Repair", tag: "DIAGNOSTICS & REPAIRS", href: "/ac-repair", color: "from-sky-500 to-blue-800" },
  { title: "AC Installation", tag: "REPLACEMENT & NEW SYSTEMS", href: "/ac-services", color: "from-blue-500 to-[#082544]" },
  { title: "AC Maintenance", tag: "TUNE-UPS & CARE", href: "/ac-maintenance", color: "from-cyan-500 to-blue-700" },
  { title: "Air Duct Cleaning", tag: "CLEANER INDOOR AIR", href: "/air-duct-cleaning", color: "from-sky-600 to-[#123f64]" },
  { title: "Dryer Vent Cleaning", tag: "SAFETY & AIRFLOW", href: "/dryer-vent-cleaning", color: "from-blue-700 to-[#061c32]" },
  { title: "Duct Repair & Installation", tag: "AIRFLOW SOLUTIONS", href: "/ac-services", color: "from-[#176e9b] to-[#082544]" },
] as const;

export const serviceAreas = ["Pompano Beach", "Fort Lauderdale", "Deerfield Beach", "Coconut Creek", "Coral Springs", "Margate", "Oakland Park", "Boca Raton", "Tamarac", "Plantation", "Hollywood", "Parkland"] as const;
