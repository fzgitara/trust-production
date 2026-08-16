import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { site } from "@/lib/site";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Portfolio from "@/components/Portfolio";
import CtaBand from "@/components/CtaBand";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

interface HomeProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: HomeProps): Promise<Metadata> {
  const { locale } = await params;
  console.log('LOCALE', locale)
  if (!isLocale(locale)) return {};

  const dict = await getDictionary(locale);
  const canonical = new URL(`/${locale}`, site.baseUrl);

  const alternates = Object.fromEntries(
    locales
      .filter((l) => l !== locale)
      .map((l) => [l, new URL(`/${l}`, site.baseUrl).toString()])
  );

  return {
    title: dict.hero.headline,
    description: dict.hero.subheadline,
    alternates: {
      canonical: canonical.toString(),
      languages: alternates as Record<string, string>,
    },
    openGraph: {
      title: dict.hero.headline,
      description: dict.hero.subheadline,
      url: canonical.toString(),
      // TODO: confirm a real OG image (ImageKit ~1200x630)
      images: [],
      locale: locale === "id" ? "id_ID" : "en_US",
      type: "website",
    },
  };
}

export default async function HomePage({ params }: HomeProps) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const dict = await getDictionary(locale);

  return (
    <>
      <Header locale={locale} dictionary={dict} />
      <main id="main">
        <Hero locale={locale} dictionary={dict} />
        <Services locale={locale} dictionary={dict} />
        <WhyUs locale={locale} dictionary={dict} />
        <Portfolio locale={locale} dictionary={dict} />
        <CtaBand locale={locale} dictionary={dict} />
        <Contact locale={locale} dictionary={dict} />
      </main>
      <Footer locale={locale} dictionary={dict} />
    </>
  );
}

