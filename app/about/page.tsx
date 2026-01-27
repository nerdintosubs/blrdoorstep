import Link from "next/link";
import { whatsappLink } from "@/lib/site";

export const metadata = {
  title: "About",
  description:
    "Learn about our Bangalore doorstep massage team, hygiene standards, and professional service policies.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-16">
      <section className="surface-card space-y-6 p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
          About us
        </p>
        <h1 className="font-display text-4xl text-slate-900 sm:text-5xl">
          Wellness care built on trust, hygiene, and respect.
        </h1>
        <p className="max-w-2xl text-base text-slate-600">
          We are a Bangalore-based team of certified massage therapists focused
          on professional, non-explicit therapeutic care. Every visit is
          designed to feel calm, safe, and clinically informed.
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
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-emerald-200 px-6 py-3 text-sm font-semibold text-emerald-800 transition hover:border-emerald-400 hover:text-emerald-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          >
            Contact us
          </Link>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="surface-card space-y-4 p-6 sm:p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Therapist standards
          </p>
          <h2 className="font-display text-2xl text-slate-900">
            Verified professionals only.
          </h2>
          <p className="text-sm text-slate-600">
            Therapists are background-verified, trained in client etiquette, and
            expected to uphold a strict professional code at all times. We match
            therapists based on availability, specialization, and client
            preferences.
          </p>
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
            <li>ID verification and screening.</li>
            <li>Ongoing training for safety and comfort.</li>
            <li>Clear escalation path for feedback.</li>
          </ul>
        </div>
        <div className="surface-card space-y-4 p-6 sm:p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Hygiene protocols
          </p>
          <h2 className="font-display text-2xl text-slate-900">
            Clinic-grade cleanliness at home.
          </h2>
          <p className="text-sm text-slate-600">
            We sanitize all equipment before and after every session. Fresh
            linens, disposable face covers, and high-quality oils are used for
            each appointment.
          </p>
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
            <li>Sanitized portable table and surfaces.</li>
            <li>Single-use sheets and wipes.</li>
            <li>Health screening for therapists.</li>
          </ul>
        </div>
      </section>

      <section id="policies" className="surface-card space-y-6 p-6 sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
          Policies & conduct
        </p>
        <h2 className="font-display text-2xl text-slate-900">
          Respectful, non-explicit service only.
        </h2>
        <p className="text-sm text-slate-600">
          Our services are strictly therapeutic and non-explicit. Any requests
          for sexual services are refused, and the session will end immediately.
        </p>
        <div className="grid gap-4 text-sm text-slate-700 sm:grid-cols-2">
          <div className="rounded-2xl border border-emerald-100 bg-white px-4 py-4">
            <p className="font-semibold text-slate-900">Client responsibilities</p>
            <ul className="mt-2 list-disc space-y-2 pl-5">
              <li>Provide a safe, respectful space.</li>
              <li>Share relevant health conditions.</li>
              <li>Maintain professional conduct throughout.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-emerald-100 bg-white px-4 py-4">
            <p className="font-semibold text-slate-900">Our commitments</p>
            <ul className="mt-2 list-disc space-y-2 pl-5">
              <li>Right to refuse service for safety.</li>
              <li>Clear pricing and time estimates.</li>
              <li>Post-session care guidance.</li>
            </ul>
          </div>
        </div>
        <p className="text-xs text-slate-500">
          TODO: Provide official policy text and cancellation terms.
        </p>
      </section>
    </div>
  );
}
