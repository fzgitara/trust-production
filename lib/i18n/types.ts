import type { Locale } from "./config";

/**
 * Locale dictionary type describing every user-facing string.
 *
 * `TODO` keys appear where a value is not yet confirmed by the business —
 * they are placeholders, never invented facts.
 */
export interface Dictionary {
  nav: {
    home: string;
    services: string;
    events: string;
    equipment: string;
    gallery: string;
    contact: string;
  };
  cta: {
    getQuote: string;
    getQuoteOnWhatsApp: string;
    /** Pre-filled WhatsApp text used by the generic quotation CTAs. */
    quoteMessage: string;
    enquire: string;
    /** Lead-in for the per-service WhatsApp enquiry message. */
    enquireMessage: string;
    seeRecentEvents: string;
    viewGallery: string;
    backToTop: string;
  };
  header: {
    menu: string;
    close: string;
    logoAlt: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    imageAlt: string;
    trustItems: TrustItem[];
  };
  trustStrip: {
    label: string; // label shown before the stats if any confirmed
  };
  services: {
    eyebrow: string;
    heading: string;
    intro: string;
    items: ServiceItem[];
  };
  whyUs: {
    eyebrow: string;
    heading: string;
    intro: string;
    imageAlt: string;
    points: WhyUsPoint[];
  };
  portfolio: {
    eyebrow: string;
    heading: string;
    intro: string;
    placeholder: PortfolioPlaceholder;
    ctaLabel: string;
  };
  ctaBand: {
    heading: string;
    text: string;
    primaryLabel: string;
    secondaryLabel: string;
  };
  contact: {
    eyebrow: string;
    heading: string;
    intro: string;
    whatsappLabel: string;
    directTitle: string;
    whatsappNumberLabel: string;
    emailLabel: string;
    phoneLabel: string;
    areaLabel: string;
  };
  form: {
    title: string;
    intro: string;
    nameLabel: string;
    namePlaceholder: string;
    eventTypeLabel: string;
    eventTypePlaceholder: string;
    dateLabel: string;
    venueLabel: string;
    venuePlaceholder: string;
    serviceLabel: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitLabel: string;
    /** Fallback link shown after the WhatsApp deep link has been opened. */
    reopenLabel: string;
    /** Localized field labels used to compose the pre-filled WhatsApp text. */
    waMessage: {
      intro: string;
      name: string;
      eventType: string;
      date: string;
      venue: string;
      services: string;
      message: string;
    };
  };
  footer: {
    tagline: string;
    navTitle: string;
    contactTitle: string;
    legalTitle: string;
    rightsReserved: string;
    localeSwitcherLabel: string;
  };
  misc: {
    eventTypeTags: Record<string, string>; // localized labels for event type filters
  };
}

export interface TrustItem {
  value: string;
  label: string;
  /** true when the value is a confirmed (non-TODO) fact */
  confirmed?: boolean;
}

export interface ServiceItem {
  id: string; // stable slug, also used to compose the WhatsApp quotation request
  title: string;
  description: string;
  imageAlt: string;
  imagePublicId: string; // relative public id under the services folder
}

export interface WhyUsPoint {
  title: string;
  text: string;
  confirmed: boolean; // false => requires business confirmation
}

export interface PortfolioPlaceholder {
  heading: string;
  text: string;
}

/** Resolver shorthand: a function returning the active dictionary. */
export type DictionaryReader = (locale: Locale) => Dictionary;

