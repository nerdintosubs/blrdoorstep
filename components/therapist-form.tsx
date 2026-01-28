"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useEffect, useMemo, useState } from "react";
import {
  defaultTherapistValues,
  therapistSchema,
  type TherapistFormValues,
} from "@/lib/therapist";
import { loadAttribution, type AttributionData } from "@/lib/marketing";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function TherapistForm() {
  const [values, setValues] =
    useState<TherapistFormValues>(defaultTherapistValues);
  const [errors, setErrors] = useState<
    Partial<Record<keyof TherapistFormValues, string>>
  >({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [attribution, setAttribution] = useState<AttributionData>({
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
    landing_page: "",
    referrer: "",
  });

  const statusMessage = useMemo(() => {
    if (status === "success") {
      return "Thanks! We received your application and will reach out within 24 hours.";
    }
    if (status === "error") {
      return "Something went wrong. Please try again or WhatsApp us directly.";
    }
    return "";
  }, [status]);

  useEffect(() => {
    setAttribution(loadAttribution());
  }, []);

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
    const parsed = therapistSchema.safeParse(values);

    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof TherapistFormValues, string>> = {};
      parsed.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof TherapistFormValues;
        fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      setStatus("idle");
      return;
    }

    setStatus("submitting");
    try {
      const formData = new URLSearchParams();
      formData.append("form-name", "therapist-application");
      formData.append("bot-field", "");
      formData.append("utm_source", attribution.utm_source);
      formData.append("utm_medium", attribution.utm_medium);
      formData.append("utm_campaign", attribution.utm_campaign);
      formData.append("utm_term", attribution.utm_term);
      formData.append("utm_content", attribution.utm_content);
      formData.append("landing_page", attribution.landing_page);
      formData.append("referrer", attribution.referrer);
      (Object.keys(parsed.data) as Array<keyof TherapistFormValues>).forEach(
        (key) => {
          formData.append(key, parsed.data[key] ?? "");
        }
      );

      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      });

      if (!response.ok) {
        throw new Error("Netlify form submission failed");
      }

      setStatus("success");
      setValues(defaultTherapistValues);
      setErrors({});
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="surface-card relative overflow-hidden p-6 sm:p-8">
      <div className="absolute -left-16 -top-10 h-36 w-36 rounded-full bg-emerald-100 blur-3xl" />
      <div className="relative space-y-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Therapist Application
          </p>
          <h3 className="font-display text-2xl text-slate-900 sm:text-3xl">
            Join our professional wellness team
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            We prioritize safety, respect, and quality. Share your experience
            and preferred working areas.
          </p>
        </div>
        <form
          name="therapist-application"
          method="POST"
          action="/__forms.html"
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input type="hidden" name="form-name" value="therapist-application" />
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="utm_source" value={attribution.utm_source} />
          <input type="hidden" name="utm_medium" value={attribution.utm_medium} />
          <input
            type="hidden"
            name="utm_campaign"
            value={attribution.utm_campaign}
          />
          <input type="hidden" name="utm_term" value={attribution.utm_term} />
          <input
            type="hidden"
            name="utm_content"
            value={attribution.utm_content}
          />
          <input
            type="hidden"
            name="landing_page"
            value={attribution.landing_page}
          />
          <input type="hidden" name="referrer" value={attribution.referrer} />

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm font-medium text-slate-700">
              Full Name
              <input
                name="name"
                value={values.name}
                onChange={handleChange}
                placeholder="Your name"
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

          <label className="space-y-2 text-sm font-medium text-slate-700">
            Experience
            <input
              name="experience"
              value={values.experience}
              onChange={handleChange}
              placeholder="e.g., 3 years, spa background"
              className="w-full rounded-2xl border border-emerald-100 bg-white px-4 py-3 text-slate-900 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            />
            {errors.experience ? (
              <span className="text-xs text-rose-500">
                {errors.experience}
              </span>
            ) : null}
          </label>

          <label className="space-y-2 text-sm font-medium text-slate-700">
            Certifications / Training
            <input
              name="certifications"
              value={values.certifications}
              onChange={handleChange}
              placeholder="Massage certification, physiotherapy, etc."
              className="w-full rounded-2xl border border-emerald-100 bg-white px-4 py-3 text-slate-900 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            />
            {errors.certifications ? (
              <span className="text-xs text-rose-500">
                {errors.certifications}
              </span>
            ) : null}
          </label>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm font-medium text-slate-700">
              Availability
              <input
                name="availability"
                value={values.availability}
                onChange={handleChange}
                placeholder="Weekdays 10am-7pm"
                className="w-full rounded-2xl border border-emerald-100 bg-white px-4 py-3 text-slate-900 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              />
              {errors.availability ? (
                <span className="text-xs text-rose-500">
                  {errors.availability}
                </span>
              ) : null}
            </label>
            <label className="space-y-2 text-sm font-medium text-slate-700">
              Preferred Areas
              <input
                name="areas"
                value={values.areas}
                onChange={handleChange}
                placeholder="HSR, Koramangala, Indiranagar"
                className="w-full rounded-2xl border border-emerald-100 bg-white px-4 py-3 text-slate-900 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              />
              {errors.areas ? (
                <span className="text-xs text-rose-500">{errors.areas}</span>
              ) : null}
            </label>
          </div>

          <label className="space-y-2 text-sm font-medium text-slate-700">
            Notes (optional)
            <textarea
              name="notes"
              value={values.notes}
              onChange={handleChange}
              placeholder="Anything else we should know?"
              rows={3}
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
            {status === "submitting"
              ? "Submitting..."
              : "Submit application"}
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
