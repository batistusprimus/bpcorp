import type { Metadata } from 'next';
import { ORG_NAME, SITE_URL, TAGLINE } from '@/data/site';

export function createDefaultMetadata(overrides?: Partial<Metadata>): Metadata {
  const base: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
      template: `${ORG_NAME} – %s`,
      default: `${ORG_NAME} – ${TAGLINE}`
    },
    description: 'Pay‑Per‑Lead B2B demand generation. Exclusive, qualified pipeline for enterprise brands.',
    openGraph: {
      title: `${ORG_NAME}`,
      description: 'Pay‑Per‑Lead B2B demand generation. Exclusive, qualified pipeline for enterprise brands.',
      url: SITE_URL,
      siteName: ORG_NAME,
      type: 'website'
    },
    robots: {
      index: true,
      follow: true
    }
  };
  return { ...base, ...overrides };
}


