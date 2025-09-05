# BPC Group — bpcorp.eu

## Overview
Purpose: Reference hub for B2B Lead Generation (structure-first, content later).

## Tech Stack
- Next.js 14 (App Router, TS)
- Tailwind CSS
- ESLint + Prettier

## Getting Started
- Prereqs: Node 20+ (use `.nvmrc`)
- Install: `npm i`
- Dev: `npm run dev` → http://localhost:3000
- Build: `npm run build`
- Start: `npm run start`
- Lint/Format: `npm run lint` / `npm run format`

## Project Structure
- `app/`: App Router pages, API routes, layout and sitemap
- `components/`: Reusable UI primitives (rectangular, minimal)
- `data/`: Site constants and content placeholders (nav, stats, verticals, cases)
- `lib/`: Metadata/SEO, JSON-LD schemas, small utils
- `styles/`: Global Tailwind and minimal CSS
- `public/`: Static files (favicon, robots.txt)

App Router notes:
- Dynamic route `app/(pages)/verticals/[slug]/page.tsx` is driven by `data/verticals.ts`.

## Content Model
- Edit site constants in `data/site.ts`
- Edit nav in `data/nav.ts`
- Update stats in `data/stats.ts`
- Manage verticals in `data/verticals.ts` (drives `/verticals` and `[slug]`)
- Manage cases in `data/cases.ts`

## Styling Guidelines
- Corporate, minimal, no-rounded, no-shadows, no-animations, system fonts only
- Colors: black/white/gray only

## SEO
- Metadata API in `lib/seo.ts`, `app/layout.tsx`
- `app/sitemap.ts` auto-builds from routes + data
- `public/robots.txt` references sitemap

## Forms
- Contact form posts to `/api/contact` (console logs only by default)
- To integrate email/CRM later, replace API logic

## Deployment
- Recommended: Vercel
- Set `NEXT_PUBLIC_SITE_URL` (optional if using `data/site.ts`)

## Conventions
- TypeScript strict
- Semantic HTML
- Keep copy minimal until approved

## Roadmap
- [ ] Fill real copy after strategy approval
- [ ] Add server-side email/CRM integration
- [ ] Add analytics (PostHog or Plausible)
- [ ] Add per-vertical case pages if needed

## License
Proprietary (update as needed)
