import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/config/site";
import CTASection from "@/components/CTASection";
import { PageHero, Section, SectionHeading, CheckList } from "@/components/Ui";
import { LeafIcon, ShieldIcon, SparkleIcon, UsersIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Über uns – Ihr Gebäudedienstleister in Ulm",
  description:
    "Lernen Sie SG Blitzblank kennen: ein Gebäudemanagement-Unternehmen aus Ulm mit festen Teams, klaren Abläufen und persönlicher Betreuung.",
  alternates: { canonical: "/ueber-uns" },
};

const values = [
  {
    icon: ShieldIcon,
    title: "Verlässlichkeit",
    text: "Wir halten Zusagen ein – bei Terminen, Leistungsumfang und Qualität.",
  },
  {
    icon: SparkleIcon,
    title: "Sorgfalt",
    text: "Wir arbeiten gründlich und prüfen unsere Ergebnisse, statt nur Aufgaben abzuhaken.",
  },
  {
    icon: UsersIcon,
    title: "Nähe",
    text: "Wir sind in der Region verwurzelt und für unsere Kunden persönlich erreichbar.",
  },
  {
    icon: LeafIcon,
    title: "Verantwortung",
    text: "Wir gehen sorgsam mit Materialien, Ressourcen und der Umwelt um.",
  },
];

const image =
  "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80";

export default function UeberUnsPage() {
  return (
    <>
      <PageHero
        eyebrow="Über uns"
        title="Ihr Gebäudedienstleister aus Ulm"
        intro="SG Blitzblank ist ein regionales Unternehmen für Gebäudemanagement. Wir verbinden handwerkliche Sorgfalt mit klaren Abläufen – damit Ihre Objekte dauerhaft gepflegt bleiben."
        breadcrumbs={[{ label: "Startseite", href: "/" }, { label: "Über uns" }]}
      />

      <Section className="bg-white">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-4xl">
            <Image
              src={image}
              alt="Reinigungsteam bei der professionellen Aufbereitung von Innenräumen"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Unser Anspruch"
              title="Sauberkeit ist Vertrauenssache"
              intro="Wir wissen, dass unsere Arbeit jeden Tag sichtbar ist – im Eingangsbereich, an der Glasfront, auf der Terrasse. Deshalb legen wir Wert auf Verlässlichkeit, feste Ansprechpartner und nachvollziehbare Qualität."
            />
            <div className="prose-de mt-6">
              <p>
                Seit {site.foundingYear} betreuen wir gewerbliche Objekte,
                Hausverwaltungen und private Haushalte in {site.region.headline}.
                Aus kleinen Anfängen ist ein Team gewachsen, das Gebäudemanagement
                als Handwerk versteht: mit dem passenden Verfahren, der richtigen
                Ausrüstung und einem Blick fürs Detail.
              </p>
              <p>
                Unser Anspruch ist es, dass Sie sich um die Reinigung keine
                Gedanken machen müssen. Deshalb arbeiten wir mit klaren
                Leistungsverzeichnissen, festen Terminen und einem Ansprechpartner,
                der Ihr Objekt kennt.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-sand-50">
        <SectionHeading
          eyebrow="Unsere Werte"
          title="Woran wir uns messen lassen"
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div key={value.title} className="card text-center">
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-700">
                <value.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-accent-900/70">
                {value.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Zusammenarbeit"
            title="So arbeiten wir mit Ihnen"
            intro="Klar geregelte Abläufe sorgen dafür, dass Sie sich auf uns verlassen können."
          />
          <div className="card">
            <CheckList
              items={[
                "Persönliche Beratung durch einen festen Ansprechpartner",
                "Kostenlose Objektbegehung vor dem Angebot",
                "Transparente Leistungsbeschreibung ohne versteckte Posten",
                "Feste Reinigungsteams für gleichbleibende Qualität",
                "Regelmäßige Kontrolle und offenes Feedback",
                "Kurzfristige Sondereinsätze nach Absprache",
              ]}
            />
          </div>
        </div>
      </Section>

      <CTASection
        title="Lernen Sie uns kennen"
        intro="Wir stellen uns gern persönlich vor und prüfen gemeinsam, welche Leistungen zu Ihrem Objekt passen."
      />
    </>
  );
}
