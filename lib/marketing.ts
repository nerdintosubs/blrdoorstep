export type AttributionData = {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
  landing_page: string;
  referrer: string;
};

const ATTRIBUTION_KEY = "bdm_attribution";

const emptyAttribution: AttributionData = {
  utm_source: "",
  utm_medium: "",
  utm_campaign: "",
  utm_term: "",
  utm_content: "",
  landing_page: "",
  referrer: "",
};

export function saveAttribution(data: Partial<AttributionData>) {
  if (typeof window === "undefined") return;
  const existing = loadAttribution();
  const merged = { ...existing, ...data };
  window.localStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(merged));
}

export function loadAttribution(): AttributionData {
  if (typeof window === "undefined") return emptyAttribution;
  const raw = window.localStorage.getItem(ATTRIBUTION_KEY);
  if (!raw) return emptyAttribution;
  try {
    return { ...emptyAttribution, ...JSON.parse(raw) };
  } catch {
    return emptyAttribution;
  }
}
