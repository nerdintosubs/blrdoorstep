import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const routes = ["", "/services", "/pricing", "/about", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified,
  }));
}
