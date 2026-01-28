import Link from "next/link";
import {
  addOns,
  serviceAreasExtended,
  services,
  sessionFlow,
  sessionNotes,
} from "@/content/services";
import { whatsappLink } from "@/lib/site";

export const metadata = {
  title: "Services",
  description:
    "Explore doorstep massage services in Bangalore including Swedish, deep tissue, sports recovery, and more.",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-16">
      <section className="surface-card space-y-6 p-6 sm:p-8">
        <p className="section-label">Services</p>
        <h1 className="font-display text-4xl text-slate-900 sm:text-5xl">
          Tailored therapies delivered to your doorstep.
        </h1>
        <p className="max-w-2xl text-base text-slate-600">
          Choose from a curated list of therapeutic massage styles. Every
          session includes a sanitized portable table, fresh linens, and
          premium oils.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          >
            Book on WhatsApp
          </a>
          <Link
            href="/contact#booking"
            className="inline-flex items-center justify-center rounded-full border border-emerald-200 px-6 py-3 text-sm font-semibold text-emerald-800 transition hover:border-emerald-400 hover:text-emerald-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          >
            Use booking form
          </Link>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        {services.map((service) => (
          <div key={service.title} className="surface-card p-6 sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="font-display text-2xl text-slate-900">
                  {service.title}
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  {service.description}
                </p>
              </div>
              <span className="rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                {service.duration}
              </span>
            </div>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Best for
            </p>
            <p className="mt-2 text-sm text-slate-700">{service.bestFor}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="surface-card p-6 sm:p-7">
          <p className="section-label">Add-ons</p>
          <h2 className="font-display text-2xl text-slate-900">
            Enhance your session.
          </h2>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-sm text-slate-700">
            {addOns.map((addon) => (
              <li key={addon}>{addon}</li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-slate-500">
            Add-ons are subject to therapist availability.
          </p>
        </div>
        <div className="surface-card p-6 sm:p-7">
          <p className="section-label">Session flow</p>
          <h2 className="font-display text-2xl text-slate-900">
            What to expect from arrival to after-care.
          </h2>
          <div className="mt-4 space-y-3 text-sm text-slate-700">
            {sessionFlow.map((step, index) => (
              <div key={step.title} className="flex gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 text-xs font-semibold text-emerald-700">
                  {index + 1}
                </span>
                <div>
                  <p className="font-semibold text-slate-900">{step.title}</p>
                  <p className="text-sm text-slate-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-xs text-slate-500">
            {sessionNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="surface-card p-6 sm:p-7">
        <p className="section-label">Service areas</p>
        <h2 className="font-display text-2xl text-slate-900">
          Covering key Bangalore neighborhoods.
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          We cover central and south Bangalore with advance bookings available
          for other areas.
        </p>
        <div className="mt-4 grid gap-2 text-sm text-slate-700 sm:grid-cols-3">
          {serviceAreasExtended.map((area) => (
            <span key={area} className="rounded-full bg-emerald-50 px-3 py-2">
              {area}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
