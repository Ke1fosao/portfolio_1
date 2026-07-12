import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const staticPages = ["", "/work", "/about"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date()
  }));

  const projectPages = projects.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: new Date()
  }));

  return [...staticPages, ...projectPages];
}
