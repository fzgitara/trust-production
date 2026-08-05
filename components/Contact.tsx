import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";
import { site, waLink } from "@/lib/site";
import Section from "./shared/Section";
import Eyebrow from "./shared/Eyebrow";
import ContactForm from "./ContactForm";

interface Props {
  locale: Locale;
  dictionary: Dictionary;
}

/** Contact section — primary WhatsApp deep link + direct info + form. */
export default function Contact({ locale, dictionary }: Props) {
  const hasContact = !!(site.email || site.phone || site.serviceArea);

  return (
    <Section id="contact">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Intro + primary WhatsApp */}
        <div>
          <Eyebrow>{dictionary.contact.eyebrow}</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-mist-100 sm:text-4xl">
            {dictionary.contact.heading}
          </h2>
          <p className="mt-4 text-mist-200">{dictionary.contact.intro}</p>

          <a
            href={waLink(dictionary.contact.whatsappLabel)}
            className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-signal-500 px-6 py-4 text-base font-semibold text-ink-950 transition-colors hover:bg-signal-400"
          >
            <WhatsAppIcon />
            {dictionary.contact.whatsappLabel}
          </a>

          {/* Direct info */}
          <div className="mt-10">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-mist-300">
              {dictionary.contact.directTitle}
            </h3>

            {hasContact ? (
              <ul className="mt-4 flex flex-col gap-3 text-mist-200">
                {site.email && (
                  <li>
                    <span className="text-mist-400">
                      {dictionary.contact.emailLabel}:
                    </span>{" "}
                    {site.email}
                  </li>
                )}
                {site.phone && (
                  <li>
                    <span className="text-mist-400">
                      {dictionary.contact.phoneLabel}:
                    </span>{" "}
                    {site.phone}
                  </li>
                )}
                {site.serviceArea && (
                  <li>
                    <span className="text-mist-400">
                      {dictionary.contact.areaLabel}:
                    </span>{" "}
                    {site.serviceArea}
                  </li>
                )}
              </ul>
            ) : (
              <p className="mt-4 text-sm text-mist-300">
                {dictionary.contact.todoNote}
              </p>
            )}

            <dl className="mt-4 text-mist-200">
              <dt className="text-mist-400">
                {dictionary.contact.responseTimeLabel}:
              </dt>
              <dd>{dictionary.contact.responseTimeValue}</dd>
            </dl>
          </div>
        </div>

        {/* Contact form → WhatsApp */}
        <div>
          <ContactForm
            locale={locale}
            dictionary={dictionary}
          />
        </div>
      </div>
    </Section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.44 1.27 4.9L2 22l5.3-1.24A9.96 9.96 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.1 14.17c-.21.6-1.25 1.15-1.72 1.19-.46.05-1.02.25-3.44-.72-2.93-1.16-4.78-4.18-4.93-4.37-.14-.19-1.17-1.56-1.17-2.97 0-1.41.73-2.1 1-2.39.26-.29.57-.36.76-.36.19 0 .39 0 .55.01.18.01.41-.07.64.49.24.57.81 1.97.88 2.11.07.14.12.31.02.5-.09.19-.14.3-.28.47-.14.17-.3.37-.42.5-.14.14-.29.29-.12.57.17.28.74 1.22 1.6 1.98 1.1.98 2.03 1.28 2.31 1.43.28.14.45.12.61-.07.17-.19.71-.83.9-1.11.19-.28.38-.23.64-.14.26.09 1.64.77 1.92.91.28.14.47.21.54.33.07.12.07.7-.14 1.3z" />
    </svg>
  );
}
