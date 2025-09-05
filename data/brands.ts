export type Brand = {
  slug: string;
  name: string;
  blurb: string;
  url: string;
};

export const BRANDS: Brand[] = [
  {
    slug: 'climate-risk-now',
    name: 'Climate Risk Now',
    blurb:
      'Weather Risk Intelligence for Texas operations. Analyses based on NOAA, FEMA, NHC data.',
    url: 'https://www.climaterisknow.com/'
  },
  {
    slug: 'flipimmo',
    name: 'Flipimmo',
    blurb:
      'Real‑estate brand focused on acquisition and resale. Positioned for qualified lead generation.',
    url: 'https://www.flipimmo.fr/'
  }
];


