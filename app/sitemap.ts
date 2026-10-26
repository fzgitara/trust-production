import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/config";
import { events } from "@/content/events";
import { site } from "@/lib/site";

/** Every page exists in each locale; each entry lists its language alternates. */
function entry(path: string): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    locales.map((l) => [l, `${site.baseUrl}/${l}${path}`])
  );
  return locales.map((l) => ({
    url: `${site.baseUrl}/${l}${path}`,
    alternates: { languages },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...entry(""),
    ...events.flatMap((event) =>
      entry(`/events/${event.slug}`)
    ),
  ];
}
