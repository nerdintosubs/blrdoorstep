const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "917259120770";
const secondaryContactNumber = "919340903262";
const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "blrhangouthub@icloud.com";

const normalizeIndianNumber = (number: string) => {
  const digitsOnly = number.replace(/\D/g, "");
  return digitsOnly.length === 10 ? `91${digitsOnly}` : digitsOnly;
};

const formatPhoneDisplay = (normalizedNumber: string) =>
  normalizedNumber.length === 12
    ? `+${normalizedNumber.slice(0, 2)} ${normalizedNumber.slice(2, 7)} ${normalizedNumber.slice(7)}`
    : `+${normalizedNumber}`;

const normalizedWhatsappNumber = normalizeIndianNumber(whatsappNumber);
const normalizedSecondaryContactNumber = normalizeIndianNumber(secondaryContactNumber);
const phoneE164 = `+${normalizedWhatsappNumber}`;
const phoneDisplay = [
  formatPhoneDisplay(normalizedWhatsappNumber),
  formatPhoneDisplay(normalizedSecondaryContactNumber),
].join(", ");

export const siteConfig = {
  name: "Bangalore Doorstep Massage",
  description:
    "Professional, therapeutic massage at your doorstep in Bangalore. Certified therapists, hygienic setup, and flexible booking on WhatsApp.",
  url: "https://bangaloredoorstepmassage.online",
  whatsappNumber,
  normalizedWhatsappNumber,
  secondaryContactNumber,
  normalizedSecondaryContactNumber,
  phoneE164,
  phoneDisplay,
  whatsappMessage:
    "Hi! I would like to book a doorstep massage in Bangalore. Please share available slots.",
  contactEmail,
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

export const whatsappLink = `https://wa.me/${siteConfig.normalizedWhatsappNumber}?text=${encodeURIComponent(
  siteConfig.whatsappMessage
)}`;
