import type { Dictionary } from "./types";
import type { Locale } from "./config";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  id: () => import("./dictionaries/id").then((m) => m.default),
  en: () => import("./dictionaries/en").then((m) => m.default),
};

/**
 * Load the localized dictionary for the given locale.
 * Falls back to English for any unexpected locale value.
 */
export async function getDictionary(locale: string): Promise<Dictionary> {
  if (locale === "id" || locale === "en") {
    return dictionaries[locale]();
  }
  return dictionaries.en();
}
