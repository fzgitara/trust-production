---
name: senior-frontend
description: 'Senior frontend engineering for this Next.js 15 + React 19 + TypeScript + Tailwind bilingual (id/en) codebase. Use when building or modifying frontend features/components, doing senior-level frontend code reviews, refactoring or cleaning up components, or working on i18n strings, Tailwind styling, accessibility, or performance. Invoke as a senior frontend developer standard.'
user-invocable: true
---

# Senior Frontend Developer

Apply senior-level frontend engineering to the Trust Production codebase: implementation standards, code review, and refactoring/cleanup.

## When to Use

- Building or modifying React components or page sections
- Reviewing frontend code (your own or someone else's) at a senior level
- Refactoring components, extracting shared primitives, reducing duplication
- i18n dictionary changes, Tailwind styling, accessibility, or performance work
- Any request to "act as / think like a senior frontend developer"

## How to Use

1. **Context first.** The root `AGENTS.md` is always in context — follow its architecture rules, coding style, and "no invented facts" rule without exception.
2. **Load the right reference** based on the task (all paths are relative to this skill):
   - Implementing new code → [frontend-standards.md](./references/frontend-standards.md)
   - Reviewing existing code → [review-checklist.md](./references/review-checklist.md)
   - Improving/cleaning code → [refactoring.md](./references/refactoring.md)
3. **Apply the standards**, then validate: run `npx tsc --noEmit` (type checks) and, when relevant, `npm run build` / `npm run lint`.

## Core Rules (non-negotiable for this repo)

- **Never hardcode user-facing strings** — load them via `getDictionary(locale)` from the typed `Dictionary`. Keep `id.ts` and `en.ts` in sync.
- **Route-based i18n only** (`/id`, `/en`). Flag the unresolved `defaultLocale` conflict (`config.ts` = `en` vs plan = `id`) if it affects the task; do not silently pick one.
- **MVP = homepage only** — do not introduce future routes.
- **No invented facts** — real data only; unknown facts stay marked `TODO`.
- **Images via `IKImage`** with ImageKit paths; keep the `ik.imagekit.io` remote pattern.
- **"use client" only where needed** — default to server components.
- **Do not modify** `content/events.ts`, `lib/site.ts`, `docs/ENVIRONMENT.md`, or `.env.local` without explicit permission.

See the references for the full detail.
