# Refactoring & Cleanup Guide

Senior-level approach to improving existing frontend code without changing behavior.

## General Approach

1. **Understand before touching** — read the component and its usages; note the props and rendering contract.
2. **Make behavior-preserving changes** — refactor in small, reviewable steps.
3. **Verify after each step** — run `npx tsc --noEmit`; run `npm run build` when a larger refactor lands.
4. **Prefer extraction over repetition** — but avoid premature abstraction.

## Common Refactors

### Extract shared primitives
- Repeated layout/typography/button patterns → `components/shared/` (`Button`, `Container`, `Eyebrow`, `Section`, etc.)
- Keep shared components typed and documented like the rest.

### Reduce duplication
- Repeated Tailwind class strings → a shared class/helper or component.
- Repeated dictionary access patterns → a small helper where it genuinely helps.

### Component hygiene
- Split oversized components into smaller, single-purpose ones (server components by default).
- Move data/string lookups out of JSX into typed helpers or the `Dictionary`.

### Remove dead code
- Delete unused imports, unused components, commented-out blocks, and console logs.

### i18n cleanup
- Any hardcoded string found during refactor → move into both `id.ts` + `en.ts` and load via `getDictionary`.
- Keep dictionaries in sync; update the `Dictionary` type when keys change.

## Anti-patterns to Avoid

- Introducing `any` or loosening types "to make it compile"
- Adding `"use client"` just to escape server-component constraints (it grows the bundle)
- Refactoring that changes visible content/behavior without reason
- Moving data that belongs in `content/events.ts` / `lib/site.ts` (protected files)
- Inventing facts, stats, or testimonials while "cleaning up"

## Checklist Before Done

- [ ] `npx tsc --noEmit` clean
- [ ] No behavior change without intent
- [ ] i18n dictionaries in sync
- [ ] Style consistent (single quotes, semicolons, 2-space, `@/` alias)
- [ ] No dead code introduced
