# Thorneberry CMS Migration Dry Run

**Date:** 2026-07-21
**Mode:** Read-only audit; no production write attempted

## Live REST Contract

Production: `https://thorneberry.com.pk`

| Endpoint | Result | Current data |
| --- | --- | ---: |
| `/wp-json/thorneberry/v1/settings` | HTTP 200 | Object returned; settings values are empty |
| `/wp-json/wp/v2/services` | HTTP 200 | 0 |
| `/wp-json/wp/v2/products` | HTTP 200 | 0 |
| `/wp-json/wp/v2/posts` | HTTP 200 | 0 |
| `/wp-json/wp/v2/pages` | HTTP 200 | 0 |
| `/wp-json/wp/v2/faqs` | HTTP 200 | 0 |
| `/wp-json/wp/v2/testimonials` | HTTP 200 | 0 |
| `/wp-json/wp/v2/certifications` | HTTP 200 | 0 |
| `/wp-json/wp/v2/team-members` | HTTP 200 | 0 |
| `/wp-json/wp/v2/product-categories` | HTTP 200 | 0 |

The live namespace includes `thorneberry/v1`. The canonical plugin routes use `service` with REST base `services`, `product` with REST base `products`, `faq`, `testimonial`, `certification`, `team_member` with REST base `team-members`, and the `product_category` taxonomy with REST base `product-categories`.

The live installation also exposes duplicate registrations for `services` and `team-member`. The migration must use the canonical plugin routes above and must not create content in the duplicate route.

## Planned Actions

| Action | Planned | Executed |
| --- | ---: | ---: |
| Site Settings update | 1 | 0 |
| Page creates/updates | 4 candidates | 0 |
| Service creates/updates | 3 candidates | 0 |
| Product creates/updates | 493 candidates | 0 |
| Post creates/updates | 0 | 0 |
| FAQ creates/updates | 0 | 0 |
| Testimonial creates/updates | 0 | 0 |
| Certification creates/updates | 0 | 0 |
| Team Member creates/updates | 0 | 0 |
| Taxonomy terms | Pending product approval | 0 |
| Media uploads | 14 candidates | 0 |
| Deletes | 0 | 0 |

## Dry-Run Result

The dry-run is **blocked for production apply**. The source audit identified content that must not be written without confirmation, and no write credential is configured in the environment. The safe behavior is to log `skip` for held records and never silently publish them.

The import tool is `scripts/wordpress-migration.mjs`. It defaults to `MIGRATION_MODE=dry-run`, requires an explicit backup confirmation and an explicit apply token for writes, updates records by slug, never deletes, and logs every action.

Example read-only run:

```powershell
$env:MIGRATION_MODE = "dry-run"
node scripts/wordpress-migration.mjs
```

The read-only run completed with `destructive_actions=0`: 10 content records were skipped because they require confirmation or contain demo/missing evidence, 13 media candidates were held because they need asset/alt-text approval, and Site Settings were skipped because the public REST contract is read-only for that options data.

Apply mode is intentionally not run in this sprint because the production write gate is not satisfied.
