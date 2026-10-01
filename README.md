# SG Blitzblank - Website

Marketing website for **SG Blitzblank - Gebäudemanagement** in Ulm
(domain: [sgb-ulm.de](https://sgb-ulm.de)).

Built with Next.js (App Router), React, TypeScript and Tailwind CSS.
The site content is entirely German and statically pre-rendered.

## Services

- Fensterreinigung (window cleaning)
- Osmose-Reinigung (window cleaning with demineralised water)
- Terrassenarbeiten (terrace and outdoor area works)
- Baureinigung (post-construction cleaning)
- Unterhaltsreinigung (routine maintenance cleaning)
- Haushaltsauflösung (household clearance)
- Umzüge (moving services)
- Entrümpelung (junk removal / clearance)

## Getting started

Requires Node.js 18.18 or newer.

```bash
npm install
```

Development server (binds to `APP_PORT_2`, defaults to `8012`):

```bash
npm run dev
```

Production build and start:

```bash
npm run build
npm start
```

The server then runs at <http://localhost:8012>.

## Configuration

All company and legal details live in `config/site.ts` (address, phone, email,
VAT ID, managing director, and so on).

The address, phone number and email are real data. `site.legal` still contains
**placeholders** for the legal representative, commercial register entry and VAT
ID - these must be replaced before going live (mandatory details under § 5 DDG).

Do not build `tel:` links by hand: use `telHref` from `config/site.ts`
(E.164 format, one tap to call). For email use `mailHref`.

The content of the four services lives in `config/services.ts`.

## Calling directly

So the phone number can be dialled with a single tap on a smartphone:

- **Header:** a call button (desktop shows the label from `xl` up, mobile shows
  an icon button).
- **Mobile action bar** (`components/MobileCallBar.tsx`): fixed to the bottom
  below `lg`, offering "Jetzt anrufen" and "Angebot anfragen".
- Phone numbers in the footer, on the contact page, in the CTA block and on the
  homepage are linked as well.

Below `lg` the footer reserves extra bottom padding so the fixed bar does not
cover the Imprint and Privacy links.

## Contact form

The form (`components/ContactForm.tsx`) validates the name, email format,
message and GDPR consent, and includes a honeypot against spam.
It does **not** transmit data to a server: on submit it opens a `mailto:`
link prefilled with the subject and message.

To move to server-side delivery later, add a `fetch` call in `handleSubmit`;
the privacy policy then needs to be extended accordingly.

## Project structure

```
app/                  Routes (home, services, about, contact, legal pages)
components/           Header, footer, form, cards, UI building blocks
config/               Central settings (site.ts) and service content (services.ts)
lib/                  schema.org JSON-LD
```

## Brand and CI

The official logo and colours come from the CI manual
(`docs/brand/sg-blitzblank-logo-ci.jpg`, version 5).

- Primary colour: `#76C5EE` (CMYK 90 / 0 / 0 / 0)
- Secondary colour: `#434242`
- Claim: "Gebäudemanagement"

All colours are defined in `tailwind.config.ts` as `brand` (blues) and `accent`
(greys around `#434242`). The assets are stored here:

| File                                      | Use                                                    |
| ----------------------------------------- | ------------------------------------------------------ |
| `public/brand/sg-blitzblank-signet.png`   | Brand mark: header, footer, favicon source             |
| `public/brand/sg-blitzblank-wordmark.png` | Wordmark with subline: header                          |
| `public/brand/sg-blitzblank-logo.png`     | Full logo for large surfaces/print (not the header - too tall) |
| `app/icon.png`, `app/apple-icon.png`      | Favicons (generated from the signet)                   |

The header combines the signet (`h-9`/`h-10`) with the wordmark
(`h-[22px]`/`h-6`); the full logo would be too tall for the header bar. Below
`sm`, the name is shown as text instead of the wordmark.

The logo files pair dark lettering with light-blue shapes and are intended for
**light** backgrounds. On dark surfaces (top bar, footer) `#76C5EE` or white is
used directly instead of the image logo.

## Images

Photos are loaded from Unsplash (free to use). The allowed source domains are
configured in `next.config.mjs`. For production it is recommended to use
licensed photos of the actual sites.

## Privacy and tracking

No cookies are set for analytics or marketing purposes and no tracking services
are used. A cookie banner is therefore not required.
