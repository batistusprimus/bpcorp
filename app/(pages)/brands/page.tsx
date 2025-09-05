import Container from '@/components/Container';
import { BRANDS } from '@/data/brands';

export const metadata = {
  title: 'Brands'
};

export default function BrandsPage() {
  return (
    <Container>
      <section className="py-12">
        <h1 className="text-3xl font-bold mb-4">Brands</h1>
        <p className="mb-6 text-gray-700">Active brands operated by BPC Group.</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {BRANDS.map((b) => (
            <li key={b.slug} className="border border-gray-300 p-4 bg-white">
              <div className="flex items-center justify-between gap-2 mb-1">
                <h2 className="text-lg font-semibold">{b.name}</h2>
                <a
                  href={b.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline"
                >
                  Visit site ↗
                </a>
              </div>
              <p className="text-sm text-gray-700">{b.blurb}</p>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
}


