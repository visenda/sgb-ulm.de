import type { Metadata } from "next";
import { site } from "@/config/site";
import ContactForm from "@/components/ContactForm";
import { PageHero, Section, SectionHeading } from "@/components/Ui";
import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Kontakt & Angebot anfragen",
  description:
    "Kontaktieren Sie SG Blitzblank in Ulm: Kontaktformular, Telefon, E-Mail und Öffnungszeiten. Fordern Sie jetzt ein unverbindliches Angebot an.",
  alternates: { canonical: "/kontakt" },
};

export default function KontaktPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Sprechen Sie mit uns"
        intro="Ob konkrete Anfrage oder erste Frage: Wir sind für Sie da. Nutzen Sie das Formular oder erreichen Sie uns direkt telefonisch."
        breadcrumbs={[{ label: "Startseite", href: "/" }, { label: "Kontakt" }]}
      />

      <Section className="bg-white">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr]">
          <div id="anfrage" className="scroll-mt-28">
            <SectionHeading
              eyebrow="Kontaktdaten"
              title="So erreichen Sie uns"
              intro="Wir melden uns in der Regel innerhalb eines Werktages bei Ihnen."
            />

            <ul className="mt-8 space-y-5">
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 flex-none place-items-center rounded-2xl bg-brand-50 text-brand-700">
                  <MapPinIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold">Adresse</p>
                  <p className="text-brand-900/70">
                    {site.contact.street}
                    <br />
                    {site.contact.postalCode} {site.contact.city}
                    <br />
                    {site.contact.countryName}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 flex-none place-items-center rounded-2xl bg-brand-50 text-brand-700">
                  <PhoneIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold">Telefon</p>
                  <a
                    href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
                    className="text-brand-900/70 hover:text-brand-700"
                  >
                    {site.contact.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 flex-none place-items-center rounded-2xl bg-brand-50 text-brand-700">
                  <MailIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold">E-Mail</p>
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="text-brand-900/70 hover:text-brand-700"
                  >
                    {site.contact.email}
                  </a>
                </div>
              </li>
            </ul>

            <div className="mt-10 card">
              <div className="flex items-center gap-3">
                <ClockIcon className="h-5 w-5 text-brand-700" />
                <h3 className="text-lg font-bold">Öffnungszeiten</h3>
              </div>
              <dl className="mt-4 space-y-2 text-sm">
                {site.openingHours.map((entry) => (
                  <div
                    key={entry.days}
                    className="flex items-center justify-between gap-4 border-b border-brand-50 pb-2 last:border-none"
                  >
                    <dt className="text-brand-900/70">{entry.days}</dt>
                    <dd className="font-medium">{entry.hours}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="card">
            <h2 className="text-2xl font-bold">Angebot anfragen</h2>
            <p className="mt-2 text-sm text-brand-900/70">
              Füllen Sie die Felder aus – wir melden uns mit einem passenden
              Vorschlag. Pflichtfelder sind mit * gekennzeichnet.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-sand-50">
        <div className="rounded-4xl border border-brand-100 bg-white p-8 md:p-12">
          <h2 className="text-2xl font-bold md:text-3xl">
            Einsatzgebiet: {site.region.headline}
          </h2>
          <p className="mt-4 max-w-3xl text-brand-900/75">
            Wir sind in {site.region.city} und der umliegenden Region tätig. Auch
            wenn Ihr Ort hier nicht aufgeführt ist, lohnt sich eine Anfrage – in
            vielen Fällen erweitern wir unser Gebiet gern.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {site.region.areas.map((area) => (
              <span
                key={area}
                className="rounded-full bg-brand-50 px-4 py-2 text-sm font-medium text-brand-800"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
