/**
 * Real event portfolio data.
 *
 * Each event is shown in the Featured Events (Portfolio) section. Every field
 * must be a REAL, confirmed fact from the business:
 *   - `name`/`venue`/`city`/`date` come from the actual event the business ran
 *   - `cover` is the real ImageKit path (uploaded photo) under
 *     `events/<slug>/cover` (the `Home/` in the Media Library UI is a virtual
 *     root and is not part of the delivery path)
 *
 * The sample rows below are PLACEHOLDERS so the section visibly renders during
 * development. Replace them with real events before launch — an event whose
 * cover does not exist in ImageKit (or whose facts are invented) MUST NOT be
 * published. Remove any sample that is not a genuine job.
 *
 * NOTE: upload real photos to ImageKit under `events/<slug>/cover` matching
 * the `cover` paths you set here.
 */

export type EventType =
  | "wedding"
  | "corporate"
  | "concert"
  | "school"
  | "community"
  | "private";

export interface EventData {
  /** lowercase-hyphenated slug; also the ImageKit folder name suffix. */
  slug: string;
  type: EventType;
  /** Real event name / brief title as billed. */
  name: string;
  /** Real venue or location name. */
  venue: string;
  /** City / area where the event took place. */
  city: string;
  /** Event date in ISO (YYYY-MM-DD) format. */
  date: string;
  /** Real ImageKit path for the cover under events/<slug>/cover. */
  cover: string;
}

/**
 * Featured events, most recent first. Seeded with clearly-marked example rows
 * so the grid renders; swap these for verified real events before going live.
 */
export const events: EventData[] = [
  {
    slug: "pekan_raya_mahasiswa",
    type: "concert",
    name: "Pekan Raya Mahasiswa",
    venue: "Lapangan Rektorat UNESA Lidah Wetan",
    city: "Surabaya",
    date: "2024-08-30",

    cover: "events/pekan_raya_mahasiswa/cover",
  },
  {
    slug: "eculf_3.0",
    type: "concert",
    name: "ECULF 3.0",
    venue: "Balai Pemuda Surabaya",
    city: "Surabaya",
    date: "2024-12-28",
    cover: "Home/events/eculf_3.0/cover",
  },
  {
    slug: "example-music-fest",
    type: "concert",
    name: "POMPROV Jatim",
    venue: "Lapangan Rektorat UNESA Lidah Wetan",
    city: "Surabaya",
    date: "2025-05-28",
    cover: "events/pomprov_jatim/cover",
  },
];

/** Convenience accessor for the portfolio section. */
export const featuredEvents = events;


