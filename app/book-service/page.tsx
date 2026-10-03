import { redirect } from "next/navigation";
import { validService } from "@/lib/service-request";

export default async function BookServicePage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string | string[] }>;
}) {
  const service = validService((await searchParams).service);
  redirect(service
    ? `/contact?service=${encodeURIComponent(service)}#request-service`
    : "/contact#request-service");
}
