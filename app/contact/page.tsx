import { BookingForm } from "@/components/booking-form";
import { siteConfig, whatsappLink } from "@/lib/site";

export const metadata = {
  title: "Contact & Book",
  description:
    "Book a doorstep massage in Bangalore via WhatsApp or the contact form. View hours and service areas.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-16">
      <section className="surface-card space-y-6 p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
          Contact & Book
        </p>
        <h1 className="font-display text-4xl text-slate-900 sm:text-5xl">
          Book your doorstep massage in minutes.
        </h1>
        <p className="max-w-2xl text-base text-slate-600">
          Use WhatsApp for the fastest response or share your details through
          the booking form. We will confirm therapist availability and arrival
          time quickly.
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
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="inline-flex items-center justify-center rounded-full border border-emerald-200 px-6 py-3 text-sm font-semibold text-emerald-800 transition hover:border-emerald-400 hover:text-emerald-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          >
            Email us
          </a>
        </div>
        <p className="text-xs text-slate-500">
          We reply quickly on WhatsApp during operating hours.
        </p>
      </section>

      <section id="booking" className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <BookingForm />
        <div className="space-y-6">
          <div className="surface-card space-y-4 p-6 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Hours
            </p>
            <h2 className="font-display text-2xl text-slate-900">
              Flexible slots, every day.
            </h2>
            <p className="text-sm text-slate-600">
              Weekdays: {siteConfig.hours.weekdays}
            </p>
            <p className="text-sm text-slate-600">
              Weekends: {siteConfig.hours.weekends}
            </p>
            <p className="text-xs text-slate-500">
              For late-night requests, message us for availability.
            </p>
          </div>

          <div className="surface-card space-y-4 p-6 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Service area map (text)
            </p>
            <h2 className="font-display text-2xl text-slate-900">
              We cover most of Bangalore.
            </h2>
            <p className="text-sm text-slate-600">
              Central, south, and east Bangalore are covered daily. Other areas
              available with advance notice.
            </p>
            <div className="grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
              {siteConfig.serviceAreas.map((area) => (
                <span key={area} className="rounded-full bg-emerald-50 px-3 py-2">
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-emerald-100 bg-emerald-50 px-5 py-4 text-xs text-emerald-900">
            Your information is used only to confirm bookings. We do not share
            or sell your contact details.
          </div>
        </div>
      </section>
    </div>
  );
}
