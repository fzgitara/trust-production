import { defaultLocale, locales, type Locale } from "@/lib/i18n/config";
import { imagekitUrl } from "@/lib/imagekit";

/** Open Graph / Twitter card size (1200x630) cropped by ImageKit. */
export function ogImage(publicId: string) {
  return {
    url: imagekitUrl(publicId, ["w-1200", "h-630"]),
    width: 1200,
    height: 630,
  };
}

/**
 * Canonical + hreflang for a page that exists in every locale.
 * `path` is the part after the locale, e.g. "" or "/events/pit_fest_9".
 * Relative URLs are resolved against `metadataBase` from the root layout.
 */
export function localeAlternates(locale: Locale, path = "") {
  return {
    canonical: `/${locale}${path}`,
    languages: {
      ...Object.fromEntries(locales.map((l) => [l, `/${l}${path}`])),
      "x-default": `/${defaultLocale}${path}`,
    },
  };
}
