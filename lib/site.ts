export const site = {
  /** Business / brand name. */
  name: "Trust Production",

  /** ImageKit URL endpoint (public key). Read from NEXT_PUBLIC_IMAGEKIT_ENDPOINT. */
  imageKitEndpoint:
    process.env.NEXT_PUBLIC_IMAGEKIT_ENDPOINT ?? "egaup9wo85",
  /** WhatsApp — country code + number, digits only (no +, spaces or dashes). */
  whatsappNumber: "", // TODO: confirm WhatsApp number with country code

  /** Domain for canonical URLs / Open Graph. */
  baseUrl: "https://trustproduction.example.com", // TODO: confirm production domain

  /** Email address. */
  email: "", // TODO: confirm contact email

  /** Phone Number. */
  phone: "", // TODO: confirm phone number

  /** Service area / coverage. */
  serviceArea: "", // TODO: confirm service area / coverage city(ies)

  /** Response-time statement — only include when confirmed by the business. */
  responseTime: "", // TODO: confirm (or leave empty and hide in UI)

  /** Legal / business registration details. */
  businessRegistration: "", // TODO: confirm business registration details

  /** Legal policy URLs (privacy / terms). */
  privacyUrl: "", // TODO: confirm or draft legal policy
  termsUrl: "", // TODO: confirm or draft legal policy

  /** Social profiles (only if real profiles exist). */
  social: {
    instagram: "", // TODO: confirm profile
    facebook: "", // TODO: confirm profile
    youtube: "", // TODO: confirm profile
  },
};

/**
 * Build a WhatsApp deep link using the localized pre-filled message text.
 * Returns "#" placeholder if number not yet configured.
 */
export function waLink(message: string): string {
  if (!site.whatsappNumber) return "#"; // TODO: number not configured yet
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}


