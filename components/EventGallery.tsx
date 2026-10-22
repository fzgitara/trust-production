"use client";

import { useEffect, useState } from "react";
import IKImage from "./shared/IKImage";

interface Props {
  /** ImageKit paths of the photos. */
  photos: string[];
  eventName: string;
  closeLabel: string;
}

/** Photo grid; clicking a photo opens it enlarged. Esc or click closes. */
export default function EventGallery({ photos, eventName, closeLabel }: Props) {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo, i) => (
          <button
            key={photo}
            type="button"
            onClick={() => setOpen(i)}
            className="relative aspect-[4/3] cursor-zoom-in overflow-hidden rounded-xl bg-ink-800"
          >
            <IKImage
              publicId={photo}
              alt={`${eventName} ${i + 1}`}
              fill
              loading="lazy"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-opacity hover:opacity-90"
            />
          </button>
        ))}
      </div>

      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={eventName}
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-[60] cursor-zoom-out bg-ink-950/95 p-4 sm:p-8"
        >
          <button
            type="button"
            aria-label={closeLabel}
            onClick={() => setOpen(null)}
            className="absolute right-4 top-4 z-10 rounded-full bg-ink-800 px-4 py-2 text-sm text-mist-100 hover:text-signal-400"
          >
            ✕ {closeLabel}
          </button>
          <div className="relative h-full w-full">
            <IKImage
              publicId={photos[open]}
              alt={`${eventName} ${open + 1}`}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
