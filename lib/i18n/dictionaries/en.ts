import type { Dictionary } from "../types";

/**
 * English locale dictionary.
 * `TODO` strings mark facts still to be confirmed with the business.
 */
const en: Dictionary = {
  nav: {
    home: "Home",
    services: "Services",
    events: "Events",
    equipment: "Equipment",
    gallery: "Gallery",
    contact: "Contact",
  },
  cta: {
    getQuote: "Get a Quote",
    getQuoteOnWhatsApp: "Get a Quote on WhatsApp",
    quoteMessage:
      "Hello Trust Production, I'd like to request a quotation for my event.",
    enquire: "Enquire",
    enquireMessage:
      "Hello Trust Production, I'd like to ask about the following service:",
    seeRecentEvents: "See Recent Events",
    viewGallery: "View Gallery",
    backToTop: "Back to top",
  },
  header: {
    menu: "Menu",
    close: "Close",
    logoAlt: "logo",
  },
  hero: {
    eyebrow: "Event Production & Rental",
    headline: "We Are Ready to Make Your Event Production Extraordinary!",
    subheadline:
      "End-to-end event organization, sound, stage, and lighting for weddings, corporate, concerts, schools, communities, and private events.",
    imageAlt: "Production stage with lighting rig — real equipment & setup",
    trustItems: [
      { value: "50+", label: "events delivered", confirmed: true },
      { value: "2019", label: "years in business", confirmed: true },
      { value: "Full", label: "equipment kit available", confirmed: true },
    ],
  },
  trustStrip: {
    label: "Real proof, never exaggerated.",
  },
  services: {
    eyebrow: "Services",
    heading: "Our Services",
    intro:
      "One trusted vendor for all your event production needs — from planning to on-site technical execution.",
    items: [
      {
        id: "event-organizer",
        title: "Event Organizer & Management",
        description:
          "Full planning, vendor coordination, and run-of-show so your event stays on track.",
        imageAlt: "Event organizer coordinating on site",
        imagePublicId: "services/event-organizing/cover",
      },
      {
        id: "sound-system",
        title: "Sound System Rental",
        description:
          "PA, monitors, microphones, and mixing for clear, balanced audio for every audience.",
        imageAlt: "Sound system and mixing console on stage",
        imagePublicId: "services/sound/cover",
      },
      {
        id: "stage",
        title: "Stage Rental",
        description:
          "Stage, risers, truss, and catwalks built to the scale of your event — sturdy and safe.",
        imageAlt: "Lit stage and truss structure",
        imagePublicId: "services/stage/cover",
      },
      {
        id: "lighting",
        title: "Lighting",
        description:
          "Stage and ambient lighting, color wash, and follow spots to set the right mood.",
        imageAlt: "Stage lighting rig with color wash",
        imagePublicId: "services/lighting/cover",
      },
      {
        id: "production",
        title: "Supporting Production",
        description:
          "Generators, crew, backline, AV, and other operational needs to keep the show running.",
        imageAlt: "Production crew preparing equipment on site",
        imagePublicId: "services/production/cover",
      },
    ],
  },
  whyUs: {
    eyebrow: "Why Us",
    heading: "Why clients book us",
    intro:
      "Focused on professional, on-time, safe execution. Here’s what we keep consistent.",
    imageAlt: "Clean setup and crew working at an event",
    points: [
      { title: "Professional crew & punctual setup", text: "Scheduled, disciplined on-site installation.", confirmed: false }, // TODO: confirm
      { title: "Consistent quality & national standards", text: "The same equipment standard at every event.", confirmed: false }, // TODO: confirm
      { title: "Responsive quoting", text: "Fast, communicative quoting process.", confirmed: false }, // TODO: soften SLA unless confirmed
      { title: "Real portfolio across event types", text: "Track record across different event formats.", confirmed: false }, // TODO: confirm
      { title: "Clean & safe setup", text: "Tidy installation with audience safety in mind.", confirmed: false }, // TODO: confirm
      { title: "Real projects across all event types", text: "Track record across different event formats.", confirmed: false }, // TODO: confirm
    ],
  },
  portfolio: {
    eyebrow: "Portfolio",
    heading: "Recent Productions",
    intro:
      "Real events we’ve produced. Details will be filled in once data is verified.",
    placeholder: {
      heading: "Full portfolio coming soon",
      text: "We’re compiling documentation of real events. Reach out to see our work or discuss your event.",
    },
    ctaLabel: "Talk about your event",
  },
  ctaBand: {
    heading: "Ready to bring your event to life?",
    text: "Get a quote and schedule — responsive, no obligation to ask.",
    primaryLabel: "Ask via WhatsApp",
    secondaryLabel: "Talk About Your Event",
  },
  contact: {
    eyebrow: "Contact",
    heading: "Let’s talk about your event",
    intro:
      "Send your event details via WhatsApp and our team will get back to you with a quotation.",
    whatsappLabel: "Chat on WhatsApp",
    directTitle: "Direct information",
    whatsappNumberLabel: "WhatsApp",
    emailLabel: "Email",
    phoneLabel: "Phone",
    areaLabel: "Service area",
  },
  form: {
    title: "Quotation Request Form",
    intro:
      "Fill in your event details and send them straight to our WhatsApp — the message is filled in for you.",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    eventTypeLabel: "Event type",
    eventTypePlaceholder: "Wedding, corporate, concert…",
    dateLabel: "Event date",
    venueLabel: "Venue / Location",
    venuePlaceholder: "Venue name and city",
    serviceLabel: "Services needed",
    messageLabel: "Message",
    messagePlaceholder: "Tell us about your event…",
    submitLabel: "Send Quotation Request",
    reopenLabel: "WhatsApp didn’t open? Click here",
    waMessage: {
      intro:
        "Hello Trust Production, I'd like to request a quotation for the following event:",
      name: "Name",
      eventType: "Event type",
      date: "Event date",
      venue: "Venue / Location",
      services: "Services needed",
      message: "Message",
    },
  },
  footer: {
    tagline: "Event organizer, sound system, stage, and supporting production. TODO: official tagline.", // TODO: confirm tagline
    navTitle: "Navigation",
    contactTitle: "Contact",
    legalTitle: "Legal",
    rightsReserved: "All rights reserved.",
    localeSwitcherLabel: "Language",
  },
  misc: {
    eventTypeTags: {
      wedding: "Wedding",
      corporate: "Corporate",
      concert: "Concert",
      school: "School",
      community: "Community",
      private: "Private",
    },
  },
};

export default en;
