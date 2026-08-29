import type { MetadataRoute } from "next";
import { allSlugs } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://dkplumbingandheatingco.com";
  const lastModified = new Date();
  return [
    { url: `${base}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    ...allSlugs.map((slug) => ({
      url: `${base}/${slug}/`,
      lastModified,
      changeFrequency: slug === "projects" ? ("weekly" as const) : ("monthly" as const),
      priority: slug === "contact-us" || slug === "services" ? 0.9 : slug.includes("-in-") ? 0.75 : 0.8,
    })),
  ];
}
