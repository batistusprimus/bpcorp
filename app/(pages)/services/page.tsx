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
          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="font-medium mb-2">Definition</h3>
              <ul className="list-disc pl-6">
                <li>Validated lead: verified email + direct phone, ICP fit, explicit interest.</li>
                <li>Scope set upfront: ICP, geos, volume range, rejection policy.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-2">Acquisition & Targeting</h3>
              <ul className="list-disc pl-6">
                <li>Outbound: cold email, LinkedIn, calling with niche messaging.</li>
                <li>Inbound: paid social/search, SEO, dedicated landing funnels.</li>
                <li>Data: proprietary enrichment, verification, de‑duplication.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-2">Quality Assurance</h3>
              <ul className="list-disc pl-6">
                <li>Validation rules: identity, contactability, ICP, declared need/interest.</li>
                <li>Transparent replacements: clear SLA below quality thresholds.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-2">Delivery & Reporting</h3>
              <ul className="list-disc pl-6">
                <li>Cadence: weekly batches; 24h–7 days typical window.</li>
                <li>Format: CSV export or direct CRM push (fields mapped).</li>
                <li>Reporting: weekly dashboards with volume, validation, outcomes.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-2">Scale</h3>
              <ul className="list-disc pl-6">
                <li>From 25 to 500+ leads/month depending on market capacity.</li>
                <li>Exclusivity: limited slots per market to preserve performance.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-2">Compliance</h3>
              <ul className="list-disc pl-6">
                <li>GDPR/CCPA‑aligned processes and opt‑out management.</li>
                <li>Data retention and deletion policies applied by default.</li>
              </ul>
            </div>
          </div>
        </Section>
      </section>
    </Container>
  );
}


