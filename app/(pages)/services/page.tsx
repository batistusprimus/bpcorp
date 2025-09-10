import Container from '@/components/Container';
import Section from '@/components/Section';

export const metadata = {
  title: 'Services'
};

export default function ServicesPage() {
  return (
    <Container>
      <section className="py-12">
        <h1 className="text-3xl font-bold mb-4">Services</h1>

        <Section title="Pay Per Lead">
          <ul className="list-disc pl-6 text-gray-700">
            <li>Who it&apos;s for: teams needing scalable, qualified meetings.</li>
            <li>Deliverables: booked meetings, lead lists, weekly reporting.</li>
            <li>Constraints: ICP/markets agreed, compliance by default.</li>
            <li>Validation: verified email + direct phone, ICP fit, explicit interest.</li>
            <li>How it works: outbound + inbound mix, proprietary data systems, transparent QA.</li>
            <li>Scale & cadence: 25 to 500+ leads/month, delivery window 24h–7 days.</li>
          </ul>
        </Section>
      </section>
    </Container>
  );
}


