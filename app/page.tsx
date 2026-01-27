import Link from "next/link";
import {
  benefits,
  faqs,
  featuredServices,
  safetyPoints,
  testimonials,
} from "@/content/home";
import { pricingDisclaimer, pricingTiers } from "@/content/pricing";
import { whatsappLink, siteConfig } from "@/lib/site";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl space-y-24">
      <section className="surface-glow relative overflow-hidden rounded-[28px] border border-white/40 bg-white/80 px-6 py-16 shadow-[0_30px_80px_rgba(15,118,110,0.18)] sm:px-10 lg:px-16">
        <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-emerald-200/50 blur-3xl" />
        <div className="relative grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <span className="fade-up inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Professional | Non-explicit | Wellness
            </span>
            <h1 className="fade-up delay-1 font-display text-4xl text-slate-900 sm:text-5xl lg:text-6xl">
              Doorstep massage in Bangalore, crafted for deep relief and calm.
            </h1>
            <p className="fade-up delay-2 max-w-xl text-base text-slate-600 sm:text-lg">
              {siteConfig.description} We bring a hygienic setup, fresh linens,
              and a verified therapist so you can unwind at home.
            </p>
            <div className="fade-up delay-3 flex flex-col gap-3 sm:flex-row sm:items-center">
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
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  title: "Flexible slots",
                  description: "Morning to late evening availability.",
                },
                {
                  title: "Verified therapists",
                  description: "Background-checked and trained.",
                },
                {
                  title: "Hygiene-first",
                  description: "Sanitized table and fresh linens.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-emerald-100 bg-white px-4 py-4 text-sm text-slate-700 shadow-sm"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="surface-card relative overflow-hidden p-6 sm:p-8">
            <div className="absolute -right-10 top-6 h-32 w-32 rounded-full bg-amber-100 blur-3xl" />
            <div className="relative space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Quick booking snapshot
              </p>
              <div className="space-y-3 text-sm text-slate-700">
                <div className="flex items-start justify-between gap-4">
                  <p className="font-medium text-slate-900">Avg. response</p>
                  <p className="text-slate-600">Within 10 minutes</p>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <p className="font-medium text-slate-900">Service radius</p>
                  <p className="text-slate-600">Across Bangalore</p>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <p className="font-medium text-slate-900">Setup time</p>
                  <p className="text-slate-600">15 minutes</p>
                </div>
              </div>
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-4 text-sm text-emerald-900">
                <p className="font-semibold">Preferred for professionals</p>
                <p className="mt-2 text-emerald-800">
                  We serve working professionals and families seeking safe,
                  respectful wellness care.
                </p>
              </div>
              <p className="text-xs text-slate-500">
                TODO: Replace placeholder WhatsApp number{" "}
                <strong>{siteConfig.whatsappNumber}</strong> before launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Why choose us
            </p>
            <h2 className="font-display text-3xl text-slate-900 sm:text-4xl">
              A wellness team you can trust in your home.
            </h2>
          </div>
          <Link
            href="/about"
            className="text-sm font-semibold text-emerald-800 transition hover:text-emerald-700"
          >
            Learn about our standards -&gt;
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="surface-card p-6 sm:p-7">
              <benefit.icon className="h-10 w-10 text-emerald-700" />
              <h3 className="mt-4 font-display text-xl text-slate-900">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Signature services
            </p>
            <h2 className="font-display text-3xl text-slate-900 sm:text-4xl">
              Focused therapies, tailored to your body.
            </h2>
          </div>
          <Link
            href="/services"
            className="text-sm font-semibold text-emerald-800 transition hover:text-emerald-700"
          >
            View all services -&gt;
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredServices.map((service) => (
            <div key={service.title} className="surface-card p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                {service.duration}
              </p>
              <h3 className="mt-3 font-display text-xl text-slate-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Transparent pricing
          </p>
          <h2 className="font-display text-3xl text-slate-900 sm:text-4xl">
            Clear tiers with flexibility for your needs.
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
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
              <h3 className="mt-3 font-display text-2xl text-slate-900">
                {tier.name}
              </h3>
              <p className="mt-2 text-3xl font-semibold text-slate-900">
                {tier.price}
              </p>
              <p className="mt-2 text-sm text-slate-600">{tier.description}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
                {tier.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <Link
                href="/pricing"
                className="mt-6 text-sm font-semibold text-emerald-800 transition hover:text-emerald-700"
              >
                See full pricing -&gt;
              </Link>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-500">{pricingDisclaimer}</p>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Client stories
          </p>
          <h2 className="font-display text-3xl text-slate-900 sm:text-4xl">
            Calm, clarity, and relief - delivered to your doorstep.
          </h2>
          <div className="grid gap-4">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="surface-card p-6">
                <p className="text-sm text-slate-700">
                  &quot;{testimonial.quote}&quot;
                </p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="surface-card space-y-6 p-6 sm:p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Trust & safety
          </p>
          <h3 className="font-display text-2xl text-slate-900">
            Respectful, professional, and secure.
          </h3>
          <ul className="list-disc space-y-3 pl-5 text-sm text-slate-700">
            {safetyPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <Link
            href="/about#policies"
            className="text-sm font-semibold text-emerald-800 transition hover:text-emerald-700"
          >
            Read full policies -&gt;
          </Link>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="surface-card p-6 sm:p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
            FAQs
          </p>
          <h3 className="font-display text-2xl text-slate-900">
            Quick answers before you book.
          </h3>
          <div className="mt-6 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="rounded-2xl border border-emerald-100 bg-white px-4 py-3 text-sm text-slate-700"
              >
                <summary className="cursor-pointer font-semibold text-slate-900">
                  {faq.question}
                </summary>
                <p className="mt-2 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
        <div className="surface-card flex flex-col justify-between gap-6 p-6 sm:p-7">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Ready to unwind?
            </p>
            <h3 className="font-display text-2xl text-slate-900">
              Book in minutes on WhatsApp.
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Share your location and preferred time, and we will confirm the
              therapist details instantly.
            </p>
          </div>
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
        </div>
      </section>
    </div>
  );
}
