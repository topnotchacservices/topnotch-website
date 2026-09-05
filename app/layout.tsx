import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ContentProvider } from "@/components/content-provider";
import { getSiteContent } from "@/lib/content-store";
import "./globals.css";

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
  return { title: content.seo.title, description: content.seo.description };
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
