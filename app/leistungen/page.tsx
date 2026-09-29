import type { Metadata } from "next";
import { services } from "@/config/services";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { PageHero, Section, SectionHeading, CheckList } from "@/components/Ui";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Leistungen – Gebäudereinigung & Service",
  description:
    "Fensterreinigung, Terrassenarbeiten, Baureinigung und Unterhaltsreinigung in Ulm und Umgebung. Alle Leistungen von SG Blitzblank im Überblick.",
  alternates: { canonical: "/leistungen" },
};

const advantages = [
  "Ein Ansprechpartner für alle Leistungen",
  "Materialgerechte Verfahren und Geräte",
  "Verbindliche Termine und klare Angebote",
  "Regelmäßige Qualitätskontrollen",
  "Flexible Einsatzzeiten für Ihr Objekt",
];

export default function LeistungenPage() {
  return (
    <>
      <PageHero
        eyebrow="Leistungen"
        title="Gebäudereinigung und Service für Ihr Objekt"
        intro="Von der Fensterreinigung bis zur laufenden Unterhaltsreinigung: Wir bündeln alle Gebäudedienstleistungen in einem verlässlichen Paket – abgestimmt auf Gewerbe, Hausverwaltungen und Privatkunden in Ulm und Umgebung."
        breadcrumbs={[{ label: "Startseite", href: "/" }, { label: "Leistungen" }]}
      />

      <Section className="bg-white">
        <SectionHeading
          eyebrow="Überblick"
          title="Vier Leistungen, ein Partner"
          intro="Wählen Sie einzelne Leistungen oder kombinieren Sie sie zu einem passenden Betreuungspaket."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>

      <Section className="bg-sand-50">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Ihre Vorteile"
            title="Warum sich ein Paket lohnt"
            intro="Wer mehrere Leistungen aus einer Hand bezieht, spart Abstimmungsaufwand – und erhält ein durchgängig gepflegtes Objekt."
          />
          <div className="card">
            <CheckList items={advantages} />
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="rounded-4xl border border-brand-100 bg-brand-50 p-8 md:p-12">
          <h2 className="text-2xl font-bold md:text-3xl">
            Gewerbe, Verwaltung oder Privatkunde?
          </h2>
          <p className="mt-4 max-w-3xl text-brand-900/75">
            Wir betreuen Bürogebäude, Praxen, Gastronomie, Hausverwaltungen und
            private Haushalte in {site.region.headline}. Sprechen Sie uns an – wir
            prüfen Ihren Bedarf und schlagen ein passendes Leistungspaket vor.
          </p>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
