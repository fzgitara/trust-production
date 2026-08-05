import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";
import { homepageImages } from "@/content/images";
import IKImage from "./shared/IKImage";
import Section from "./shared/Section";
import Eyebrow from "./shared/Eyebrow";
import Container from "./shared/Container";

interface Props {
  locale: Locale;
  dictionary: Dictionary;
}

/**
 * Why Choose Us — compact split trust list beside a real photo.
 * Only confirmed points should be displayed prominently; unconfirmed points
 * are still shown (factually worded) but remain flagged in the content layer.
 */
export default function WhyUs({ locale, dictionary }: Props) {
  void locale;
  const aboutImage = homepageImages.about;

  return (
    <Section tone="light" id="why-us">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Visual */}
        <div className="relative aspect-square overflow-hidden rounded-2xl lg:aspect-[4/5]">
          <IKImage
            publicId={aboutImage.publicId}
            alt={dictionary.whyUs.imageAlt}
            fill
            loading="lazy"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center">
          <Eyebrow className="text-signal-600">{dictionary.whyUs.eyebrow}</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            {dictionary.whyUs.heading}
          </h2>
          <p className="mt-4 text-ink-800">{dictionary.whyUs.intro}</p>

          <ul className="mt-8 flex flex-col gap-5">
            {dictionary.whyUs.points.map((point) => (
              <li key={point.title} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-signal-500"
                />
                <div>
                  <h3 className="font-semibold text-ink-900">{point.title}</h3>
                  <p className="mt-0.5 text-sm text-ink-800">{point.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

