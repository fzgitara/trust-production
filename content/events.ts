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
  /** Number of `image-NN.jpg` photos in the ImageKit folder (cover not counted). */
  imageCount: number;
  /** What we provided at the event (from the Drive description file). Omit if unknown. */
  provides?: string[];
}

/** ImageKit paths of the extra photos: image-01.jpg ... image-NN.jpg. */
export function eventPhotos(event: EventData): string[] {
  return Array.from(
    { length: event.imageCount },
    (_, i) => `events/${event.slug}/image-${String(i + 1).padStart(2, "0")}.jpg`
  );
}

/**
 * Featured events, most recent first.
 */
export const events: EventData[] = [
  {
    slug: "the_verdictavia",
    type: "concert",
    name: "THE VERDICTAVIA",
    venue: "Jatim Expo",
    city: "Surabaya",
    date: "2026-10-24",
    cover: "events/the_verdictavia/cover",
    imageCount: 3,
    provides: [
      "Turbosound TLX 84 - 12 unit for Main PA (6 unit per side)",
      "Turbosound IQ 15 - 2 unit for Center FILL",
      "Turbosound IQ 15 - 8 unit for Wedges MONITOR",
      "Turbosound TLX 84 - 4 unit for Side FILL (2 unit per side)",
      "Turbosound MADRID 218B - 2 unit for Side FILL (1 unit per side)",
      "LAKE System management",
      "Subwoofer D&B J-Sub - 4 unit with CENTER configuration",
      "Mixing console MIDAS M32 Live - 2 unit for FOH & MOH",
      "Moving Beam XMLITE LLP400 - 8 unit",
      "Strobo ATOMIC 1000w - 12 unit",
      "Parled 54x3w RGB - 12 unit",
      "Fresnell UNILUMIN 200w - 6 unit",
      "Follow spot SKYLIGHT 1000w - 1 unit",
      "HAZER Smoke 1500w - 2 unit",
      "Mixing console Avolites TIGERTOUCH II",
      "Rigging holo 8x10m",
      "Rigging tower 8x2m",
      "Stage level drum 3x8m, 60cm",
      "Stage FOH 6x4m, 60cm",
      "Baricade 100m",
      "LED Screen Dahua p3.9 Hybrid 4x8m (32m2)",
      "Video Processor Novastar VX1000",
      "Genset 80Kva - 2 unit",
    ],
  },
  {
    slug: "pit_fest_9",
    type: "concert",
    name: "PIT-FEST #9",
    venue: "Pit Stop KIG",
    city: "Gresik",
    date: "2026-08-22",
    cover: "events/pit_fest_9/cover",
    imageCount: 5,
    provides: [
      "Stage Flooring 8x6",
      "Rigging 4x8",
      "Lighting",
    ],
  },
  {
    slug: "pomprov_jatim",
    type: "concert",
    name: "POMPROV Jatim",
    venue: "Lapangan Rektorat UNESA Lidah Wetan",
    city: "Surabaya",
    date: "2025-05-28",
    cover: "events/pomprov_jatim/cover",
    imageCount: 5,
  },
  {
    slug: "eculf_3_0",
    type: "concert",
    name: "ECULF 3.0",
    venue: "Balai Pemuda Surabaya",
    city: "Surabaya",
    date: "2024-12-28",
    cover: "events/eculf_3_0/cover",
    imageCount: 4,
  },
  {
    slug: "pekan_raya_mahasiswa",
    type: "concert",
    name: "Pekan Raya Mahasiswa",
    venue: "Lapangan Rektorat UNESA Lidah Wetan",
    city: "Surabaya",
    date: "2024-08-30",
    cover: "events/pekan_raya_mahasiswa/cover",
    imageCount: 5,
  },
  {
    slug: "moro_moro_goyang",
    type: "concert",
    name: "Moro-Moro Goyang",
    venue: "Lapangan GKB Convex Gresik",
    city: "Gresik",
    date: "2024-06-28",
    cover: "events/moro_moro_goyang/cover",
    imageCount: 4,
  },
  {
    slug: "shorprinks",
    type: "community",
    name: "Shorprinks",
    venue: "Gumbira Park",
    city: "Gresik",
    date: "2026-06-20",
    cover: "events/shorprinks/cover",
    imageCount: 2,
    provides: [
      "Rigging 8x6 & tower sound",
      "Sound 10.000w",
      "Moving Beam XMLITE LLP400 - 4 unit",
      "Strobo ATOMIC 1000w - 6 unit",
      "Parled 54x3w RGB - 6 unit",
      "Fresnell UNILUMIN 200w - 4 unit",
      "Smoke 1200w - 1 unit",
    ],
  },
  {
    slug: "aeternforseven",
    type: "school",
    name: "Aeternforseven",
    venue: "SMAN 2 Bangkalan",
    city: "Bangkalan",
    date: "2026-05-10",
    cover: "events/aeternforseven/cover",
    imageCount: 4,
    provides: [
      "Rigging 10x16",
      "Moving Beam XMLITE LLP400 - 4 unit",
      "Strobo ATOMIC 1000w - 4 unit",
      "Parled 10x18w RGB - 6 unit",
      "Fresnell UNILUMIN 200w - 4 unit",
    ],
  },
  {
    slug: "rayantara_59",
    type: "school",
    name: "Rayantara 59",
    venue: "SMA Muhammadiyah 1 Gresik",
    city: "Gresik",
    date: "2026-04-03",
    cover: "events/rayantara_59/cover",
    imageCount: 3,
    provides: [
      "Rigging 8x12m",
      "Moving Beam XMLITE LLP400 - 4 unit",
      "Strobo ATOMIC 1000w - 4 unit",
      "Parled 10x18w RGB - 6 unit",
      "Fresnell UNILUMIN 200w - 4 unit",
    ],
  },
  {
    slug: "celestia_2k25",
    type: "school",
    name: "Celestia 2K25",
    venue: "SMAN 1 Gresik",
    city: "Gresik",
    date: "2025-09-19",
    cover: "events/celestia_2k25/cover",
    imageCount: 2,
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

/** Convenience accessor for the portfolio section, newest date first. */
export const featuredEvents = [...events].sort((a, b) =>
  b.date.localeCompare(a.date)
);

export function getEvent(slug: string): EventData | undefined {
  return events.find((e) => e.slug === slug);
}
