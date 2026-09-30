# AGENTS.md

Repository-Kontext für zukünftige Sessions. Kurz und praxisbezogen halten.

## Projekt

Statische Marketing-Website für **SG Blitzblank – Gebäudereinigung & Service**
(Ulm, sgb-ulm.de). Next.js App Router + React + TypeScript + Tailwind CSS.
Sprache der Inhalte: **Deutsch, formelle Anrede („Sie“)**.

## Befehle

| Zweck                | Befehl                                        |
| -------------------- | --------------------------------------------- |
| Abhängigkeiten       | `npm install`                                 |
| Entwicklung          | `npm run dev` (Port aus `APP_PORT_2`)         |
| Build                | `npm run build`                               |
| Produktion           | `npm start` (Port aus `APP_PORT_2`)           |
| Lint                 | `npm run lint`                                |

Der Startport kommt aus `APP_PORT_2` (Fallback `8012`). Diese Umgebungsvariable
ist vorgegeben und sollte nicht umgangen werden.

## Konventionen

- **Unternehmensdaten:** ausschließlich in `config/site.ts`. Nie Adressen,
  Telefonnummern oder Rechtsangaben in Komponenten hartkodieren.
- **Leistungsinhalte:** ausschließlich in `config/services.ts` (Rendering über
  `app/leistungen/[slug]/page.tsx`).
- **Ports:** `APP_PORT_2` verwenden, keinen anderen Port binden.
- **Design:** Tokens in `tailwind.config.ts` (`brand`, `accent`, `sand`),
  Utility-Klassen in `app/globals.css` (`.btn-*`, `.card`, `.section`,
  `.field-*`). Neue UI möglichst als Komponente in `components/`.
- **Marke/CI:** Primärfarbe `#76C5EE` (CMYK 90/0/0/0, Tailwind `brand-400`),
  Sekundärfarbe `#434242` (Tailwind `accent-800`), Claim „Gebäudemanagement“.
  Logo-Dateien liegen in `public/brand/`, das CI-Handbuch in `docs/brand/`.
  Die Bildlogos sind für **helle** Hintergründe gedacht; auf dunklen Flächen
  `#76C5EE`/Weiß verwenden. Brand-Angaben stehen gebündelt in `site.brand`.
  Im Header Signet + Wortmarke verwenden, **nicht** das vollständige Logo
  (`site.brand.logo`) – das ist für die Kopfzeile zu hoch.
- **Barrierefreiheit:** Labels für Formularfelder, `alt`-Texte für Bilder,
  sichtbare Fokus-Zustände, semantische Landmarks beibehalten.
- **Bilder:** über `next/image`; neue Hosts in `next.config.mjs`
  (`images.remotePatterns`) freischalten.

## Rechtliches

- `config/site.ts` enthält mit `MUSTER` markierte **Platzhalter**. Diese müssen
  vor dem Livegang ersetzt werden – sonst ist das Impressum nicht konform.
- Kein Tracking, keine nicht-essenziellen Cookies. Wird Analytics ergänzt, muss
  ein Consent-Banner und ein passender Abschnitt in `app/datenschutz/page.tsx`
  hinzukommen.
- Das Kontaktformular nutzt `mailto:` (kein Backend, keine Speicherung). Bei
  Umstellung auf serverseitigen Versand die Datenschutzerklärung anpassen.

## Fallstricke

- Next.js 15: `params` in dynamischen Routen ist ein `Promise` und muss
  `await`-ed werden (siehe `app/leistungen/[slug]/page.tsx`).
- `alternates.canonical` pro Seite setzen, nicht global im Layout, damit
  Sonderseiten nicht auf `/` verweisen.
