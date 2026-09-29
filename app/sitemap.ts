import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { services } from "@/config/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = ["", "/leistungen", "/ueber-uns", "/kontakt"];

  return [
    ...staticRoutes.map((route) => ({
      url: `${site.url}${route}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...services.map((service) => ({
      url: `${site.url}/leistungen/${service.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
