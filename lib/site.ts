const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "9187351205";
const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "blrhangouthub@icloud.com";

const digitsOnly = whatsappNumber.replace(/\D/g, "");
const normalizedWhatsappNumber =
  digitsOnly.length === 10 ? `91${digitsOnly}` : digitsOnly;

export const siteConfig = {
  name: "Bangalore Doorstep Massage",
  description:
    "Professional, therapeutic massage at your doorstep in Bangalore. Certified therapists, hygienic setup, and flexible booking on WhatsApp.",
  url: "https://bangaloredoorstepmassage.online",
  whatsappNumber,
  normalizedWhatsappNumber,
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
