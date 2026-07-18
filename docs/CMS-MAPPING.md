# Headless WordPress CMS Mapping

Date: 2026-07-18

## Goal

Map the approved Thorneberry content model into Headless WordPress so the Next.js frontend can read editable content without exposing secrets or inventing claims.

## Environment Variables

```env
WORDPRESS_API_URL=
WORDPRESS_REVALIDATE_SECRET=
NEXT_PUBLIC_SITE_URL=
```

`WORDPRESS_API_URL` is server-only. It must not be exposed in client components unless the endpoint is intentionally public.

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

## Fallback Strategy

The frontend should use typed local fallback data when:

- WordPress is unavailable.
- ACF/custom fields are not exposed through REST.
- A section is intentionally disabled pending verification.

Fallback content must stay neutral and must not contain fake statistics, fake certifications, testimonials, or manufacturer claims.

## Revalidation

The Next.js route `app/api/revalidate/route.ts` accepts a secret and path. It should be connected to WordPress webhooks only after staging is configured.

## Current Implementation Status

- Initial TypeScript schemas are scaffolded in `src/lib/wordpress/schemas.ts`.
- WordPress client wrapper is scaffolded in `src/lib/wordpress/client.ts`.
- Fallback content is scaffolded in `src/content/fallback/site.ts`.
- The current PR does not connect to a production WordPress instance.
