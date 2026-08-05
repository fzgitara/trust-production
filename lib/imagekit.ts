import { site } from "./site";

/**
 * Resolve an ImageKit media path to the delivery-ready form.
 *
 * The ImageKit Media Library shows a virtual `Home/` UI root (like Cloudinary's
 * `Home/`). That `Home/` is NOT part of the real delivery path — it is stripped
 * so `Home/events/x/cover` → `events/x/cover`, matching what the delivery URL
 * actually serves.
 *
 * Normalization rules:
 *   - A leading `Home/` (the virtual UI root) is stripped.
 *   - A leading slash is stripped (delivery URLs don't begin with one).
 *   - No file extension is appended; ImageKit serves the underlying format
 *     unless a transform like `f-avif`/`f-webp` is requested.
 */
export function imagekitId(path: string): string {
  return path
    .replace(/^Home\//i, "") // virtual Media Library "Home/" UI root
    .replace(/^\/+/, ""); // any leading slash
}

/**
 * Build a human-friendly base delivery URL for an asset (used for Open Graph /
 * metadata or direct <img> fallsbacks).
 *
 * Optionally accepts ImageKit transformation tokens, e.g. `w-1200`, `q-75`.
 */
export function imagekitUrl(path: string, transforms: string[] = []): string {
  const base = `https://ik.imagekit.io/${site.imageKitEndpoint}/${imagekitId(
    path
  )}`;
  return transforms.length ? `${base}?tr=${transforms.join(",")}` : base;
}

