import { siteConfig } from "@/lib/site";

export function LocalBusinessSchema() {
  const telephone = siteConfig.whatsappNumber.startsWith("+")
    ? siteConfig.whatsappNumber
    : `+${siteConfig.whatsappNumber}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    areaServed: {
      "@type": "City",
      name: "Bengaluru",
    },
    serviceType: "Doorstep massage therapy",
    telephone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressRegion: "KA",
      addressCountry: "IN",
    },
    openingHours: ["Mo-Fr 07:00-22:00", "Sa-Su 07:00-23:00"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
