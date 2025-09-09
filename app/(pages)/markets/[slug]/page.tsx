import Container from '@/components/Container';
import { MARKETS } from '@/data/markets';
import { notFound } from 'next/navigation';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return MARKETS.map((m) => ({ slug: m.slug }));
}

export default function MarketDetailPage({ params }: Props) {
  const market = MARKETS.find((m) => m.slug === params.slug);
  if (!market) return notFound();
  const CONTENT_BY_SLUG: Record<string, {
    marketReality: string;
    ourRole: string;
    dataInputs: string;
    deliveryModel: string;
  }> = {
    'climate-insurance': {
      marketReality:
        'Texas operations face distinct regional weather risks: hurricanes on the Gulf Coast, freeze events in North Texas, and drought/flash flooding in Central Texas.',
      ourRole:
        'We deliver location‑specific weather risk intelligence built on NOAA, FEMA and industry datasets to inform insurance and operational decisions.',
      dataInputs:
        'NOAA historical weather patterns (25+ years), NHC hurricane tracks, FEMA flood zones, EIA infrastructure and industry classifications.',
      deliveryModel:
        'Assessment request and reporting with documented methodology and source references. Ongoing monitoring optional.'
    },
    'property-trader-training': {
      marketReality:
        'Becoming a property trader requires capital planning, risk control and a structured process across acquisition, renovation and resale.',
      ourRole:
        'We provide a 5‑minute evaluation to assess your potential and a free guide to structure your first projects with realistic guardrails.',
      dataInputs:
        'Capital range, availability, prior experience, objectives and risk tolerance used to generate a personalized outline.',
      deliveryModel:
        'Immediate download of a neutral, no‑spam guide plus a concise plan of next steps. Opt‑out at any time.'
    },
    'b2b-loans': {
      marketReality:
        'Financing demand from SMEs and mid‑market companies is steady but fragmented; inbound is spiky and outreach is costly to scale.',
      ourRole:
        'We deliver qualified financing requests weekly so you can select volume and focus on closing. Pay‑per‑lead, transparent QA.',
      dataInputs:
        'Company profile, decision‑maker with verified email and direct phone, budget/ticket range, need description, geography.',
      deliveryModel:
        'Weekly batches with delivery SLAs and a clear rejection policy below quality thresholds. Scale up or pause anytime.'
    }
  };
  const content = CONTENT_BY_SLUG[market.slug] ?? {
    marketReality: 'High‑level overview of demand dynamics in this market.',
    ourRole: 'How we operate and where we create value for your team.',
    dataInputs: 'What we verify and the signals we include in delivery.',
    deliveryModel: 'Cadence, SLAs and quality/validation metrics for delivery.'
  };
  return (
    <Container>
      <section className="py-12">
        <h1 className="text-3xl font-bold mb-2">{market.title}</h1>
        <p className="mb-6 text-gray-700">{market.blurb}</p>
        {market.url && (
          <div className="mb-8">
            <a
              href={market.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-black text-white text-sm font-medium hover:opacity-90"
            >
              Visit site ↗
            </a>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-bold mb-2">Market Reality</h2>
            <p className="text-gray-700">{content.marketReality}</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">Our Role</h2>
            <p className="text-gray-700">{content.ourRole}</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">Data Inputs</h2>
            <p className="text-gray-700">{content.dataInputs}</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">Delivery Model</h2>
            <p className="text-gray-700">{content.deliveryModel}</p>
          </div>
        </div>
      </section>
    </Container>
  );
}



