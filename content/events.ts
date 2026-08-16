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
 * Facts below come from the description files (md/txt) inside each Google
 * Drive TRUST folder. Entries with empty venue/city/date are placeholders
 * awaiting confirmation from the client — do NOT publish them before the
 * facts are filled in.
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
 * Featured events, most recent first.
 */
export const events: EventData[] = [
  {
    slug: "pomprov_jatim",
    type: "concert",
    name: "POMPROV Jatim",
    venue: "Lapangan Rektorat UNESA Lidah Wetan",
    city: "Surabaya",
    date: "2025-05-28",
    cover: "events/pomprov_jatim/cover",
  },
  {
    slug: "eculf_3_0",
    type: "concert",
    name: "ECULF 3.0",
    venue: "Balai Pemuda Surabaya",
    city: "Surabaya",
    date: "2024-12-28",
    cover: "events/eculf_3_0/cover",
  },
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
    slug: "moro_moro_goyang",
    type: "concert",
    name: "Moro-Moro Goyang",
    venue: "Lapangan GKB Convex Gresik",
    city: "Gresik",
    date: "2024-06-28",
    cover: "events/moro_moro_goyang/cover",
  },
  {
    slug: "shorprinks",
    type: "community",
    name: "Shorprinks",
    venue: "Gumbira Park",
    city: "Gresik",
    date: "2026-06-20",
    cover: "events/shorprinks/cover",
  },
  {
    slug: "aeternforseven",
    type: "school",
    name: "Aeternforseven",
    venue: "SMAN 2 Bangkalan",
    city: "Bangkalan",
    date: "2026-05-10",
    cover: "events/aeternforseven/cover",
  },
  {
    slug: "rayantara_59",
    type: "school",
    name: "Rayantara 59",
    venue: "SMA Muhammadiyah 1 Gresik",
    city: "Gresik",
    date: "2026-04-03",
    cover: "events/rayantara_59/cover",
  },
  {
    slug: "celestia_2k25",
    type: "school",
    name: "Celestia 2K25",
    venue: "SMAN 1 Gresik",
    city: "Gresik",
    date: "2025-09-19",
    cover: "events/celestia_2k25/cover",
  },
  // ── BELUM ADA KETERANGAN (folder Drive tanpa file md/txt) — lengkapi sebelum publish ──
  // {
  //   slug: "rental_genset",
  //   type: "corporate", // TODO: konfirmasi tipe
  //   name: "Rental Genset",
  //   venue: "", // TODO
  //   city: "", // TODO
  //   date: "", // TODO
  //   cover: "events/rental_genset/cover",
  // },
  // {
  //   slug: "htd_2025",
  //   type: "concert", // TODO: konfirmasi tipe
  //   name: "HTD 2025",
  //   venue: "", // TODO
  //   city: "", // TODO
  //   date: "", // TODO
  //   cover: "events/htd_2025/cover",
  // },
  // {
  //   slug: "peksimida_2024",
  //   type: "school", // TODO: konfirmasi tipe
  //   name: "Peksimida 2024",
  //   venue: "", // TODO
  //   city: "", // TODO
  //   date: "", // TODO
  //   cover: "events/peksimida_2024/cover",
  // },
  // {
  //   slug: "pkkmb_unesa_2024",
  //   type: "school", // TODO: konfirmasi tipe
  //   name: "PKKMB UNESA 2024",
  //   venue: "", // TODO
  //   city: "", // TODO
  //   date: "", // TODO
  //   cover: "events/pkkmb_unesa_2024/cover",
  // },
  // {
  //   slug: "sixty_pride",
  //   type: "community", // TODO: konfirmasi tipe
  //   name: "Sixty Pride",
  //   venue: "", // TODO
  //   city: "", // TODO
  //   date: "", // TODO
  //   cover: "events/sixty_pride/cover",
  // },
];

/** Convenience accessor for the portfolio section. */
export const featuredEvents = events;
