/** Locale codes supported by the site. */
export const locales = ["id", "en"] as const;
export type Locale = (typeof locales)[number];

/** Default locale — Bahasa Indonesia. */
export const defaultLocale: Locale = "en";

/** Human-readable native names, used in the locale switcher. */
export const localeNames: Record<Locale, string> = {
  id: "Bahasa Indonesia",
  en: "English",
};

/** Short labels shown in the switcher UI. */
export const localeLabels: Record<Locale, string> = {
  id: "ID",
  en: "EN",
};

/** Validate that a string is a supported locale. */
export function isLocale(value: string | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}
