import type { Metadata } from "next";
import Link from "next/link";
import { mailHref, site } from "@/config/site";
import { PageHero, Section } from "@/components/Ui";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Informationen zum Datenschutz bei SG Blitzblank: Verarbeitung von Kontaktanfragen, Hosting und Ihre Rechte nach DSGVO.",
  alternates: { canonical: "/datenschutz" },
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <>
      <PageHero
        eyebrow="Rechtliches"
        title="Datenschutzerklärung"
        intro="Wir nehmen den Schutz Ihrer personenbezogenen Daten ernst. Nachfolgend informieren wir Sie gemäß Art. 13 und 14 DSGVO über die Verarbeitung Ihrer Daten."
        breadcrumbs={[
          { label: "Startseite", href: "/" },
          { label: "Datenschutz" },
        ]}
      />

      <Section className="bg-white">
        <div className="prose-de max-w-3xl">
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">
            <strong>Hinweis:</strong> Diese Datenschutzerklärung beschreibt den
            aktuellen technischen Stand der Website (kein Tracking, keine
            nicht-essenziellen Cookies, Kontaktaufnahme per E-Mail). Sobald
            Analyse-Dienste, Karten oder ein serverseitiges Formular hinzukommen,
            muss sie entsprechend erweitert und rechtlich geprüft werden.
          </div>

          <h2>1. Verantwortlicher</h2>
          <p>
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            <br />
            {site.legalName}
            <br />
            {site.contact.street}
            <br />
            {site.contact.postalCode} {site.contact.city}
            <br />
            Telefon: {site.contact.phone}
            <br />
            E-Mail:{" "}
            <a href={mailHref}>{site.contact.email}</a>
          </p>

          <h2>2. Erhobene Daten und Zweck</h2>
          <p>
            Beim Besuch dieser Website verarbeitet der Hosting-Anbieter technisch
            notwendige Zugriffsdaten (z. B. IP-Adresse, Datum und Uhrzeit des
            Abrufs, aufgerufene Seite, Browsertyp). Diese Verarbeitung ist zur
            sicheren und stabilen Bereitstellung der Website erforderlich.
            Rechtsgrundlage ist unser berechtigtes Interesse gemäß Art. 6 Abs. 1
            lit. f DSGVO.
          </p>

          <h2>3. Kontaktaufnahme per E-Mail</h2>
          <p>
            Unser Kontaktformular überträgt Ihre Angaben nicht an einen Server,
            sondern öffnet in Ihrem E-Mail-Programm eine vorausgefüllte Nachricht.
            Erst wenn Sie diese E-Mail absenden, erhalten wir Ihre Angaben.
          </p>
          <p>
            Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir die von Ihnen
            übermittelten Daten (Name, E-Mail-Adresse, ggf. Telefonnummer und
            Nachrichteninhalt), um Ihre Anfrage zu bearbeiten. Rechtsgrundlage ist
            Art. 6 Abs. 1 lit. b DSGVO (Bearbeitung Ihrer Anfrage) bzw. Art. 6
            Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung).
          </p>

          <h2>4. Speicherdauer</h2>
          <p>
            Wir speichern Ihre Daten nur so lange, wie es für die Bearbeitung Ihrer
            Anfrage erforderlich ist oder gesetzliche Aufbewahrungsfristen (z. B.
            handels- und steuerrechtliche Fristen) dies vorsehen. Danach werden
            die Daten gelöscht.
          </p>

          <h2>5. Cookies und Tracking</h2>
          <p>
            Diese Website setzt keine Cookies zu Analyse- oder Marketingzwecken ein
            und verwendet keine Tracking-Dienste. Es werden keine Profile über Ihr
            Nutzungsverhalten erstellt.
          </p>

          <h2>6. Empfänger und Auftragsverarbeitung</h2>
          <p>
            Für den Betrieb der Website nutzen wir einen Hosting-Dienstleister.
            Soweit dabei personenbezogene Daten verarbeitet werden, geschieht dies
            auf Grundlage eines Vertrags zur Auftragsverarbeitung gemäß Art. 28
            DSGVO. Eine Weitergabe Ihrer Daten zu anderen Zwecken findet nicht
            statt.
          </p>

          <h2>7. Ihre Rechte</h2>
          <p>Sie haben gegenüber uns folgende Rechte:</p>
          <ul>
            <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
            <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
            <li>Recht auf Löschung (Art. 17 DSGVO)</li>
            <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Widerspruchsrecht gegen die Verarbeitung (Art. 21 DSGVO)</li>
          </ul>
          <p>
            Zur Ausübung Ihrer Rechte genügt eine Nachricht an{" "}
            <a href={mailHref}>{site.contact.email}</a>.
          </p>

          <h2>8. Beschwerderecht</h2>
          <p>
            Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über
            die Verarbeitung Ihrer personenbezogenen Daten zu beschweren. Zuständig
            ist die Aufsichtsbehörde Ihres Wohnsitzes oder unseres
            Unternehmenssitzes.
          </p>

          <h2>9. SSL-/TLS-Verschlüsselung</h2>
          <p>
            Diese Website nutzt aus Sicherheitsgründen eine SSL-/TLS-Verschlüsselung.
            Eine verschlüsselte Verbindung erkennen Sie daran, dass die
            Adresszeile Ihres Browsers mit „https://“ beginnt.
          </p>

          <h2>10. Kontakt</h2>
          <p>
            Bei Fragen zum Datenschutz erreichen Sie uns über die im{" "}
            <Link href="/impressum">Impressum</Link> genannten Kontaktdaten.
          </p>
        </div>
      </Section>
    </>
  );
}
