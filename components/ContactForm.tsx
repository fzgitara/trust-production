"use client";

import { useState } from "react";
import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";
import { waLink } from "@/lib/site";

interface Props {
  locale: Locale;
  dictionary: Dictionary;
}

/**
 * Contact form. On submit it composes a localized pre-filled WhatsApp message
 * and opens the WhatsApp deep link (no backend required for MVP).
 */
export default function ContactForm({ dictionary }: Props) {
  const [name, setName] = useState("");
  const [eventType, setEventType] = useState("");
  const [date, setDate] = useState("");
  const [venue, setVenue] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Compose a localized pre-filled message. TODO: confirm exact wording.
    const lines = [
      dictionary.cta.getQuoteOnWhatsApp,
      `Name: ${name}`,
      `Event type: ${eventType || "-"}`,
      `Date: ${date || "-"}`,
      `Venue/Location: ${venue || "-"}`,
      `Message: ${message || "-"}`,
    ].join("\n");
    window.open(waLink(lines), "_blank");
  }

  const inputClass =
    "w-full rounded-lg border border-mist-300/30 bg-ink-900 px-4 py-2.5 text-sm text-mist-100 placeholder:text-mist-300/60 focus:border-signal-400 focus:outline-none";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label className="mb-1 block text-sm text-mist-200" htmlFor="cf-name">
          {dictionary.form.nameLabel}
        </label>
        <input
          id="cf-name"
          className={inputClass}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={dictionary.form.namePlaceholder}
          required
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm text-mist-200" htmlFor="cf-type">
            {dictionary.form.eventTypeLabel}
          </label>
          <input
            id="cf-type"
            className={inputClass}
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
            placeholder={dictionary.form.eventTypePlaceholder}
          />
        </div>
        <div>
          <label className="mb-1 block text-sm text-mist-200" htmlFor="cf-date">
            {dictionary.form.dateLabel}
          </label>
          <input
            id="cf-date"
            type="date"
            className={inputClass}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>

      <div>
        <label className="mb-1 block text-sm text-mist-200" htmlFor="cf-venue">
          {dictionary.form.venueLabel}
        </label>
        <input
          id="cf-venue"
          className={inputClass}
          value={venue}
          onChange={(e) => setVenue(e.target.value)}
          placeholder={dictionary.form.venuePlaceholder}
        />
      </div>

      <div>
        <label className="mb-1 block text-sm text-mist-200" htmlFor="cf-message">
          {dictionary.form.messageLabel}
        </label>
        <textarea
          id="cf-message"
          className={`${inputClass} min-h-28 resize-y`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={dictionary.form.messagePlaceholder}
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-signal-500 px-6 py-3 text-sm font-semibold text-ink-950 transition-colors hover:bg-signal-400"
      >
        {dictionary.form.submitLabel}
      </button>
    </form>
  );
}
