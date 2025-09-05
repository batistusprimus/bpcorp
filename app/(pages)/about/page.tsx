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
        <p className="mb-3 text-gray-700">We help B2B teams build repeatable demand engines across paid and outbound.</p>
        <p className="mb-3 text-gray-700">Our model blends senior strategy with rigorous execution and transparent measurement.</p>
        <p className="mb-6 text-gray-700">Engagements are lean, fast to start, and focused on business outcomes.</p>

        <Section title="Operating regions">
          <ul className="list-disc pl-6">
            <li>European Union</li>
            <li>North America</li>
          </ul>
        </Section>

        <Section title="What we don&apos;t do">
          <ul className="list-disc pl-6">
            <li>No low-intent campaigns</li>
            <li>No unrealistic promises</li>
            <li>No non-compliant data</li>
          </ul>
        </Section>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </section>
    </Container>
  );
}


