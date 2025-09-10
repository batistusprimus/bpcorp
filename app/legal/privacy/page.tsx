import Container from '@/components/Container';

export const metadata = { title: 'Privacy Policy – BPC Group' };

export default function PrivacyPage() {
  return (
    <Container>
      <section className="py-12">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy – BPC Group</h1>
        <p className="text-sm text-gray-500 mb-8">
          <strong>Effective date:</strong> September 10, 2025
          <br />
          <strong>Last updated:</strong> September 10, 2025
        </p>

        <h2 className="text-xl font-bold mb-2">1. Introduction</h2>
        <p className="mb-4 text-gray-700">
          This Privacy Policy explains how BPC Group (&quot;we,&quot; &quot;our,&quot; &quot;us&quot;) collects, uses, and protects
          personal data obtained through our website (bpcorp.eu) and related services.
        </p>
        <p className="mb-8 text-gray-700">
          We are committed to respecting your privacy and ensuring compliance with applicable data
          protection laws, including the General Data Protection Regulation (GDPR) in the EU and other
          international privacy regulations.
        </p>

        <h2 className="text-xl font-bold mb-2">2. Data We Collect</h2>
        <p className="mb-4 text-gray-700">We may collect the following types of information:</p>
        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li>
            <strong>Business Contact Information</strong>: Name, email address, phone number, company name, job title.
          </li>
          <li>
            <strong>Lead Submission Data</strong>: Information voluntarily provided through contact forms, lead generation
            campaigns, or downloadable content.
          </li>
          <li>
            <strong>Technical Data</strong>: IP address, browser type, device information, and usage patterns (via cookies and
            analytics).
          </li>
          <li>
            <strong>Communication Records</strong>: Emails, messages, and other interactions with our team.
          </li>
        </ul>
        <p className="mb-8 text-gray-700">
          We do not knowingly collect data from consumers or individuals outside a business/professional context.
        </p>

        <h2 className="text-xl font-bold mb-2">3. How We Use Your Data</h2>
        <p className="mb-4 text-gray-700">We process personal data only for legitimate business purposes, including:</p>
        <ul className="list-disc pl-6 text-gray-700 mb-8">
          <li>To provide and improve our services (including Pay Per Lead solutions).</li>
          <li>To communicate with you regarding inquiries, offers, and business opportunities.</li>
          <li>To personalize website content and marketing campaigns.</li>
          <li>To comply with legal and regulatory requirements.</li>
        </ul>
        <p className="mb-8 text-gray-700">We do not sell personal data to third parties.</p>

        <h2 className="text-xl font-bold mb-2">4. Legal Basis for Processing (GDPR)</h2>
        <p className="mb-4 text-gray-700">Under the GDPR, we rely on the following legal bases:</p>
        <ul className="list-disc pl-6 text-gray-700 mb-8">
          <li>
            <strong>Contractual necessity</strong> – when data is required to perform a contract or provide services.
          </li>
          <li>
            <strong>Legitimate interest</strong> – for marketing, business development, and fraud prevention.
          </li>
          <li>
            <strong>Consent</strong> – when you voluntarily submit data via forms or opt-in communications.
          </li>
        </ul>

        <h2 className="text-xl font-bold mb-2">5. Data Sharing and Transfers</h2>
        <p className="mb-4 text-gray-700">We may share personal data with:</p>
        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li>
            <strong>Service providers</strong> (hosting, analytics, CRM, email providers) under strict confidentiality agreements.
          </li>
          <li>
            <strong>Business partners or clients</strong> where necessary to deliver our lead generation services.
          </li>
          <li>
            <strong>Legal authorities</strong> when required by law.
          </li>
        </ul>
        <p className="mb-8 text-gray-700">
          If data is transferred outside the European Economic Area (EEA), we ensure compliance through standard
          contractual clauses or equivalent safeguards.
        </p>

        <h2 className="text-xl font-bold mb-2">6. Data Retention</h2>
        <p className="mb-4 text-gray-700">We retain personal data only as long as necessary for business purposes or legal compliance. Typically:</p>
        <ul className="list-disc pl-6 text-gray-700 mb-8">
          <li>Lead generation data: up to <strong>24 months</strong>.</li>
          <li>Client records: up to <strong>7 years</strong> (for contractual and tax purposes).</li>
          <li>Analytics and cookies: as defined in our Cookie Policy.</li>
        </ul>

        <h2 className="text-xl font-bold mb-2">7. Data Security</h2>
        <p className="mb-8 text-gray-700">
          We implement appropriate technical and organizational measures to protect personal data against unauthorized
          access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
        </p>

        <h2 className="text-xl font-bold mb-2">8. Your Rights (GDPR &amp; Applicable Laws)</h2>
        <p className="mb-4 text-gray-700">Depending on your jurisdiction, you may have the right to:</p>
        <ul className="list-disc pl-6 text-gray-700 mb-8">
          <li>Access and obtain a copy of your personal data.</li>
          <li>Correct or update inaccurate data.</li>
          <li>Request deletion (&quot;right to be forgotten&quot;).</li>
          <li>Object to or restrict processing.</li>
          <li>Withdraw consent at any time.</li>
          <li>Data portability (receive your data in a structured format).</li>
        </ul>
        <p className="mb-8 text-gray-700">
          To exercise these rights, contact us at <a className="text-blue-600 underline" href="mailto:info@bpcorp.eu">info@bpcorp.eu</a>.
        </p>

        <h2 className="text-xl font-bold mb-2">9. Cookies &amp; Tracking</h2>
        <p className="mb-4 text-gray-700">We use cookies and similar technologies for:</p>
        <ul className="list-disc pl-6 text-gray-700 mb-8">
          <li>Website functionality.</li>
          <li>Analytics and performance monitoring.</li>
          <li>Marketing and retargeting campaigns.</li>
        </ul>
        <p className="mb-8 text-gray-700">Details are provided in our Cookie Policy.</p>

        <h2 className="text-xl font-bold mb-2">10. Children’s Privacy</h2>
        <p className="mb-8 text-gray-700">
          Our website and services are intended for business professionals. We do not knowingly collect personal data from
          individuals under the age of 18.
        </p>

        <h2 className="text-xl font-bold mb-2">11. Changes to This Policy</h2>
        <p className="mb-8 text-gray-700">
          We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised &quot;Last
          updated&quot; date.
        </p>

        <h2 className="text-xl font-bold mb-2">12. Contact Information</h2>
        <p className="mb-2 text-gray-700"><strong>BPC Group</strong></p>
        <p className="mb-1 text-gray-700">
          Email: <a className="text-blue-600 underline" href="mailto:info@bpcorp.eu">info@bpcorp.eu</a>
        </p>
        <p className="text-gray-700">
          Website: <a className="text-blue-600 underline" href="https://bpcorp.eu">https://bpcorp.eu</a>
        </p>
      </section>
    </Container>
  );
}


