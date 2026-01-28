import Link from "next/link";
import { TherapistForm } from "@/components/therapist-form";
import { siteConfig, whatsappLink } from "@/lib/site";

export const metadata = {
  title: "Therapist Careers",
  description:
    "Apply to join our professional doorstep massage therapist team in Bangalore.",
};

const roleBenefits = [
  "Consistent bookings with flexible shifts.",
  "Same-day payout options and transparent commissions.",
  "Safety protocols, client screening, and escalation support.",
  "Branded kits and sanitized equipment provided.",
];

const requirements = [
  "Certified massage training or spa experience.",
  "Professional, respectful client communication.",
  "Ability to travel within Bangalore zones.",
  "Commitment to hygiene and safety standards.",
];

export default function CareersPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-16">
      <section className="surface-card space-y-6 p-6 sm:p-8">
        <p className="section-label">Therapist Careers</p>
        <h1 className="font-display text-4xl text-slate-900 sm:text-5xl">
          Join our doorstep massage team in Bangalore.
        </h1>
        <p className="max-w-2xl text-base text-slate-600">
          We are hiring professional female therapists who value respectful
          service, safety, and wellness outcomes. Apply in minutes and our team
          will respond within 24 hours.
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
          WhatsApp hiring line: {siteConfig.phoneDisplay}
        </p>
      </section>

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="surface-card space-y-4 p-6 sm:p-7">
          <p className="section-label">Why join us</p>
          <h2 className="font-display text-2xl text-slate-900">
            A respectful, reliable work environment.
          </h2>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-sm text-slate-700">
            {roleBenefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </div>
        <div className="surface-card space-y-4 p-6 sm:p-7">
          <p className="section-label">Requirements</p>
          <h2 className="font-display text-2xl text-slate-900">
            Professional standards we expect.
          </h2>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-sm text-slate-700">
            {requirements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="apply" className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <TherapistForm />
        <div className="space-y-6">
          <div className="glass-card space-y-4 p-6 sm:p-7">
            <p className="section-label">Hiring process</p>
            <h2 className="font-display text-2xl text-slate-900">
              Fast response, clear onboarding.
            </h2>
            <ol className="list-decimal space-y-2 pl-5 text-sm text-slate-700">
              <li>Initial call + credential check.</li>
              <li>In-person demo and etiquette assessment.</li>
              <li>Onboarding and safety briefing.</li>
              <li>First paid session paired with a lead therapist.</li>
            </ol>
          </div>
          <div className="surface-card space-y-3 p-6 sm:p-7 text-sm text-slate-600">
            <p className="font-semibold text-slate-900">
              Safety is non-negotiable.
            </p>
            <p>
              We screen clients, provide emergency escalation support, and
              enforce a strict code of conduct.
            </p>
            <p>
              For any questions, email{" "}
              <a className="font-semibold text-emerald-700" href={`mailto:${siteConfig.contactEmail}`}>
                {siteConfig.contactEmail}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
