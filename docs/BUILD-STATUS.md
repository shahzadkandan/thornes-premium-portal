# Build Status

Date: 2026-07-18
Branch: `headless-next-rebuild`

## Commands Run

```bash
npm install
npm install next@16.0.0 --save --prefer-offline --no-audit --fetch-retries=5 --fetch-retry-maxtimeout=120000
npm run typecheck
npm run lint
npm run build
```

## Result

| Check              | Status               | Notes                                                                                                                                                 |
| ------------------ | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Dependency install | Failed               | `npm install` hit `ECONNRESET`; retry hit partial/corrupt `node_modules` extraction for `next`, `@next/env`, `@next/swc-win32-x64-msvc`, and `sharp`. |
| Lint               | Passed with warnings | `eslint .` passes with 7 Fast Refresh warnings from existing shared UI exports and `src/app/layout.tsx`.                                              |
| Typecheck          | Failed               | Next.js types are unavailable because `next` did not install.                                                                                         |
| Build              | Failed               | `next` executable is unavailable: `'next' is not recognized as an internal or external command`.                                                      |

## Screenshots

Baseline screenshots already present in the repository and carried on this branch:

- `qa-desktop-1440.png`
- `qa-laptop-1024.png`
- `qa-mobile-390.png`
- `header-correct-healthcare-dropdown-desktop.png`
- `blog-with-topic-articles.png`

## Known Limitations

- This PR initializes the Next.js App Router foundation but does not complete the visual section-by-section migration.
- Production is untouched.
- WordPress REST integration is scaffolded but not connected to a live/staging API.
- Contact and RFQ forms are placeholders pending approved mail transport and spam/rate-limit approach.
- Build cannot pass until local dependency install is repaired.

## Next Recovery Step

Clean the partial generated `node_modules` dependency install, rerun `npm install`, then run:

```bash
npm run format
npm run lint
npm run typecheck
npm run build
```
