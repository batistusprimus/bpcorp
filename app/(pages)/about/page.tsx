import Container from '@/components/Container';
import Section from '@/components/Section';
import { organizationJsonLd } from '@/lib/schemas';

export const metadata = {
  title: 'About'
};

export default function AboutPage() {
  const jsonLd = organizationJsonLd();
  return (
    <Container>
      <section className="py-12">
        <h1 className="text-3xl font-bold mb-4">About</h1>
        <Section title="Who we are">
          <ul className="list-disc pl-6">
            <li>BPC Group.</li>
            <li>Born in Europe, active worldwide.</li>
            <li>Performance-based B2B lead generation. 100% Pay‑Per‑Lead model.</li>
          </ul>
        </Section>

        <Section title="Our mission">
          <ul className="list-disc pl-6">
            <li>Reshape how companies acquire clients.</li>
            <li>Eliminate retainers, guesswork, and wasted budgets.</li>
            <li>Deliver qualified, verified B2B leads on a pay‑per‑lead basis.</li>
          </ul>
        </Section>

        <Section title="What we do">
          <ul className="list-disc pl-6">
            <li>Pay‑Per‑Lead: pay only for validated leads (email + phone, ICP fit, explicit interest).</li>
            <li>Precision targeting: outbound (cold email, LinkedIn, cold calling), inbound (ads, SEO), proprietary data systems.</li>
            <li>Scalability: from 25 up to 5,000 leads per month, adapted to each market.</li>
          </ul>
        </Section>

        <Section title="Our difference">
          <ul className="list-disc pl-6">
            <li>No retainers. No long contracts. Pay for performance only.</li>
            <li>Verified leads, not databases: enriched, validated, qualified.</li>
            <li>Niche verticals: specialized brands to dominate specific markets (finance, tax relief, business insurance, climate intelligence, etc.).</li>
            <li>Speed: leads delivered within days, not months.</li>
          </ul>
        </Section>

        <Section title="Our values">
          <ul className="list-disc pl-6">
            <li>Performance: results first, no excuses.</li>
            <li>Clarity: transparent pricing and reporting.</li>
            <li>Excellence: high‑quality, sales‑ready leads.</li>
            <li>Partnership: we grow when our clients grow.</li>
          </ul>
        </Section>

        <Section title="Our clients">
          <ul className="list-disc pl-6">
            <li>Mid‑market and enterprise B2B companies with €500k–€50M+ in monthly revenue.</li>
            <li>Verticals: financial services, fintech, business loans, tax advisory, insurance, technology, and other expert‑driven B2B markets.</li>
            <li>Profiles: CEOs, CMOs, Heads of Growth, Sales Directors seeking consistent deal flow.</li>
          </ul>
        </Section>

        <Section title="Our vision">
          <ul className="list-disc pl-6">
            <li>The global reference for Pay‑Per‑Lead in B2B markets.</li>
            <li>10+ vertical brands, each generating €50k+ MRR.</li>
            <li>Thousands of qualified leads delivered every month worldwide.</li>
          </ul>
        </Section>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </section>
    </Container>
  );
}


