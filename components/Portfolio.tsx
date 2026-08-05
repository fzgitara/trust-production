import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";
import { featuredEvents } from "@/content/events";
import IKImage from "./shared/IKImage";
import Section from "./shared/Section";
import Eyebrow from "./shared/Eyebrow";
import Button from "./shared/Button";

interface Props {
  locale: Locale;
  dictionary: Dictionary;
}

/**
 * Featured Events / Portfolio preview.
 *
 * Iterates the typed event list (`content/events.ts`). Every event and its
 * cover must be real & verified before launch — unconfirmed rows stay visible
 * as TODO placeholders so the layout can be reviewed.
 *
 * Future route: /[locale]/events, /[locale]/events/[slug].
 */
export default function Portfolio({ locale, dictionary }: Props) {
  const events = featuredEvents;

  // Format localized date (dd MMM yyyy).
  const formatDate = (iso: string) =>
    new Intl.DateTimeFormat(locale === "id" ? "id-ID" : "en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(new Date(`${iso}T00:00:00`));

  return (
    <Section id="events">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <Eyebrow>{dictionary.portfolio.eyebrow}</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-mist-100 sm:text-4xl">
            {dictionary.portfolio.heading}
          </h2>
          <p className="mt-4 text-mist-200">{dictionary.portfolio.intro}</p>
        </div>
        <Button href={`/${locale}#contact`} variant="secondary">
          {dictionary.portfolio.ctaLabel}
        </Button>
      </div>

      {events.length > 0 ? (
        /* Populated event grid — driven by content/events.ts. */
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <article
              key={event.slug}
              className="group overflow-hidden rounded-2xl bg-ink-800"
            >
              <div className="relative aspect-[4/3]">
                <IKImage
                  publicId={event.cover}
                  alt={event.name}
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-opacity group-hover:opacity-90"
                />
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold uppercase tracking-wide text-signal-400">
                  {dictionary.misc.eventTypeTags[event.type]}
                </span>
                <h3 className="mt-2 font-display text-lg font-bold text-mist-100">
                  {event.name}
                </h3>
                <p className="mt-1 text-sm text-mist-300">
                  {event.venue}, {event.city}
                </p>
                <time
                  dateTime={event.date}
                  className="mt-1 block text-sm text-mist-400"
                >
                  {formatDate(event.date)}
                </time>
              </div>
            </article>
          ))}
        </div>
      ) : (
        /* Factual placeholder — no fabricated portfolio content. */
        <div className="mt-12 rounded-2xl border hairline bg-ink-900 p-10 text-center sm:p-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-mist-300">
            {dictionary.portfolio.placeholder.heading}
          </p>
          <p className="mx-auto mt-3 max-w-md text-mist-200">
            {dictionary.portfolio.placeholder.text}
          </p>
        </div>
      )}
    </Section>
  );
}
