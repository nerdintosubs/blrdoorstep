import Link from "next/link";
import { whatsappLink } from "@/lib/site";

export function FloatingCta() {
  return (
    <div className="pointer-events-none fixed bottom-4 left-0 right-0 z-40 flex justify-center px-4 sm:bottom-6 sm:right-6 sm:left-auto">
      <div className="pointer-events-auto flex w-full max-w-md items-center justify-between gap-3 rounded-full border border-emerald-200/80 bg-white/90 px-4 py-3 shadow-xl shadow-emerald-900/10 backdrop-blur sm:max-w-fit sm:flex-col sm:items-stretch sm:gap-2">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 items-center justify-center rounded-full bg-emerald-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
        >
          Book on WhatsApp
        </a>
        <Link
          href="/contact#booking"
          className="inline-flex flex-1 items-center justify-center rounded-full border border-emerald-200 px-4 py-2 text-sm font-semibold text-emerald-800 transition hover:border-emerald-400 hover:text-emerald-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 sm:hidden"
        >
          Booking form
        </Link>
      </div>
    </div>
  );
}
