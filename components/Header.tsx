"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/config/site";
import { services } from "@/config/services";
import { CloseIcon, MenuIcon, PhoneIcon, ChevronDownIcon } from "./Icons";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-100/80 bg-white/90 backdrop-blur">
      <div className="hidden border-b border-brand-100 bg-brand-950 py-2 text-xs text-white/80 md:block">
        <div className="container-x flex items-center justify-between">
          <p>
            Gebäudemanagement in {site.region.headline} – zuverlässig,
            gründlich, planbar.
          </p>
          <a
            href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 font-semibold text-white hover:text-brand-300"
          >
            <PhoneIcon className="h-3.5 w-3.5" />
            {site.contact.phoneDisplay}
          </a>
        </div>
      </div>

      <div className="container-x flex h-16 items-center justify-between gap-4 md:h-20">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label={`${site.name} – Startseite`}
        >
          <Image
            src={site.brand.logo}
            alt={`${site.legalName} Logo`}
            width={2363}
            height={1628}
            priority
            className="h-11 w-auto md:h-12"
          />
          <span className="sr-only">
            {site.name} – {site.claim}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Hauptnavigation">
          {nav.map((item) =>
            item.href === "/leistungen" ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={`inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold transition ${
                    isActive(item.href)
                      ? "text-brand-700"
                      : "text-accent-900/70 hover:text-brand-700"
                  }`}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.label}
                  <ChevronDownIcon className="h-3.5 w-3.5 transition group-hover:rotate-180" />
                </Link>
                <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="rounded-2xl border border-brand-100 bg-white p-2 shadow-card">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/leistungen/${service.slug}`}
                        className="block rounded-xl px-4 py-3 text-sm font-medium text-accent-900/80 transition hover:bg-brand-50 hover:text-accent-800"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive(item.href)
                    ? "text-brand-700"
                    : "text-accent-900/70 hover:text-brand-700"
                }`}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ),
          )}
          <Link href="/kontakt#anfrage" className="btn-primary ml-2">
            Angebot anfragen
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-xl border border-brand-200 text-accent-800 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-brand-100 bg-white lg:hidden">
          <nav className="container-x flex flex-col gap-1 py-4" aria-label="Mobile Navigation">
            {nav.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-xl px-4 py-3 text-base font-semibold text-accent-900 hover:bg-brand-50"
                >
                  {item.label}
                </Link>
                {item.href === "/leistungen" && (
                  <div className="ml-3 border-l border-brand-100 pl-3">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/leistungen/${service.slug}`}
                        className="block rounded-lg px-3 py-2 text-sm font-medium text-accent-900/70 hover:bg-brand-50 hover:text-accent-800"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="/kontakt#anfrage" className="btn-primary mt-3">
              Angebot anfragen
            </Link>
            <a
              href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
              className="btn-outline mt-1"
            >
              <PhoneIcon className="h-4 w-4" />
              {site.contact.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
