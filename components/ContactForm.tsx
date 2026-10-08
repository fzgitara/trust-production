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
 * Quotation request form.
 *
 * On submit it composes a localized pre-filled WhatsApp message from the field
 * values and opens the WhatsApp deep link, so the request lands directly in the
 * business chat (no backend required). The composed link is kept in state and
 * shown as a fallback in case the browser blocked the popup.
 */
export default function ContactForm({ locale, dictionary }: Props) {
  const [name, setName] = useState("");
  const [eventType, setEventType] = useState("");
  const [date, setDate] = useState("");
  const [venue, setVenue] = useState("");
  const [services, setServices] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [waHref, setWaHref] = useState("");

  const f = dictionary.form;

  function toggleService(id: string) {
    setServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const serviceTitles = dictionary.services.items
      .filter((service) => services.includes(service.id))
      .map((service) => service.title);

    // The date input yields YYYY-MM-DD; send it human-readable.
    const readableDate = date
      ? new Intl.DateTimeFormat(locale === "id" ? "id-ID" : "en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }).format(new Date(`${date}T00:00:00`))
      : "-";

    const href = waLink(
      [
        f.waMessage.intro,
        `${f.waMessage.name}: ${name}`,
        `${f.waMessage.eventType}: ${eventType || "-"}`,
        `${f.waMessage.date}: ${readableDate}`,
        `${f.waMessage.venue}: ${venue || "-"}`,
        `${f.waMessage.services}: ${serviceTitles.join(", ") || "-"}`,
        `${f.waMessage.message}: ${message || "-"}`,
      ].join("\n")
    );

    setWaHref(href);
    window.open(href, "_blank", "noopener,noreferrer");
  }

  const inputClass =
    "w-full rounded-lg border border-mist-300/30 bg-ink-900 px-4 py-2.5 text-sm text-mist-100 placeholder:text-mist-300/60 focus:border-signal-400 focus:outline-none";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <h3 className="font-display text-xl font-bold text-mist-100">
          {f.title}
        </h3>
        <p className="mt-2 text-sm text-mist-300">{f.intro}</p>
      </div>

      <div>
        <label className="mb-1 block text-sm text-mist-200" htmlFor="cf-name">
          {f.nameLabel}
        </label>
        <input
          id="cf-name"
          className={inputClass}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={f.namePlaceholder}
          required
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm text-mist-200" htmlFor="cf-type">
            {f.eventTypeLabel}
          </label>
          <input
            id="cf-type"
            className={inputClass}
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
            placeholder={f.eventTypePlaceholder}
          />
        </div>
        <div>
          <label className="mb-1 block text-sm text-mist-200" htmlFor="cf-date">
            {f.dateLabel}
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
          {f.venueLabel}
        </label>
        <input
          id="cf-venue"
          className={inputClass}
          value={venue}
          onChange={(e) => setVenue(e.target.value)}
          placeholder={f.venuePlaceholder}
        />
      </div>

      {/* Services needed — included in the WhatsApp message so the quote is accurate. */}
      <fieldset>
        <legend className="mb-2 block text-sm text-mist-200">
          {f.serviceLabel}
        </legend>
        <div className="flex flex-wrap gap-2">
          {dictionary.services.items.map((service) => {
            const checked = services.includes(service.id);
            return (
              <label
                key={service.id}
                className={`inline-flex cursor-pointer items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                  checked
                    ? "border-signal-400 text-signal-400"
                    : "border-mist-300/30 text-mist-200 hover:border-mist-300/60"
                }`}
              >
                <input
                  type="checkbox"
                  className="h-3.5 w-3.5 accent-signal-500"
                  checked={checked}
                  onChange={() => toggleService(service.id)}
                />
                {service.title}
              </label>
            );
          })}
        </div>
      </fieldset>

      <div>
        <label className="mb-1 block text-sm text-mist-200" htmlFor="cf-message">
          {f.messageLabel}
        </label>
        <textarea
          id="cf-message"
          className={`${inputClass} min-h-28 resize-y`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={f.messagePlaceholder}
        />
      </div>

      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-signal-500 px-6 py-3 text-sm font-semibold text-ink-950 transition-colors hover:bg-signal-400"
      >
        {f.submitLabel}
      </button>

      {waHref && (
        <p className="text-sm text-mist-300">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-signal-400 hover:text-signal-300"
          >
            {f.reopenLabel}
          </a>
        </p>
      )}
    </form>
  );
}
