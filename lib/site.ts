type ContactChannel = "whatsapp" | "call";
type ContactRole = "primary";

type ContactLine = {
  id: string;
  displayName: string;
  role: ContactRole;
  raw: string;
  normalized: string;
  e164: string;
  display: string;
  channels: ContactChannel[];
  whatsappLink?: string;
  callLink?: string;
};

const DEFAULT_PRIMARY_WHATSAPP = "7068344125";

function normalizePhoneNumber(phoneNumber: string) {
  const digitsOnly = phoneNumber.replace(/\D/g, "");
  return digitsOnly.length === 10 ? `91${digitsOnly}` : digitsOnly;
}

function formatPhoneDisplay(normalizedNumber: string) {
  return normalizedNumber.length === 12
    ? `+${normalizedNumber.slice(0, 2)} ${normalizedNumber.slice(2, 7)} ${normalizedNumber.slice(7)}`
    : `+${normalizedNumber}`;
}

function isValidIndianPhone(normalizedNumber: string) {
  return /^91\d{10}$/.test(normalizedNumber);
}

function resolveConfiguredLine(options: {
  id: string;
  displayName: string;
  role: ContactRole;
  fallbackRaw: string;
  rawCandidates: Array<string | undefined>;
  channels: ContactChannel[];
}) {
  const chosenRaw =
    options.rawCandidates.find((candidate) => candidate?.trim())?.trim() ??
    options.fallbackRaw;
  const normalized = normalizePhoneNumber(chosenRaw);

  if (!isValidIndianPhone(normalized)) {
    console.warn(
      `[siteConfig] ${options.id} is invalid (${chosenRaw}). Falling back to ${options.fallbackRaw}.`
    );
    return buildContactLine({
      ...options,
      raw: options.fallbackRaw,
      normalized: normalizePhoneNumber(options.fallbackRaw),
    });
  }

  return buildContactLine({ ...options, raw: chosenRaw, normalized });
}

function buildContactLine(
  options: Omit<ContactLine, "e164" | "display" | "whatsappLink" | "callLink">
) {
  return {
    ...options,
    e164: `+${options.normalized}`,
    display: formatPhoneDisplay(options.normalized),
    whatsappLink: options.channels.includes("whatsapp")
      ? `https://wa.me/${options.normalized}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
      : undefined,
    callLink: options.channels.includes("call")
      ? `tel:+${options.normalized}`
      : undefined,
  };
}

const WHATSAPP_MESSAGE =
  "Hi! I would like to book a doorstep massage in Bangalore. Please share available slots.";

const primaryWhatsappContact = resolveConfiguredLine({
  id: "whatsapp-primary",
  displayName: "WhatsApp",
  role: "primary",
  fallbackRaw: DEFAULT_PRIMARY_WHATSAPP,
  rawCandidates: [process.env.NEXT_PUBLIC_WHATSAPP_PRIMARY],
  channels: ["whatsapp", "call"],
});

const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "blrhangouthub@icloud.com";

const contactLines = [primaryWhatsappContact];
const primaryCallContact = primaryWhatsappContact;

export const siteConfig = {
  name: "Bangalore Doorstep Massage",
  description:
    "Professional, therapeutic massage at your doorstep in Bangalore. Certified therapists, hygienic setup, and flexible booking on WhatsApp.",
  url: "https://bangaloredoorstepmassage.online",
  whatsappMessage: WHATSAPP_MESSAGE,
  whatsappNumber: primaryWhatsappContact.raw,
  normalizedWhatsappNumber: primaryWhatsappContact.normalized,
  phoneE164: primaryWhatsappContact.e164,
  phoneDisplay: primaryWhatsappContact.display,
  contactEmail,
  contactLines,
  contactNumbers: contactLines,
  primaryWhatsappContact,
  primaryCallContact,
  whatsappContacts: contactLines.filter((line) =>
    line.channels.includes("whatsapp")
  ),
  primaryWhatsappLink: primaryWhatsappContact.whatsappLink!,
  whatsappLink: primaryWhatsappContact.whatsappLink!,
  contactDisplaySummary: primaryWhatsappContact.display,
  hours: {
    weekdays: "7:00 AM - 10:00 PM",
    weekends: "7:00 AM - 11:00 PM",
  },
  serviceAreas: [
    "Indiranagar",
    "Koramangala",
    "HSR Layout",
    "Whitefield",
    "JP Nagar",
    "Jayanagar",
    "BTM Layout",
    "Marathahalli",
    "Sarjapur Road",
    "Electronic City",
  ],
};

export const whatsappLink = siteConfig.primaryWhatsappLink;
