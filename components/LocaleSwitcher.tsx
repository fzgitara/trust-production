import Link from "next/link";
import { locales, localeLabels, type Locale } from "@/lib/i18n/config";

interface Props {
  locale: Locale;
  ariaLabel: string;
}

/**
 * Route-based locale switcher.
 * Navigates between `/id` and `/en` using locale-prefixed links.
 */
export default function LocaleSwitcher({ locale, ariaLabel }: Props) {
  return (
    <nav aria-label={ariaLabel} className="flex items-center gap-1">
      {locales.map((code) => {
        const active = code === locale;
        return (
          <Link
            key={code}
            href={`/${code}`}
            aria-current={active ? "page" : undefined}
            className={`rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-wide transition-colors ${
              active
                ? "bg-signal-500 text-ink-950"
                : "text-mist-300 hover:text-signal-400"
            }`}
          >
            {localeLabels[code]}
          </Link>
        );
      })}
    </nav>
  );
}
