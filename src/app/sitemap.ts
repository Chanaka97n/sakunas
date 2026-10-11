import type { MetadataRoute } from "next";

import { absoluteUrl, mainNav } from "@/config/site";
import { categories, getPhotosByCategory, photos } from "@/content/photos";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages = [...mainNav.map((item) => item.href), "/terms"].map((path) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : path === "/terms" ? 0.3 : 0.8,
    images: path === "/portfolio" ? photos.map((p) => absoluteUrl(p.src)) : undefined,
  }));

  const categoryPages = categories.map((category) => ({
    url: absoluteUrl(`/portfolio/${category.slug}`),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
    images: getPhotosByCategory(category.slug).map((p) => absoluteUrl(p.src)),
  }));

  return [...pages, ...categoryPages];
}
