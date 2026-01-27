import Link from "next/link";
import { siteConfig, whatsappLink } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/40 bg-white/70 px-4 py-12 text-sm text-slate-600 backdrop-blur sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:justify-between">
        <div className="max-w-sm">
          <p className="font-display text-lg text-slate-900">
            {siteConfig.name}
          </p>
          <p className="mt-3 text-sm text-slate-600">
            Professional, non-explicit therapeutic massage delivered to your
            doorstep across Bangalore. Hygienic setup, verified therapists, and
            respectful service every time.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 px-4 py-2 text-sm font-semibold text-emerald-800 transition hover:border-emerald-400 hover:text-emerald-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          >
            WhatsApp Booking
          </a>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Explore
            </p>
            <div className="mt-4 flex flex-col gap-2 text-slate-700">
              <Link href="/services" className="hover:text-emerald-700">
                Services
              </Link>
              <Link href="/pricing" className="hover:text-emerald-700">
                Pricing
              </Link>
              <Link href="/about" className="hover:text-emerald-700">
                About & Policies
              </Link>
              <Link href="/contact" className="hover:text-emerald-700">
                Contact
              </Link>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Service Areas
            </p>
            <ul className="mt-4 space-y-2 text-slate-700">
              {siteConfig.serviceAreas.slice(0, 5).map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Hours
            </p>
            <div className="mt-4 space-y-2 text-slate-700">
              <p>Mon-Fri: {siteConfig.hours.weekdays}</p>
              <p>Sat-Sun: {siteConfig.hours.weekends}</p>
              <p className="text-xs text-slate-500">
                TODO: Confirm public holiday schedule.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl flex-col justify-between gap-3 border-t border-white/50 pt-6 text-xs text-slate-500 sm:flex-row">
        <p>(c) 2026 {siteConfig.name}. All rights reserved.</p>
        <p>
          Respectful therapeutic service only. We reserve the right to refuse
          service for safety or policy violations.
        </p>
      </div>
    </footer>
  );
}
