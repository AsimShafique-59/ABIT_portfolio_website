# ABIT Technical Services — Platform Documentation

> Enterprise IT & Data Center Services Platform serving Europe and the United Kingdom

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Directory Structure](#directory-structure)
  - [Frontend (Next.js)](#frontend-nextjs)
  - [Backend (Node.js)](#backend-nodejs)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [API Design](#api-design)
- [Security](#security)
- [Testing Strategy](#testing-strategy)
- [Deployment](#deployment)
- [Contributing](#contributing)

---

## Overview

**ABIT Technical Services** is a leading IT services provider delivering enterprise-grade solutions across **Europe** and the **United Kingdom**. This platform serves as the company's primary digital presence and client portal, enabling businesses to discover, request, and manage IT services.

### Core Service Lines

| Service | Description |
|---|---|
| Data Center Services | Colocation, managed hosting, and bare-metal provisioning |
| Cloud Infrastructure | Hybrid and multi-cloud management across EU/UK regions |
| Network Solutions | MPLS, SD-WAN, and private peering across European PoPs |
| Managed Security | SOC-as-a-service, threat detection, and GDPR compliance |
| IT Consulting | Digital transformation and infrastructure modernization |
| Disaster Recovery | RTO/RPO-aligned backup and business continuity planning |

---

## Tech Stack

### Frontend
| Layer | Technology |
|---|---|
| Framework | [Next.js 14](https://nextjs.org) (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + shadcn/ui |
| State Management | Zustand |
| Data Fetching | TanStack Query v5 |
| Forms | React Hook Form + Zod |
| Testing | Jest + React Testing Library + Playwright |

### Backend
| Layer | Technology |
|---|---|
| Runtime | Node.js 20 LTS |
| Framework | Express.js / Fastify |
| Language | TypeScript |
| ORM | Prisma |
| Database | PostgreSQL 16 |
| Cache | Redis 7 |
| Queue | BullMQ |
| Auth | JWT + OAuth2 (Auth0) |
| Testing | Jest + Supertest |
| Docs | Swagger / OpenAPI 3.1 |

### Infrastructure
| Layer | Technology |
|---|---|
| Container | Docker + Docker Compose |
| Orchestration | Kubernetes (EKS / AKS) |
| CI/CD | GitHub Actions |
| CDN | Cloudflare |
| Monitoring | Grafana + Prometheus |
| Logging | Loki + Winston |

---

## Architecture

```
┌───────────────────────────────────────────────────────────┐
│                     Client (Browser)                      │
└─────────────────────────┬─────────────────────────────────┘
                          │ HTTPS
┌─────────────────────────▼─────────────────────────────────┐
│              Cloudflare CDN / WAF / DDoS                  │
└─────────────────────────┬─────────────────────────────────┘
                          │
┌─────────────────────────▼─────────────────────────────────┐
│             Next.js App (Vercel / Self-hosted)            │
│          SSR · SSG · ISR · API Routes (BFF)               │
└──────────┬──────────────────────────────────┬─────────────┘
           │ REST / GraphQL                   │ Internal SDK
┌──────────▼──────────┐           ┌───────────▼─────────────┐
│   Node.js REST API  │           │  Node.js Services API   │
│   (Public-facing)   │           │  (Internal microservice) │
└──────────┬──────────┘           └───────────┬─────────────┘
           │                                  │
┌──────────▼──────────────────────────────────▼─────────────┐
│                  PostgreSQL · Redis · BullMQ               │
└───────────────────────────────────────────────────────────┘
```

---

## Directory Structure

### Frontend (Next.js)

```
apps/web/
├── public/                         # Static assets
│   ├── images/
│   │   ├── logo.svg
│   │   ├── hero/
│   │   └── services/
│   ├── fonts/
│   └── favicon.ico
│
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── (marketing)/            # Public marketing pages (route group)
│   │   │   ├── page.tsx            # Home
│   │   │   ├── about/
│   │   │   │   └── page.tsx
│   │   │   ├── services/
│   │   │   │   ├── page.tsx        # Services listing
│   │   │   │   ├── data-center/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── cloud/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── network/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── security/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── disaster-recovery/
│   │   │   │       └── page.tsx
│   │   │   ├── locations/
│   │   │   │   ├── page.tsx        # EU & UK data center map
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx    # Individual location detail
│   │   │   ├── case-studies/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx
│   │   │   ├── blog/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx
│   │   │   ├── contact/
│   │   │   │   └── page.tsx
│   │   │   └── layout.tsx          # Marketing layout (header + footer)
│   │   │
│   │   ├── (auth)/                 # Auth pages (route group)
│   │   │   ├── login/
│   │   │   │   └── page.tsx
│   │   │   ├── register/
│   │   │   │   └── page.tsx
│   │   │   └── layout.tsx
│   │   │
│   │   ├── (portal)/               # Client portal (protected)
│   │   │   ├── dashboard/
│   │   │   │   └── page.tsx
│   │   │   ├── services/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [id]/
│   │   │   │       └── page.tsx
│   │   │   ├── support/
│   │   │   │   ├── page.tsx
│   │   │   │   └── tickets/
│   │   │   │       ├── page.tsx
│   │   │   │       └── [id]/
│   │   │   │           └── page.tsx
│   │   │   ├── invoices/
│   │   │   │   └── page.tsx
│   │   │   ├── settings/
│   │   │   │   └── page.tsx
│   │   │   └── layout.tsx          # Portal layout (sidebar)
│   │   │
│   │   ├── api/                    # Next.js API Routes (BFF layer)
│   │   │   ├── auth/
│   │   │   │   └── [...nextauth]/
│   │   │   │       └── route.ts
│   │   │   ├── contact/
│   │   │   │   └── route.ts
│   │   │   └── revalidate/
│   │   │       └── route.ts
│   │   │
│   │   ├── error.tsx
│   │   ├── not-found.tsx
│   │   ├── global-error.tsx
│   │   └── layout.tsx              # Root layout
│   │
│   ├── components/
│   │   ├── ui/                     # Primitive/shadcn components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── dialog.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── layout/                 # Structural layout components
│   │   │   ├── Header/
│   │   │   │   ├── Header.tsx
│   │   │   │   ├── NavMenu.tsx
│   │   │   │   └── MobileMenu.tsx
│   │   │   ├── Footer/
│   │   │   │   ├── Footer.tsx
│   │   │   │   └── FooterLinks.tsx
│   │   │   └── Sidebar/
│   │   │       └── Sidebar.tsx
│   │   │
│   │   ├── sections/               # Page-level content sections
│   │   │   ├── HeroSection/
│   │   │   │   ├── HeroSection.tsx
│   │   │   │   └── HeroSection.test.tsx
│   │   │   ├── ServicesGrid/
│   │   │   │   ├── ServicesGrid.tsx
│   │   │   │   └── ServiceCard.tsx
│   │   │   ├── LocationsMap/
│   │   │   │   └── LocationsMap.tsx
│   │   │   ├── TestimonialsCarousel/
│   │   │   │   └── TestimonialsCarousel.tsx
│   │   │   ├── ContactForm/
│   │   │   │   ├── ContactForm.tsx
│   │   │   │   └── ContactForm.test.tsx
│   │   │   └── StatsBar/
│   │   │       └── StatsBar.tsx
│   │   │
│   │   └── shared/                 # Reusable cross-feature components
│   │       ├── SEO/
│   │       │   └── MetaTags.tsx
│   │       ├── LoadingSpinner/
│   │       │   └── LoadingSpinner.tsx
│   │       ├── ErrorBoundary/
│   │       │   └── ErrorBoundary.tsx
│   │       └── CookieConsent/
│   │           └── CookieConsent.tsx
│   │
│   ├── features/                   # Feature-scoped logic (colocation)
│   │   ├── services/
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   ├── api.ts
│   │   │   └── types.ts
│   │   ├── portal/
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   ├── api.ts
│   │   │   └── types.ts
│   │   └── support/
│   │       ├── components/
│   │       ├── hooks/
│   │       ├── api.ts
│   │       └── types.ts
│   │
│   ├── hooks/                      # Global custom hooks
│   │   ├── useAuth.ts
│   │   ├── useMediaQuery.ts
│   │   └── useDebounce.ts
│   │
│   ├── lib/                        # Utilities and configuration
│   │   ├── api-client.ts           # Axios/fetch wrapper
│   │   ├── auth.ts                 # NextAuth config
│   │   ├── fonts.ts
│   │   ├── metadata.ts             # Default metadata factory
│   │   └── utils.ts                # cn(), formatDate(), etc.
│   │
│   ├── store/                      # Zustand global state
│   │   ├── useUIStore.ts
│   │   └── usePortalStore.ts
│   │
│   ├── types/                      # Shared TypeScript types
│   │   ├── api.ts
│   │   ├── services.ts
│   │   └── user.ts
│   │
│   └── styles/
│       └── globals.css
│
├── tests/
│   └── e2e/                        # Playwright E2E tests
│       ├── homepage.spec.ts
│       ├── contact.spec.ts
│       └── portal.spec.ts
│
├── .env.local                      # Local env (gitignored)
├── .env.example
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── jest.config.ts
├── playwright.config.ts
└── package.json
```

---

### Backend (Node.js)

```
apps/api/
├── src/
│   ├── config/                     # App configuration
│   │   ├── app.config.ts           # Port, env, app-level settings
│   │   ├── db.config.ts            # Database connection
│   │   ├── redis.config.ts
│   │   └── auth.config.ts
│   │
│   ├── modules/                    # Feature modules (domain-driven)
│   │   ├── services/
│   │   │   ├── services.controller.ts
│   │   │   ├── services.service.ts
│   │   │   ├── services.repository.ts
│   │   │   ├── services.routes.ts
│   │   │   ├── services.schema.ts  # Zod validation schemas
│   │   │   ├── services.types.ts
│   │   │   └── services.test.ts
│   │   │
│   │   ├── locations/
│   │   │   ├── locations.controller.ts
│   │   │   ├── locations.service.ts
│   │   │   ├── locations.repository.ts
│   │   │   ├── locations.routes.ts
│   │   │   ├── locations.schema.ts
│   │   │   ├── locations.types.ts
│   │   │   └── locations.test.ts
│   │   │
│   │   ├── contact/
│   │   │   ├── contact.controller.ts
│   │   │   ├── contact.service.ts
│   │   │   ├── contact.routes.ts
│   │   │   ├── contact.schema.ts
│   │   │   └── contact.test.ts
│   │   │
│   │   ├── portal/
│   │   │   ├── tickets/
│   │   │   ├── invoices/
│   │   │   └── dashboard/
│   │   │
│   │   ├── blog/
│   │   │   ├── blog.controller.ts
│   │   │   ├── blog.service.ts
│   │   │   ├── blog.repository.ts
│   │   │   ├── blog.routes.ts
│   │   │   ├── blog.schema.ts
│   │   │   └── blog.test.ts
│   │   │
│   │   └── auth/
│   │       ├── auth.controller.ts
│   │       ├── auth.service.ts
│   │       ├── auth.middleware.ts
│   │       ├── auth.routes.ts
│   │       └── auth.test.ts
│   │
│   ├── shared/                     # Cross-module shared utilities
│   │   ├── middleware/
│   │   │   ├── error.middleware.ts
│   │   │   ├── rate-limit.middleware.ts
│   │   │   ├── cors.middleware.ts
│   │   │   ├── logger.middleware.ts
│   │   │   └── validate.middleware.ts
│   │   │
│   │   ├── errors/
│   │   │   ├── AppError.ts
│   │   │   ├── NotFoundError.ts
│   │   │   └── ValidationError.ts
│   │   │
│   │   ├── utils/
│   │   │   ├── response.ts         # Standardised response envelope
│   │   │   ├── pagination.ts
│   │   │   └── logger.ts           # Winston logger
│   │   │
│   │   └── types/
│   │       ├── express.d.ts        # Express Request augmentation
│   │       └── common.types.ts
│   │
│   ├── database/
│   │   ├── prisma/
│   │   │   ├── schema.prisma
│   │   │   └── migrations/
│   │   └── seeds/
│   │       ├── seed.ts
│   │       └── data/
│   │           ├── services.seed.ts
│   │           └── locations.seed.ts
│   │
│   ├── jobs/                       # BullMQ background jobs
│   │   ├── queues.ts
│   │   ├── email.job.ts
│   │   └── report.job.ts
│   │
│   ├── app.ts                      # Express app setup
│   └── server.ts                   # HTTP server entry point
│
├── tests/
│   ├── integration/
│   │   ├── services.test.ts
│   │   └── contact.test.ts
│   └── fixtures/
│       └── db.fixture.ts
│
├── .env
├── .env.example
├── tsconfig.json
├── jest.config.ts
└── package.json
```

---

### Monorepo Root

```
abit-platform/
├── apps/
│   ├── web/                        # Next.js frontend
│   └── api/                        # Node.js backend
│
├── packages/
│   ├── ui/                         # Shared component library
│   │   ├── src/
│   │   └── package.json
│   ├── types/                      # Shared TypeScript types
│   │   ├── src/
│   │   └── package.json
│   ├── config/                     # Shared ESLint, Prettier, TS configs
│   │   ├── eslint-config/
│   │   ├── prettier-config/
│   │   └── tsconfig/
│   └── utils/                      # Shared utility functions
│       ├── src/
│       └── package.json
│
├── infra/
│   ├── docker/
│   │   ├── Dockerfile.web
│   │   ├── Dockerfile.api
│   │   └── docker-compose.yml
│   ├── k8s/
│   │   ├── web-deployment.yaml
│   │   ├── api-deployment.yaml
│   │   └── ingress.yaml
│   └── terraform/                  # IaC for EU/UK regions
│       ├── eu-west/
│       └── uk-south/
│
├── .github/
│   └── workflows/
│       ├── ci.yml
│       ├── deploy-staging.yml
│       └── deploy-production.yml
│
├── .husky/
│   ├── pre-commit
│   └── commit-msg
│
├── turbo.json                      # Turborepo pipeline
├── pnpm-workspace.yaml
├── package.json
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js >= 20 LTS
- pnpm >= 9
- Docker & Docker Compose
- PostgreSQL 16 (or use Docker)
- Redis 7 (or use Docker)

### Installation

```bash
# Clone the repository
git clone https://github.com/abit-tech/platform.git
cd platform

# Install all dependencies (monorepo)
pnpm install

# Copy environment files
cp apps/web/.env.example apps/web/.env.local
cp apps/api/.env.example apps/api/.env

# Start infrastructure (DB + Redis)
docker compose -f infra/docker/docker-compose.yml up -d db redis

# Run database migrations and seed
pnpm --filter @abit/api db:migrate
pnpm --filter @abit/api db:seed

# Start all apps in development mode
pnpm dev
```

### Development URLs

| Service | URL |
|---|---|
| Frontend | http://localhost:3000 |
| Backend API | http://localhost:4000 |
| API Docs (Swagger) | http://localhost:4000/docs |
| Prisma Studio | http://localhost:5555 |

---

## Environment Variables

### Frontend — `apps/web/.env.local`

```env
NEXT_PUBLIC_API_URL=http://localhost:4000/api/v1
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GOOGLE_MAPS_KEY=your_key_here

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret

AUTH0_CLIENT_ID=your_auth0_client_id
AUTH0_CLIENT_SECRET=your_auth0_client_secret
AUTH0_ISSUER=https://your-tenant.auth0.com
```

### Backend — `apps/api/.env`

```env
NODE_ENV=development
PORT=4000
API_BASE_URL=http://localhost:4000

DATABASE_URL=postgresql://postgres:password@localhost:5432/abit_db
REDIS_URL=redis://localhost:6379

JWT_SECRET=your_jwt_secret
JWT_EXPIRY=1d

AUTH0_DOMAIN=your-tenant.auth0.com
AUTH0_AUDIENCE=https://api.abit-tech.com

SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=noreply@abit-tech.com
SMTP_PASS=your_smtp_password

SENTRY_DSN=your_sentry_dsn
```

---

## Scripts

### Root (Turborepo)

```bash
pnpm dev           # Start all apps
pnpm build         # Build all apps
pnpm test          # Run all tests
pnpm lint          # Lint all packages
pnpm format        # Format all packages
pnpm type-check    # TypeScript check all packages
```

### Frontend

```bash
pnpm --filter @abit/web dev
pnpm --filter @abit/web build
pnpm --filter @abit/web test
pnpm --filter @abit/web test:e2e
```

### Backend

```bash
pnpm --filter @abit/api dev
pnpm --filter @abit/api build
pnpm --filter @abit/api test
pnpm --filter @abit/api db:migrate
pnpm --filter @abit/api db:seed
pnpm --filter @abit/api db:studio
```

---

## API Design

All API responses follow a consistent envelope format:

```json
{
  "success": true,
  "data": { },
  "error": null,
  "meta": {
    "total": 100,
    "page": 1,
    "limit": 20
  }
}
```

### Base URL

```
https://api.abit-tech.com/api/v1
```

### Key Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/services` | List all IT services |
| GET | `/services/:slug` | Get service detail |
| GET | `/locations` | List EU/UK data center locations |
| GET | `/locations/:slug` | Get location detail |
| GET | `/blog` | List blog posts |
| GET | `/blog/:slug` | Get blog post |
| POST | `/contact` | Submit contact/enquiry form |
| POST | `/auth/login` | Authenticate user |
| GET | `/portal/dashboard` | Client portal dashboard (protected) |
| GET | `/portal/tickets` | Support tickets (protected) |
| POST | `/portal/tickets` | Create support ticket (protected) |

---

## Security

### Practices Enforced

- All endpoints behind rate limiting (express-rate-limit)
- JWT authentication with short-lived tokens + refresh rotation
- Input validation via Zod on every request body and query param
- SQL injection prevention via Prisma parameterised queries
- XSS prevention via sanitize-html on all rich-text fields
- CORS restricted to allowed origins
- GDPR-compliant cookie consent (EU/UK requirement)
- Secrets managed via environment variables — never committed
- Security headers via Helmet.js
- HTTPS enforced in all non-local environments

### GDPR Compliance (EU/UK)

- Cookie consent banner on first visit
- Data subject request endpoints (`/portal/privacy`)
- Audit log for all data access and mutations
- Data retention policies enforced at DB level
- No personal data logged to application logs

---

## Testing Strategy

| Layer | Tool | Coverage Target |
|---|---|---|
| Unit | Jest | 80% |
| Integration | Jest + Supertest | Key API flows |
| Component | React Testing Library | Critical components |
| E2E | Playwright | All critical user journeys |

### Running Tests

```bash
# All tests
pnpm test

# Watch mode
pnpm test --watch

# Coverage report
pnpm test --coverage

# E2E only
pnpm --filter @abit/web test:e2e
```

---

## Deployment

### Environments

| Environment | Frontend | Backend |
|---|---|---|
| Development | `localhost:3000` | `localhost:4000` |
| Staging | `staging.abit-tech.com` | `api.staging.abit-tech.com` |
| Production (EU) | `abit-tech.com` | `api.abit-tech.com` |
| Production (UK) | `abit-tech.co.uk` | `api.uk.abit-tech.com` |

### CI/CD Pipeline (GitHub Actions)

```
Push to feature/* → Lint → Type Check → Unit Tests → Build
Push to main      → All above + Integration Tests + Deploy to Staging
Tag v*.*.*        → All above + E2E Tests + Deploy to Production (EU & UK)
```

### Docker

```bash
# Build and run the full stack
docker compose -f infra/docker/docker-compose.yml up --build
```

---

## Contributing

1. Branch from `main` using the convention: `feat/`, `fix/`, `chore/`, `docs/`
2. Follow [Conventional Commits](https://www.conventionalcommits.org) for all commit messages
3. Ensure all tests pass and coverage remains above 80%
4. Open a pull request against `main` — CI must be green before review
5. One approving review required before merge

### Commit Message Format

```
feat(services): add data center capacity filter
fix(contact): resolve CORS error on form submission
docs(readme): update deployment section for UK region
```

---

> ABIT Technical Services — Powering enterprise IT across Europe and the United Kingdom.
