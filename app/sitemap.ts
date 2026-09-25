import type { MetadataRoute } from "next";
import { SRK_BUSINESS } from "@/lib/srk-data";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SRK_BUSINESS.siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${SRK_BUSINESS.siteUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
