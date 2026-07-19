# Build Status

Date: 2026-07-19
Branch: `headless-next-rebuild`

## Commands Run

```bash
npm install
npm run typecheck
npm run lint
npm run build
npm audit
git status
git diff --stat
```

The incomplete dependency tree was quarantined and removed before reinstalling. The install completed successfully, and Next's PostCSS adapter was added so the existing Tailwind v4 stylesheet can compile under Next.js.

## Result

| Check              | Status               | Notes                                                                                                                                                 |
| ------------------ | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Dependency install | Passed               | Clean `npm install` completed. `@tailwindcss/postcss` was added for the Next.js build pipeline.                                                         |
| Lint               | Passed with warnings | `eslint .` passes with 6 reviewed Fast Refresh warnings from shared UI primitive exports; Next App Router files are excluded from this dev-only rule.     |
| Typecheck          | Passed              | `tsc --noEmit` completes successfully.                                                                                                                     |
| Build              | Passed              | `next build` compiles, type-checks and prerenders 38 routes, including service, product and insight detail paths.                                            |
| Audit               | 2 moderate findings | PostCSS advisory is reported through Next's dependency tree; `npm audit fix --force` would introduce a breaking Next downgrade and was not applied.       |

## Screenshots

Baseline screenshots already present in the repository and carried on this branch:

- `qa-desktop-1440.png`
- `qa-laptop-1024.png`
- `qa-mobile-390.png`
- `header-correct-healthcare-dropdown-desktop.png`
- `blog-with-topic-articles.png`

## Known Limitations

- The App Router migration is feature-complete for the current approved content scope; further visual QA can continue against staging WordPress data.
- Production is untouched.
- WordPress REST integration is connected through the typed client and is environment-driven; this checkout has no staging URL configured, so builds use the verified local fallback data.
- Contact and RFQ forms validate input and expose server routes, but email delivery is intentionally disabled until an approved mail transport and recipient are configured.
- `npm install` reports 2 moderate audit findings; these were not auto-fixed because `npm audit fix --force` may introduce breaking dependency changes.

## Next Step

Configure the approved staging WordPress environment, call `/api/wordpress/health`, then re-run the checks with:

```bash
npm run format
npm run lint
npm run typecheck
npm run build
```
