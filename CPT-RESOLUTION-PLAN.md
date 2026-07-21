# CPT Resolution Plan

**Date:** 2026-07-21
**Branch:** `headless-next-rebuild`
**Status:** Documentation-only recommendation
**Production writes:** None

## Recommended Authority

Keep `thorneberry-headless-cms` as the single authoritative registration source for:

- `service` with REST base `services`
- `product` with REST base `products`
- `testimonial` with REST base `testimonials`
- `faq` with REST base `faqs`
- `certification` with REST base `certifications`
- `team_member` with REST base `team-members`
- `product_category` with REST base `product-categories`

This is the smallest safe choice because the Next.js frontend and the current REST documentation already use these canonical routes. Changing REST bases would create an unnecessary frontend and SEO compatibility problem.

## Duplicate Resolution Recommendation

### `service` / `services`

1. Keep `service` from `thorneberry-headless-cms`.
2. Do not change the canonical REST base `services`.
3. Use authenticated WP-CLI/SSH or a controlled admin inspection to locate the source registering `services`.
4. Remove or guard only that duplicate registration in a future plugin/theme patch after source confirmation.
5. Flush rewrite rules only as part of that controlled change.

This duplicate must not be resolved by renaming the canonical REST base. Both registrations currently claim `services`, so source identification is required before any code change.

### `team_member` / `team-member`

1. Keep `team_member` from `thorneberry-headless-cms`.
2. Keep the canonical REST base `team-members`.
3. Locate the unknown `team-member` registration through authenticated server/plugin inspection.
4. Remove or guard the duplicate in a future controlled patch after checking for private/draft records.
5. Do not merge records automatically while the source and data status are unknown.

The second duplicate has a different REST base, so it is less immediately dangerous, but it can still split editorial data and create ambiguous migration paths.

## Why No Plugin Patch Is Included Now

A plugin patch is **not required for this read-only audit** and would be unsafe before the unknown registration source is identified. Adding defensive `post_type_exists()` logic to the companion plugin would not remove an already registered type and could hide the real source of the duplicate.

A future patch may be required after authenticated inspection confirms that the duplicate is legacy code owned by the companion plugin, a separate plugin, the active theme, or a server-side custom loader.

## Legacy Package Assessment

The older `thorneberry-core` package registers different keys:

- `tb_solution`
- `tb_sourcing_item`
- `tb_solution_type`
- `tb_product_category`
- `tb_supplier`

These are not the same keys or REST bases as the current canonical model. The current public REST registry did not expose them. They should be handled as a separate legacy model only if an authenticated database audit finds records.

## Safe Future Change Sequence

No step below was executed in this audit.

1. Create and verify a fresh production files/database backup.
2. Record the registered post types and taxonomies with authenticated WP-CLI before changing anything.
3. List active plugins and themes, then search their deployed PHP source for `register_post_type` and `register_taxonomy` calls for the duplicate keys.
4. Check all statuses, IDs, slugs, authors, dates and metadata for `service`, `services`, `team_member`, `team-member`, and legacy `tb_*` records.
5. If records exist in an unknown duplicate, map them to the canonical type by slug and preserve the original IDs/metadata in a migration log before disabling the duplicate source.
6. Apply the smallest source-level change: remove or guard the duplicate registration, while keeping canonical route names unchanged.
7. Flush rewrite rules once through the controlled deployment procedure.
8. Verify the REST type registry, canonical routes, legacy route behavior, admin editing and Next.js reads.
9. Keep a rollback path to the pre-change backup and the prior plugin/theme files.

## Current Data Gate

Public read-only checks found:

- `service` route: 0 published records, no slugs
- `services` route: 0 published records, no slugs
- `team_member` route: 0 published records, no slugs
- `team-member` route: 0 published records, no slugs

Therefore no public content migration is currently required before resolving the duplicate registrations. A database-level check remains mandatory because public REST does not expose drafts, private posts, trashed posts or records hidden by custom permission filters.

## Resolution Decision

| Decision | Recommendation |
| --- | --- |
| Authoritative source | Keep `thorneberry-headless-cms` |
| Retain duplicate registrations | No, only after source and record audit |
| Change REST base | No |
| Remove duplicate source | Yes, future controlled patch after identification |
| Migrate legacy records first | Required only if authenticated audit finds any |
| Modify production now | No |
| Plugin patch in this commit | No |

## Definition of Done

The blocker is resolved only when:

- The source of both duplicate registrations is named and documented.
- Authenticated checks confirm whether any records exist in both keys.
- Canonical routes remain unchanged.
- No verified content, media, SEO data or relationships are lost.
- The duplicate source is removed or guarded in a reviewed patch.
- REST type and collection smoke tests pass after the controlled change.
- The change has a backup, rollback path and separate production approval.
