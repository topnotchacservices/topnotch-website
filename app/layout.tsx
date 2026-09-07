import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ContentProvider } from "@/components/content-provider";
import { getSiteContent } from "@/lib/content-store";
import "./globals.css";

const productionUrl = "https://www.topnotchdryerventcleaning.com";

export const dynamic = "force-dynamic";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const content = await getSiteContent();
  return { metadataBase: new URL(productionUrl), title: { default: content.seo.title, template: `%s | ${content.companyName}` }, description: content.seo.description, alternates: { canonical: "/" }, openGraph: { type: "website", siteName: content.companyName, title: content.seo.title, description: content.seo.description, url: productionUrl }, twitter: { card: "summary_large_image", title: content.seo.title, description: content.seo.description } };
}

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const content = await getSiteContent();
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col"><ContentProvider content={content}>{children}</ContentProvider></body>
    </html>
  );
}
