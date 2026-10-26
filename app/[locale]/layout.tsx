import { notFound } from "next/navigation";
import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "../globals.css";
import { locales, isLocale } from "@/lib/i18n/config";
import { site } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL(site.baseUrl),
  title: {
    default: "Trust Production — Event Production & Rental",
    template: "%s | Trust Production",
  },
  description:
    "Event organizer, sound system rental, stage rental, and supporting event production.",
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
};

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

/** Root layout: lives under [locale] so <html lang> follows the route. */
export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }
  return (
    <html lang={locale} className={`${inter.variable} ${jakarta.variable}`}>
      <body className="min-h-screen bg-ink-950 text-mist-100 font-body">
        {children}
      </body>
    </html>
  );
}
