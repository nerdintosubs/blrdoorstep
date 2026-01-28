"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useMemo, useState } from "react";
import {
  bookingSchema,
  defaultBookingValues,
  type BookingFormValues,
} from "@/lib/booking";

type FormStatus = "idle" | "submitting" | "success" | "error";

const serviceOptions = [
  "Swedish Relaxation",
  "Deep Tissue Therapy",
  "Sports Recovery",
  "Head, Neck & Shoulder",
  "Aroma Calm Ritual",
  "Prenatal Comfort",
];

export function BookingForm() {
  const [values, setValues] =
    useState<BookingFormValues>(defaultBookingValues);
  const [errors, setErrors] = useState<
    Partial<Record<keyof BookingFormValues, string>>
  >({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const statusMessage = useMemo(() => {
    if (status === "success") {
      return "Thanks! Your request has been sent. We will confirm shortly on WhatsApp.";
    }
    if (status === "error") {
      return "Something went wrong. Please try again or book directly on WhatsApp.";
    }
    return "";
  }, [status]);

  function handleChange(
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const parsed = bookingSchema.safeParse(values);

    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof BookingFormValues, string>> = {};
      parsed.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof BookingFormValues;
        fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      setStatus("idle");
      return;
    }

    setStatus("submitting");
    try {
      const formData = new URLSearchParams();
      formData.append("form-name", "booking");
      (Object.keys(parsed.data) as Array<keyof BookingFormValues>).forEach(
        (key) => {
          formData.append(key, parsed.data[key] ?? "");
        }
      );

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      });

      if (!response.ok) {
        throw new Error("Netlify form submission failed");
      }

      setStatus("success");
      setValues(defaultBookingValues);
      setErrors({});
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="surface-card relative overflow-hidden p-6 sm:p-8">
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-100 blur-3xl" />
      <div className="relative space-y-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Book a Session
          </p>
          <h3 className="font-display text-2xl text-slate-900 sm:text-3xl">
            Share your details and we will confirm on WhatsApp
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            We typically respond within 10-15 minutes during working hours.
          </p>
        </div>
        <form
          name="booking"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input type="hidden" name="form-name" value="booking" />
          <input type="hidden" name="bot-field" />

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm font-medium text-slate-700">
              Name
              <input
                name="name"
                value={values.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full rounded-2xl border border-emerald-100 bg-white px-4 py-3 text-slate-900 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              />
              {errors.name ? (
                <span className="text-xs text-rose-500">{errors.name}</span>
              ) : null}
            </label>

            <label className="space-y-2 text-sm font-medium text-slate-700">
              Phone / WhatsApp
              <input
                name="phone"
                value={values.phone}
                onChange={handleChange}
                placeholder="+91 9XXXX XXXXX"
                className="w-full rounded-2xl border border-emerald-100 bg-white px-4 py-3 text-slate-900 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              />
              {errors.phone ? (
                <span className="text-xs text-rose-500">{errors.phone}</span>
              ) : null}
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm font-medium text-slate-700">
              Bangalore Area
              <input
                name="area"
                value={values.area}
                onChange={handleChange}
                placeholder="Indiranagar, HSR, Whitefield..."
                className="w-full rounded-2xl border border-emerald-100 bg-white px-4 py-3 text-slate-900 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              />
              {errors.area ? (
                <span className="text-xs text-rose-500">{errors.area}</span>
              ) : null}
            </label>

            <label className="space-y-2 text-sm font-medium text-slate-700">
              Preferred Time
              <input
                name="preferredTime"
                value={values.preferredTime}
                onChange={handleChange}
                placeholder="Tomorrow 7-9 PM"
                className="w-full rounded-2xl border border-emerald-100 bg-white px-4 py-3 text-slate-900 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              />
              {errors.preferredTime ? (
                <span className="text-xs text-rose-500">
                  {errors.preferredTime}
                </span>
              ) : null}
            </label>
          </div>

          <label className="space-y-2 text-sm font-medium text-slate-700">
            Service Type
            <select
              name="serviceType"
              value={values.serviceType}
              onChange={handleChange}
              className="w-full rounded-2xl border border-emerald-100 bg-white px-4 py-3 text-slate-900 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              <option value="">Select a service</option>
              {serviceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.serviceType ? (
              <span className="text-xs text-rose-500">
                {errors.serviceType}
              </span>
            ) : null}
          </label>

          <label className="space-y-2 text-sm font-medium text-slate-700">
            Notes (optional)
            <textarea
              name="notes"
              value={values.notes}
              onChange={handleChange}
              placeholder="Focus areas, pressure preference, or health notes"
              rows={4}
              className="w-full resize-none rounded-2xl border border-emerald-100 bg-white px-4 py-3 text-slate-900 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            />
            {errors.notes ? (
              <span className="text-xs text-rose-500">{errors.notes}</span>
            ) : null}
          </label>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800 disabled:cursor-not-allowed disabled:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          >
            {status === "submitting" ? "Sending..." : "Submit booking request"}
          </button>
        </form>

        {status !== "idle" ? (
          <div
            role="status"
            aria-live="polite"
            className={`rounded-2xl px-4 py-3 text-sm ${
              status === "success"
                ? "bg-emerald-50 text-emerald-700"
                : "bg-rose-50 text-rose-600"
            }`}
          >
            {statusMessage}
          </div>
        ) : null}
      </div>
    </div>
  );
}
