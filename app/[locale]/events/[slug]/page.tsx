import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { waLink } from "@/lib/site";
import { imagekitUrl } from "@/lib/imagekit";
import { events, eventPhotos, getEvent } from "@/content/events";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/shared/Section";
import Eyebrow from "@/components/shared/Eyebrow";
import Button from "@/components/shared/Button";
import IKImage from "@/components/shared/IKImage";
import EventGallery from "@/components/EventGallery";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    events.map((event) => ({ locale, slug: event.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const event = getEvent(slug);
  if (!isLocale(locale) || !event) return {};

  const title = event.name; // the layout title template appends the site name
  const description = `${event.venue}, ${event.city}`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [imagekitUrl(event.cover, ["w-1200"])],
      locale: locale === "id" ? "id_ID" : "en_US",
      type: "website",
    },
  };
}

/** Event detail: cover, facts, what we provided, and the photo gallery. */
export default async function EventDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  const event = getEvent(slug);
  if (!isLocale(locale) || !event) notFound();

  const dict = await getDictionary(locale);
  const date = new Intl.DateTimeFormat(locale === "id" ? "id-ID" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${event.date}T00:00:00`));
  const photos = eventPhotos(event);

  return (
    <>
      <Header locale={locale} dictionary={dict} />
      <main id="main">
        <Section className="pt-32 sm:pt-36">
          <Link
            href={`/${locale}#events`}
            className="text-sm text-mist-300 hover:text-signal-400"
          >
            ← {dict.eventDetail.back}
          </Link>

          <div className="mt-6 max-w-2xl">
            <Eyebrow>{dict.misc.eventTypeTags[event.type]}</Eyebrow>
            <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-mist-100 sm:text-5xl">
              {event.name}
            </h1>
            <p className="mt-4 text-mist-200">
              {event.venue}, {event.city}
            </p>
            <time dateTime={event.date} className="mt-1 block text-mist-400">
              {date}
            </time>
          </div>

          <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl bg-ink-800">
            <IKImage
              publicId={event.cover}
              alt={event.name}
              fill
              priority
              sizes="(min-width: 1024px) 1100px, 100vw"
              className="object-cover"
            />
          </div>

          {event.provides && (
            <div className="mt-12 max-w-2xl">
              <h2 className="font-display text-xl font-bold text-mist-100">
                {dict.eventDetail.provides}
              </h2>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-mist-200">
                {event.provides.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {photos.length > 0 && (
            <div className="mt-12">
              <h2 className="font-display text-xl font-bold text-mist-100">
                {dict.eventDetail.gallery}
              </h2>
              <EventGallery
                photos={photos}
                eventName={event.name}
                closeLabel={dict.eventDetail.close}
              />
            </div>
          )}

          <div className="mt-14">
            <Button
              href={waLink(dict.cta.quoteMessage)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {dict.ctaBand.primaryLabel}
            </Button>
          </div>
        </Section>
      </main>
      <Footer locale={locale} dictionary={dict} />
    </>
  );
}
