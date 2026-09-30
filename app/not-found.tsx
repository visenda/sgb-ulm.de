import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-sand-50">
      <div className="container-x flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <span className="eyebrow">Fehler 404</span>
        <h1 className="mt-4 text-4xl font-bold md:text-5xl">
          Diese Seite konnten wir nicht finden
        </h1>
        <p className="mt-5 max-w-xl text-lg text-accent-900/70">
          Die aufgerufene Seite existiert nicht oder wurde verschoben. Nutzen Sie
          gern die folgenden Links oder kontaktieren Sie uns direkt.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="btn-primary">
            Zur Startseite
          </Link>
          <Link href="/leistungen" className="btn-outline">
            Leistungen ansehen
          </Link>
          <Link href="/kontakt" className="btn-outline">
            Kontakt aufnehmen
          </Link>
        </div>
      </div>
    </section>
  );
}
