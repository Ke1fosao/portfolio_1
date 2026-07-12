import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://portfolio.example.com";
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
