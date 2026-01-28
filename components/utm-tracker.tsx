"use client";

import { useEffect } from "react";
import { saveAttribution } from "@/lib/marketing";

export function UtmTracker() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utm_source = params.get("utm_source") ?? "";
    const utm_medium = params.get("utm_medium") ?? "";
    const utm_campaign = params.get("utm_campaign") ?? "";
    const utm_term = params.get("utm_term") ?? "";
    const utm_content = params.get("utm_content") ?? "";
    const landing_page = window.location.pathname;
    const referrer = document.referrer ?? "";

    if (
      utm_source ||
      utm_medium ||
      utm_campaign ||
      utm_term ||
      utm_content ||
      landing_page
    ) {
      saveAttribution({
        utm_source,
        utm_medium,
        utm_campaign,
        utm_term,
        utm_content,
        landing_page,
        referrer,
      });
    }
  }, []);

  return null;
}
