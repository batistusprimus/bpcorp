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
              <div className="text-2xl font-bold">200+</div>
              <div className="text-sm text-gray-700">B2B clients</div>
            </Card>
            <Card>
              <div className="text-2xl font-bold">150+</div>
              <div className="text-sm text-gray-700">Sales teams built</div>
            </Card>
            <Card>
              <div className="text-2xl font-bold">5</div>
              <div className="text-sm text-gray-700">Years in growth</div>
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
              <div className="mt-2">
                <Link href="/contact" className="underline">Book an intro</Link>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
}


