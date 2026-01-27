const whatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "919999999999";
const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ??
  "hello@bangaloredoorstepmassage.online";

export const siteConfig = {
  name: "Bangalore Doorstep Massage",
  description:
    "Professional, therapeutic massage at your doorstep in Bangalore. Certified therapists, hygienic setup, and flexible booking on WhatsApp.",
  url: "https://bangaloredoorstepmassage.online",
  whatsappNumber, // TODO: replace with official WhatsApp number
  whatsappMessage:
    "Hi! I would like to book a doorstep massage in Bangalore. Please share available slots.",
  contactEmail, // TODO: confirm contact email
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

export const whatsappLink = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
  siteConfig.whatsappMessage
)}`;
