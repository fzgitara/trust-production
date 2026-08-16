# Senior Frontend Code Review Checklist

Review frontend changes against these criteria. Address issues by severity:
**blocker** (must fix), **should** (fix before merge if practical), **nit** (optional).

## Correctness & Architecture

- [ ] TypeScript strict passes: `npx tsc --noEmit`
- [ ] Component is default-exported, typed `Props`, JSDoc present
- [ ] Server component unless interactivity truly requires `"use client"`
- [ ] `locale`/`dictionary` passed down correctly; no props drilling hacks
- [ ] Route params validated with `isLocale()` + `notFound()` where applicable
- [ ] No future/MVP-out-of-scope routes or features introduced

## i18n

- [ ] No hardcoded user-facing strings in JSX
- [ ] Strings loaded via `getDictionary(locale)`; both `id.ts` and `en.ts` updated and in sync
- [ ] `Dictionary` type updated if new keys were added
- [ ] Anchor links use the `/{locale}#id` form

## Styling & Media

- [ ] Uses project tokens (`ink-*`, `signal-*`, `mist-*`, `font-*`) and helpers (`container-site`, `eyebrow`, `hairline`)
- [ ] No arbitrary/one-off values where a token exists
- [ ] Images via `IKImage` with extensionless ImageKit paths; dimensions/aspect set to avoid CLS
- [ ] `next.config.mjs` remote pattern preserved

## Accessibility

- [ ] Semantic landmarks used; single `h1`
- [ ] Focus states visible; keyboard operable
- [ ] Form fields labeled; button/link semantics correct
- [ ] Alt text meaningful

## Performance

- [ ] Client bundle kept minimal; no needless `"use client"`
- [ ] Below-the-fold media lazy-loaded
- [ ] No obvious re-render or layout-shift issues

## Content & Truthfulness

- [ ] No fabricated facts, numbers, testimonials, or brand claims (repo rule)
- [ ] Unknown/confirmed-false content left as `TODO`, not invented
- [ ] Not modifying protected files (`content/events.ts`, `lib/site.ts`, `docs/ENVIRONMENT.md`, `.env.local`)

## Cleanliness

- [ ] No dead code, unused imports, or leftover debug logs
- [ ] Consistent with existing style (single quotes, semicolons, 2-space indent)
- [ ] Imports use the `@/` alias
