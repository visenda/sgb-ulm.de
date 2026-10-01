"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/config/services";
import { mailHref, site } from "@/config/site";
import { ArrowRightIcon, CheckIcon } from "./Icons";

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  consent: boolean;
};

type Errors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
  consent: false,
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values: FormState): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) {
    errors.name = "Bitte geben Sie Ihren Namen an.";
  }
  if (!values.email.trim()) {
    errors.email = "Bitte geben Sie Ihre E-Mail-Adresse an.";
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
  }
  if (!values.message.trim()) {
    errors.message = "Bitte beschreiben Sie kurz Ihr Anliegen.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Bitte beschreiben Sie Ihr Anliegen etwas genauer.";
  }
  if (!values.consent) {
    errors.consent = "Bitte stimmen Sie der Verarbeitung Ihrer Daten zu.";
  }
  return errors;
}

export default function ContactForm({
  defaultService,
}: {
  defaultService?: string;
}) {
  const [values, setValues] = useState<FormState>({
    ...initialState,
    service: defaultService ?? "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (honeypot) {
      return;
    }

    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const firstKey = Object.keys(nextErrors)[0];
      document.getElementById(firstKey)?.focus();
      return;
    }

    const selectedService =
      services.find((service) => service.title === values.service)?.title ??
      "Allgemeine Anfrage";

    const body = [
      `Name: ${values.name}`,
      `E-Mail: ${values.email}`,
      `Telefon: ${values.phone || "nicht angegeben"}`,
      `Leistung: ${values.service || "keine Auswahl"}`,
      "",
      "Nachricht:",
      values.message,
      "",
      "---",
      "Gesendet über das Kontaktformular auf sgb-ulm.de",
    ].join("\n");

    const href = `mailto:${site.contact.email}?subject=${encodeURIComponent(
      `Anfrage: ${selectedService}`,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = href;
    setSent(true);
  };

  if (sent) {
    return (
      <div
        role="status"
        className="rounded-3xl border border-brand-200 bg-brand-50 p-8 text-center"
      >
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand-500 text-white">
          <CheckIcon className="h-7 w-7" />
        </span>
        <h3 className="mt-5 text-xl font-bold">Ihr E-Mail-Programm wird geöffnet</h3>
        <p className="mx-auto mt-3 max-w-md text-accent-900/75">
          Wir haben Ihre Angaben in eine E-Mail übernommen. Bitte senden Sie diese
          in Ihrem E-Mail-Programm ab. Falls sich nichts öffnet, schreiben Sie uns
          direkt an{" "}
          <a
            href={mailHref}
            className="font-semibold text-brand-700 underline underline-offset-2"
          >
            {site.contact.email}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => {
            setValues({ ...initialState, service: defaultService ?? "" });
            setSent(false);
          }}
          className="btn-outline mt-6"
        >
          Neue Anfrage stellen
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="field-label">
            Name <span className="text-red-600">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            className="field-input"
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="field-error">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="field-label">
            E-Mail <span className="text-red-600">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="field-input"
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="field-error">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="field-label">
            Telefon <span className="text-accent-900/40">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="field-input"
            value={values.phone}
            onChange={(event) => update("phone", event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="service" className="field-label">
            Gewünschte Leistung
          </label>
          <select
            id="service"
            name="service"
            className="field-input"
            value={values.service}
            onChange={(event) => update("service", event.target.value)}
          >
            <option value="">Bitte auswählen</option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="Sonstiges">Sonstiges</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="field-label">
          Ihre Nachricht <span className="text-red-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="field-input resize-y"
          placeholder="Objekt, Umfang, gewünschter Zeitraum …"
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="field-error">
            {errors.message}
          </p>
        )}
      </div>

      {/* Honeypot - invisible to humans */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Firma</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
        />
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm text-accent-900/80">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            className="mt-0.5 h-4 w-4 rounded border-brand-300 text-brand-700 focus:ring-brand-600"
            checked={values.consent}
            onChange={(event) => update("consent", event.target.checked)}
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? "consent-error" : undefined}
          />
          <span>
            Ich habe die{" "}
            <a
              href="/datenschutz"
              className="font-medium text-brand-700 underline underline-offset-2"
            >
              Datenschutzerklärung
            </a>{" "}
            gelesen und stimme der Verarbeitung meiner Angaben zur Bearbeitung
            meiner Anfrage zu. <span className="text-red-600">*</span>
          </span>
        </label>
        {errors.consent && (
          <p id="consent-error" className="field-error">
            {errors.consent}
          </p>
        )}
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto">
        Anfrage senden
        <ArrowRightIcon className="h-4 w-4" />
      </button>

      <p className="text-xs text-accent-900/55">
        Pflichtfelder sind mit * gekennzeichnet. Beim Absenden öffnet sich Ihr
        E-Mail-Programm mit den vorausgefüllten Angaben.
      </p>
    </form>
  );
}
