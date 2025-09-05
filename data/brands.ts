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
      'Weather Risk Intelligence pour les opérations au Texas. Analyses basées sur données NOAA, FEMA, NHC.',
    url: 'https://www.climaterisknow.com/'
  },
  {
    slug: 'flipimmo',
    name: 'Flipimmo',
    blurb:
      'Marque immobilière ciblant l’acquisition et la revente. Positionnée pour la génération de leads qualifiés.',
    url: 'https://www.flipimmo.fr/'
  }
];


