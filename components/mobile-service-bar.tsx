"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSiteContent } from "@/components/content-provider";
import { serviceRequestHref } from "@/lib/service-request";

export function MobileServiceBar() {
  const pathname = usePathname();
  const content = useSiteContent();
  if (pathname.startsWith("/admin")) return null;

  return (
    <>
      <div aria-hidden="true" className="h-[calc(5rem+env(safe-area-inset-bottom))] md:hidden" />
      <nav aria-label="Quick service actions" className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white px-4 pt-3 pb-[calc(.75rem+env(safe-area-inset-bottom))] shadow-lg md:hidden">
        <div className="mx-auto grid max-w-lg grid-cols-2 gap-3">
          <Link href={`tel:${content.phone.replace(/\D/g, "")}`} className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#082544] px-3 text-sm font-extrabold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">
            Call Top Notch
          </Link>
          <Link href={serviceRequestHref(pathname)} className="inline-flex min-h-12 items-center justify-center rounded-full bg-sky-600 px-3 text-sm font-extrabold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">
            Request Service
          </Link>
        </div>
      </nav>
    </>
  );
}
