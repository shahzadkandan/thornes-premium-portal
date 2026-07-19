# Deployment Notes

This branch is a migration scaffold only. It must not be deployed to production until the client approves the completed Next.js frontend and Headless WordPress connection.

## Local Setup

```bash
npm install
npm run lint
npm run typecheck
npm run build
```

## Required Environment

```env
WORDPRESS_API_URL=
WORDPRESS_REVALIDATE_SECRET=
NEXT_PUBLIC_SITE_URL=
```

For Sprint 2 staging, copy `.env.example` to `.env.local` and replace only the example values with the approved staging origin and a random webhook secret. Never commit `.env.local`.

## Release Rules

- Do not deploy from this branch directly.
- Do not modify DNS.
- Do not publish unverified claims.
- Do not expose WordPress credentials.
- Keep testimonials, certification badges, statistics, and partner logos disabled until approved.

## Known Gaps

- The staging WordPress origin and endpoint payloads still need owner-provided verification; no production URL is used by this branch.
- Forms validate input but still require approved email service configuration for delivery.
- WordPress custom fields depend on ACF/custom REST configuration; standard page slug fallback is included.
- Run `GET /api/wordpress/health` after staging environment variables are loaded to verify connectivity.
