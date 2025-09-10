import Container from '@/components/Container';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Stat from '@/components/Stat';
import { STATS } from '@/data/stats';
import { MARKETS } from '@/data/markets';
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

      <Section title="What we do" description="We operate a Pay‑Per‑Lead model for B2B markets.">
        <p className="text-gray-700 mb-3">
          You only pay for validated leads: verified email and direct phone, ICP fit, explicit interest. No retainers. No long contracts. Performance only.
        </p>
        <p className="text-gray-700 mb-3">
          Precision targeting across outbound (cold email, LinkedIn, calling), inbound (ads, SEO) and proprietary data systems. Transparent reporting, CRM‑ready delivery.
        </p>
        <p className="text-gray-700">
          Scale from 25 to 500+ leads per month depending on the market. Typical delivery window: 24h–7 days.
        </p>
      </Section>

      <Section title="Key Stats">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {STATS.map((s) => (
            <Stat key={s.label} label={s.label} value={s.value} />
          ))}
        </div>
      </Section>

      <Section title="Track Record">
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
      </Section>

      <Section title="Why us" description="Predictable, exclusive and measurable demand you can scale.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <div className="font-medium mb-1">Exclusive, verified data</div>
            <p className="text-sm text-gray-700">Email, direct phone and firmographic checks. No recycled lists.</p>
          </Card>
          <Card>
            <div className="font-medium mb-1">Pay only for delivery</div>
            <p className="text-sm text-gray-700">Zero setup. No long‑term commitment. Scale up or pause anytime.</p>
          </Card>
          <Card>
            <div className="font-medium mb-1">Expert‑run operations</div>
            <p className="text-sm text-gray-700">Sector playbooks with transparent reporting and weekly cadence.</p>
          </Card>
        </div>
      </Section>

      <Section title="Pay Per Lead">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <div className="font-medium mb-2">Who it’s for</div>
            <p className="text-sm text-gray-700">B2B teams needing scalable, qualified pipeline and booked meetings.</p>
          </Card>
          <Card>
            <div className="font-medium mb-2">What you get</div>
            <p className="text-sm text-gray-700">Validated leads (email + phone), ICP fit and explicit interest. Weekly reporting. CRM‑ready delivery.</p>
          </Card>
          <Card>
            <div className="font-medium mb-2">How it works</div>
            <p className="text-sm text-gray-700">Outbound + inbound mix, proprietary data systems, transparent QA. No retainers. Pay per delivered lead.</p>
          </Card>
          <Card>
            <div className="font-medium mb-2">Scale & cadence</div>
            <p className="text-sm text-gray-700">From 25 to 500+ leads/month. Delivery window 24h–7 days with clear SLAs.</p>
          </Card>
        </div>
        <div className="mt-4 flex items-center gap-4">
          <Link href="/services" className="underline">Learn more about Pay Per Lead</Link>
          <Link href="/contact" className="inline-block border border-black bg-black text-white px-4 py-2">Talk to an expert</Link>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Key details</h3>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Lead definition: verified email + direct phone, ICP fit, explicit interest.</li>
            <li>QA & replacements: transparent rejection policy under quality thresholds.</li>
            <li>Delivery: CSV or direct CRM push; weekly batches with status codes.</li>
            <li>Exclusivity: limited slots per market; predictable capacity planning.</li>
            <li>Compliance: GDPR/CCPA‑aligned data collection and processing.</li>
          </ul>
        </div>
      </Section>

      <Section title="Markets Overview">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {MARKETS.map((v) => (
            <Card key={v.slug}>
              <div className="flex items-center justify-between gap-2 mb-1">
                <Link href={{ pathname: '/markets/[slug]', query: { slug: v.slug } }} className="font-medium">{v.title}</Link>
                {v.url && (
                  <a href={v.url} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">Visit ↗</a>
                )}
              </div>
              <p className="text-sm text-gray-700">{v.blurb}</p>
            </Card>
          ))}
        </div>
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

      <Section title="Our vision">
        <ul className="list-disc pl-6 text-gray-700">
          <li>The global reference for Pay‑Per‑Lead in B2B markets.</li>
          <li>10+ specialized brands, each compounding performance in its market.</li>
          <li>Thousands of qualified leads delivered every month worldwide.</li>
        </ul>
      </Section>
    </Container>
  );
}


