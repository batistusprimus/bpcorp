import Container from '@/components/Container';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Stat from '@/components/Stat';
import { STATS } from '@/data/stats';
import { VERTICALS } from '@/data/verticals';
import { CASES } from '@/data/cases';
import Link from 'next/link';

export default function HomePage() {
  return (
    <Container>
      <section className="py-12">
        <h1 className="text-3xl font-bold mb-2">Compounding B2B demand generation.</h1>
        <p className="mb-4 text-gray-700">We plan, run and scale programs that create pipeline and lower CAC.</p>
        <Link href="/contact" className="inline-block border border-black bg-black text-white px-4 py-2">Talk to an expert</Link>
      </section>

      <Section title="What we do" description="Acquisition strategy, campaign operations, and data foundations for high‑intent B2B growth." />

      <Section title="Key Stats">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {STATS.slice(0, 6).map((s) => (
            <Stat key={s.label} label={s.label} value={s.value} />
          ))}
        </div>
      </Section>

      <Section title="Services Overview">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['Pay Per Lead', 'Incubator Program', 'Masterclass'].map((service) => (
            <Card key={service}>
              <div className="font-medium mb-2">{service}</div>
              <Link href="/services" className="underline">Learn more</Link>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Verticals Overview">
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {VERTICALS.map((v) => (
            <li key={v.slug} className="border border-gray-300 p-3">
              <Link href={`/verticals/${v.slug}`} className="font-medium">{v.title}</Link>
              <p className="text-sm text-gray-700">{v.blurb}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Selected cases">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {CASES.slice(0, 3).map((c) => (
            <Card key={c.id}>
              <div className="font-medium mb-2">{c.title}</div>
              <p className="text-sm text-gray-700 mb-2">{c.summary}</p>
              <Link href="/cases" className="underline">See all</Link>
            </Card>
          ))}
        </div>
      </Section>
    </Container>
  );
}


