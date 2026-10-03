import ContactForm from "./contact-form";
import { validService } from "@/lib/service-request";

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string | string[] }>;
}) {
  const { service } = await searchParams;
  const initialService = validService(service);
  return <ContactForm key={initialService} initialService={initialService} />;
}
