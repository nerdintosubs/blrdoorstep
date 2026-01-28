import Link from "next/link";
import { TherapistForm } from "@/components/therapist-form";
import { siteConfig, whatsappLink } from "@/lib/site";

export const metadata = {
  title: "Female Therapist Hiring",
  description:
    "Immediate hiring for professional female massage therapists in Bangalore. Apply in minutes.",
};

const highlights = [
  "Priority scheduling for women therapists based on client preference.",
  "Same-day payout options with transparent commission splits.",
  "Safety protocols, client screening, and escalation support.",
  "Branded kits and sanitized equipment provided.",
];

export default function TherapistHiringPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-16">
      <section className="glass-card space-y-6 p-6 sm:p-8">
        <p className="section-label">Hiring now</p>
        <h1 className="font-display text-4xl text-slate-900 sm:text-5xl">
          Female therapists wanted in Bangalore.
        </h1>
        <p className="max-w-2xl text-base text-slate-600">
          We are expanding our women therapist team to meet client demand. If
          you have professional massage experience and care about client safety
          and outcomes, apply today.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="#apply"
            className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          >
            Apply now
          </Link>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-emerald-200 px-6 py-3 text-sm font-semibold text-emerald-800 transition hover:border-emerald-400 hover:text-emerald-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          >
            WhatsApp the hiring team
          </a>
        </div>
        <p className="text-xs text-slate-500">
          Hiring line: {siteConfig.phoneDisplay}
        </p>
      </section>

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="surface-card space-y-4 p-6 sm:p-7">
          <p className="section-label">What you get</p>
          <h2 className="font-display text-2xl text-slate-900">
            A respectful, safe, and steady work environment.
          </h2>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-sm text-slate-700">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="surface-card space-y-4 p-6 sm:p-7">
          <p className="section-label">Immediate onboarding</p>
          <h2 className="font-display text-2xl text-slate-900">
            Start within 3-5 days.
          </h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-slate-700">
            <li>Quick screening call and credential check.</li>
            <li>On-site demo and etiquette assessment.</li>
            <li>Safety briefing and onboarding.</li>
            <li>First paid session with support.</li>
          </ol>
        </div>
      </section>

      <section id="apply" className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <TherapistForm />
        <div className="glass-card space-y-4 p-6 sm:p-7 text-sm text-slate-600">
          <p className="section-label">Questions?</p>
          <p className="font-semibold text-slate-900">
            Talk to our hiring coordinator.
          </p>
          <p>
            WhatsApp: {siteConfig.phoneDisplay}
          </p>
          <p>
            Email:{" "}
            <a className="font-semibold text-emerald-700" href={`mailto:${siteConfig.contactEmail}`}>
              {siteConfig.contactEmail}
            </a>
          </p>
          <p>
            We prioritize safety and respectful working conditions for every
            therapist.
          </p>
        </div>
      </section>
    </div>
  );
}
