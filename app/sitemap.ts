import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.briannoriega.com",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://www.briannoriega.com/about",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://www.briannoriega.com/projects",
      lastModified: new Date().toISOString(),
    },
  ];
}
