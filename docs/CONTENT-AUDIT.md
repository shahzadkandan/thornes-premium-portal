# Thorneberry Content Audit

Date: 2026-07-18
Branch: `headless-next-rebuild`

## Audit Scope

This audit reviews the current Lovable/TanStack implementation before the Next.js + Headless WordPress rebuild. It focuses on hardcoded business claims, unsupported proof points, food/agro references, and statements that must be sourced from WordPress or typed fallback data.

## Business Positioning Rules

- Thorneberry should be presented as a healthcare sourcing and export-coordination company.
- Thorneberry should not be presented as a pharmaceutical manufacturer.
- Food/agro categories should remain removed unless the client explicitly re-approves them.
- Statistics, certifications, testimonials, partner logos, years of experience, product counts, and countries served should not display unless supported by evidence.

## Summary

| Category             | Finding                                                                                                     | Action                                                                        |
| -------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| Core positioning     | Current copy mostly describes healthcare sourcing/export coordination.                                      | Verified direction, keep but move to CMS.                                     |
| Manufacturer role    | Homepage explicitly says Thorneberry is not a manufacturer.                                                 | Verified direction, keep.                                                     |
| Food/agro content    | Old food/agro image assets remain in `src/assets`.                                                          | Remove or quarantine before final migration.                                  |
| Statistics           | No visible `40+ countries`, `500+ SKUs`, `15+ years`, or `99% on-time` claims found in current source scan. | Keep hidden unless verified.                                                  |
| Certifications       | GMP, FSC, CoPP, ISO 13485, GDP and cold-chain references exist as conditional support claims.               | Needs verification or qualify as buyer-requested/supplier-provided documents. |
| Testimonials         | No real testimonial data found; current rebuild pack requires testimonials to be real or disabled.          | Disable until approved.                                                       |
| NGO / UN procurement | Current copy mentions NGOs and UN-procurement-listed partners.                                              | Needs verification; remove or neutralize.                                     |

## Claim Inventory

| File                                   | Line | Claim                                                                                                                                     | Status                                  | Recommendation                                                                   |
| -------------------------------------- | ---: | ----------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- | -------------------------------------------------------------------------------- |
| `src/routes/__root.tsx`                |   81 | Pakistan-based healthcare sourcing, pharmaceutical export, procurement, documentation, and logistics coordination partner.                | Verified direction                      | Move to WordPress Site Settings fallback.                                        |
| `src/routes/index.tsx`                 |   34 | Pakistan-based healthcare sourcing, pharmaceutical export, procurement, documentation, regulatory coordination and logistics support.     | Verified direction                      | Keep as neutral positioning, CMS-controlled.                                     |
| `src/routes/index.tsx`                 |   40 | Premium healthcare sourcing and export coordination partner from Pakistan for importers, distributors, hospitals and NGOs.                | Verified direction with audience caveat | Keep audience list if client approves.                                           |
| `src/routes/index.tsx`                 |  105 | Supports buyers with pharmaceutical sourcing, medicine export coordination, documentation, regulatory coordination and shipment planning. | Verified direction                      | Move to CMS.                                                                     |
| `src/routes/index.tsx`                 |  299 | Thorneberry is not positioned as a manufacturer.                                                                                          | Verified direction                      | Keep prominent in content model.                                                 |
| `src/routes/index.tsx`                 |  320 | GMP / FSC / CoPP where applicable.                                                                                                        | Needs verification                      | Display only as available supplier documentation, not Thorneberry certification. |
| `src/routes/index.tsx`                 |  367 | Temperature-sensitive shipment planning where required.                                                                                   | Needs verification                      | Keep only as planning assistance unless cold-chain partner evidence exists.      |
| `src/routes/index.tsx`                 |  372 | FCA / CIF / CIP / DAP quotation context; air and sea coordination.                                                                        | Needs verification                      | Keep as RFQ discussion fields; avoid promising execution.                        |
| `src/routes/about.tsx`                 |   33 | Compliance, traceability, timely coordination, supplier documentation and third-party inspections arranged where required.                | Needs verification                      | Keep conditional wording; collect evidence for inspection partners.              |
| `src/routes/about.tsx`                 |   64 | Global support across healthcare corridors.                                                                                               | Needs verification                      | Replace with "international buyer support" unless corridors are defined.         |
| `src/routes/contact.tsx`               |    9 | Replies within one business day.                                                                                                          | Needs verification                      | Remove until SLA is approved.                                                    |
| `src/routes/medical-exports.tsx`       |   21 | Wearables, disposables, diagnostics and consumables for NGOs and humanitarian programs across the world.                                  | Needs verification                      | Neutralize; avoid "across the world" unless coverage is proven.                  |
| `src/routes/medical-exports.tsx`       |   26 | Works with NGOs and UN-procurement-listed partners with flexible MOQs.                                                                    | Remove                                  | Too specific without evidence.                                                   |
| `src/components/site/CategoryPage.tsx` |   51 | GMP, ISO 13485 and export documentation support where applicable.                                                                         | Needs verification                      | Reword as supplier/manufacturer documentation review.                            |
| `src/components/site/CategoryPage.tsx` |   52 | Multi-modal freight with full tracking and documentation.                                                                                 | Needs verification                      | Reword as shipment coordination planning.                                        |
| `src/components/site/CategoryPage.tsx` |  121 | Third-party lab testing, cold-chain and GDP-compliant logistics, full batch-level traceability.                                           | Needs verification                      | Hide behind optional verified capabilities.                                      |
| `src/components/site/blog-data.ts`     |   39 | Buyers may need COA, COO, GMP evidence, dossiers or import documents.                                                                     | Verified educational content            | Keep as buyer education, not guarantee.                                          |
| `src/components/site/blog-data.ts`     |   41 | Coordinates Pakistan-based pharmaceutical supply channels, documentation teams and logistics partners.                                    | Needs verification                      | Keep if supplier network evidence is approved.                                   |
| `src/components/site/services-data.ts` |   51 | GMP/FSC/CoPP review where applicable.                                                                                                     | Needs verification                      | Keep as optional document review.                                                |
| `src/components/site/services-data.ts` |   67 | Temperature-sensitive shipment planning support.                                                                                          | Needs verification                      | Keep as planning only.                                                           |

## Food / Agro Cleanup Inventory

The current source tree still contains legacy food/agro assets:

- `src/assets/service-rice.jpg`
- `src/assets/service-meat.jpg`
- `src/assets/service-poultry.jpg`
- `src/assets/service-dryfruits.jpg`
- `src/assets/service-dairy.jpg`
- `src/assets/service-biscuits.jpg`
- `src/assets/service-seafood.jpg`
- `src/assets/service-oil.jpg`
- `src/assets/service-frozen.jpg`

These assets should not be used by the Next.js rebuild. They can be removed in a later cleanup commit after the migration no longer imports them.

## Required Content Decisions

- Confirm whether "reply within one business day" is approved.
- Confirm whether any cold-chain/GDP logistics capability has documented partners or should be educational only.
- Confirm whether ISO 13485, GMP, FSC, CoPP references are supplier-document examples, not Thorneberry-owned certifications.
- Confirm whether NGOs and UN-procurement-listed partners can be mentioned.
- Confirm approved testimonials or keep testimonials disabled.

## Migration Rule

All audited claims must be moved to one of:

- WordPress Site Settings
- WordPress page content
- WordPress custom post fields
- typed fallback content with `verified: true | false`
- hidden/disabled sections
