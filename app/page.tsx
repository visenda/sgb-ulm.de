import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site, telHref } from "@/config/site";
import { services } from "@/config/services";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import { Section, SectionHeading, CheckList } from "@/components/Ui";
import {
  ArrowRightIcon,
  CheckIcon,
  LeafIcon,
  MapPinIcon,
  PhoneIcon,
  ShieldIcon,
  SparkleIcon,
  UsersIcon,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: `${site.name} – Gebäudemanagement in Ulm`,
  description:
    "Gebäudemanagement in Ulm und Umgebung: Fensterreinigung, Terrassenarbeiten, Baureinigung und Unterhaltsreinigung. Jetzt unverbindliches Angebot anfragen.",
  alternates: { canonical: "/" },
};

const heroImage =
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80";

const reasons = [
  {
    icon: ShieldIcon,
    title: "Zuverlässig und planbar",
    text: "Feste Teams, verbindliche Termine und klare Leistungsverzeichnisse – Sie wissen jederzeit, woran Sie sind.",
  },
  {
    icon: SparkleIcon,
    title: "Gründlich bis ins Detail",
    text: "Wir arbeiten nach Qualitätsstandards und kontrollieren unsere Ergebnisse, statt nur Flächen zu berühren.",
  },
  {
    icon: LeafIcon,
    title: "Schonend und umweltbewusst",
    text: "Wir setzen auf materialgerechte Verfahren und dosieren Reinigungsmittel bewusst sparsam.",
  },
  {
    icon: UsersIcon,
    title: "Persönlich erreichbar",
    text: "Ein fester Ansprechpartner für Ihr Objekt – ohne Callcenter und ohne Weiterleitungen.",
  },
];

const steps = [
  {
    title: "Anfrage & Erstgespräch",
    text: "Sie schildern uns Ihr Objekt und Ihren Bedarf – telefonisch oder über das Kontaktformular.",
  },
  {
    title: "Objektbegehung & Angebot",
    text: "Wir sehen uns die Flächen an und erstellen ein transparentes, nachvollziehbares Angebot.",
  },
  {
    title: "Umsetzung",
    text: "Unser Team arbeitet nach festem Plan, zum vereinbarten Termin und in der gewünschten Qualität.",
  },
  {
    title: "Kontrolle & Betreuung",
    text: "Wir prüfen Ergebnisse regelmäßig und passen den Plan an, wenn sich Ihr Bedarf ändert.",
  },
];

const homeFaq = [
  {
    question: "Welche Leistungen bietet SG Blitzblank an?",
    answer:
      "Wir übernehmen Fensterreinigung, Terrassenarbeiten, Baureinigung und Unterhaltsreinigung für Gewerbe, Hausverwaltungen und Privatkunden in Ulm und Umgebung.",
  },
  {
    question: "Wie schnell erhalte ich ein Angebot?",
    answer:
      "Nach Ihrer Anfrage melden wir uns in der Regel innerhalb eines Werktages. Nach einer kurzen Objektbegehung erhalten Sie ein schriftliches Angebot.",
  },
  {
    question: "Arbeiten Sie auch außerhalb unserer Geschäftszeiten?",
    answer:
      "Ja. Viele Objekte reinigen wir früh morgens, abends oder am Wochenende, damit Ihr Betrieb ungestört bleibt.",
  },
  {
    question: "Sind Sie auch für Privatkunden tätig?",
    answer:
      "Ja, wir betreuen sowohl gewerbliche Objekte als auch private Haushalte, etwa bei Fenster- und Terrassenarbeiten.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-950">
        <Image
          src={heroImage}
          alt="Helles, gepflegtes Büro mit großen Fensterflächen"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/85 to-brand-950/50" />
        <div className="container-x relative py-20 md:py-28 lg:py-32">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
              <MapPinIcon className="h-3.5 w-3.5" />
              {site.region.headline}
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl">
              Sauberkeit, auf die Sie sich verlassen können.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              SG Blitzblank steht für professionelles Gebäudemanagement
              in Ulm und Umgebung – zuverlässig, gründlich und mit festen
              Ansprechpartnern für Ihr Objekt.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/kontakt#anfrage" className="btn-accent justify-center">
                Angebot anfragen
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link href="/leistungen" className="btn-ghost justify-center">
                Leistungen entdecken
              </Link>
            </div>
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8">
              <div>
                <dt className="text-xs uppercase tracking-wide text-white/50">
                  Leistungen
                </dt>
                <dd className="mt-1 text-2xl font-bold text-white">4</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-white/50">
                  Einsatzgebiet
                </dt>
                <dd className="mt-1 text-2xl font-bold text-white">
                  {site.region.city}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-white/50">
                  Erreichbar
                </dt>
                <dd className="mt-1 text-2xl font-bold text-white">Mo–Sa</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <Section className="bg-white">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Unsere Leistungen"
            title="Reinigung und Service aus einer Hand"
            intro="Ob regelmäßige Betreuung oder einzelne Sonderaufgabe: Wir stimmen jedes Leistungspaket auf Ihr Objekt ab – vom Fenster bis zur Außenanlage."
          />
          <Link href="/leistungen" className="btn-outline shrink-0">
            Alle Leistungen
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>

      <Section className="bg-sand-50">
        <SectionHeading
          eyebrow="Warum SG Blitzblank"
          title="Verlässlichkeit, die man sieht"
          align="center"
          intro="Wir kombinieren handwerkliche Sorgfalt mit klaren Abläufen. Das Ergebnis: gepflegte Gebäude und ein Ansprechpartner, der sich kümmert."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div key={reason.title} className="card">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-700">
                <reason.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold">{reason.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-accent-900/70">
                {reason.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Unser Ablauf"
              title="In vier Schritten zum gepflegten Objekt"
              intro="Transparent von der ersten Anfrage bis zur laufenden Betreuung – ohne Überraschungen."
            />
            <CheckList
              className="mt-8"
              items={[
                "Kostenlose Erstberatung und Objektbegehung",
                "Schriftliches Angebot mit klaren Leistungen",
                "Feste Teams und verbindliche Termine",
                "Regelmäßige Qualitätskontrolle",
              ]}
            />
          </div>
          <ol className="space-y-4">
            {steps.map((step, index) => (
              <li key={step.title} className="card flex gap-5">
                <span className="grid h-10 w-10 flex-none place-items-center rounded-full bg-brand-700 font-display text-sm font-bold text-white">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-accent-900/70">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section className="bg-brand-900 text-white">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow text-brand-300">Einsatzgebiet</span>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              Für {site.region.city} und die Region im Einsatz
            </h2>
            <p className="mt-4 text-white/75">
              Wir betreuen Objekte in {site.region.city} und im Umland – von der
              einzelnen Wohnung bis zum Gewerbekomplex. Kurze Wege bedeuten
              schnelle Reaktionszeiten.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {site.region.areas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-4xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-bold text-white">
              Ihr Objekt ist nicht dabei?
            </h3>
            <p className="mt-3 text-white/75">
              Sprechen Sie uns einfach an. In vielen Fällen erweitern wir unser
              Einsatzgebiet gern.
            </p>
            <div className="mt-6 space-y-3">
              <a
                href={telHref}
                className="flex items-center gap-3 text-white transition hover:text-brand-300"
              >
                <PhoneIcon className="h-5 w-5 text-brand-300" />
                {site.contact.phoneDisplay}
              </a>
              <p className="flex items-center gap-3 text-white/85">
                <MapPinIcon className="h-5 w-5 text-brand-300" />
                {site.contact.street}, {site.contact.postalCode}{" "}
                {site.contact.city}
              </p>
            </div>
            <Link href="/kontakt#anfrage" className="btn-accent mt-8 w-full">
              Jetzt anfragen
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      <Section className="bg-sand-50">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <SectionHeading
            eyebrow="Häufige Fragen"
            title="Gut zu wissen"
            intro="Die häufigsten Fragen unserer Kunden – kompakt beantwortet. Für alles Weitere sind wir persönlich für Sie da."
          />
          <FAQ items={homeFaq} />
        </div>
      </Section>

      <CTASection />
    </>
  );
}
