/**
 * Zentrale Konfiguration für SG Blitzblank.
 *
 * Anschrift, Telefon und E-Mail sind echte Angaben. Die mit `MUSTER`
 * markierten Felder unter `legal` (Vertretung, Registereintrag, USt-IdNr.)
 * müssen vor dem Livegang ersetzt werden (Impressumspflicht nach § 5 DDG).
 */
export const site = {
  name: "SG Blitzblank",
  legalName: "SG Blitzblank Gebäudemanagement",
  claim: "Gebäudemanagement",
  url: "https://sgb-ulm.de",
  locale: "de_DE",
  language: "de",
  /**
   * Angaben aus dem offiziellen Logo/CI (Version 5).
   * Akzentfarbe: CMYK 90/0/0/0 ≈ #76C5EE, Sekundärfarbe #434242.
   */
  brand: {
    blue: "#76c5ee",
    blueCmyk: "CMYK 90 / 0 / 0 / 0",
    charcoal: "#434242",
    logo: "/brand/sg-blitzblank-logo.png",
    signet: "/brand/sg-blitzblank-signet.png",
    wordmark: "/brand/sg-blitzblank-wordmark.png",
    ciSource: "docs/brand/sg-blitzblank-logo-ci.jpg",
  },
  /**
   * Echte Kontaktdaten von SG Blitzblank.
   * `phone` liegt im E.164-Format vor und wird für `tel:`-Links verwendet.
   */
  contact: {
    phone: "+49 731 14615080",
    phoneDisplay: "0731 14615080",
    email: "info@sgb-ulm.de",
    street: "Mähringerweg 86",
    postalCode: "89075",
    city: "Ulm",
    region: "Baden-Württemberg",
    country: "DE",
    countryName: "Deutschland",
    lat: 48.4112594,
    lng: 9.9659751,
  },
  /** MUSTER – durch echte Angaben ersetzen (Registereintrag, USt-IdNr., Vertretung) */
  legal: {
    managingDirector: "Max Mustermann",
    registerCourt: "Amtsgericht Ulm",
    registerNumber: "HRB 000000",
    vatId: "DE000000000",
    chamber: "Handwerkskammer Ulm",
  },
  openingHours: [
    { days: "Montag – Freitag", hours: "07:00 – 18:00 Uhr" },
    { days: "Samstag", hours: "08:00 – 14:00 Uhr" },
    { days: "Sonntag & Feiertage", hours: "geschlossen" },
  ],
  region: {
    city: "Ulm",
    headline: "Ulm und Umgebung",
    areas: [
      "Ulm",
      "Neu-Ulm",
      "Blaustein",
      "Erbach",
      "Ehingen",
      "Laichingen",
      "Biberach",
      "Heidenheim",
    ],
  },
  foundingYear: 2015,
} as const;

/** E.164-Format ohne Leerzeichen – für `tel:`-Links (ein Tap zum Anrufen). */
export const telHref = `tel:${site.contact.phone.replace(/\s/g, "")}`;

/** `mailto:`-Link für die Kontaktadresse. */
export const mailHref = `mailto:${site.contact.email}`;

export const nav = [
  { label: "Startseite", href: "/" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Kontakt", href: "/kontakt" },
];

export const footerLinks = {
  leistungen: [
    { label: "Fensterreinigung", href: "/leistungen/fensterreinigung" },
    { label: "Terrassenarbeiten", href: "/leistungen/terrassenarbeiten" },
    { label: "Baureinigung", href: "/leistungen/baureinigung" },
    { label: "Unterhaltsreinigung", href: "/leistungen/unterhaltsreinigung" },
  ],
  unternehmen: [
    { label: "Startseite", href: "/" },
    { label: "Über uns", href: "/ueber-uns" },
    { label: "Leistungen", href: "/leistungen" },
    { label: "Kontakt", href: "/kontakt" },
  ],
  rechtliches: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
  ],
};
