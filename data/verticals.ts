export type Vertical = { slug: string; title: string; blurb: string; url?: string };

export const VERTICALS: Vertical[] = [
  {
    slug: 'payperleads',
    title: 'Pay Per Leads',
    blurb:
      'Qualified B2B leads delivered on a performance basis. You select, you pay per lead.',
    url: 'https://payperleads.bpcorp.eu/'
  },
  {
    slug: 'finance',
    title: 'Finance',
    blurb:
      'A steady flow of qualified financing requests for fintechs, brokers and lenders.',
    url: 'https://finance.bpcorp.eu/'
  },
  {
    slug: 'insurtech',
    title: 'Insurtech',
    blurb:
      'Qualified B2B leads for insurers and brokers: leasing, commercial insurance, optimization.',
    url: 'https://insurtech.bpcorp.eu/'
  }
];


