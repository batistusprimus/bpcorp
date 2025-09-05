import Container from '@/components/Container';
import { VERTICALS } from '@/data/verticals';
import { notFound } from 'next/navigation';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return VERTICALS.map((v) => ({ slug: v.slug }));
}

export default function VerticalDetailPage({ params }: Props) {
  const vertical = VERTICALS.find((v) => v.slug === params.slug);
  if (!vertical) return notFound();
  const CONTENT_BY_SLUG: Record<string, {
    marketReality: string;
    ourRole: string;
    dataInputs: string;
    deliveryModel: string;
  }> = {
    payperleads: {
      marketReality:
        'Most B2B teams struggle to keep a predictable stream of high‑intent demand. Paid search caps out, forms are noisy, and outbound is heavy to scale.',
      ourRole:
        'We operate vertical brands that capture intent daily and deliver exclusive, verified leads aligned to your ICP. You select the lots you want and pay per lead.',
      dataInputs:
        'Work email and direct phone verified, LinkedIn when available, firmographics, declared interest and context. De‑duplicated and quality‑scored.',
      deliveryModel:
        'Weekly or monthly delivery windows (7–30 days). 98% delivery rate, 95% validation rate. Exclusive slots per vertical; start, scale or pause anytime.'
    },
    finance: {
      marketReality:
        'Lenders and brokers need a steady flow of qualified financing requests. Inbound is spiky and quality varies; outreach is costly to scale.',
      ourRole:
        'We deliver financing requests with budget and need stated, decision‑makers identified, and contacts verified so your team can focus on closing.',
      dataInputs:
        'Company size and sector, ticket range, financing need description, geography, decision maker with verified email and phone.',
      deliveryModel:
        'Pay per delivered request. Weekly batches with transparent reporting. Optional booking support. Limited exclusivity slots by segment.'
    },
    insurtech: {
      marketReality:
        'Commercial insurance buying is fragmented and time‑sensitive. Compliance and timing matter; generic lists underperform.',
      ourRole:
        'We generate exclusive leads for insurers and brokers across leasing, commercial insurance and optimization use cases, aligned to your ICP.',
      dataInputs:
        'Firmographics (industry, headcount), coverage need and renewal window, geography, verified contact (email + direct phone).',
      deliveryModel:
        'Delivered in weekly or monthly batches with QA rules and a clear rejection policy under quality thresholds. Typical window: 7–30 days.'
    }
  };
  const content = CONTENT_BY_SLUG[vertical.slug] ?? {
    marketReality: 'High‑level overview of demand dynamics in this vertical.',
    ourRole: 'How we operate and where we create value for your team.',
    dataInputs: 'What we verify and the signals we include in delivery.',
    deliveryModel: 'Cadence, SLAs and quality/validation metrics for delivery.'
  };
  return (
    <Container>
      <section className="py-12">
        <h1 className="text-3xl font-bold mb-2">{vertical.title}</h1>
        <p className="mb-6 text-gray-700">{vertical.blurb}</p>
        {vertical.url && (
          <div className="mb-8">
            <a
              href={vertical.url}
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


