import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/config/services";
import { ArrowRightIcon, ServiceGlyph } from "./Icons";

export default function ServiceCard({
  service,
  featured = false,
}: {
  service: Service;
  featured?: boolean;
}) {
  return (
    <article className="group card flex flex-col overflow-hidden p-0 hover:-translate-y-1 hover:shadow-soft">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-2xl bg-white/95 text-brand-700 shadow-sm">
          <ServiceGlyph name={service.icon} className="h-5 w-5" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <h3 className="text-xl font-bold">{service.title}</h3>
        <p className="mt-3 flex-1 text-accent-900/70">{service.teaser}</p>
        <Link
          href={`/leistungen/${service.slug}`}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition group-hover:gap-3 hover:text-accent-900"
        >
          Leistung ansehen
          <ArrowRightIcon className="h-4 w-4" />
          <span className="sr-only"> {service.title}</span>
        </Link>
      </div>
      {featured && <span className="sr-only">Hervorgehobene Leistung</span>}
    </article>
  );
}
