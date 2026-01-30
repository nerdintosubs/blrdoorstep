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

    const hasUtm =
      utm_source || utm_medium || utm_campaign || utm_term || utm_content;

    const payload: Record<string, string> = {
      landing_page,
      referrer,
    };

    if (hasUtm) {
      payload.utm_source = utm_source;
      payload.utm_medium = utm_medium;
      payload.utm_campaign = utm_campaign;
      payload.utm_term = utm_term;
      payload.utm_content = utm_content;
    }

    saveAttribution(payload);
  }, []);

  return null;
}
