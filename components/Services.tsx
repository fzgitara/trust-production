import { homepageImages } from "@/content/images";
import IKImage from "./shared/IKImage";
import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";
import Section from "./shared/Section";
import Eyebrow from "./shared/Eyebrow";

interface Props {
  locale: Locale;
  dictionary: Dictionary;
}

/**
 * Services — editorial, alternating image/text rows (not a generic grid).
 * Future route: /[locale]/services/[category].
 */
export default function Services({ locale, dictionary }: Props) {
  const serviceImages = homepageImages.services;

  return (
    <Section id="services">
      <div className="max-w-2xl">
        <Eyebrow>{dictionary.services.eyebrow}</Eyebrow>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-mist-100 sm:text-4xl">
          {dictionary.services.heading}
        </h2>
        <p className="mt-4 text-mist-200">{dictionary.services.intro}</p>
      </div>

      <div className="mt-16 flex flex-col gap-20">
        {dictionary.services.items.map((service, i) => {
          const image = serviceImages[i];
          const reversed = i % 2 === 1;
          return (
            <article
              key={service.id}
              className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                reversed ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {image ? (
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-ink-800">
                  <IKImage
                    publicId={image.publicId}
                    alt={service.imageAlt}
                    fill
                    loading="lazy"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ) : null}

              <div className={reversed ? "lg:order-1" : ""}>
                <div className="text-sm font-medium text-signal-400">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-2 font-display text-2xl font-bold text-mist-100">
                  {service.title}
                </h3>
                <p className="mt-3 text-mist-200">{service.description}</p>

                {/* Future: link to detail page /[locale]/services/[id] */}
                <a
                  href={`/${locale}/services/${service.id}`}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-signal-400 hover:text-signal-300"
                >
                  {dictionary.cta.enquire}
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}

