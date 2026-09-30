import Image from "next/image";
import Link from "next/link";
import { footerLinks, site } from "@/config/site";
import { MailIcon, MapPinIcon, PhoneIcon } from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-950 text-white/75">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-4">
            <span className="grid h-12 w-12 flex-none place-items-center rounded-2xl bg-white p-1.5">
              <Image
                src={site.brand.signet}
                alt=""
                width={911}
                height={1110}
                className="h-full w-full object-contain"
              />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-lg font-bold text-white">
                {site.name}
              </span>
              <span className="block text-xs text-white/60">{site.claim}</span>
            </span>
          </div>
          <p className="mt-5 text-sm leading-relaxed">
            Ihr Partner für professionelles Gebäudemanagement in{" "}
            {site.region.headline}. Sauberkeit, auf die Sie sich verlassen können.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">
            Leistungen
          </h2>
          <ul className="space-y-3 text-sm">
            {footerLinks.leistungen.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-brand-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">
            Unternehmen
          </h2>
          <ul className="space-y-3 text-sm">
            {footerLinks.unternehmen.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-brand-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">
            Kontakt
          </h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPinIcon className="mt-0.5 h-4 w-4 flex-none text-brand-300" />
              <span>
                {site.contact.street}
                <br />
                {site.contact.postalCode} {site.contact.city}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <PhoneIcon className="h-4 w-4 flex-none text-brand-300" />
              <a
                href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
                className="transition hover:text-brand-300"
              >
                {site.contact.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MailIcon className="h-4 w-4 flex-none text-brand-300" />
              <a
                href={`mailto:${site.contact.email}`}
                className="transition hover:text-brand-300"
              >
                {site.contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-6 text-xs text-white/60 md:flex-row">
          <p>
            © {year} {site.legalName}. Alle Rechte vorbehalten.
          </p>
          <ul className="flex flex-wrap items-center gap-6">
            {footerLinks.rechtliches.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
