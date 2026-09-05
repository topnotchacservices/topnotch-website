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
  serviceAreas: string[];
  sections: { reviews: boolean; acServices: boolean; airDuct: boolean; dryerVent: boolean; family: boolean; areas: boolean };
};
