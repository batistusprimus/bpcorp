import Container from '@/components/Container';
import { CASES } from '@/data/cases';
import { MARKETS } from '@/data/markets';
import Card from '@/components/Card';
import Link from 'next/link';

export const metadata = {
  title: 'Cases'
};

export default function CasesPage() {
  return (
    <Container>
      <section className="py-12">
        <h1 className="text-3xl font-bold mb-4">Cases</h1>
        <p className="mb-6 text-gray-700">Selected anonymized examples showing pipeline impact and learning velocity.</p>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">Track Record</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <div className="font-medium mb-1">Trusted by B2B companies</div>
              <p className="text-sm text-gray-700">Across SaaS, finance, manufacturing and more in EMEA & North America.</p>
            </Card>
            <Card>
              <div className="font-medium mb-1">Sales teams we build and support</div>
              <p className="text-sm text-gray-700">End‑to‑end motions: SDR, inbound, outbound and PPL execution.</p>
            </Card>
            <Card>
              <div className="font-medium mb-1">Operating in growth‑led demand</div>
              <p className="text-sm text-gray-700">Compounding learnings and proprietary data assets over the years.</p>
            </Card>
          </div>
        </section>

        

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">Markets</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {MARKETS.map((m) => (
              <Card key={m.slug}>
                <div className="flex items-center justify-between gap-2 mb-1">
                  <Link href={{ pathname: '/markets/[slug]', query: { slug: m.slug } }} className="font-medium">{m.title}</Link>
                  {m.url && (
                    <a href={m.url} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">Visit ↗</a>
                  )}
                </div>
                <p className="text-sm text-gray-700">{m.blurb}</p>
              </Card>
            ))}
          </div>
        </section>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {CASES.map((c) => (
            <li key={c.id} className="border border-gray-300 p-3">
              <div className="font-medium mb-1">{c.title}</div>
              <p className="text-sm text-gray-700">{c.summary}</p>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
}


