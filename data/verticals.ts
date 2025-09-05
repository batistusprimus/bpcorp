export type Vertical = { slug: string; title: string; blurb: string; url?: string };

export const VERTICALS: Vertical[] = [
  {
    slug: 'payperleads',
    title: 'Pay Per Leads',
    blurb:
      'Leads B2B qualifiés, vérifiés, livrés à la performance. Vous sélectionnez, vous payez à la lead.',
    url: 'https://payperleads.bpcorp.eu/'
  },
  {
    slug: 'finance',
    title: 'Finance',
    blurb:
      "Flux continu de demandes de financement qualifiées pour fintechs, courtiers et sociétés de financement.",
    url: 'https://finance.bpcorp.eu/'
  },
  {
    slug: 'insurtech',
    title: 'Insurtech',
    blurb:
      'Leads B2B qualifiés pour assureurs et courtiers : crédit-bail, assurance pro, optimisation.',
    url: 'https://insurtech.bpcorp.eu/'
  }
];


