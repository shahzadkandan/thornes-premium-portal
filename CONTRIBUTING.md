# Contributing

## Working Agreement

Keep changes small, reviewable and aligned with the approved Thorneberry business model. Prefer maintainable changes that preserve existing URLs, content safety and staging isolation.

## Branching Workflow

1. Start from the latest approved base branch.
2. Keep feature work on `headless-next-rebuild` unless a separate task branch is explicitly requested.
3. Never commit directly to `main`.
4. Never deploy from a feature branch.
5. Keep pull requests draft until staging QA and content claims are approved.
6. Merge only after explicit production approval and successful release checks.

The current working branch is `headless-next-rebuild`. Production and `main` are protected project boundaries.

## Coding Standards

- Use TypeScript with strict type checking.
- Prefer existing project patterns and typed helpers over new abstractions.
- Keep WordPress access inside `src/lib/wordpress`.
- Use Zod schemas for external CMS responses.
- Map CMS data into normalized types before rendering.
- Keep components focused and use server components by default.
- Add `"use client"` only for browser interaction or stateful UI.
- Use `next/image` for images and preserve useful alt text.
- Use accessible labels, keyboard behavior and semantic HTML.
- Keep user-facing copy aligned with healthcare sourcing and export coordination.
- Use ASCII for new files unless content requires otherwise.
- Add comments only where the code needs orientation.

## Formatting and Validation

Before committing:

```bash
npm run lint
npm run typecheck
npm run build
git diff --check
```

Known Fast Refresh warnings in shared UI primitives are documented in `docs/BUILD-STATUS.md`. New warnings or errors should be investigated rather than copied.

## CMS and Claim Safety

Do not add or publish claims about any of the following without approved evidence in WordPress:

- Pharmaceutical manufacturing ownership
- Certifications or regulatory approvals
- GDP or cold-chain capability
- Supplier or manufacturer identity
- Guaranteed lead times, prices or availability
- Testimonials, statistics or named partners

Thorneberry should be presented as a healthcare sourcing and export-coordination company. Product data must identify manufacturer or supplier information only when the CMS record provides it.

## Commit Messages

Use concise imperative-style messages with a conventional prefix:

```text
feat: add typed FAQ mapping
fix: handle missing WordPress image alt text
docs: update staging smoke-test status
test: add CMS response validation coverage
chore: refresh build documentation
```

Avoid mixing runtime code, unrelated formatting and documentation in one commit.

## Pull Requests

Each pull request should include:

- Summary of the change
- Branch and base branch
- Tests and commands run
- CMS or environment assumptions
- Screenshots for visual changes
- Known limitations and blockers
- Confirmation that production and `main` were untouched

Do not include secrets, private backup URLs, database details or server credentials in commits, screenshots or PR descriptions.

## Definition of Done

A change is done when:

- The requested behavior is implemented in the correct layer.
- Existing public URLs and unrelated content remain protected.
- CMS fields are mapped through typed schemas and mappers where applicable.
- Accessibility and responsive behavior are checked for UI changes.
- `npm run lint`, `npm run typecheck`, `npm run build` and `git diff --check` pass, or exceptions are documented.
- New environment requirements are documented without committing secrets.
- Content and claims are verified or clearly marked as pending approval.
- The branch is committed, reviewed and pushed when the task requires it.
- No merge or production deployment occurs without explicit approval.
