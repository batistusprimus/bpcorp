import type { Metadata } from 'next';
import { ORG_NAME, SITE_URL, TAGLINE } from '@/data/site';

export function createDefaultMetadata(overrides?: Partial<Metadata>): Metadata {
  const base: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
      template: `${ORG_NAME} – %s`,
      default: `${ORG_NAME} – ${TAGLINE}`
    },
    description: 'B2B demand generation for SaaS, cybersecurity, and industrial brands.',
    openGraph: {
      title: `${ORG_NAME}`,
      description: 'B2B demand generation for SaaS, cybersecurity, and industrial brands.',
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


