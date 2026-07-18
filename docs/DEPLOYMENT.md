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

## Release Rules

- Do not deploy from this branch directly.
- Do not modify DNS.
- Do not publish unverified claims.
- Do not expose WordPress credentials.
- Keep testimonials, certification badges, statistics, and partner logos disabled until approved.

## Known Gaps

- Visual section migration from TanStack routes to App Router is not complete in this first scaffold.
- Forms are placeholders and require approved email service configuration.
- WordPress custom fields depend on ACF/custom REST configuration.
- Production images require migration to `next/image` once final assets are approved.
