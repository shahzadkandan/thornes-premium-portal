# Thorneberry Pilot Migration Approval

**Date:** 2026-07-21  
**Branch:** `headless-next-rebuild`  
**Status:** Approval package only; no production write performed

This package reuses the existing audit, media mapping, content mapping and migration safety files. Services, Team Members, duplicate CPT investigation and plugin changes are excluded from this pilot.

## Available Site Settings

These values are supported by the approved project brief and consistent old-site contact evidence:

| Field | Verified value | Pilot status |
| --- | --- | --- |
| Company name | `Thorneberry` | Available |
| Site URL | `https://thorneberry.com.pk/` | Available from WordPress home URL |
| Email | `info@thorneberry.com.pk` | Available |
| Phone | `+92-334-0007744` | Available |
| WhatsApp | `+92-334-0007744` | Available from approved brief |
| Address | `House no 1, Adyala Road, RWP Pakistan` | Available |

## Missing Settings

Do not invent or infer these values:

- `social_links`: no verified approved URLs
- `footer_text`: old footer is stale and mixed with removed categories
- `default_seo_title`: no approved exact value
- `default_seo_description`: no approved exact value
- `logo`: no approved verified asset selected
- `favicon`: no verified asset found
- `default_og_image`: no verified asset found
- `working_hours`: old evidence conflicts and is stale

## Media Candidates

Dimensions were read from the audited source URLs. No asset was uploaded.

| Asset | Source ID | Filename | Dimensions | Proposed role | Decision |
| --- | ---: | --- | ---: | --- | --- |
| Homepage hero | 5942 | `medicine-export-scaled.jpg` | 2560 x 1707 JPEG | Primary homepage hero candidate | Select for approval; healthcare subject and landscape ratio |
| Homepage image alternate | 5728 | `home1.jpeg` | 864 x 1152 JPEG | Mobile or secondary image candidate | Hold; portrait ratio is weak for desktop hero |
| Old logo | 5891 | `cropped-logosam.png` | Not available in the audited dimension record | Company logo | Hold; requires owner confirmation and differs from supplied newer logo |
| Favicon | None | None | None | Favicon | Missing evidence |
| Default OG image | None | None | None | Social preview | Missing evidence |

All selected healthcare image candidates have missing alt text in the old export. Editorial alt text must be approved before upload. The owner-supplied `Thorneberry Logo.jpg` is outside the audited media candidate set and is not selected here.

## Selected Page

### Contact

- Source ID: `1159`
- Source slug: `contact`
- Target: WordPress Page `contact`
- Proposed status: Draft
- Pilot scope: sanitized contact page using only the verified company name, email, phone, WhatsApp and address above
- Exclude: conflicting old phone numbers, stale working hours, unrelated export categories and unverified claims

Contact is safer than About because the About page contains unsupported industry, board-role, product and franchise claims. The old Contact page itself must not be copied unchanged.

## Five Pilot Product Candidates

These are the five clearest workbook rows: each has a title, source registration number, explicit generic/composition text, pack size and a clear source section. The workbook contains no pricing, certification or media fields for these rows. They remain **candidates**, not approved production catalogue claims.

| Source row | Source section | Reg. no. | Brand name | Generic/composition as recorded | Pack size |
| ---: | --- | --- | --- | --- | --- |
| 1 | Capsules | `041665` | Ceroxil Cap 500mg | Cefadroxil 500mg | `12's` |
| 6 | Capsules | `030031` | Doudcer-Nil Capsules | Lansoprazole 30mg | `14's` |
| 20 | Capsules | `038057` | Esocue Capsule 20mg | Esomeprazole Magnesium 20mg | `14's`; `14x4's` |
| 190 | Suspension | `065316` | Balanta Suspension | Aluminium Hydroxide 215mg; Magnesium Hydroxide 80mg; Simethicone 25mg | `120ml` |
| 195 | Suspension | `056309` | Fevonor suspension | Paracetamol BP 120mg | `15ml`; `60ml` |

Pilot product content must contain only the verified row fields. Do not add therapeutic benefits, market approvals, availability, manufacturer ownership, certifications, pricing, MOQ, lead time or destination eligibility.

## Insights Status

**Excluded from pilot.** All three old posts are Lorem Ipsum/demo content. No current, non-demo and factually usable insight was found in the audited source set.

## Claims Requiring User Confirmation

- Whether Thorneberry is authorized to present these Global Pharmaceuticals rows as its sourcing catalogue.
- Whether each product is currently available for export and for which destination markets.
- Verification of each registration number and any destination-market documentation.
- Whether the selected medicine image may be used as the homepage hero and its approved alt text.
- Final company logo, favicon and OG image.
- Exact SEO title, SEO description, footer copy and social URLs.
- Whether the Contact page should remain Draft for review or be published in a later approved release.

## Exact Pilot Scope

On a later explicitly approved production run only:

1. Populate the six available Site Settings values listed above.
2. Prepare one sanitized `contact` Page as Draft.
3. Prepare five Product records as Draft, using only the five workbook rows above.
4. Create only the required `Capsules` and `Suspension` category terms after category approval.
5. Upload the selected hero only after asset approval and alt-text approval.
6. Do not migrate Services, Team Members, Insights, FAQs, Testimonials, Certifications, logo, favicon or OG image.
7. Do not delete, overwrite or publish existing content.

## Credentials Required Later

No credentials are stored or requested in this task. The approved execution environment will need:

```text
WP_BASE_URL=https://thorneberry.com.pk
WP_USERNAME=<WordPress user with required edit/upload permissions>
WP_APPLICATION_PASSWORD=<WordPress Application Password>
MIGRATION_MODE=apply
MIGRATION_BACKUP_CONFIRMED=true
MIGRATION_PRODUCTION_CONFIRM=I_UNDERSTAND_PRODUCTION_WRITE
```

Site Settings require an authenticated ACF/admin or approved WP-CLI/SSH procedure because the public REST settings route is read-only. Credentials must be supplied through environment variables or the hosting secret manager, never committed.

## Rollback and Verification Checklist

- Confirm a fresh production files/database backup immediately before any future write.
- Save the pre-pilot REST counts, settings response and current page/product slugs.
- Run the migration tool in dry-run mode and confirm zero deletes and only the approved pilot records.
- Create/update only Draft records and record every WordPress ID in the migration log.
- Verify settings, Contact, Products, Product Categories and selected media through REST.
- Verify no Services, Team Members, Insights or unrelated export categories were added.
- Verify the Next.js frontend uses live records only where they exist and fallback elsewhere.
- If rollback is needed, restore the pre-pilot backup or remove only pilot-created Draft IDs under the approved change record; do not delete pre-existing records.

**Current decision:** production import is not approved by this file alone. Owner approval of the claims, product relationship, assets, alt text and credentials is still required.
