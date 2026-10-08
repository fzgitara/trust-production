import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";
import { waLink } from "@/lib/site";
import Button from "./shared/Button";
import Container from "./shared/Container";

interface Props {
  locale: Locale;
  dictionary: Dictionary;
}

/** Reusable lead-capture band linking to WhatsApp and the contact section. */
export default function CtaBand({ locale, dictionary }: Props) {
  void locale;
  return (
    <section className="border-t hairline bg-ink-900">
      <Container className="py-20 text-center sm:py-28">
        <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-mist-100 sm:text-4xl">
          {dictionary.ctaBand.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-mist-200">
          {dictionary.ctaBand.text}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            href={waLink(dictionary.cta.quoteMessage)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {dictionary.ctaBand.primaryLabel}
          </Button>
          <Button href="#contact" variant="secondary">
            {dictionary.ctaBand.secondaryLabel}
          </Button>
        </div>
      </Container>
    </section>
  );
}
