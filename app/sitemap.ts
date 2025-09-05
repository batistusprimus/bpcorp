import { MetadataRoute } from 'next';
import { SITE_URL } from '@/data/site';
import { VERTICALS } from '@/data/verticals';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = SITE_URL;

  const staticRoutes = ['/', '/about', '/services', '/verticals', '/cases', '/contact', '/legal/terms', '/legal/privacy'];

  const items: MetadataRoute.Sitemap = [
    ...staticRoutes.map((path) => ({ url: `${base}${path}`, lastModified: now })),
    ...VERTICALS.map((v) => ({ url: `${base}/verticals/${v.slug}`, lastModified: now }))
  ];

  return items;
}


