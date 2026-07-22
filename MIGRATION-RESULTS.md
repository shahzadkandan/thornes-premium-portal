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
