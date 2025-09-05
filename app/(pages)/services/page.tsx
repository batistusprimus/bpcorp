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
          </ul>
        </Section>

        <Section title="Incubator Program">
          <ul className="list-disc pl-6 text-gray-700">
            <li>Who it&apos;s for: founders/heads of growth validating channels.</li>
            <li>Deliverables: hypotheses, experiments, channel playbooks.</li>
            <li>Constraints: 6–8 weeks sprints, weekly working sessions.</li>
          </ul>
        </Section>

        <Section title="Masterclass">
          <ul className="list-disc pl-6 text-gray-700">
            <li>Who it&apos;s for: in‑house teams upskilling on modern demand gen.</li>
            <li>Deliverables: frameworks, templates, live sessions, Q&A.</li>
            <li>Constraints: tailored to your stack and targets.</li>
          </ul>
        </Section>
      </section>
    </Container>
  );
}


