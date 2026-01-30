# Repository Guidelines

## Project Structure & Module Organization
- `app/` contains the Next.js App Router pages, layouts, and route handlers.
- `components/` holds shared UI components.
- `lib/` includes site configuration and helpers (see `lib/site.ts`).
- `content/` stores marketing copy and structured content.
- `public/` holds static assets (images, icons).
- `tests/` contains Playwright E2E tests (e.g., `tests/smoke.spec.ts`).
- `.netlify/` and `netlify.toml` capture deployment configuration.

## Build, Test, and Development Commands
- `npm run dev` — start the local dev server at http://127.0.0.1:3000.
- `npm run build` — produce the production build in `.next/`.
- `npm run start` — run the built app locally.
- `npm run lint` — run ESLint with Next.js rules.
- `npm run format` — format the repo with Prettier.
- `npm run typecheck` — run TypeScript without emitting files.
- `npm run test:e2e` — run Playwright smoke tests (first time: `npx playwright install`).

## Coding Style & Naming Conventions
- TypeScript + Next.js App Router; use React Server Components where appropriate.
- Prettier enforces: 2-space indent, double quotes, semicolons, 90-char line width.
- ESLint uses Next.js core-web-vitals + TypeScript presets.
- Files: prefer `kebab-case` for routes (Next.js convention) and `PascalCase` for components (e.g., `components/HeroSection.tsx`).

## Testing Guidelines
- Playwright is the only test framework configured.
- Keep smoke coverage in `tests/` and name specs `*.spec.ts`.
- No coverage thresholds are configured; focus on critical user flows (landing page, forms).

## Commit & Pull Request Guidelines
- Commit messages follow Conventional Commits (examples in history: `feat:`, `fix:`, `docs:`, `test:`).
- PRs should include: a concise summary, testing notes (commands run), and screenshots for UI changes.
- Link related issues or campaign tasks when applicable.

## Security & Configuration
- Environment variables are documented in `.env.example`.
- Update `NEXT_PUBLIC_WHATSAPP_NUMBER` and `NEXT_PUBLIC_CONTACT_EMAIL` when changing contact info.
- Optional analytics IDs: `NEXT_PUBLIC_GA4_ID`, `NEXT_PUBLIC_META_PIXEL_ID`.
