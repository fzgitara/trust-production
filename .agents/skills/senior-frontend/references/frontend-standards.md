# Frontend Implementation Standards

Senior-level implementation standards for the Trust Production Next.js codebase.
Follow these when writing or modifying frontend code.

## Architecture & Component Conventions

- **Default-exported function components** with `interface Props` and a JSDoc block comment, e.g.:

  ```tsx
  interface Props {
    locale: Locale;
    dictionary: Dictionary;
  }

  /** Hero section for the localized homepage. */
  export default function Hero({ locale, dictionary }: Props) {
    return (/* ... */);
  }
  ```

- **Section components receive `locale` and `dictionary` props**; `app/[locale]/page.tsx` composes them. Anchor links use the `/{locale}#id` form.
- **Server components by default.** Add `"use client"` only for interactivity/state (e.g. `ContactForm`, `LocaleSwitcher`). Keep client scope minimal and leaf-level.
- **Route params:** `generateStaticParams()` pre-renders both locales; validate with `isLocale()` and call `notFound()` otherwise.

## i18n (localization)

- Every user-facing string comes from the typed `Dictionary` (`lib/i18n/types.ts`), implemented in `lib/i18n/dictionaries/id.ts` + `en.ts`.
- When adding a string: add it to **both** dictionaries, matching the shape of the `Dictionary` type. Do not leave `en` and `id` out of sync.
- Never inline English text in components. Numeric/formatting differences per locale (e.g. date/currency) should be handled via the dictionaries or locale-aware helpers.
- Flag (do not silently resolve) the known `defaultLocale` conflict: `config.ts` says `en`, the execution plan says `id`.

## Styling (Tailwind)

- Tailwind utility classes only, using project tokens: `ink-*`, `signal-*`, `mist-*`, `font-display`, `font-body`.
- Use existing helpers where they apply: `container-site`, `eyebrow`, `hairline`.
- Prefer design tokens over arbitrary values; keep the palette consistent with `tailwind.config.ts`.
- Respect light/dark and color-contrast expectations of the `ink`/`mist` palette (dark bg + light text in `app/layout.tsx`).

## Media (ImageKit)

- Always use the shared `IKImage` component with ImageKit media paths — **no file extension** in the path (a leading `Home/` virtual root is stripped by `imagekitId`).
- Use the aspect presets from `content/images.ts`.
- Keep the `ik.imagekit.io` remote pattern in `next.config.mjs`.
- Provide explicit `width`/`height` or aspect ratio to avoid layout shift; use `priority` only above the fold.

## Accessibility

- Semantic HTML (`header`, `nav`, `main`, `section`, `footer`), one `h1` per page.
- Form controls need labels; interactive elements need visible focus states.
- Buttons/links: real `<button>` vs `<a>` based on behavior; keyboard operable.
- Alt text for images (meaningful, not "image").
- Color contrast sufficient on both `ink` and `mist` backgrounds.

## Performance

- Prefer server components; minimize client bundle.
- Use `next/image` (`IKImage`) for optimized/streamed images; avoid huge inline assets.
- Lazy-load below-the-fold media.
- Avoid unnecessary re-renders; memoize only when it measurably helps.

## Code Quality

- TypeScript strict — no `any`; type everything through the typed `Dictionary` and domain types.
- Single quotes, semicolons, 2-space indentation.
- Use the `@/` alias for project-root imports.
- Keep components focused; extract shared primitives into `components/shared/`.
