# SG Blitzblank – Website

Marketing-Website für **SG Blitzblank – Gebäudereinigung & Service** in Ulm
(Domain: [sgb-ulm.de](https://sgb-ulm.de)).

Erstellt mit Next.js (App Router), React, TypeScript und Tailwind CSS.
Die Seite ist vollständig auf Deutsch und statisch vorgerendert.

## Leistungen

- Fensterreinigung
- Terrassenarbeiten
- Baureinigung
- Unterhaltsreinigung

## Starten

Voraussetzung: Node.js 18.18 oder neuer.

```bash
npm install
```

Entwicklungsserver (bindet an `APP_PORT_2`, Standard `8012`):

```bash
npm run dev
```

Produktionsbuild und -start:

```bash
npm run build
npm start
```

Der Server läuft anschließend unter <http://localhost:8012>.

## Konfiguration

Alle Unternehmens- und Rechtsangaben liegen zentral in `config/site.ts`
(Adresse, Telefon, E-Mail, USt-IdNr., Geschäftsführung usw.).

Die Anschrift, Telefonnummer und E-Mail-Adresse sind hinterlegt. Unter
`site.legal` stehen noch **Platzhalter** für Vertretungsberechtigten,
Registereintrag und USt-IdNr. – diese müssen vor dem Livegang ersetzt werden
(Pflichtangaben nach § 5 DDG).

Für Anruf-Links nicht selbst `tel:` bauen: `telHref` aus `config/site.ts`
verwenden (E.164-Format, ein Tap zum Anrufen). Für E-Mail `mailHref`.

## Direkt anrufen

Damit die Telefonnummer auf dem Smartphone mit einem Tap wählbar ist:

- **Header:** Anrufbutton (Desktop ab `xl` mit Label, mobil als Icon-Button).
- **Mobiler Aktionsbalken** (`components/MobileCallBar.tsx`): fest am unteren
  Rand unterhalb von `lg`, mit „Jetzt anrufen“ und „Angebot anfragen“.
- Telefonnummern im Footer, auf der Kontaktseite, im CTA-Block und auf der
  Startseite sind ebenfalls verlinkt.

Der Footer reserviert unterhalb von `lg` zusätzlichen Abstand, damit der feste
Balken die Links zu Impressum und Datenschutz nicht verdeckt.

Die Inhalte der vier Leistungen stehen in `config/services.ts`.

## Kontaktformular

Das Formular (`components/ContactForm.tsx`) validiert Name, E-Mail-Format,
Nachricht und die DSGVO-Zustimmung und enthält einen Honeypot gegen Spam.
Es überträgt **keine Daten an einen Server**: Beim Absenden wird eine mit
Betreff und Nachricht vorausgefüllte `mailto:`-Verbindung geöffnet.

Für einen späteren serverseitigen Versand kann die Absende-Logik in
`handleSubmit` um einen `fetch`-Aufruf ergänzt werden; die
Datenschutzerklärung ist dann entsprechend zu erweitern.

## Struktur

```
app/                  Routen (Startseite, Leistungen, Über uns, Kontakt, Rechtliches)
components/           Header, Footer, Formular, Karten, UI-Bausteine
config/               Zentrale Angaben (site.ts) und Leistungsinhalte (services.ts)
lib/                  schema.org-JSON-LD
```

## Marke und CI

Das offizielle Logo und die Farben stammen aus dem CI-Handbuch
(`docs/brand/sg-blitzblank-logo-ci.jpg`, Version 5).

- Primärfarbe: `#76C5EE` (CMYK 90 / 0 / 0 / 0)
- Sekundärfarbe: `#434242`
- Claim: „Gebäudemanagement“

Alle Farben sind in `tailwind.config.ts` als `brand` (Blautöne) und `accent`
(Graustufen um `#434242`) hinterlegt. Die Assets liegen hier:

| Datei                                  | Verwendung                          |
| -------------------------------------- | ----------------------------------- |
| `public/brand/sg-blitzblank-signet.png` | Bildmarke: Header, Footer, Favicon-Quelle |
| `public/brand/sg-blitzblank-wordmark.png` | Schriftzug mit Subline: Header      |
| `public/brand/sg-blitzblank-logo.png`  | Vollständiges Logo für große Flächen/Print (nicht im Header – zu hoch) |
| `app/icon.png`, `app/apple-icon.png`   | Favicons (aus dem Signet erzeugt)   |

Der Header kombiniert Signet (`h-9`/`h-10`) und Wortmarke (`h-[22px]`/`h-6`);
das vollständige Logo wäre in der Kopfzeile zu hoch. Unter `sm` wird statt der
Wortmarke der Name als Text gezeigt.

Die Logo-Dateien kombinieren dunkle Schrift mit hellblauen Flächen und sind
für **helle** Hintergründe gedacht. Auf dunklen Flächen (Header-Zeile, Footer)
wird deshalb direkt `#76C5EE` bzw. Weiß verwendet, nicht das Bildlogo.

## Bilder

Die Fotos werden von Unsplash geladen (kostenlos nutzbar). Die erlaubten
Quell-Domains sind in `next.config.mjs` hinterlegt. Für einen Produktivbetrieb
empfiehlt es sich, eigene, lizenzierte Objektfotos einzubinden.

## Datenschutz und Tracking

Es werden keine Cookies zu Analyse- oder Marketingzwecken gesetzt und keine
Tracking-Dienste verwendet. Daher ist kein Cookie-Banner erforderlich.
