# AB IT and Technical Services — Portfolio Website

> Comprehensive IT Infrastructure, Support, and Cybersecurity Solutions

**Live site:** Deployed on Netlify · **Stack:** Next.js 16 · Tailwind CSS v4 · TypeScript

---

## About

Portfolio website for **AB IT and Technical Services**, a leading IT solutions provider based in Manchester, UK — specialising in data centre support, IT infrastructure, network & cabling, and cybersecurity across the UK and Europe.

**Key clients:** Morgan Stanley · Equinix · Deutsche Telekom · Shell · Solventum · IKEA (40+ sites)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16.2.10 (App Router, Turbopack) |
| Language | TypeScript 5 (strict mode) |
| Styling | Tailwind CSS v4, `class-variance-authority` + `tailwind-merge` for component variants |
| State | Zustand v5 (language toggle persistence) |
| i18n | Client-side EN/DE toggle via custom `useT()` hook, type-checked so `de.ts` can't drift from `en.ts` |
| Content validation | Zod schemas validate CMS-edited JSON at build time |
| Testing | Jest + Testing Library |
| CMS | Decap CMS (`/admin`), git-gateway backend |
| Deployment | Netlify (static export) |

---

## Features

- **Bilingual** — full English / German toggle, persisted in localStorage
- **10 service pages** — data centre, IT support, network & cabling, cybersecurity, and more
- **Static export** — all 18 pages pre-rendered at build time, zero server required
- **No database, no auth** — all content in TypeScript data files and CMS-managed JSON
- **Responsive** — mobile-first design with gradient blue/white theme
- **Fail-fast content** — malformed CMS edits break the build with a clear Zod error instead of a broken page in production

---

## Project Structure

```
ABIT_portfolio_website/
├── apps/
│   └── web/                        # Next.js frontend
│       ├── content/                 # CMS-managed JSON (services, testimonials, clients)
│       ├── public/
│       │   ├── logo.png            # Company logo
│       │   ├── clients/            # Client logos (SVG)
│       │   ├── industries/         # Industry icons (SVG)
│       │   └── admin/              # Decap CMS admin panel
│       ├── src/
│       │   ├── app/                # App Router pages
│       │   │   ├── page.tsx        # Home
│       │   │   ├── about/          # About page
│       │   │   ├── services/       # Services list + [slug] detail
│       │   │   ├── locations/      # Coverage map
│       │   │   └── contact/        # Contact form
│       │   ├── components/
│       │   │   ├── layout/         # Header, Footer
│       │   │   ├── sections/       # Hero, ServicesGrid, Stats, etc.
│       │   │   └── ui/             # Shared primitives: PageHero, ButtonLink
│       │   ├── lib/
│       │   │   ├── data.ts         # Validated service/location/testimonial/client data
│       │   │   ├── content-schema.ts # Zod schemas for CMS JSON
│       │   │   ├── cn.ts           # Tailwind class-merging utility
│       │   │   └── i18n/           # en.ts, de.ts, useT() hook
│       │   └── store/
│       │       └── useLanguageStore.ts   # Zustand language store
│       ├── jest.config.ts          # Test runner config
│       ├── next.config.ts          # Static export config
│       └── package.json
├── .gitignore                      # Single repo-wide gitignore
└── netlify.toml                    # Netlify build config
```

---

## Getting Started

```bash
cd apps/web
npm install
npm run dev
```

Open **http://localhost:3000**

---

## Build & Deploy

### Local production build
```bash
cd apps/web
npm run build       # outputs to apps/web/out/
```

### Deploy to Netlify
1. Push repository to GitHub
2. Go to [netlify.com](https://netlify.com) → **Add new site → Import from Git**
3. Select your repository — Netlify auto-reads `netlify.toml`
4. Click **Deploy site**

Build settings (auto-detected from `netlify.toml`):
- **Base directory:** `apps/web`
- **Build command:** `npm install && npm run build`
- **Publish directory:** `apps/web/out`

---

## Testing

```bash
cd apps/web
npm test
```

Jest + Testing Library cover the language store, the Tailwind class-merging utility, and the Zod content schemas. Run `npm run build` to also type-check the whole app and prerender every page — the fastest way to catch a broken page.

---

## Content Updates

No database needed — content lives in JSON (editable via the `/admin` CMS panel) and TypeScript data files:

| File | What to edit |
|------|-------------|
| `content/services.json` | Service catalogue (validated by `lib/content-schema.ts`) |
| `content/testimonials.json` | Client testimonials |
| `content/clients.json` | Key client logos and sectors |
| `src/lib/data.ts` | Locations (not CMS-managed) |
| `src/lib/i18n/en.ts` | All English text |
| `src/lib/i18n/de.ts` | All German text |

CMS-edited JSON is validated against a Zod schema at build time — a missing or malformed field fails the build immediately instead of shipping a broken page.

---
