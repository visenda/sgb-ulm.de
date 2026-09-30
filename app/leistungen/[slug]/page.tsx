import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, services } from "@/config/services";
import { site } from "@/config/site";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import ServiceCard from "@/components/ServiceCard";
import { PageHero, Section, SectionHeading, CheckList } from "@/components/Ui";
import { ArrowRightIcon, CheckIcon, ServiceGlyph } from "@/components/Icons";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) {
    return { title: "Leistung nicht gefunden" };
  }
  return {
    title: `${service.title} in ${site.region.city}`,
    description: service.teaser,
    alternates: { canonical: `/leistungen/${service.slug}` },
    openGraph: {
      title: `${service.title} | ${site.name}`,
      description: service.teaser,
      url: `${site.url}/leistungen/${service.slug}`,
      images: [{ url: service.image }],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) {
    notFound();
  }

  const others = services.filter((item) => item.slug !== service.slug);

  return (
    <>
      <PageHero
        eyebrow="Leistung"
        title={service.title}
        intro={service.teaser}
        breadcrumbs={[
          { label: "Startseite", href: "/" },
          { label: "Leistungen", href: "/leistungen" },
          { label: service.title },
        ]}
      />

      <Section className="bg-white">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-4xl">
            <Image
              src={service.image}
              alt={service.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            <span className="absolute left-5 top-5 grid h-12 w-12 place-items-center rounded-2xl bg-white/95 text-brand-700 shadow-sm">
              <ServiceGlyph name={service.icon} className="h-6 w-6" />
            </span>
          </div>
          <div>
            <span className="eyebrow">Das erwartet Sie</span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              {service.title} vom Fachbetrieb
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-accent-900/75">
              {service.intro}
            </p>
            <div className="mt-8">
              <Link href="/kontakt#anfrage" className="btn-primary">
                {service.title} anfragen
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-sand-50">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Leistungsumfang"
              title="Das umfasst unsere Arbeit"
            />
            <CheckList className="mt-8" items={service.scope} />
          </div>
          <div className="card">
            <span className="eyebrow">Inklusive</span>
            <h3 className="mt-3 text-2xl font-bold">Was Sie erwarten können</h3>
            <CheckList className="mt-6" items={service.includes} />
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionHeading
              eyebrow="Für wen"
              title="Passend für Ihre Objektart"
              intro="Diese Leistung eignet sich besonders für folgende Kunden und Objekte."
            />
            <ul className="mt-8 space-y-3">
              {service.forWhom.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-brand-100 text-brand-700">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-accent-900/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold">
              Häufige Fragen zur {service.title}
            </h3>
            <div className="mt-6">
              <FAQ items={service.faq} />
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-sand-50">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <SectionHeading
              eyebrow="Kontakt"
              title={`${service.title} anfragen`}
              intro="Schreiben Sie uns kurz, worum es geht – wir melden uns mit einem passenden Angebot."
            />
            <p className="mt-6 text-accent-900/75">
              Beim Absenden öffnet sich Ihr E-Mail-Programm mit den
              vorausgefüllten Angaben. Die Leistung ist bereits vorausgewählt.
            </p>
          </div>
          <div className="card">
            <ContactForm defaultService={service.title} />
          </div>
        </div>
      </Section>

      {others.length > 0 && (
        <Section className="bg-white">
          <SectionHeading
            eyebrow="Weitere Leistungen"
            title="Das können wir noch für Sie tun"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((item) => (
              <ServiceCard key={item.slug} service={item} />
            ))}
          </div>
        </Section>
      )}

      <CTASection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Startseite", url: `${site.url}/` },
              { name: "Leistungen", url: `${site.url}/leistungen` },
              {
                name: service.title,
                url: `${site.url}/leistungen/${service.slug}`,
              },
            ]),
          ),
        }}
      />
    </>
  );
}
