"use client";

import Image from "next/image";
import type { ImageProps } from "next/image";
import { site } from "@/lib/site";
import { imagekitId } from "@/lib/imagekit";

type Props = Omit<ImageProps, "src" | "alt"> & {
  /** ImageKit media-path relative to the endpoint, e.g. "Home/events/x/cover". */
  publicId: string;
  alt: string;
};

/**
 * ImageKit image wrapper built on next/image.
 *
 * Centralizes the ImageKit optimizations:
 *   - responsive `srcSet` widths (via next/image's loader)
 *   - compressed quality
 *   - browser-driven format negotiation (WebP/AVIF served by next/image)
 *
 * Usage: `<IKImage publicId="Home/events/x/cover" ... />` — everything else
 * reads just like `next/image` (<Image fill ... />).
 *
 * The endpoint is resolved from the centralized `site` config so the component
 * can be pre-rendered without a runtime-only env var.
 */
export default function IKImage({ publicId, alt, sizes, ...rest }: Props) {
  const src = imagekitId(publicId);

  return (
    <Image
      src={src}
      alt={alt}
      sizes={sizes}
      loader={({ src: s, width, quality }) => {
        const params = [`w-${width}`];
        if (quality && quality < 100) params.push(`q-${quality}`);
        const tr = params.join(",");
        return `https://ik.imagekit.io/${site.imageKitEndpoint}/${s}?tr=${tr}`;
      }}
      {...rest}
    />
  );
}
