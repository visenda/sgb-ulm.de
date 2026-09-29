/**
 * Zentrale Konfiguration für SG Blitzblank.
 *
 * WICHTIG: Alle mit `MUSTER` markierten Angaben sind rechtlich unverbindliche
 * Platzhalter und müssen vor dem Livegang durch die echten Unternehmensdaten
 * ersetzt werden (Impressumspflicht nach § 5 DDG).
 */
export const site = {
  name: "SG Blitzblank",
  legalName: "SG Blitzblank Gebäudereinigung & Service",
  claim: "Gebäudereinigung & Service",
  url: "https://sgb-ulm.de",
  locale: "de_DE",
  language: "de",
  /** MUSTER – durch echte Angaben ersetzen */
  contact: {
    phone: "+49 000 0000000",
    phoneDisplay: "0000 0000000",
    email: "info@sgb-ulm.de",
    street: "Musterstraße 1",
    postalCode: "89073",
    city: "Ulm",
    region: "Baden-Württemberg",
    country: "DE",
    countryName: "Deutschland",
    lat: 48.4011,
    lng: 9.9876,
  },
  /** MUSTER – durch echte Angaben ersetzen */
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
