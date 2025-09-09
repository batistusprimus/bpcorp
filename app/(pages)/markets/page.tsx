import Container from '@/components/Container';
import { MARKETS } from '@/data/markets';
import Link from 'next/link';

export const metadata = {
  title: 'Markets'
};

export default function MarketsIndexPage() {
  return (
    <Container>
      <section className="py-12">
        <h1 className="text-3xl font-bold mb-4">Markets</h1>
        <p className="mb-6 text-gray-700">Our lines of services operated on a performance basis.</p>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {MARKETS.map((m) => (
            <li key={m.slug} className="border border-gray-300 p-3">
              <div className="flex items-center justify-between gap-2">
                <Link href={{ pathname: '/markets/[slug]', query: { slug: m.slug } }} className="font-medium">{m.title}</Link>
                {m.url && (
                  <a
                    href={m.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Visit site ↗
                  </a>
                )}
              </div>
              <p className="text-sm text-gray-700">{m.blurb}</p>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
}



