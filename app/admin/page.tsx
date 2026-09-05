import { AdminEditor } from "@/components/admin-editor";
import { AdminLogin } from "@/components/admin-login";
import { getAdminSession, isAdminConfigured } from "@/lib/admin-auth";
import { getSiteContent } from "@/lib/content-store";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const configured = isAdminConfigured();
  const session = await getAdminSession();

  if (!session) return <AdminLogin configured={configured} />;

  return <AdminEditor initialContent={await getSiteContent()} />;
}
