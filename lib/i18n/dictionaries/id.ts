import type { Dictionary } from "../types";

/**
 * Bahasa Indonesia (default) locale dictionary.
 * `TODO` strings mark facts still to be confirmed with the business.
 */
const id: Dictionary = {
  nav: {
    home: "Beranda",
    services: "Layanan",
    events: "Acara",
    equipment: "Peralatan",
    gallery: "Galeri",
    contact: "Kontak",
  },
  cta: {
    getQuote: "Dapatkan Penawaran",
    getQuoteOnWhatsApp: "Dapatkan Penawaran via WhatsApp",
    enquire: "Tanya",
    seeRecentEvents: "Lihat Acara Terbaru",
    viewGallery: "Lihat Galeri",
    backToTop: "Kembali ke atas",
  },
  header: {
    menu: "Menu",
    close: "Tutup",
    logoAlt: "logo",
  },
  hero: {
    eyebrow: "TODO: contoh — Event Production & Rental", // TODO: confirm eyebrow
    headline: "Produksi yang membuat acara Anda tampak luar biasa.",
    subheadline:
      "Organisasi acara end-to-end, sound system, panggung, dan lighting untuk pernikahan, korporat, konser, sekolah, komunitas, dan acara privat.",
    imageAlt: "Panggung produksi dengan rig lighting — teknologi & set-up nyata",
    trustItems: [
      { value: "50+", label: "acara yang telah dikerjakan", confirmed: true },
      { value: "2019", label: "tahun berpengalaman", confirmed: true },
      { value: "Lengkap", label: "paket peralatan tersedia", confirmed: true },
    ],
  },
  trustStrip: {
    label: "Bukti nyata, tidak dilebih-lebihkan.",
  },
  services: {
    eyebrow: "Layanan",
    heading: "Layanan Kami",
    intro:
      "Satu vendor tepercaya untuk kebutuhan produksi acara Anda — dari perencanaan hingga eksekusi teknis di lokasi.",
    items: [
      {
        id: "event-organizer",
        title: "Event Organizer & Manajemen",
        description:
          "Perencanaan penuh, koordinasi vendor, dan run-of-show sehingga acara Anda berjalan sesuai rencana.",
        imageAlt: "Proses koordinasi event organizer di lokasi",
        imagePublicId: "services/event-organizing/cover",
      },
      {
        id: "sound-system",
        title: "Sewa Sound System",
        description:
          "PA, monitor, mikrofon, dan mixing untuk memastikan suara jernih dan seimbang bagi seluruh audiens.",
        imageAlt: "Sound system dan konsol mixing di atas panggung",
        imagePublicId: "services/sound/cover",
      },
      {
        id: "stage",
        title: "Sewa Panggung",
        description:
          "Stage, riser, truss, dan catwalk sesuai skala acara, dipasang kokoh dan aman.",
        imageAlt: "Panggung dan struktur truss yang dinyalakan",
        imagePublicId: "services/stage/cover",
      },
      {
        id: "lighting",
        title: "Lighting",
        description:
          "Pencahayaan panggung dan ambient, color wash, hingga follow spot untuk suasana yang tepat.",
        imageAlt: "Tata cahaya panggung dengan color wash",
        imagePublicId: "services/lighting/cover",
      },
      {
        id: "production",
        title: "Dukungan Produksi",
        description:
          "Generator, crew, backline, AV, dan kebutuhan operasional lain agar produksi berjalan lancar.",
        imageAlt: "Crew produksi mempersiapkan peralatan di lokasi",
        imagePublicId: "services/production/cover",
      },
    ],
  },
  whyUs: {
    eyebrow: "Mengapa Kami",
    heading: "Mengapa klien memesan kami",
    intro:
      "Fokus pada eksekusi yang profesional, tepat waktu, dan aman. Berikut hal-hal yang kami jaga konsisten.",
    imageAlt: "Set-up rapi dan crew bekerja di lokasi acara",
    points: [
      { title: "Crew profesional & tepat waktu", text: "Pemasangan terjadwal dan disiplin di lokasi.", confirmed: false }, // TODO: confirm
      { title: "Kualitas konsisten & peralatan sendiri", text: "Standar peralatan yang sama di setiap acara.", confirmed: false }, // TODO: confirm
      { title: "Penawaran responsif", text: "Proses penawaran yang cepat dan komunikatif.", confirmed: false }, // TODO: soften SLA unless confirmed
      { title: "Portofolio nyata lintas jenis acara", text: "Rekam jejak eksekusi di berbagai tipe acara.", confirmed: false }, // TODO: confirm
      { title: "Set-up bersih & aman", text: "Instalasi rapi dengan memperhatikan keselamatan penonton.", confirmed: false }, // TODO: confirm
      { title: "Peralatan cadangan di lokasi", text: "Jaring pengaman untuk kelancaran acara.", confirmed: false }, // TODO: confirm
    ],
  },
  portfolio: {
    eyebrow: "Portofolio",
    heading: "Produksi Terbaru",
    intro:
      "Aktivitas acara nyata yang telah kami kerjakan. Detail akan diisi setelah data terverifikasi.",
    placeholder: {
      heading: "Portofolio penuh akan segera hadir",
      text: "Kami sedang mengumpulkan dokumentasi acara nyata. Hubungi kami untuk melihat hasil karya atau berdiskusi tentang acara Anda.",
    },
    ctaLabel: "Bicarakan acara Anda",
  },
  ctaBand: {
    heading: "Siap mewujudkan acara Anda?",
    text: "Dapatkan penawaran dan jadwal — responsif, tanpa komitmen untuk bertanya.",
    primaryLabel: "Tanya via WhatsApp",
    secondaryLabel: "Bicarakan Acara Anda",
  },
  contact: {
    eyebrow: "Kontak",
    heading: "Mari bicarakan acara Anda",
    intro:
      "Kirim detail acara Anda via WhatsApp dan tim kami akan merespons. Informasi kontak lengkap disusun di bawah ini.",
    whatsappLabel: "Mulai via WhatsApp",
    directTitle: "Informasi langsung",
    emailLabel: "Email",
    phoneLabel: "Telepon",
    areaLabel: "Area layanan",
    responseTimeLabel: "Waktu respons",
    responseTimeValue: "TODO: konfirmasi — respon SLA (mis. dalam X jam)", // TODO: confirm
    todoNote: "TODO: tambahkan detail kontak & area layanan di sini.", // TODO: confirm
  },
  form: {
    nameLabel: "Nama",
    namePlaceholder: "Nama Anda",
    eventTypeLabel: "Jenis acara",
    eventTypePlaceholder: "Pernikahan, korporat, konser…",
    dateLabel: "Tanggal acara",
    venueLabel: "Lokasi / Venue",
    venuePlaceholder: "Nama venue dan kota",
    messageLabel: "Pesan",
    messagePlaceholder: "Ceritakan tentang acara Anda…",
    submitLabel: "Kirim via WhatsApp",
  },
  footer: {
    tagline: "Organizer acara, sound system, panggung, dan produksi pendukung. TODO: tagline resmi.", // TODO: confirm tagline
    navTitle: "Navigasi",
    contactTitle: "Kontak",
    legalTitle: "Legal",
    rightsReserved: "Hak cipta dilindungi.",
    localeSwitcherLabel: "Bahasa",
  },
  misc: {
    eventTypeTags: {
      wedding: "Pernikahan",
      corporate: "Korporat",
      concert: "Konser",
      school: "Sekolah",
      community: "Komunitas",
      private: "Privat",
    },
  },
};

export default id;
