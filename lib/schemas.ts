import { ORG_NAME, SITE_URL, CONTACT_EMAIL } from '@/data/site';

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: ORG_NAME,
    url: SITE_URL,
    email: CONTACT_EMAIL
  };
}


