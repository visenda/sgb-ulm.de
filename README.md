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

> **Wichtig:** Die dort mit `MUSTER` markierten Werte sind Platzhalter und
> müssen vor dem Livegang durch die echten Daten ersetzt werden. Das gilt
> insbesondere für das Impressum (Pflichtangaben nach § 5 DDG).

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

## Bilder

Die Fotos werden von Unsplash geladen (kostenlos nutzbar). Die erlaubten
Quell-Domains sind in `next.config.mjs` hinterlegt. Für einen Produktivbetrieb
empfiehlt es sich, eigene, lizenzierte Objektfotos einzubinden.

## Datenschutz und Tracking

Es werden keine Cookies zu Analyse- oder Marketingzwecken gesetzt und keine
Tracking-Dienste verwendet. Daher ist kein Cookie-Banner erforderlich.
