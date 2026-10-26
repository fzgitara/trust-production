import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { site } from "@/lib/site";
import { localeAlternates, ogImage } from "@/lib/seo";
import { homepageImages } from "@/content/images";
import JsonLd from "@/components/shared/JsonLd";

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
  const alternates = localeAlternates(locale);

  return {
    title: dict.hero.headline,
    description: dict.hero.subheadline,
    alternates,
    openGraph: {
      title: dict.hero.headline,
      description: dict.hero.subheadline,
      url: alternates.canonical,
      images: [ogImage(homepageImages.hero.publicId)],
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

  // Only confirmed facts; address/hours are omitted until the business confirms them.
  const businessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    url: `${site.baseUrl}/${locale}`,
    description: dict.hero.subheadline,
    image: ogImage(homepageImages.hero.publicId).url,
    email: site.email,
    telephone: `+${site.whatsappNumber}`,
    sameAs: site.social.instagram ? [site.social.instagram] : [],
    inLanguage: locale,
  };

  return (
    <>
      <JsonLd data={businessJsonLd} />
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

