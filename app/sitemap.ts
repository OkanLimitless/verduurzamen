import { MetadataRoute } from "next";
import { getAllStaticParams } from "@/lib/catalog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.verduurzaam-nederland.nl";
  const routes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
  ];

  const pages = getAllStaticParams();
  for (const { region, slug } of pages) {
    routes.push({
      url: `${baseUrl}/${region}/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    });
  }

  return routes;
}