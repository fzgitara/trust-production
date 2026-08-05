import { notFound } from "next/navigation";
import type { Metadata, Viewport } from "next";
import { locales, isLocale, defaultLocale, localeNames } from "@/lib/i18n/config";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
};

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }
  return <>{children}</>;
}

