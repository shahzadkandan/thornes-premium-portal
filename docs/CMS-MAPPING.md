# Headless WordPress CMS Mapping

Date: 2026-07-19

## Goal

Map the approved Thorneberry content model into Headless WordPress so the Next.js frontend can read editable content without exposing secrets or inventing claims.

## Environment Variables

```env
WORDPRESS_API_URL=
WORDPRESS_REVALIDATE_SECRET=
NEXT_PUBLIC_SITE_URL=
```

`WORDPRESS_API_URL` is server-only. It must not be exposed in client components unless the endpoint is intentionally public.
Use the staging WordPress origin only, for example `https://staging.example.com`; do not commit a real URL or secret to Git.

## WordPress Entities

| Entity             | WordPress Source                       | Next.js Target                     | Notes                                                                               |
| ------------------ | -------------------------------------- | ---------------------------------- | ----------------------------------------------------------------------------------- |
| Site Settings      | Options page or REST settings endpoint | `lib/wordpress/site-settings`      | Company name, contact details, logo, social links, default SEO.                     |
| Pages              | `wp/v2/pages`                          | App Router pages                   | Page title, body, SEO fields, hero fields.                                          |
| Services           | Custom post type `service`             | `/services` and `/services/[slug]` | Pharma sourcing, surgical, medical supplies, documentation, logistics, RFQ support. |
| Products           | Custom post type `product`             | `/products` and `/products/[slug]` | Must show actual manufacturer/supplier attribution where available.                 |
| Product Categories | Taxonomy `product_category`            | Product filters and SEO paths      | Medicine, antibiotics, injectables, surgical, consumables, devices, wearables.      |
| Insights           | `wp/v2/posts`                          | `/insights` and `/insights/[slug]` | Buyer education and SEO hub.                                                        |
| Testimonials       | CPT `testimonial`                      | Optional homepage section          | Disabled until real/approved testimonials exist.                                    |
| FAQs               | CPT `faq`                              | Service, RFQ, and Knowledge pages  | Buyer journey questions.                                                            |
| Certifications     | CPT `certification`                    | Optional trust section             | Must be verified before display.                                                    |
| Team               | CPT `team_member`                      | Optional about page                | Use only approved bios/images.                                                      |

## Service Fields

```text
title
slug
short_description
full_content
featured_image
icon_key
benefits[]
process_steps[]
documents[]
cta
seo.title
seo.description
verified_claims[]
```

## Product Fields

```text
title
slug
short_description
full_content
category
gallery[]
specifications[]
certifications[]
documents[]
manufacturer_or_supplier
inquiry_cta
seo.title
seo.description
verified
```

## Homepage Fields

```text
hero.eyebrow
hero.title
hero.highlight
hero.description
hero.primary_cta
hero.secondary_cta
hero.image
trust_items[]
about_summary
selected_services[]
value_propositions[]
gallery[]
testimonials_enabled
cta
contact_block
```

## Live Integration and Fallback Strategy

The frontend should use typed local fallback data when:

- `WORDPRESS_API_URL` is not configured locally.
- WordPress is unavailable or returns a non-success response.
- ACF/custom fields are not exposed through REST.
- A section is intentionally disabled pending verification.

Fallback content must stay neutral and must not contain fake statistics, fake certifications, testimonials, or manufacturer claims.

When `WORDPRESS_API_URL` is configured, the typed queries use the staging REST response first. Page requests also try the standard `wp/v2/pages?slug=` endpoint when the Thorneberry custom page endpoint returns `404`. Service, product, insight and FAQ collections remain mapped through their typed CPT responses.

## Revalidation

The Next.js route `app/api/revalidate/route.ts` accepts the server-only secret and either one `path`, multiple `paths`, or approved `wordpress:*` cache `tags`:

```json
{
  "secret": "<WORDPRESS_REVALIDATE_SECRET>",
  "paths": ["/", "/services", "/services/pharmaceutical-sourcing"],
  "tags": ["wordpress:services"]
}
```

It revalidates only same-origin paths and the known WordPress tag namespace. `GET /api/wordpress/health` provides a no-store staging connectivity check without returning credentials or CMS payloads.

## Current Implementation Status

- Typed schemas cover site settings, homepage, about, contact, RFQ, services, products, insights and FAQs.
- `src/lib/wordpress/mappers.ts` maps REST/ACF-style payloads into the normalized frontend model while preserving verified fallback content when fields are unavailable.
- `src/lib/wordpress/queries.ts` exposes typed page, service, product, insight and FAQ queries with ISR revalidation and safe fallback behavior.
- Next App Router routes consume the typed layer for all migrated pages and detail paths.
- The frontend is intentionally not connected to production WordPress on this branch. Configure a staging `WORDPRESS_API_URL` through `.env.local` or the staging host environment after the endpoint payloads are verified.
- ISR is configured at the root layout and data-fetch levels: settings revalidate after 10 minutes; page, collection and detail data revalidate after 5 minutes.

## Claim Safety

- Manufacturer ownership, certifications, cold-chain/GDP capability, supplier attribution and lead-time promises are not inferred from a product entry.
- Empty or unverified certification/testimonial/team collections remain empty in the UI.
- Fallback content uses buyer-facing coordination language and does not describe Thorneberry as a pharmaceutical manufacturer.
