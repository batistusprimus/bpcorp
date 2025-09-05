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
              Visiter le site ↗
            </a>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-bold mb-2">Market Reality</h2>
            <p className="text-gray-700">Placeholder section.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">Our Role</h2>
            <p className="text-gray-700">Placeholder section.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">Data Inputs</h2>
            <p className="text-gray-700">Placeholder section.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">Delivery Model</h2>
            <p className="text-gray-700">Placeholder section.</p>
          </div>
        </div>
      </section>
    </Container>
  );
}


