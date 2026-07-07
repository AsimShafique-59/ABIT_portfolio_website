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
| Styling | Tailwind CSS v4 |
| State | Zustand v5 (language toggle persistence) |
| i18n | Client-side EN/DE toggle via custom `useT()` hook |
| Deployment | Netlify (static export) |

---

## Features

- **Bilingual** — full English / German toggle, persisted in localStorage
- **10 service pages** — data centre, IT support, network & cabling, cybersecurity, and more
- **Static export** — all 18 pages pre-rendered at build time, zero server required
- **No database, no auth** — all content in TypeScript data files
- **Responsive** — mobile-first design with gradient blue/white theme

---

## Project Structure

```
ABIT_portfolio_website/
├── apps/
│   └── web/                        # Next.js frontend
│       ├── public/
│       │   └── logo.png            # Company logo
│       ├── src/
│       │   ├── app/                # App Router pages
│       │   │   ├── page.tsx        # Home
│       │   │   ├── about/          # About page
│       │   │   ├── services/       # Services list + [slug] detail
│       │   │   ├── locations/      # Coverage map
│       │   │   └── contact/        # Contact form
│       │   ├── components/
│       │   │   ├── layout/         # Header, Footer
│       │   │   └── sections/       # Hero, ServicesGrid, Stats, etc.
│       │   ├── lib/
│       │   │   ├── data.ts         # All service/location/stats data
│       │   │   └── i18n/           # en.ts, de.ts, useT() hook
│       │   └── store/
│       │       └── useLanguageStore.ts   # Zustand language store
│       ├── next.config.ts          # Static export config
│       └── package.json
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

## Content Updates

All site content lives in two files — no database needed:

| File | What to edit |
|------|-------------|
| `src/lib/data.ts` | Services, stats, locations |
| `src/lib/i18n/en.ts` | All English text |
| `src/lib/i18n/de.ts` | All German text |

---

## Contact

**AB IT and Technical Services**
10 Halliwell Lane, Manchester, England, M8 9ER

- Belgium: +32 487 720065
- Germany: +49 176 21472983
- Service Delivery: muhammad.abdullah@abittechnical.co.uk
- Technical Delivery: basim.shafique@abittechnical.co.uk
