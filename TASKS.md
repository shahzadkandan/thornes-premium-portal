# Tasks

## Current Sprint: Real Headless WordPress Integration

Working branch: `headless-next-rebuild`

### Completed

- Typed WordPress content model and fallback data
- App Router migration for core pages and detail routes
- Legacy route aliases
- Dynamic metadata, canonical URLs and sitemap
- `next/image` integration
- Environment-driven WordPress client
- REST/ACF/meta/fields/data response mapping
- Standard WordPress page slug fallback
- ISR fetch revalidation and `wordpress:*` cache tags
- Secure path and tag revalidation endpoint
- WordPress health endpoint
- Staging smoke-test documentation

### Blocked or Pending

- [ ] Add the approved staging `WORDPRESS_API_URL` to `.env.local`
- [ ] Add the approved `WORDPRESS_REVALIDATE_SECRET` to `.env.local`
- [ ] Verify `GET /api/wordpress/health` returns a healthy staging response
- [ ] Verify live settings, page, service, product, insight and FAQ payloads
- [ ] Confirm fallback behavior during controlled API failure
- [ ] Verify an unknown live service, product and insight slug
- [ ] Send a staging revalidation request and confirm the rendered update
- [ ] Complete responsive and visual QA against live CMS content
- [ ] Configure approved contact and RFQ email transport
- [ ] Review final content claims with the owner

The current blocker is documented in [docs/BUILD-STATUS.md](docs/BUILD-STATUS.md). The production origin must not be used as a substitute for staging.

## Future Hardening

- Add automated contract fixtures for approved WordPress response shapes.
- Add integration tests for the health and revalidation routes.
- Add a staging smoke-test command that redacts secrets and reports endpoint status.
- Review the two moderate dependency audit findings without forcing a breaking Next.js downgrade.
- Continue visual QA at desktop, laptop, tablet and mobile breakpoints.

## Definition of Done

A task is complete only when all applicable items below are true:

### Scope

- The requested behavior is implemented in the intended module.
- No unrelated refactor or visual redesign is included.
- Existing routes, media and approved content remain protected.

### CMS and Claims

- CMS fields are represented by schemas, types, mappers and queries.
- Live content is preferred when staging is configured.
- Fallback behavior is intentional, neutral and documented.
- Unsupported manufacturer, certification, logistics or performance claims are not introduced.

### Quality

- Lint passes with only documented warnings.
- Typecheck passes.
- Production build passes.
- Relevant smoke or visual checks are recorded.
- Accessibility and responsive behavior are reviewed for UI work.
- `git diff --check` passes.

### Safety and Release

- Secrets are absent from source, logs and screenshots.
- `main` and production are untouched unless explicitly approved.
- No deployment or merge occurs without explicit approval.
- Documentation, known limitations and rollback considerations are updated.
- The branch is committed with a focused message and pushed when required.
