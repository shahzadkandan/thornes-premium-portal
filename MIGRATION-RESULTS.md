# Migration Results

**Date:** 2026-07-21
**Status:** Audit complete; approved pilot blocked before production write

## Counts

| Entity | Source count | Migrated | Skipped/held |
| --- | ---: | ---: | ---: |
| Pages | 40 | 0 | 40 |
| Services | 3 candidates | 0 | 3 |
| Products | 493 | 0 | 493 |
| Posts/Insights | 3 | 0 | 3 |
| FAQs | 1 demo source | 0 | 1 |
| Testimonials | 0 verified | 0 | 0 |
| Certifications | 0 verified | 0 | 0 |
| Team Members | 0 verified | 0 | 0 |
| Media | 82 | 0 | 82 |

## Production Safety

- No production create, update or delete request was made.
- No media was uploaded.
- No credentials were stored or committed.
- No Next.js deployment occurred.
- No merge into `main` occurred.

See `MIGRATION-MANIFEST.md`, `MIGRATION-DRY-RUN.md`, `CONTENT-MAPPING.json`, `MEDIA-MAPPING.json` and `UNRESOLVED-ITEMS.md` for the gate details.

## Validation

- Migration script syntax: passed with `node --check`.
- Mapping JSON validation: passed for `CONTENT-MAPPING.json` and `MEDIA-MAPPING.json`.
- Dry-run: passed with `destructive_actions=0`; no create, update, delete or upload request was sent.
- Live REST read verification: passed with HTTP 200 for settings, pages, services, products, posts, FAQs, testimonials, certifications, team members and product categories. All collection counts are currently zero.
- Frontend lint: passed with 6 pre-existing Fast Refresh warnings in shared UI primitives.
- Frontend typecheck: passed.
- Frontend production build: passed; 19 current App Router routes generated successfully.

## Next Production Gate

No import can proceed until unresolved items are explicitly approved, a fresh production backup is confirmed, an approved WordPress write method is available, and the product/logo/claim decisions are recorded. The current branch contains the audit and dry-run tooling only.

## Approved Pilot Execution Attempt

**Scope:** Six verified settings, sanitized Contact draft, hero candidate `medicine-export-scaled.jpg` source ID `5942`. Products, categories, Services, Team Members, Insights, FAQs, Testimonials and Certifications were excluded.

- Settings fields written: **none**.
- Contact page written: **none**.
- Hero uploaded: **none**; attachment ID and URL were not created.
- Dry-run: **passed** with `destructive_actions=0`; the existing script logged Site Settings as read-only, held Contact because the manifest remains audit-classified, and held media ID `5942` because it remains a candidate pending apply approval.
- Production write result: **not attempted**. `WP_USERNAME` and `WP_APPLICATION_PASSWORD` are missing; apply safety confirmations are also absent. The public settings route is read-only and requires authenticated ACF/admin or WP-CLI handling.
- Read-only REST verification: **blocked during this attempt** by repeated TLS `ECONNRESET` responses from `thorneberry.com.pk`. The previous audit recorded HTTP 200 for the settings and collection routes with empty public collections.
- Local Contact page: **HTTP 200**.
- Local homepage: **HTTP 200**. It used existing fallback content; no production hero attachment could be consumed because no upload or settings write occurred.
- Lint: **passed with 6 existing Fast Refresh warnings**.
- Typecheck: **passed**.
- Build: **passed**, with 19 routes generated. The unavailable live API produced fallback fetch errors, but did not fail the build.

### Remaining Pilot Blockers

1. Supply `WP_USERNAME` and `WP_APPLICATION_PASSWORD` through a secure environment only.
2. Confirm fresh-backup and apply safety variables at execution time.
3. Use an authenticated ACF/admin or WP-CLI path for the six Site Settings values.
4. Extend the approved pilot payload into the controlled migration input before applying; no migration script was modified in this attempt.

## Approved Pilot Apply Preflight

**Date:** 2026-07-22  
**Result:** Production write not attempted; safe settings write path unavailable

- Existing dry-run: **passed** with `destructive_actions=0`.
- Authenticated settings read: **HTTP 200**.
- Authenticated ACF options route: **HTTP 404** (`rest_no_route`).
- Authenticated WordPress settings route: **HTTP 403** (`rest_forbidden`).
- Authenticated Contact lookup by slug: **HTTP 200**, no existing `contact` record returned.
- Authenticated hero media lookup by slug: **HTTP 200**, no existing `medicine-export-scaled` attachment returned.
- Production create/update/upload requests: **none**.
- No duplicate Contact page or hero attachment was created.

The companion plugin exposes the custom settings endpoint as read-only and stores fallback settings in `tb_hcms_settings`; the supplied WordPress Application Password does not provide a supported REST write route for those custom fields. Contact and media writes were intentionally not started because applying them without the six approved settings would leave the pilot incomplete. No credentials or `.env.local` were written to the repository.

## Post-Pilot Verification

**Date:** 2026-07-22  
**Result:** Pilot records verified; next batch prepared without production writes

- Settings endpoint: **HTTP 200**; all five stored values matched and the WordPress-derived `site_url` matched.
- Contact page: **ID 145**, slug `contact`, status `draft`; content matched the sanitized verified contact payload exactly.
- Contact duplicate check: **one** record for slug `contact`, ID 145.
- Hero media: **ID 146**, accessible by REST with the approved neutral alt text.
- Media duplicate check: **one** matching `medicine-export-scaled` record, ID 146.
- Local homepage and `/contact`: **HTTP 200**. Live settings are available to the frontend through the settings query. The Contact Draft is not exposed by the public CMS page route, so the local Contact page correctly retains fallback page content while using available live settings.
- The hero attachment is stored and verified, but no unapproved homepage hero setting was populated; therefore the frontend does not consume it as a homepage field yet.

## Next Batch Prepared

`NEXT-BATCH-APPROVAL.md` contains the exact five Draft product payloads and the two proposed taxonomy terms (`Capsules` and `Suspension`). No product, category, media or other production write was performed.

## Approved Product Batch Apply

**Date:** 2026-07-22  
**Result:** Applied and verified; all products remain Draft

### Categories

| Name | Slug | WordPress ID | Operation |
| --- | --- | ---: | --- |
| Capsules | `capsules` | 3 | Created |
| Suspension | `suspension` | 4 | Created |

### Products

| WordPress ID | Slug | Status | Category |
| ---: | --- | --- | --- |
| 147 | `ceroxil-cap-500mg` | Draft | Capsules |
| 149 | `doudcer-nil-capsules` | Draft | Capsules |
| 151 | `esocue-capsule-20mg` | Draft | Capsules |
| 153 | `balanta-suspension` | Draft | Suspension |
| 155 | `fevonor-suspension` | Draft | Suspension |

### Verification

- Dry-run: **passed** with `destructive_actions=0`.
- Category duplicate check: **passed**; each approved slug has exactly one term.
- Product duplicate check: **passed**; each approved slug has exactly one product.
- Draft status: **passed** for all five products.
- Category relationships: **passed**; REST base `product-categories` maps IDs 3 and 4 correctly.
- Composition and pack-size fields: **passed** against the approved payload.
- Product images: **none**; `featured_media` remains zero for all five.
- Excluded claims: **absent** from title, content and excerpt; no registration numbers, pricing, benefits, certifications, ownership, availability, export, destination, MOQ or lead-time claims were inserted.

The first post-create verification used the default published filter and returned no Drafts; the read-only verification was corrected to use `status=any`. No duplicate records were created and no unrelated content was modified.

## Next 25 Product Batch

**Date:** 2026-07-22  
**Result:** Applied and verified as Drafts

### Category

- `Capsules` reused, WordPress ID `3`.
- No new category was required.

### Products

| Source S# | WordPress ID | Slug | Status |
| ---: | ---: | --- | --- |
| 2 | 157 | `cidekel-capsule-4mg` | Draft |
| 3 | 158 | `d-dart-capsules` | Draft |
| 4 | 159 | `dipof-3-25mg-capsule` | Draft |
| 5 | 160 | `dipof-6-25mg-capsule` | Draft |
| 7 | 161 | `doxicap-capsule-100mg` | Draft |
| 8 | 162 | `ducon-50mg-capsules` | Draft |
| 9 | 163 | `dudex-30mg-capsule` | Draft |
| 11 | 164 | `duron-20mg-capsules` | Draft |
| 12 | 165 | `duron-30mg-capsules` | Draft |
| 13 | 166 | `duron-60mg-capsules` | Draft |
| 14 | 167 | `ecogab-50mg-capsules` | Draft |
| 15 | 168 | `ecogab-75mg-capsules` | Draft |
| 16 | 169 | `emvoid-125mg-capsule` | Draft |
| 17 | 170 | `emvoid-40mg-capsule` | Draft |
| 18 | 171 | `emvoid-80mg-capsule` | Draft |
| 19 | 172 | `epidobe-capsule` | Draft |
| 21 | 173 | `esocue-capsule-40mg` | Draft |
| 22 | 174 | `ezibenz-sr-15mg-capsules` | Draft |
| 23 | 175 | `fungicure-capsule` | Draft |
| 24 | 176 | `glodium-2mg-capsules` | Draft |
| 25 | 177 | `gloxil-capsule-250mg` | Draft |
| 26 | 178 | `gloxil-capsule-500mg` | Draft |
| 27 | 179 | `goflox-500mg-capsule` | Draft |
| 28 | 180 | `g-trol-0-25mcg-capsule` | Draft |
| 29 | 181 | `g-trol-0-5mcg-capsule` | Draft |

### Verification

- Dry-run: **passed** with `destructive_actions=0`.
- Duplicate check: **passed**; all 25 IDs and slugs are unique and each slug resolves to one record.
- Draft status: **passed** for all 25 products.
- Category relationship: **passed**; all products use `Capsules` ID 3 through the `product-categories` REST base.
- Composition and pack-size fields: **present and matched** to the selected workbook rows.
- Product media: **none inserted**; all 25 have `featured_media` set to zero.
- Excluded claims: **absent** from product content and excerpts. No registration, pricing, benefits, indications, certifications, ownership, availability, export, destination, MOQ or lead-time claims were inserted.

`Dudex 60mg Capsule` was held because its workbook composition contains a garbled source fragment. The generic claim scanner initially flagged the approved brand name `Fungicure`; content and excerpt verification confirmed no prohibited claim was inserted.

## Remaining Verified Product Migration

**Date:** 2026-07-22  
**Result:** Completed automatically in ten batches; all approved records remain Draft

### Summary

- Imported: **460** verified products.
- Skipped: **3** source rows.
- Batch plan: **9 batches of 50** and **1 batch of 10**.
- Every batch dry-run reported `destructive_actions=0`.
- Batch 9 encountered one transient API connection timeout after its dry-run; the idempotent retry completed batches 9 and 10 successfully.

### Skipped Rows

| Source S# | Product | Reason |
| ---: | --- | --- |
| 10 | Dudex 60mg Capsule | Corrupted composition fragment in source workbook |
| 224 | Gloquin 50mg/5ml Syrup | Duplicate product identity in source workbook |
| 327 | Gloquin 250mg Tablet | Duplicate product identity in source workbook |

### Categories

| Category | WordPress ID | Operation |
| --- | ---: | --- |
| Capsules | 3 | Reused |
| Cream | 5 | Reused |
| Gel | 6 | Reused |
| Infusion | 7 | Reused |
| Injection | 8 | Reused |
| Ointment | 9 | Reused |
| Solution | 10 | Reused |
| Suspension | 4 | Reused |
| Syrup | 11 | Reused |
| Tablets | 12 | Reused |

### Validation

- Target slugs found exactly once: **460/460**.
- Target IDs unique: **passed**.
- Target slugs unique: **passed**.
- Status: **Draft for all 460**.
- Category relationships: **passed** for all 460.
- Composition and pack-size fields: **matched the normalized verified workbook values**.
- Excluded claims: **absent** from inserted content and excerpts.
- Product media: **none inserted**; `featured_media` remained zero.
- Production product count after migration: **490** (30 previously migrated plus 460 in this run).

### Manual Review Remaining

- All 460 product records require owner, regulatory and catalog review before any product is published.
- The three skipped source rows remain excluded and require source correction or identity confirmation.
- Pricing, availability, registration, certification, ownership, export, destination-market, MOQ, lead-time, benefits and other held claims remain intentionally unpopulated.
