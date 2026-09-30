import type { Metadata } from "next";
import { site } from "@/config/site";
import { PageHero, Section } from "@/components/Ui";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum und Anbieterkennzeichnung von SG Blitzblank, Gebäudemanagement in Ulm.",
  alternates: { canonical: "/impressum" },
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <>
      <PageHero
        eyebrow="Rechtliches"
        title="Impressum"
        intro="Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)."
        breadcrumbs={[{ label: "Startseite", href: "/" }, { label: "Impressum" }]}
      />

      <Section className="bg-white">
        <div className="prose-de max-w-3xl">
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">
            <strong>Hinweis für die Veröffentlichung:</strong> Die folgenden
            Angaben sind Platzhalter (Musterangaben). Sie müssen vor dem Livegang
            durch die tatsächlichen Unternehmensdaten ersetzt werden. Alle Werte
            lassen sich zentral in <code>config/site.ts</code> anpassen.
          </div>

          <h2>Anbieter</h2>
          <p>
            {site.legalName}
            <br />
            {site.contact.street}
            <br />
            {site.contact.postalCode} {site.contact.city}
            <br />
            {site.contact.countryName}
          </p>

          <h2>Vertreten durch</h2>
          <p>{site.legal.managingDirector}</p>

          <h2>Kontakt</h2>
          <p>
            Telefon: {site.contact.phone}
            <br />
            E-Mail:{" "}
            <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
          </p>

          <h2>Registereintrag</h2>
          <p>
            Registergericht: {site.legal.registerCourt}
            <br />
            Registernummer: {site.legal.registerNumber}
          </p>

          <h2>Umsatzsteuer-Identifikationsnummer</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
            <br />
            {site.legal.vatId}
          </p>

          <h2>Zuständige Kammer</h2>
          <p>{site.legal.chamber}</p>

          <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
          <p>
            {site.legal.managingDirector}
            <br />
            {site.contact.street}
            <br />
            {site.contact.postalCode} {site.contact.city}
          </p>

          <h2>Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit. Wir sind nicht verpflichtet und
            nicht bereit, an einem Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>

          <h2>Haftung für Inhalte</h2>
          <p>
            Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach
            den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
            überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
            Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
            Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon
            unberührt.
          </p>

          <h2>Haftung für Links</h2>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
            Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
            Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
            verantwortlich. Zum Zeitpunkt der Verlinkung waren keine
            rechtswidrigen Inhalte erkennbar.
          </p>

          <h2>Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
            Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
            Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
            jeweiligen Autors bzw. Erstellers.
          </p>
        </div>
      </Section>
    </>
  );
}
