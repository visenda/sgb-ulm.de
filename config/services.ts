export type ServiceIcon = "window" | "terrace" | "construction" | "maintenance";

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  teaser: string;
  icon: ServiceIcon;
  image: string;
  imageAlt: string;
  intro: string;
  scope: string[];
  includes: string[];
  forWhom: string[];
  faq: { question: string; answer: string }[];
};

const unsplash = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const services: Service[] = [
  {
    slug: "fensterreinigung",
    title: "Fensterreinigung",
    shortTitle: "Fensterreinigung",
    teaser:
      "Streifenfreie Glasflächen, gepflegte Rahmen und saubere Fensterbänke – innen wie außen.",
    icon: "window",
    image: unsplash("photo-1581578731548-c64695cc6952"),
    imageAlt:
      "Professionelle Reinigung einer großen Glasfassade mit einem Fensterabzieher",
    intro:
      "Glasflächen sind die Visitenkarte eines Gebäudes. Wir reinigen Fenster, Glasfassaden und Rahmen gründlich, schonend und streifenfrei – vom Erdgeschoss bis zur schwer erreichbaren Höhe. Dabei arbeiten wir mit entmineralisiertem Wasser und professioneller Ausrüstung, damit Ihre Glasflächen länger sauber bleiben.",
    scope: [
      "Fensterreinigung innen und außen",
      "Glasfassaden, Wintergärten und Schaufenster",
      "Rahmen-, Falz- und Fensterbankreinigung",
      "Glasdächer sowie schwer erreichbare Flächen",
      "Reinigung von Lichtkuppeln und Oberlichtern",
    ],
    includes: [
      "Streifenfreies Ergebnis mit entmineralisiertem Wasser",
      "Schonende Reinigung empfindlicher Rahmen und Dichtungen",
      "Entfernung von Kalk, Fett- und Wasserflecken",
      "Arbeit mit Teleskopstangen und Hubtechnik ohne Gerüst",
      "Fixierte Termine, auch außerhalb Ihrer Geschäftszeiten",
    ],
    forWhom: [
      "Bürogebäude und Praxen",
      "Gastronomie und Einzelhandel",
      "Hausverwaltungen und Wohnanlagen",
      "Privatkunden mit Einfamilienhäusern",
    ],
    faq: [
      {
        question: "Wie oft sollten Fenster professionell gereinigt werden?",
        answer:
          "Für Gewerbeobjekte empfehlen wir je nach Lage eine Reinigung alle vier bis acht Wochen. Privatkunden lassen Fenster meist zwei- bis dreimal pro Jahr reinigen.",
      },
      {
        question: "Muss ich Wasser- und Stromanschluss bereitstellen?",
        answer:
          "In den meisten Fällen arbeiten wir mit eigenem Wasser und autarkem Equipment. Für größere Objekte sprechen wir den Anschluss vorab mit Ihnen ab.",
      },
      {
        question: "Erreichen Sie auch hohe Glasflächen ohne Gerüst?",
        answer:
          "Ja. Mit Teleskopstangen und geeigneter Technik erreichen wir viele Höhen gerüstfrei. Bei Bedarf führen wir eine separate Höhenprüfung durch.",
      },
    ],
  },
  {
    slug: "terrassenarbeiten",
    title: "Terrassenarbeiten",
    shortTitle: "Terrassenarbeiten",
    teaser:
      "Terrassen, Wege und Außenanlagen fachgerecht reinigen, pflegen und winterfest machen.",
    icon: "terrace",
    image: unsplash("photo-1600585154340-be6161a56a0c"),
    imageAlt: "Gepflegte Terrasse mit Steinplatten und gepflegtem Gartenbereich",
    intro:
      "Wetter, Laub und Moos setzen Terrassen, Einfahrten und Gehwegen zu. Wir reinigen Außenflächen mit dem passenden Verfahren – je nach Untergrund mit Hochdruck, Flächenreiniger oder schonender Handarbeit – und sorgen dafür, dass Ihre Außenanlagen gepflegt und sicher nutzbar bleiben.",
    scope: [
      "Reinigung von Terrassen und Balkonen",
      "Einfahrten, Gehwege und Parkflächen",
      "Entfernung von Moos, Algen und Laub",
      "Fugenreinigung und Pflege von Pflasterflächen",
      "Pflege und Vorbereitung im Winterdienst-Umfeld",
    ],
    includes: [
      "Untergrundgerechte Auswahl des Reinigungsverfahrens",
      "Entfernung hartnäckiger Verschmutzungen und Grünbeläge",
      "Schonende Behandlung von Naturstein und Keramik",
      "Rutschhemmende Sauberkeit für sichere Wege",
      "Abtransport und fachgerechte Entsorgung von Schmutz",
    ],
    forWhom: [
      "Privatkunden mit Haus, Garten und Terrasse",
      "Wohnungseigentümergemeinschaften",
      "Gastronomie mit Außengastronomie",
      "Gewerbeobjekte mit Zufahrten und Parkplätzen",
    ],
    faq: [
      {
        question: "Welches Verfahren passt zu meinem Terrassenbelag?",
        answer:
          "Das hängt vom Material ab: Naturstein verträgt oft nur schonende Handarbeit, während Pflaster gut mit dem Flächenreiniger bearbeitet werden kann. Wir prüfen den Belag vorab und stimmen das Verfahren darauf ab.",
      },
      {
        question: "Wann ist der beste Zeitpunkt für die Reinigung?",
        answer:
          "Im Frühjahr nach dem Winter und im Herbst vor der feuchten Jahreszeit sind ideal. So bleibt die Terrasse über die Saison gepflegt und rutschfest.",
      },
      {
        question: "Bieten Sie die Arbeiten auch einmalig an?",
        answer:
          "Ja. Sie können die Terrassenreinigung einmalig buchen oder in einen regelmäßigen Pflegeplan einbinden.",
      },
    ],
  },
  {
    slug: "baureinigung",
    title: "Baureinigung",
    shortTitle: "Baureinigung",
    teaser:
      "Vom Rohbau bis zur besenreinen Übergabe – termingerecht und abgestimmt auf Ihren Bauablauf.",
    icon: "construction",
    image: unsplash("photo-1503387762-592deb58ef4e"),
    imageAlt: "Baustelle mit Gerüst und Neubau während der Bauphase",
    intro:
      "Nach dem Bau beginnt die Feinarbeit. Wir übernehmen die Baureinigung von der Grobreinigung während der Bauphase bis zur besenreinen oder bezugsfertigen Endreinigung. Dabei arbeiten wir eng mit Bauleitung und Gewerken zusammen, damit Übergabetermine zuverlässig gehalten werden.",
    scope: [
      "Baugrobreinigung während der Bauphase",
      "Bauzwischenreinigung nach einzelnen Gewerken",
      "Baureinigung vor Abnahme und Übergabe",
      "Baufeinreinigung und bezugsfertige Endreinigung",
      "Entfernung von Bauschutt, Folien und Verpackungsresten",
    ],
    includes: [
      "Trennung und Entsorgung von Bauschutt und Restmaterial",
      "Entfernung von Kleberesten, Mörtelspritzern und Staub",
      "Reinigung von Fenstern, Rahmen und Zargen",
      "Grundreinigung von Böden vor dem Einzug",
      "Saubere Übergabe dokumentiert nach Ihrem Abnahmeprotokoll",
    ],
    forWhom: [
      "Bauträger und Generalunternehmer",
      "Architektur- und Planungsbüros",
      "Handwerksbetriebe und Ausbaugewerke",
      "Private Bauherren und Sanierungen",
    ],
    faq: [
      {
        question: "Was unterscheidet Grob-, Zwischen- und Feinreinigung?",
        answer:
          "Die Grobreinigung entfernt groben Baustellenmüll, die Zwischenreinigung hält den Baufortschritt sauber und die Feinreinigung bereitet das Objekt für die Übergabe vor. Sie können jede Stufe einzeln oder als Paket buchen.",
      },
      {
        question: "Wie kurzfristig können Sie auf der Baustelle starten?",
        answer:
          "Nach Absprache sind kurzfristige Einsätze möglich. Für einen verlässlichen Ablauf planen wir Objektbegehung und Terminvorlauf gemeinsam mit Ihnen.",
      },
      {
        question: "Übernehmen Sie auch die Entsorgung?",
        answer:
          "Ja. Wir trennen anfallende Reststoffe und organisieren die Entsorgung gemäß den geltenden Vorgaben.",
      },
    ],
  },
  {
    slug: "unterhaltsreinigung",
    title: "Unterhaltsreinigung",
    shortTitle: "Unterhaltsreinigung",
    teaser:
      "Planbare Sauberkeit im laufenden Betrieb – mit festen Ansprechpartnern und dokumentierter Qualität.",
    icon: "maintenance",
    image: unsplash("photo-1497366754035-f200968a6e72"),
    imageAlt: "Modernes, sauberes Büro mit gepflegten Arbeitsplätzen",
    intro:
      "Die Unterhaltsreinigung hält Ihr Objekt dauerhaft gepflegt und hygienisch. Wir erstellen einen Reinigungsplan, der zu Ihren Räumen, Zeiten und Nutzern passt, und setzen ihn mit festen Teams und klaren Qualitätskontrollen um. Sie müssen sich um nichts kümmern – außer um Ihr Geschäft.",
    scope: [
      "Regelmäßige Reinigung von Büros und Verwaltungsflächen",
      "Sanitärreinigung mit Hygienekonzept",
      "Reinigung von Treppenhäusern und Verkehrsflächen",
      "Küchen- und Teeküchenreinigung",
      "Sonderreinigung nach Bedarf und Anlass",
    ],
    includes: [
      "Individueller Reinigungsplan nach Objektbegehung",
      "Feste Reinigungsteams und fester Ansprechpartner",
      "Dokumentierte Qualitätskontrollen",
      "Verbrauchsmaterial-Management auf Wunsch",
      "Flexible Einsatzzeiten außerhalb Ihrer Öffnungszeiten",
    ],
    forWhom: [
      "Unternehmen und Agenturen",
      "Arztpraxen und Therapieeinrichtungen",
      "Hausverwaltungen und öffentliche Einrichtungen",
      "Kanzleien, Kitas und Bildungsträger",
    ],
    faq: [
      {
        question: "Wie oft wird mein Objekt gereinigt?",
        answer:
          "Das legen wir gemeinsam fest – von täglich über mehrmals pro Woche bis zu festen Intervallen im Monat. Die Frequenz richtet sich nach Nutzung und Sauberkeitsempfinden.",
      },
      {
        question: "Reinigen Sie auch außerhalb der Geschäftszeiten?",
        answer:
          "Ja. Früh morgens, abends oder am Wochenende – wir richten uns nach Ihrem Betrieb, damit der laufende Ablauf nicht gestört wird.",
      },
      {
        question: "Wie stellen Sie die Qualität sicher?",
        answer:
          "Wir arbeiten mit festen Teams, klaren Leistungsverzeichnissen und dokumentierten Kontrollen. Bei Bedarf vereinbaren wir regelmäßige Qualitätsgespräche.",
      },
    ],
  },
];

export const getService = (slug: string) =>
  services.find((service) => service.slug === slug);
