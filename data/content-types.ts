export type EditableContent = {
  companyName: string;
  phone: string;
  license: string;
  domain: string;
  email: string;
  hero: { eyebrow: string; headline: string; description: string; video: string; poster: string };
  familyMessage: string;
  socialLinks: { facebook: string; instagram: string };
  seo: { title: string; description: string };
  ctas: { primary: string; secondary: string };
  services: { title: string; tag: string; description: string; href: string; color: string }[];
  serviceAreas: ServiceArea[];
  acHub: { heroTitle: string; heroDescription: string; heroVideo: string; heroPoster: string; heroMedia: { fit: "cover" | "contain"; position: "center" | "left" | "right"; autoplay: boolean; loop: boolean; controls: boolean }; problems: string[]; serviceCards: { title: string; description: string; href: string; image: string; active: boolean }[]; repairs: string[]; diagnostics: string[]; maintenance: string[]; installation: string[]; faqs: { question: string; answer: string }[] };
  acRepair: { heroTitle: string; heroDescription: string; symptoms: string[]; diagnostics: string[]; repairs: string[]; localMessage: string; faqs: { question: string; answer: string }[] };
  sections: { reviews: boolean; acServices: boolean; airDuct: boolean; dryerVent: boolean; family: boolean; areas: boolean };
};

export type ServiceArea = {
  name: string;
  slug: string;
  region: "North Broward" | "Central Broward" | "South Broward" | "Palm Beach County" | "Miami-Dade / Southern Service Area";
  enabled: boolean;
  cityTitle: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  services: string[];
  priority: boolean;
};
