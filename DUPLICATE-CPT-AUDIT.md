# Duplicate CPT Audit

**Date:** 2026-07-21
**Branch:** `headless-next-rebuild`
**Mode:** Read-only
**Production writes:** None

## Executive Result

The production REST index exposes two semantic duplicate registration groups:

1. `service` and `services` both expose the REST base `services`.
2. `team_member` and `team-member` expose the same business concept through different REST bases: `team-members` and `team_members`.

The canonical registrations match the local `thorneberry-headless-cms` companion plugin. The duplicate registrations are not present in that plugin, the available Thorneberry theme source, or the available legacy `thorneberry-core` source. Their exact production source is therefore **unknown** from public read-only evidence.

No duplicate content records were returned by the public REST collection endpoints. This does not replace a database-level check for private, draft, trashed or non-REST records.

## Evidence Reviewed

### Production REST

- REST index: `https://thorneberry.com.pk/wp-json/`
- Type registry: `https://thorneberry.com.pk/wp-json/wp/v2/types`
- Taxonomy registry: `https://thorneberry.com.pk/wp-json/wp/v2/taxonomies`
- Collection endpoints checked with `per_page=100`:
  `services`, `products`, `testimonials`, `faqs`, `certifications`, `team-members`, `team_members`, `product-categories`
- Relevant namespaces exposed: `wp/v2` and `thorneberry/v1`

### Workspace source

- Canonical companion plugin: `wordpress-plugin/thorneberry-headless-cms/includes/class-thorneberry-headless-cms-post-types.php`
- Canonical plugin bootstrap: `wordpress-plugin/thorneberry-headless-cms/thorneberry-headless-cms.php`
- Legacy package plugin: `_audit/installable-expanded/plugin/thorneberry-core/includes/post-types.php`
- Available theme bootstrap: `_audit/installable-expanded/theme/thorneberry/functions.php`

The available theme bootstrap registers styles, editor support and block-pattern categories only. It does not register any requested CPT or taxonomy.

## Registration Inventory

| Business type | Production key(s) | REST base(s) | Production state | Registration source evidence | Authority recommendation |
| --- | --- | --- | --- | --- | --- |
| Service | `service`, `services` | `services`, `services` | Duplicate; both visible in `/wp/v2/types` | `service` matches companion plugin. `services` source not found in available workspace code. | Keep `service`; locate and remove/guard `services` later. |
| Product | `product` | `products` | Single visible registration | Matches companion plugin. | Keep companion plugin `product`. |
| Testimonial | `testimonial` | `testimonials` | Single visible registration | Matches companion plugin. | Keep companion plugin `testimonial`. |
| FAQ | `faq` | `faqs` | Single visible registration | Matches companion plugin. | Keep companion plugin `faq`. |
| Certification | `certification` | `certifications` | Single visible registration | Matches companion plugin. | Keep companion plugin `certification`. |
| Team member | `team_member`, `team-member` | `team-members`, `team_members` | Semantic duplicate; both visible in `/wp/v2/types` | `team_member` matches companion plugin. `team-member` source not found in available workspace code. | Keep `team_member`; locate and remove/guard `team-member` later. |
| Product category | `product_category` | `product-categories` | Single visible registration | Matches companion plugin. | Keep companion plugin `product_category`. |

The REST index did not expose `products`, `testimonials`, `faqs`, `certifications`, `team-members`, `product-categories` as separate type keys. Those names are REST bases, not duplicate post type keys.

## Canonical Companion Plugin Details

The companion plugin registers all canonical content types in one `init` callback. Its shared settings are:

- `public: true`
- `show_ui: true`
- `show_in_rest: true`
- `capability_type: post`
- `map_meta_cap: true`
- `supports: title, editor, excerpt, thumbnail, revisions`

### Canonical types

| Key | REST base | Rewrite slug | Archive | Capabilities | Supports | Taxonomy relationships |
| --- | --- | --- | --- | --- | --- | --- |
| `service` | `services` | `services` | Yes | `post`, `map_meta_cap: true` | title, editor, excerpt, thumbnail, revisions | None in companion registration |
| `product` | `products` | `products` | Yes | `post`, `map_meta_cap: true` | title, editor, excerpt, thumbnail, revisions | `product_category`; live REST also reports `category` |
| `testimonial` | `testimonials` | Disabled | No | `post`, `map_meta_cap: true` | title, editor, excerpt, thumbnail, revisions | None |
| `faq` | `faqs` | Disabled | No | `post`, `map_meta_cap: true` | title, editor, excerpt, thumbnail, revisions | None |
| `certification` | `certifications` | Disabled | No | `post`, `map_meta_cap: true` | title, editor, excerpt, thumbnail, revisions | None |
| `team_member` | `team-members` | Disabled | No | `post`, `map_meta_cap: true` | title, editor, excerpt, thumbnail, revisions | None |

The source lines are in `wordpress-plugin/thorneberry-headless-cms/includes/class-thorneberry-headless-cms-post-types.php:68-104`.

### Canonical taxonomy

| Key | REST base | Rewrite slug | Object type | Hierarchical | Capabilities/supports |
| --- | --- | --- | --- | --- | --- |
| `product_category` | `product-categories` | `product-categories` | `product` | Yes | Taxonomy capabilities are WordPress defaults; supports do not apply |

The source registration is at `wordpress-plugin/thorneberry-headless-cms/includes/class-thorneberry-headless-cms-post-types.php:129-143`.

## Duplicate Profile: `service` / `services`

### Canonical `service`

- REST key: `service`
- REST base: `services`
- Rewrite slug: `services`
- Live status: active registration; present in the production type registry
- Source: `thorneberry-headless-cms` companion plugin, confirmed by exact source match
- Capabilities: `post` with `map_meta_cap: true`
- Supports: title, editor, excerpt, thumbnail, revisions
- Taxonomies: none in the companion registration
- Live collection: `/wp-json/wp/v2/services` returned HTTP 200, count `0`, slugs `[]`

### Duplicate `services`

- REST key: `services`
- REST base: `services`
- Rewrite slug: not exposed by public REST
- Live status: active registration; present in the production type registry
- Source: unknown; no matching registration was found in the companion plugin, available theme bootstrap, legacy `thorneberry-core`, or other scanned project PHP source
- Capabilities: not exposed by public REST; unknown
- Supports: not exposed by public REST; unknown
- Taxonomies: live REST reports `category`; registration source is unknown
- Live collection: shares `/wp-json/wp/v2/services`, returned HTTP 200, count `0`, slugs `[]`

### Risk

This is the highest-risk duplicate because both keys claim the same REST base. Depending on registration order, WordPress can make one controller authoritative, produce inconsistent type metadata, or make future writes resolve against an unintended registration. It can also split editor expectations from the frontend contract.

## Duplicate Profile: `team_member` / `team-member`

### Canonical `team_member`

- REST key: `team_member`
- REST base: `team-members`
- Rewrite slug: disabled in companion plugin
- Live status: active registration; present in the production type registry
- Source: `thorneberry-headless-cms` companion plugin, confirmed by exact source match
- Capabilities: `post` with `map_meta_cap: true`
- Supports: title, editor, excerpt, thumbnail, revisions
- Taxonomies: none
- Live collection: `/wp-json/wp/v2/team-members` returned HTTP 200, count `0`, slugs `[]`

### Duplicate `team-member`

- REST key: `team-member`
- REST base: `team_members`
- Rewrite slug: not exposed by public REST
- Live status: active registration; present in the production type registry
- Source: unknown; no matching registration was found in the available workspace PHP source
- Capabilities: not exposed by public REST; unknown
- Supports: not exposed by public REST; unknown
- Taxonomies: none reported
- Live collection: `/wp-json/wp/v2/team_members` returned HTTP 200, count `0`, slugs `[]`

### Risk

There is no direct REST route collision because the bases differ, but the two keys represent the same business entity. This can create two admin menus, split records, inconsistent frontend queries and ambiguous future migration behavior.

## Non-Duplicate Findings

- `product` is the only production product type key. `products` is its REST base, not a second registration.
- `testimonial` is the only production testimonial type key. `testimonials` is its REST base.
- `faq` is the only production FAQ type key. `faqs` is its REST base.
- `certification` is the only production certification type key. `certifications` is its REST base.
- `product_category` is the only production key. `product-categories` is its REST base.
- The legacy package registers `tb_solution`, `tb_sourcing_item`, `tb_solution_type`, `tb_product_category` and `tb_supplier`. These keys were not present in the current production REST type/taxonomy registry, and they do not duplicate the requested canonical keys by key or REST base.
- The available Thorneberry theme does not register any requested content type.

## Production Content Check

| Route | HTTP result | Item count | Slugs |
| --- | ---: | ---: | --- |
| `/wp-json/wp/v2/services` | 200 | 0 | `[]` |
| `/wp-json/wp/v2/products` | 200 | 0 | `[]` |
| `/wp-json/wp/v2/testimonials` | 200 | 0 | `[]` |
| `/wp-json/wp/v2/faqs` | 200 | 0 | `[]` |
| `/wp-json/wp/v2/certifications` | 200 | 0 | `[]` |
| `/wp-json/wp/v2/team-members` | 200 | 0 | `[]` |
| `/wp-json/wp/v2/team_members` | 200 | 0 | `[]` |
| `/wp-json/wp/v2/product-categories` | 200 | 0 | `[]` |

The public REST result shows no existing published items or public slugs in either conflicting CPT group. It cannot prove that no draft, private, trashed or database-only records exist.

## Audit Conclusion

There are **2 duplicate groups**, **2 canonical companion-plugin registrations**, and **2 unknown duplicate registrations**. No plugin, theme, content, media, rewrite rule or production setting was modified.

The smallest safe resolution is documented in `CPT-RESOLUTION-PLAN.md`.
