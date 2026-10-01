export type ServiceIcon =
  | "window"
  | "terrace"
  | "construction"
  | "maintenance"
  | "osmosis"
  | "clearance"
  | "moving"
  | "disposal";

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
  {
    slug: "haushaltsaufloesung",
    title: "Haushaltsauflösung",
    shortTitle: "Haushaltsauflösung",
    teaser:
      "Wir lösen Haushalte vollständig auf – diskret, respektvoll und mit besenreiner Übergabe.",
    icon: "clearance",
    image: unsplash("photo-1553413077-190dd305871c"),
    imageAlt:
      "Geräumtes und besenrein übergebenes Wohnzimmer nach einer Haushaltsauflösung",
    intro:
      "Eine Haushaltsauflösung ist mehr als Räumen: Sie braucht Fingerspitzengefühl, klare Absprachen und einen verlässlichen Zeitplan. Wir übernehmen die komplette Auflösung – von der Sichtung über das Tragen und Sortieren bis zur besenreinen Übergabe an Eigentümer, Verwaltung oder Nachmieter. Dabei behandeln wir jede Wohnung so, als wäre sie unsere eigene.",
    scope: [
      "Vollständige Auflösung von Wohnungen und Häusern",
      "Sichtung, Sortierung und Trennung des Hausrats",
      "Fachgerechte Entsorgung nicht mehr benötigter Gegenstände",
      "Ausräumen von Kellern, Dachböden und Nebengebäuden",
      "Besenreine Hinterlassung der Räume",
    ],
    includes: [
      "Kostenlose Besichtigung vor Ort und transparentes Festpreisangebot",
      "Diskrete Abwicklung, auf Wunsch auch bei Abwesenheit",
      "Sorgfältiger Umgang mit Erinnerungsstücken und Wertsachen",
      "Trennung nach Wertstoffen und fachgerechte Entsorgung",
      "Termingerechte Übergabe an Vermieter, Erben oder Nachmieter",
    ],
    forWhom: [
      "Familien und Angehörige im Erbfall",
      "Seniorinnen und Senioren beim Wechsel in eine betreute Wohnform",
      "Hausverwaltungen und Vermieter",
      "Nachmieter und Immobilieneigentümer",
    ],
    faq: [
      {
        question: "Was kostet eine Haushaltsauflösung?",
        answer:
          "Der Preis hängt von Größe, Füllgrad und Etage ab. Nach einer kostenlosen Besichtigung erhalten Sie ein Festpreisangebot – ohne versteckte Zusatzkosten.",
      },
      {
        question: "Kann die Auflösung ohne meine Anwesenheit erfolgen?",
        answer:
          "Ja. Nach klarer Absprache und Schlüsselübergabe führen wir die Auflösung diskret durch und dokumentieren den Fortschritt für Sie.",
      },
      {
        question: "Muss ich mich um die Entsorgung kümmern?",
        answer:
          "Nein. Wir trennen Wertstoffe und übernehmen die fachgerechte Entsorgung. Verwertbare Gegenstände werden nach Absprache angerechnet.",
      },
    ],
  },
  {
    slug: "umzuege",
    title: "Umzüge",
    shortTitle: "Umzüge",
    teaser:
      "Umzüge für Privat und Gewerbe – gut geplant, sorgfältig verpackt und pünktlich am Ziel.",
    icon: "moving",
    image: unsplash("photo-1519003722824-194d4455a60c"),
    imageAlt:
      "Umzugswagen mit geöffneter Ladeklappe beim Transport von Umzugskartons",
    intro:
      "Ein Umzug läuft nur dann entspannt ab, wenn Planung, Verpacken und Transport ineinandergreifen. Wir übernehmen von der ersten Besichtigung über das fachgerechte Verpacken und Tragen bis zum Aufbau am neuen Ort. So wissen Sie von Anfang an, wer wann welche Aufgabe übernimmt – und wann Ihr Umzug abgeschlossen ist.",
    scope: [
      "Privatumzüge innerhalb der Region und deutschlandweit",
      "Firmen- und Büroumzüge mit kurzer Ausfallzeit",
      "Verpacken, Polstern und Kennzeichnen des Umzugsguts",
      "Ein- und Ausladen sowie Transport mit geeigneten Fahrzeugen",
      "Demontage und Wiederaufbau von Möbeln",
    ],
    includes: [
      "Kostenlose Besichtigung mit verbindlichem Festpreis",
      "Fachgerechtes Verpackungsmaterial auf Wunsch",
      "Geschultes Umzugsteam mit festen Ansprechpartnern",
      "Sorgfältiger Umgang mit zerbrechlichen und hochwertigen Stücken",
      "Termingerechter Ablauf nach gemeinsamem Umzugsplan",
    ],
    forWhom: [
      "Privatpersonen und Familien",
      "Unternehmen und Kanzleien",
      "Hausverwaltungen",
      "Studierende und Berufseinsteiger",
    ],
    faq: [
      {
        question: "Übernehmen Sie auch das Verpacken?",
        answer:
          "Ja. Sie können den Umzug mit oder ohne Verpackungsservice buchen. Benötigtes Material wie Kartons und Polster bringen wir auf Wunsch mit.",
      },
      {
        question: "Bieten Sie auch Firmenumzüge an?",
        answer:
          "Ja. Für Büros planen wir den Ablauf so, dass der Betrieb nur kurz unterbrochen wird – auf Wunsch führen wir den Umzug am Wochenende durch.",
      },
      {
        question: "Sind meine Möbel während des Transports versichert?",
        answer:
          "Für den Transport gelten die üblichen Haftungsregelungen. Einzelheiten klären wir vorab im Angebot, damit Sie wissen, womit Sie rechnen können.",
      },
    ],
  },
  {
    slug: "entruempelung",
    title: "Entrümpelung",
    shortTitle: "Entrümpelung",
    teaser:
      "Keller, Dachboden oder Gewerbefläche entrümpeln – schnell, ordentlich und fachgerecht entsorgt.",
    icon: "disposal",
    image: unsplash("photo-1595246140625-573b715d11dc"),
    imageAlt:
      "Voll beladener Transporter bei der Entrümpelung eines Kellers",
    intro:
      "Ob voller Keller, vermülltes Grundstück oder ungenutzte Gewerbefläche: Wir räumen zügig aus und entsorgen fachgerecht. Dabei arbeiten wir nach klarem Zeitplan, trennen Wertstoffe sauber und übergeben die Fläche anschließend besenrein – damit sie wieder nutzbar ist.",
    scope: [
      "Entrümpelung von Kellern, Dachböden und Garagen",
      "Räumung von Gewerbe- und Lagerflächen",
      "Entfernung von Sperrmüll und Altgeräten",
      "Räumung von Grundstücken und Außenanlagen",
      "Besenreine Übergabe der geräumten Flächen",
    ],
    includes: [
      "Besichtigung vor Ort und Festpreisangebot",
      "Trennung nach Wertstoffen und fachgerechte Entsorgung",
      "Verwertung brauchbarer Gegenstände nach Absprache",
      "Kurzfristige Termine auf Anfrage möglich",
      "Saubere Arbeitsweise ohne Beschädigung des Gebäudes",
    ],
    forWhom: [
      "Hausverwaltungen und Vermieter",
      "Gewerbetreibende und Lagerbetreiber",
      "Privatpersonen und Erbengemeinschaften",
      "Kommunen und öffentliche Einrichtungen",
    ],
    faq: [
      {
        question: "Wie schnell kann eine Entrümpelung erfolgen?",
        answer:
          "Nach einer kurzen Besichtigung sind oft kurzfristige Termine möglich. Größere Objekte planen wir gemeinsam mit Ihnen in Etappen.",
      },
      {
        question: "Entsorgen Sie auch Sondermüll?",
        answer:
          "Altlacke, Elektrogeräte und ähnliche Stoffe entsorgen wir über die zuständigen Stellen. Sprechen Sie uns auf besondere Abfälle einfach an.",
      },
      {
        question: "Was passiert mit noch brauchbaren Gegenständen?",
        answer:
          "Verwertbares wird nach Ihren Vorgaben gesichtet. Auf Wunsch übernehmen wir die Vermittlung oder rechnen den Wert im Angebot an.",
      },
    ],
  },
  {
    slug: "osmose-reinigung",
    title: "Osmose-Reinigung (Fenster)",
    shortTitle: "Osmose-Reinigung",
    teaser:
      "Fensterreinigung mit entmineralisiertem Wasser – streifenfrei, ohne Chemie und bis in große Höhen.",
    icon: "osmosis",
    image: unsplash("photo-1527515637462-cff94eecc1ac"),
    imageAlt:
      "Fensterreinigung mit Teleskopstange und entmineralisiertem Wasser",
    intro:
      "Bei der Osmose-Reinigung arbeiten wir mit entmineralisiertem Wasser: Es entzieht der Scheibe Rückstände und trocknet streifenfrei ab – ganz ohne Reinigungsmittel. Über Teleskopstangen erreichen wir dabei auch Glasflächen, die sonst nur mit Gerüst oder Hubsteiger zugänglich wären. Das spart Kosten und schont die Oberfläche.",
    scope: [
      "Streifenfreie Reinigung von Fenstern und Glasfassaden",
      "Reinigung in großen Höhen mit Teleskopstangentechnik",
      "Wintergärten, Glasdächer und Oberlichter",
      "Schaufenster und gläserne Eingangsbereiche",
      "Regelmäßige Reinigungsintervalle nach Wunsch",
    ],
    includes: [
      "Entmineralisiertes Wasser statt aggressiver Chemie",
      "Kein Gerüstaufbau und damit verbundene Zusatzkosten",
      "Schonende Reinigung ohne aggressive Zusätze",
      "Streifenfreies Ergebnis auch an schweren Stellen",
      "Feste Intervalle, zuverlässig eingehalten",
    ],
    forWhom: [
      "Bürogebäude und Verwaltungen",
      "Wohnanlagen und Hausverwaltungen",
      "Gastronomie und Einzelhandel",
      "Privatkunden mit Wintergarten oder Glasfront",
    ],
    faq: [
      {
        question: "Was bedeutet Osmose-Reinigung genau?",
        answer:
          "Wir nutzen entmineralisiertes Wasser, das keine Mineralien mehr enthält. Beim Trocknen bleiben daher keine Kalk- oder Wasserflecken zurück – das Glas trocknet streifenfrei.",
      },
      {
        question: "Reinigung ohne Reinigungsmittel – wird das wirklich sauber?",
        answer:
          "Ja. Entscheidend sind der Reinigungseffekt des Wassers und die mechanische Arbeit der Bürste. Bei hartnäckigen Verschmutzungen prüfen wir vorab, ob eine Vorbehandlung nötig ist.",
      },
      {
        question: "Bis zu welcher Höhe reicht die Teleskoptechnik?",
        answer:
          "Je nach Aufbau erreichen wir mehrere Etagen ohne Gerüst. Bei sehr hohen Objekten prüfen wir vorab den sichersten Weg und beraten Sie entsprechend.",
      },
    ],
  },
];

export const getService = (slug: string) =>
  services.find((service) => service.slug === slug);
