# WordPress Editor Guide

## Purpose

WordPress is the editable content source for the headless Next.js frontend. Editors should update content in staging first, verify the rendered result, and publish only after claims, images and SEO fields are approved.

## Before Editing

1. Confirm you are in the approved staging WordPress environment.
2. Do not edit production as part of normal content work.
3. Keep a record of the page, post or CPT item being changed.
4. Confirm the content has an approved source or internal review owner.

## Content Types

### Site Settings

Use the settings/options area for global values:

- Company name
- Site URL
- Email
- Phone and WhatsApp
- Address and working hours
- Logo and default Open Graph image
- Social links
- Default SEO title and description
- Header CTA
- Footer text and navigation links

These values affect the header, footer, metadata and contact surfaces across the site.

### Pages

The expected page slugs are:

| WordPress slug | Frontend route |
| --- | --- |
| `home` | `/` |
| `about` | `/about` |
| `contact` | `/contact` |
| `request-a-quote` | `/request-a-quote` |

Page fields may be exposed directly, under `acf`, `meta`, `fields` or a custom `data` object. The frontend mapper normalizes these shapes.

### Services

Use the `service` custom post type for:

- Pharmaceutical sourcing
- Medicine export coordination
- Surgical instruments
- Medical supplies
- Medical wearables
- Quality and documentation
- Global logistics
- Importer RFQ support

Required editorial fields:

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
verified
```

### Products

Use the `product` custom post type for the sourcing catalogue. Product entries must remain buyer-facing and must not imply guaranteed availability.

```text
title
slug
short_description
full_content
category
featured_image or gallery[]
specifications[]
certifications[]
documents[]
manufacturer_or_supplier
inquiry_cta
seo.title
seo.description
verified
```

Only enter certifications and manufacturer/supplier details when they are supported by approved documentation.

### Insights

Use standard WordPress posts for Knowledge Hub articles. Good topics include medicine sourcing, RFQ preparation, quality documentation, Incoterms, shipment planning, surgical procurement and buyer education.

Important fields:

- Title
- Excerpt
- Content
- Category and tags
- Author and role
- Publication date
- Reading time
- Featured image
- Featured flag
- SEO title and description

Avoid unsupported claims in educational articles. Explain that requirements vary by destination, product and buyer documentation.

### FAQs

Use the `faq` custom post type for buyer questions used across RFQ and service contexts.

```text
question
answer
category
order
```

Answers should be clear, cautious and consistent with Thorneberry's sourcing and export-coordination role.

## Editorial Claim Rules

Do not publish a claim unless the evidence is available and approved. This includes:

- Manufacturing ownership or factory capacity
- Regulatory approvals or named certifications
- GDP, cold-chain or storage capability
- Exact stock levels, pricing or guaranteed lead times
- Testimonials, client logos or performance statistics
- Exclusive supplier or distributor status

Use coordination language such as "supports", "coordinates", "reviews" and "subject to destination and product requirements" where the underlying evidence is not a formal guarantee.

## Images

- Use approved, relevant healthcare, product or logistics imagery.
- Provide descriptive alt text.
- Do not use private backup paths or credentials in media fields.
- Confirm the image is readable and correctly cropped on mobile.
- Avoid images that imply manufacturing, certification or ownership without evidence.

## SEO and Preview Workflow

1. Edit the CMS content in staging.
2. Confirm slug and canonical intent.
3. Write a specific SEO title and description without keyword stuffing.
4. Preview the matching Next.js route.
5. Check heading hierarchy, links, images and mobile layout.
6. Trigger approved revalidation after content approval.
7. Recheck the page after cache refresh.

## Revalidation Webhook

The Next.js endpoint accepts a server-only secret. Use the approved webhook integration from staging WordPress; do not put the secret in client JavaScript or editor notes.

```json
{
  "secret": "<WORDPRESS_REVALIDATE_SECRET>",
  "paths": ["/", "/insights", "/insights/example-slug"],
  "tags": ["wordpress:insights"]
}
```

Only same-origin paths and `wordpress:*` tags are accepted. A content update is not considered verified until the rendered Next.js page shows the expected change.

## Publishing Checklist

- Correct staging environment confirmed
- Content source or approval confirmed
- No unsupported claims added
- Product/manufacturer/certification fields verified
- Image alt text and crop checked
- SEO title, description and slug checked
- Internal links work
- Mobile preview checked
- Revalidation completed
- Final rendered page reviewed
