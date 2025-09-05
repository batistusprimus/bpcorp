import Container from '@/components/Container';
import { CASES } from '@/data/cases';
import Link from 'next/link';

export const metadata = {
  title: 'Cases'
};

export default function CasesPage() {
  return (
    <Container>
      <section className="py-12">
        <h1 className="text-3xl font-bold mb-4">Cases</h1>
        <p className="mb-6 text-gray-700">A handful of anonymized examples showing pipeline impact and learning velocity.</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {CASES.map((c) => (
            <li key={c.id} className="border border-gray-300 p-3">
              <div className="font-medium mb-1">{c.title}</div>
              <ul className="list-disc pl-6 text-sm text-gray-700">
                <li>Key point placeholder</li>
                <li>Key point placeholder</li>
                <li>Key point placeholder</li>
              </ul>
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


