export type Market = { slug: string; title: string; blurb: string; url?: string };

export const MARKETS: Market[] = [
  {
    slug: 'climate-insurance',
    title: 'Climate Insurance',
    blurb:
      'Location‑specific weather risk assessments for Texas operations using verified NOAA and FEMA data sources.',
    url: 'https://www.climaterisknow.com/'
  },
  {
    slug: 'property-trader-training',
    title: 'Property Trader Training',
    blurb:
      'Evaluate your potential as a property trader and get a free personalized guide and assessment in 5 minutes.',
    url: 'https://www.flipimmo.fr/'
  },
  {
    slug: 'b2b-loans',
    title: 'B2B Loans',
    blurb:
      'Weekly delivery of qualified financing requests for fintechs, brokers and lenders on a pay‑per‑lead model.',
    url: 'https://finance.bpcorp.eu/'
  }
];



