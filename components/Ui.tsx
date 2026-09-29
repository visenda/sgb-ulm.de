import type { ReactNode } from "react";
import Link from "next/link";
import { CheckIcon } from "./Icons";

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="container-x">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="mt-3 text-3xl font-bold md:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-lg leading-relaxed text-brand-900/70">{intro}</p>}
    </div>
  );
}

export function CheckList({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-accent-100 text-accent-700">
            <CheckIcon className="h-3.5 w-3.5" />
          </span>
          <span className="text-brand-900/80">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Breadcrumbs({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav aria-label="Brotkrümelnavigation" className="text-sm">
      <ol className="flex flex-wrap items-center gap-2 text-brand-900/60">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-2">
            {index > 0 && <span aria-hidden="true">/</span>}
            {item.href ? (
              <Link href={item.href} className="hover:text-brand-700">
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-brand-900">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  breadcrumbs,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  breadcrumbs?: { label: string; href?: string }[];
}) {
  return (
    <section className="border-b border-brand-100 bg-sand-50">
      <div className="container-x py-12 md:py-16">
        {breadcrumbs && <div className="mb-6"><Breadcrumbs items={breadcrumbs} /></div>}
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1 className="mt-3 max-w-4xl text-3xl font-bold md:text-5xl">{title}</h1>
        {intro && (
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-brand-900/70">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
