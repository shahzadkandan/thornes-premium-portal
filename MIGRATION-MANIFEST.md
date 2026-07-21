# Thorneberry Production CMS Migration Manifest

**Date:** 2026-07-21
**Branch:** `headless-next-rebuild`
**Status:** Audit complete; production write not executed

## Safety Gate

This manifest was created before any production write. The production WordPress backup was reported as available by the project owner and the local backup archive is present at:

```text
../server-backups/thorneberry-old-website-complete-backup-2026-07-08.zip
```

No WordPress write credentials are stored in this repository. No production content, media, settings or taxonomy records were created, updated or deleted during this audit.

## Source Inventory

| Source | Inventory | Decision |
| --- | ---: | --- |
| `../old-pages.json` | 40 pages | 4 relevant candidates; templates/demo/e-commerce pages excluded |
| `../old-posts.json` | 3 posts | All are Lorem Ipsum/demo content; do not migrate |
| `../old-media.json` | 82 media records | 14 healthcare candidates; unrelated and generic assets excluded or held |
| `../old-home-live.html` | 1 captured homepage | Useful evidence, but contains unsupported and unrelated claims |
| `../old-service-*.html` | 3 service captures | Healthcare topics found; copy requires claim review |
| Owner product workbook | 493 product rows | Requires confirmation before product catalogue import |
| `../wordpress-plugin/thorneberry-headless-cms` | Local plugin source | Field and REST contract reference only |

## Classification Summary

### Verified and Safe to Migrate

- Company name: `Thorneberry`.
- Site URL: `https://thorneberry.com.pk/` as the WordPress home URL, not an ACF value.
- Phone: `+92-334-0007744`.
- WhatsApp: `+92-334-0007744`, supplied in the approved project brief.
- Email: `info@thorneberry.com.pk`.
- Address: `House no 1, Adyala Road, RWP Pakistan`, supported by the approved project brief and old-site contact evidence.
- Healthcare image candidates listed in `MEDIA-MAPPING.json`, subject to missing-alt-text handling.

### Requires User Confirmation

- Homepage, About, Contact and Services page payloads because old copy mixes healthcare with unrelated exports and unsupported superlatives.
- Three service records: medicine export, surgical instruments and medical wearables.
- The 493-row Global Pharmaceuticals product workbook. The workbook identifies Global Pharmaceuticals and does not by itself establish Thorneberry catalogue ownership, destination approvals, availability or export eligibility for every row.
- Header CTA, footer text, navigation labels and SEO copy from the newer project content.
- Old logo as the production logo; the owner-supplied newer logo asset is not in this repository's migration source set.

### Outdated or Duplicate

- 36 old pages that are theme demos, Elementor templates, WooCommerce pages, duplicate layouts or placeholder pages.
- 3 old posts containing Lorem Ipsum/demo copy.
- Old FAQ, Team and testimonial demo/template pages.
- Old menu labels and footer links that point to removed categories or stale URLs.

### Unsupported Claims

Do not migrate these claims without documentary approval:

- “Leading”, “best”, “top”, “number one” or similar rankings.
- Pharmaceutical manufacturing, state-of-the-art manufacturing, R&D, global network or worldwide usage claims.
- GMP, GDP, cold-chain, certification, regulatory approval or compliance guarantees.
- Specific product availability, therapeutic suitability, market registration or delivery guarantees.
- Testimonials, board/team roles or certifications without a verifiable source record.

### Missing Assets

- Healthcare candidate images have empty or incomplete alt text in the old media export.
- No verified favicon/OG asset has been approved for import.
- No verified certification documents, testimonial evidence or team profile assets were found.

## Target Model

| Source | Target | Status |
| --- | --- | --- |
| Contact/company evidence | Site Settings | Safe fields identified; production write pending credentials and confirmation |
| Relevant old pages | WordPress Pages | Hold for content cleanup and confirmation |
| 3 healthcare service captures | `service` / `/wp-json/wp/v2/services` | Hold for claims review |
| Product workbook | `product` + `product_category` | Hold for ownership and catalogue approval |
| Old posts | WordPress Posts / Knowledge Hub | Skip as demo content |
| Old FAQ/team/testimonial/certification material | Matching CPTs | No verified records; skip |
| Selected old media | Media Library | Hold until alt text and asset approval are complete |

## Production Write Gate

Production import is blocked until all of these are true:

- `UNRESOLVED-ITEMS.md` is reduced to approved exceptions.
- A WordPress Application Password or equivalent credential is supplied through environment variables only.
- The owner confirms the product workbook and the three healthcare service records.
- The old logo versus the newer approved logo is selected.
- The duplicate live CPT registrations are resolved or a canonical target is explicitly selected.
- A fresh backup confirmation is recorded immediately before import.
- The dry-run reports zero destructive actions and zero unsupported claims.
