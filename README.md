# Bangalore Doorstep Massage Website

Production-ready, mobile-first marketing site for bangaloredoorstepmassage.online.

## Tech Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS
- Zod validation
- Netlify Forms (no backend required)
- Playwright (smoke test)

## Local Development
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Lint & Format
```bash
npm run lint
npm run format
```

## Typecheck
```bash
npm run typecheck
```

## Tests (Smoke E2E)
```bash
npm run test:e2e
```
Note: Run `npx playwright install` the first time to download browsers.

## Configuration
Optional overrides:
- WhatsApp number: `lib/site.ts` or `NEXT_PUBLIC_WHATSAPP_NUMBER` in `.env`.
- Contact email: `lib/site.ts` or `NEXT_PUBLIC_CONTACT_EMAIL` in `.env`.
 - Analytics (optional):
   - GA4: `NEXT_PUBLIC_GA4_ID`
   - Meta Pixel: `NEXT_PUBLIC_META_PIXEL_ID`

## Netlify Deployment
1. Push this repo to GitHub.
2. In Netlify, "Add new site" -> "Import an existing project".
3. Select the repo and keep:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: `20` (set via `netlify.toml`)
4. Deploy site.
5. In Netlify -> Site settings -> Forms, verify the "booking" and "therapist-application" forms are detected.

## Marketing Tracking
- UTM parameters are captured on first visit and submitted with both forms.
- Landing pages include `/careers` and `/therapist-hiring` for hiring campaigns.

## Namecheap DNS Instructions
Point `bangaloredoorstepmassage.online` to Netlify:
- Apex/root record:
  - Type: ALIAS (or ANAME)
  - Host: `@`
  - Value: `apex-loadbalancer.netlify.com`
- `www` record:
  - Type: CNAME
  - Host: `www`
  - Value: `<your-netlify-site>.netlify.app`

Important:
- Remove any conflicting A, CNAME, or URL redirect records for `@` or `www`.
- DNS propagation can take a few minutes to 24 hours.

## Runbook
Local run commands:
```bash
npm install
npm run dev
```

Netlify import steps:
1. Connect repo -> set build command `npm run build` -> publish `.next`.
2. Confirm Netlify Forms detects the `booking` form.
3. Trigger a production deploy.

Domain verification steps:
1. Add the Namecheap DNS records above.
2. In Netlify -> Domain management, add `bangaloredoorstepmassage.online`.
3. Verify DNS and wait for HTTPS provisioning.

Troubleshooting checklist:
- `npm run build` passes locally.
- Node version is 20+.
- Netlify shows the Next.js plugin enabled.
- DNS records do not conflict (remove old A/CNAME/URL redirects).
- WhatsApp number and contact email are updated.
