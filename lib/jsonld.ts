import { site } from "@/config/site";
import { services } from "@/config/services";

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CleaningService",
    "@id": `${site.url}/#organisation`,
    name: site.legalName,
    description:
      "Gebäudemanagement in Ulm und Umgebung: Fensterreinigung, Osmose-Reinigung, Terrassenarbeiten, Baureinigung, Unterhaltsreinigung, Haushaltsauflösung, Umzüge und Entrümpelung.",
    url: site.url,
    telephone: site.contact.phone,
    email: site.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.contact.street,
      postalCode: site.contact.postalCode,
      addressLocality: site.contact.city,
      addressRegion: site.contact.region,
      addressCountry: site.contact.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.contact.lat,
      longitude: site.contact.lng,
    },
    areaServed: site.region.areas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "07:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "08:00",
        closes: "14:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Leistungen",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.teaser,
          url: `${site.url}/leistungen/${service.slug}`,
        },
      })),
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
