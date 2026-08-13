# Unresolved Migration Items

**Status:** Production import blocked

**Reviewed:** 2026-07-21 after read-only REST verification and dry-run validation.

1. Production WordPress REST is reachable, but Site Settings are empty and all content collections currently contain zero records.
2. No WordPress Application Password or equivalent write credential is available through environment variables. No credential was searched for by printing values and none is stored in the repository.
3. The owner must confirm the approved logo: old media ID `5891` or the newer owner-supplied logo asset.
4. The owner must confirm whether the 493-row Global Pharmaceuticals workbook is an approved Thorneberry catalogue source. Do not publish all rows automatically.
5. Product rows require category, availability, document, market and regulatory review before import.
6. Old service pages contain unsupported “best/top/leading” language, manufacturing claims, R&D claims, global-use claims and product/market guarantees. These claims are excluded.
7. Old homepage and Services page contain Dry Fruits, Rice/Food, Meat/Poultry and many other unrelated export categories. These are excluded.
8. Contact evidence contains conflicting phone numbers and stale hours. The approved phone/email/address are mapped, but working hours remain unset.
9. No verified favicon, Open Graph asset, testimonials, certification documents or team biographies were found.
10. Old media candidate images have missing alt text and need editorial alt text before attachment metadata is finalized.
11. Production exposes duplicate CPT registrations: `service` and `services`, plus `team_member` and `team-member`. Canonical plugin routes should be used; duplicate registrations should be resolved in a separate controlled WordPress task.
12. The live WordPress plugin exposes public read routes but no custom write endpoint for ACF options. Site Settings import needs authenticated WordPress admin/ACF handling or an approved WP-CLI command executed on the server.
13. Production import and post-import REST verification cannot be completed until the above gates are resolved.

The migration script, mapping files and frontend validation currently pass without changing runtime code. No production write has been attempted.
