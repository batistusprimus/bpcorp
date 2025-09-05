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
        <p className="mb-6 text-gray-700">Short placeholder paragraph describing the vertical approach.</p>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {VERTICALS.map((v) => (
            <li key={v.slug} className="border border-gray-300 p-3">
              <Link href={`/verticals/${v.slug}`} className="font-medium">{v.title}</Link>
              <p className="text-sm text-gray-700">{v.blurb}</p>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
}


