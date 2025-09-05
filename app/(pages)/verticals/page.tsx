import Container from '@/components/Container';
import { VERTICALS } from '@/data/verticals';
import Link from 'next/link';

export const metadata = {
  title: 'Verticals'
};

export default function VerticalsIndexPage() {
  return (
    <Container>
      <section className="py-12">
        <h1 className="text-3xl font-bold mb-4">Verticals</h1>
        <p className="mb-6 text-gray-700">Our lines of services operated on a performance basis.</p>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {VERTICALS.map((v) => (
            <li key={v.slug} className="border border-gray-300 p-3">
              <div className="flex items-center justify-between gap-2">
                <Link href={`/verticals/${v.slug}`} className="font-medium">{v.title}</Link>
                {v.url && (
                  <a
                    href={v.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Visit site ↗
                  </a>
                )}
              </div>
              <p className="text-sm text-gray-700">{v.blurb}</p>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
}


