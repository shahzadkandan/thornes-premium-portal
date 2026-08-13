# Thorneberry Headless Portal

## Project Purpose

This repository contains the Next.js frontend for Thorneberry, positioned as a Pakistan-based healthcare sourcing and export-coordination company for international buyers.

The site focuses on:

- Medicine and pharmaceutical export coordination
- Surgical instruments
- Medical supplies
- Medical wearables
- Quality and export documentation
- Global logistics coordination
- Distributor and importer RFQ support
- Buyer education through the Knowledge Hub

Thorneberry must not be described as a pharmaceutical manufacturer unless an approved CMS record and supporting evidence explicitly establish that claim.

## Current Branch

The working branch is `headless-next-rebuild`.

- `main` must remain untouched during feature work.
- Production must not be changed from this repository.
- Deployment requires explicit approval after staging validation.
- The current staging smoke test is blocked until an approved staging WordPress URL and revalidation secret are available.

## Repository Structure

```text
src/
  app/                         Next.js App Router routes and API handlers
    (site)/                    Public site pages and legacy aliases
    api/                       Contact, RFQ, health and cache revalidation routes
  components/
    next/                      App Router presentation and form components
    site/                      Legacy TanStack-era components retained for reference
    ui/                        Shared UI primitives
  content/fallback/            Verified local fallback content
  lib/
    wordpress/                 REST client, schemas, types, mappers and queries
    seo.ts                     Metadata and canonical URL helpers
  routes/                      Legacy route implementation retained during migration
  assets/                      Local image and static assets
  hooks/                       Shared React hooks
docs/                          Architecture, CMS, deployment and build records
.env.example                   Safe environment variable template
next.config.mjs                Next.js and WordPress image configuration
package.json                   Scripts and dependencies
```

## Route Map

| Route | Purpose |
| --- | --- |
| `/` | Healthcare sourcing and export-coordination homepage |
| `/about` | Company story, role and buyer-facing positioning |
| `/services` | Healthcare solutions catalogue |
| `/services/[slug]` | Service detail pages |
| `/products` | Sourcing catalogue |
| `/products/[slug]` | Product detail pages |
| `/insights` | Knowledge Hub listing |
| `/insights/[slug]` | Buyer education article pages |
| `/contact` | Contact information and enquiry form |
| `/request-a-quote` | RFQ workflow and form |
| `/blog` | Legacy alias for Knowledge Hub |
| `/medicine-exports` | Legacy service alias |
| `/surgical-exports` | Legacy service alias |
| `/medical-exports` | Legacy service alias |

## Local Commands

```bash
npm install
npm run dev
npm run lint
npm run typecheck
npm run build
npm run format
npm audit
```

Use `npm.cmd` on Windows if PowerShell execution policy blocks `npm.ps1`.

## Environment

Environment values belong in `.env.local` or the hosting provider's secret store. Never commit them.

```env
NEXT_PUBLIC_SITE_URL=https://staging.example.com
WORDPRESS_API_URL=https://staging-wordpress.example.com
WORDPRESS_REVALIDATE_SECRET=replace-with-a-random-secret
```

`WORDPRESS_API_URL` and `WORDPRESS_REVALIDATE_SECRET` are server-side values. They must not be rendered into client components or logged.

## Related Documents

- [ARCHITECTURE.md](ARCHITECTURE.md): system design and request flow
- [CONTRIBUTING.md](CONTRIBUTING.md): coding and branching workflow
- [EDITOR-GUIDE.md](EDITOR-GUIDE.md): WordPress editor workflow and field rules
- [TASKS.md](TASKS.md): active work and Definition of Done
- [docs/CMS-MAPPING.md](docs/CMS-MAPPING.md): detailed REST and field mapping
- [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md): release policy and environment setup
- [docs/BUILD-STATUS.md](docs/BUILD-STATUS.md): validation history and known blockers
