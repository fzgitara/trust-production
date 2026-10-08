import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";
import { waLink } from "@/lib/site";
import { homepageImages } from "@/content/images";
import IKImage from "./shared/IKImage";
import Button from "./shared/Button";
import Container from "./shared/Container";

interface Props {
  locale: Locale;
  dictionary: Dictionary;
}

/** Hero with full-bleed LCP image, headline, dual CTAs and a factual trust strip. */
export default function Hero({ locale, dictionary }: Props) {
  const heroImage = homepageImages.hero;

  return (
    <section className="relative flex min-h-[80vh] items-end">
      {/* Background LCP image with subtle scrim for legibility */}
      <div className="absolute inset-0 -z-0 overflow-hidden">
        <IKImage
          publicId={heroImage.publicId}
          alt={dictionary.hero.imageAlt}
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/60 to-ink-950/20" />
      </div>

      <Container className="relative z-10 pb-16 pt-40 sm:pb-24">
        <div className="max-w-2xl">
          <p className="eyebrow mb-4">{dictionary.hero.eyebrow}</p>
          <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tightest text-mist-100 text-balance sm:text-5xl lg:text-6xl">
            {dictionary.hero.headline}
          </h1>
          <p className="mt-5 max-w-xl text-base text-mist-200 sm:text-lg">
            {dictionary.hero.subheadline}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              href={waLink(dictionary.cta.quoteMessage)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {dictionary.cta.getQuoteOnWhatsApp}
            </Button>
            <Button href={`/${locale}#events`} variant="secondary">
              {dictionary.cta.seeRecentEvents}
            </Button>
          </div>

          {/* Trust strip — only verified/TODO-safe values */}
          <div className="mt-12 border-t hairline pt-6">
            <p className="text-xs uppercase tracking-[0.2em] text-mist-300">
              {dictionary.trustStrip.label}
            </p>
            <dl className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {dictionary.hero.trustItems.map((item) => (
                <div key={item.label}>
                  <dt className="sr-only">{item.label}</dt>
                  <dd className="font-display text-2xl font-bold text-signal-400">
                    {item.value}
                  </dd>
                  <dd className="mt-1 text-sm text-mist-200">{item.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}

