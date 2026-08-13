# Architecture

## Overview

Thorneberry uses a Next.js App Router frontend with a server-side typed WordPress data layer. WordPress is the editable CMS; Next.js owns the presentation, routing, metadata, caching and form endpoints.

```text
WordPress REST / custom endpoints
              |
              v
src/lib/wordpress/client.ts
              |
              v
schemas -> mappers -> typed queries -> App Router pages
                                      |
                                      v
                         Next components and metadata
```

## Application Layers

### App Router

`src/app` contains public routes, dynamic detail pages, metadata generation, sitemap and server API handlers.

- Pages fetch data on the server.
- Dynamic pages use `generateStaticParams` for known CMS/fallback slugs.
- Unknown CMS slugs remain valid when the live collection contains them.
- Legacy paths remain available as aliases to protect existing URLs.

### Components

`src/components/next` contains the current App Router UI. Components receive typed content and should not fetch WordPress directly.

- `site-shell.tsx`: global header, footer, floating actions and layout shell
- `site-header.tsx`: CMS-driven navigation and healthcare solution menu
- `site-footer.tsx`: CMS-driven contact and capability links
- `lead-form.tsx`: contact and RFQ form client behavior
- `site-primitives.tsx`: shared layout, buttons, images and content primitives

### WordPress Data Layer

`src/lib/wordpress` is the only integration boundary for CMS reads.

- `schemas.ts`: Zod response and normalized model schemas
- `types.ts`: TypeScript types inferred from schemas
- `mappers.ts`: REST, ACF, `meta`, `fields` and nested `data` normalization
- `queries.ts`: typed site, page, service, product, insight and FAQ queries
- `client.ts`: timeout, fetch caching, tags, response validation and fallback handling
- `endpoints.ts`: WordPress endpoint paths

Pages should call query functions, not `fetch` WordPress endpoints themselves.

## CMS Request Flow

1. A server-rendered route calls a query such as `getHomepage()` or `getServices()`.
2. The query calls `wordpressRequest()` with a Zod schema, cache duration, cache tags and verified fallback data.
3. The client requests the staging WordPress origin from `WORDPRESS_API_URL`.
4. A valid response is parsed and mapped into the normalized frontend model.
5. A 404 page endpoint may fall back to standard `wp/v2/pages?slug=`.
6. An absent API, timeout, non-success response or invalid response shape returns the local fallback.
7. The page renders only the normalized typed model.

## Fallback State Machine

```text
WORDPRESS_API_URL absent
        |
        v
verified local fallback

WORDPRESS_API_URL present
        |
        v
request -> valid response -> map and render live CMS data
        |
        +-> 404 page -> try standard WordPress page endpoint
        |
        +-> timeout / non-2xx / invalid schema -> verified fallback
```

Fallback content is not a second source of unsupported claims. It must remain neutral, verified and free of fake statistics, certifications, testimonials or manufacturer assertions.

## Caching and ISR

- Root layout revalidation: 5 minutes
- Site settings: 10 minutes
- Pages, services, products, insights and FAQs: 5 minutes
- WordPress fetches carry named `wordpress:*` cache tags
- `/api/revalidate` supports paths and approved tag names
- `/api/wordpress/health` is `no-store` and never returns CMS payloads

Example webhook request:

```json
{
  "secret": "<WORDPRESS_REVALIDATE_SECRET>",
  "paths": ["/", "/services", "/services/pharmaceutical-sourcing"],
  "tags": ["wordpress:services"]
}
```

The route rejects missing or incorrect secrets, unsafe paths and tags outside the `wordpress:*` namespace.

## Forms and API Routes

- `/api/contact` validates contact submissions and currently requires an approved mail transport for delivery.
- `/api/rfq` validates RFQ submissions and currently requires an approved mail transport for delivery.
- Both routes use server-side validation and must not expose SMTP credentials to the browser.

## Images and SEO

- `next/image` is used for normalized image assets.
- WordPress image hosts are configured through `WORDPRESS_API_URL` in `next.config.mjs`.
- Page metadata is generated through `src/lib/seo.ts`.
- Canonical URLs use `NEXT_PUBLIC_SITE_URL` or CMS site settings.
- `src/app/sitemap.ts` uses the same typed collections as the page routes.

## Security Boundaries

- No WordPress credentials belong in source files, fallback content or client bundles.
- No production URL is used as a staging substitute.
- Webhook secrets are compared server-side only.
- CMS claims are displayed only when present in approved data or verified fallback content.
- Production and `main` remain outside normal feature work.
