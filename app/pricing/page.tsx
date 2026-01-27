import Link from "next/link";
import { pricingDisclaimer, pricingTiers } from "@/content/pricing";
import { whatsappLink } from "@/lib/site";

export const metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for doorstep massage in Bangalore with clear tiers and add-on options.",
};

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-16">
      <section className="surface-card space-y-6 p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
          Pricing
        </p>
        <h1 className="font-display text-4xl text-slate-900 sm:text-5xl">
          Clear tiers for every wellness need.
        </h1>
        <p className="max-w-2xl text-base text-slate-600">
          Choose a session length that matches your goals. Custom requests and
          add-ons are always welcome.
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

      <section className="grid gap-6 lg:grid-cols-3">
        {pricingTiers.map((tier) => (
          <div
            key={tier.name}
            className={`surface-card flex h-full flex-col border ${
              tier.highlighted
                ? "border-emerald-400 bg-emerald-50/80"
                : "border-white/60"
            } p-6 sm:p-7`}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
              {tier.duration}
            </p>
            <h2 className="mt-3 font-display text-2xl text-slate-900">
              {tier.name}
            </h2>
            <p className="mt-2 text-3xl font-semibold text-slate-900">
              {tier.price}
            </p>
            <p className="mt-2 text-sm text-slate-600">{tier.description}</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
              {tier.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <div className="mt-6 rounded-2xl border border-emerald-100 bg-white px-4 py-3 text-xs text-slate-600">
              <p className="font-semibold text-slate-900">Includes</p>
              <p className="mt-2">
                Sanitized portable table, premium oils, and therapist setup.
              </p>
            </div>
          </div>
        ))}
      </section>

      <section className="surface-card space-y-4 p-6 sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
          Pricing notes
        </p>
        <h2 className="font-display text-2xl text-slate-900">
          Transparent, flexible, and fair.
        </h2>
        <p className="text-sm text-slate-600">{pricingDisclaimer}</p>
        <p className="text-sm text-slate-600">
          Final quotes depend on therapist availability, travel distance, and
          time of day. Ask us on WhatsApp for an exact total.
        </p>
      </section>
    </div>
  );
}
