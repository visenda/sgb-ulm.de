/**
 * Central configuration for SG Blitzblank.
 *
 * Address, phone number and email are real data. Fields marked `MUSTER`
 * (placeholder) under `legal` - legal representative, commercial register,
 * VAT ID - must be replaced before going live (§ 5 DDG imprint obligation).
 */
export const site = {
  name: "SG Blitzblank",
  legalName: "SG Blitzblank Gebäudemanagement",
  claim: "Gebäudemanagement",
  url: "https://sgb-ulm.de",
  locale: "de_DE",
  language: "de",
  /**
   * Official logo/CI values (version 5).
   * Accent colour: CMYK 90/0/0/0 ≈ #76C5EE, secondary colour #434242.
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
   * Real SG Blitzblank contact details.
   * `phone` is stored in E.164 format and is used to build `tel:` links.
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
  /** Placeholder - replace with the real register entry, VAT ID and representative */
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

/** E.164 format without spaces - used for `tel:` links (one tap to call). */
export const telHref = `tel:${site.contact.phone.replace(/\s/g, "")}`;

/** `mailto:` link for the contact address. */
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
