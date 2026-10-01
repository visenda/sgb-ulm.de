# AGENTS.md

Repository context for future sessions. Keep it short and practical.

## Repository

- Remote: <https://github.com/visenda/sgb-ulm.de> (org `visenda`)
- Default branch: `main` - work and push there directly.
- Live domain: <https://sgb-ulm.de>

## Project

Static marketing website for **SG Blitzblank - Gebäudemanagement** (Ulm,
sgb-ulm.de). Next.js App Router + React + TypeScript + Tailwind CSS.
Content language: **German, formal address ("Sie")**.

Note: all user-facing copy stays German. Documentation and code comments are
written in English.

## Commands

| Purpose        | Command                                |
| -------------- | -------------------------------------- |
| Dependencies   | `npm install`                          |
| Development    | `npm run dev` (port from `APP_PORT_2`) |
| Build          | `npm run build`                        |
| Production     | `npm start` (port from `APP_PORT_2`)   |
| Lint           | `npm run lint`                         |

The port comes from `APP_PORT_2` (fallback `8012`). This environment variable is
provided by the platform - do not bind any other port.

## Conventions

- **Company data:** only in `config/site.ts`. Never hardcode addresses, phone
  numbers or legal details in components.
- **Contact data:** address/phone/email are real and in place. `site.legal`
  still holds placeholders (representative, register, VAT ID).
- **Call links:** always use `telHref` from `config/site.ts`, never build
  `tel:` strings inside components. Use `mailHref` for email.
  The mobile action bar (`components/MobileCallBar.tsx`) is fixed to the bottom;
  if you change its height, adjust the footer padding (`pb-24 lg:pb-6`) too.
- **Service content:** only in `config/services.ts` (rendered by
  `app/leistungen/[slug]/page.tsx`).
- **Design:** tokens in `tailwind.config.ts` (`brand`, `accent`, `sand`),
  utility classes in `app/globals.css` (`.btn-*`, `.card`, `.section`,
  `.field-*`). Prefer adding new UI as a component in `components/`.
- **Brand/CI:** primary colour `#76C5EE` (CMYK 90/0/0/0, Tailwind `brand-400`),
  secondary colour `#434242` (Tailwind `accent-800`), claim "Gebäudemanagement".
  Logo files live in `public/brand/`, the CI manual in `docs/brand/`.
  The image logos are designed for **light** backgrounds; on dark surfaces use
  `#76C5EE`/white instead. Brand values are grouped in `site.brand`.
  Use signet + wordmark in the header, **not** the full logo
  (`site.brand.logo`) - it is too tall for the header bar.
- **Accessibility:** keep form labels, image `alt` text, visible focus states
  and semantic landmarks.
- **Images:** use `next/image`; allow new hosts in `next.config.mjs`
  (`images.remotePatterns`).

## Legal

- `config/site.ts` contains **placeholders** marked `MUSTER`. They must be
  replaced before going live, otherwise the imprint is not compliant.
- No tracking, no non-essential cookies. If analytics is added, a consent
  banner and a matching section in `app/datenschutz/page.tsx` become mandatory.
- The contact form uses `mailto:` (no backend, no storage). If it is switched to
  server-side delivery, update the privacy policy accordingly.

## Pitfalls

- Next.js 15: `params` in dynamic routes is a `Promise` and must be awaited
  (see `app/leistungen/[slug]/page.tsx`).
- Set `alternates.canonical` per page, not globally in the layout, so that
  special pages do not point at `/`.
