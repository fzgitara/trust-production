/**
 * Central image data layer.
 *
 * All media paths follow the ImageKit convention:
 *   - event-based folders, one folder per event
 *   - lowercase-hyphenated slugs only
 *   - `cover`, `image-01`, `image-02` ... are file names (no file extension)
 *   - `Home/` in the Media Library UI is a virtual root, not part of the
 *     delivery path, so assets are stored here as `events/<slug>/cover`, etc.
 *
 * Images are locale-neutral — shared across /id and /en. Only localized
 * alt text / captions live in the locale dictionaries.
 */

/** A single ImageKit-managed image. */
export interface CloudImage {
  /** ImageKit delivery path, e.g. "events/wedding-2024/cover" */
  publicId: string;
  /** Relative folder (derived from the media path). */
  aspect?: "video" | "square" | "wide" | "portrait";
}

/** Aspect-ratio presets used for consistent crops. */
export const ASPECT = {
  video: "16:10",
  wide: "16:9",
  square: "1:1",
  portrait: "4:5",
} as const;

/** The ImageKit folder prefix convention. */
const services = (slug: string) => `services/${slug}`;

export interface HomepageImages {
  hero: CloudImage;
  about: CloudImage;
  services: CloudImage[];
  gallery: CloudImage[];
}

/**
 * MVP homepage images.
 *
 * Live (real) assets will come from the business. An empty `gallery` keeps the
 * gallery preview on its TODO placeholder until real assets exist. Featured
 * events live in `content/events.ts` (single source of truth) — nothing here
 * is invented.
 */
export const homepageImages: HomepageImages = {
  hero: { publicId: "Home/hero/cover", aspect: "wide" },
  about: { publicId: "Home/about/crew", aspect: "square" },
  services: [
    { publicId: services("event-organizing/cover"), aspect: "video" },
    { publicId: services("sound/cover"), aspect: "video" },
    { publicId: services("stage/cover"), aspect: "video" },
    { publicId: services("lighting/cover"), aspect: "video" },
    { publicId: services("production/cover"), aspect: "video" },
  ],
  // TODO: add real, verified gallery assets once available.
  // Events now live in content/events.ts (single source of truth).
  gallery: [],
};

