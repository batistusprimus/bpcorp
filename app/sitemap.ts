import { MetadataRoute } from 'next';
import { SITE_URL } from '@/data/site';
import { MARKETS } from '@/data/markets';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = SITE_URL;

  const staticRoutes = ['/', '/about', '/services', '/markets', '/cases', '/contact', '/legal/terms', '/legal/privacy'];

  const items: MetadataRoute.Sitemap = [
    ...staticRoutes.map((path) => ({ url: `${base}${path}`, lastModified: now })),
    ...MARKETS.map((v) => ({ url: `${base}/markets/${v.slug}`, lastModified: now }))
  ];

  return items;
}


