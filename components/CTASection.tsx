import Link from "next/link";
import { ArrowRightIcon, PhoneIcon } from "./Icons";
import { site } from "@/config/site";

export default function CTASection({
  title = "Bereit für ein sauberes Ergebnis?",
  intro = "Schildern Sie uns kurz Ihr Objekt – wir melden uns mit einem passenden Angebot und einem unverbindlichen Terminvorschlag.",
}: {
  title?: string;
  intro?: string;
}) {
  return (
    <section className="section">
      <div className="container-x">
        <div className="overflow-hidden rounded-4xl bg-accent-800 px-6 py-12 text-white md:px-14 md:py-16">
          <div className="grid items-center gap-8 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <h2 className="text-3xl font-bold text-white md:text-4xl">{title}</h2>
              <p className="mt-4 max-w-2xl text-white/80">{intro}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
              <Link href="/kontakt#anfrage" className="btn-accent justify-center">
                Angebot anfragen
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <a
                href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
                className="btn-ghost justify-center"
              >
                <PhoneIcon className="h-4 w-4" />
                {site.contact.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
