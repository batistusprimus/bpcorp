import Container from '@/components/Container';

export const metadata = { title: 'Terms of Use – BPC Group' };

export default function TermsPage() {
  return (
    <Container>
      <section className="py-12">
        <h1 className="text-3xl font-bold mb-4">Terms of Use – BPC Group</h1>

        <p className="text-gray-600 mb-2">Effective date: September 10, 2025</p>
        <p className="text-gray-600 mb-6">Last updated: September 10, 2025</p>

        <h2 className="text-xl font-bold mb-2">1. Acceptance of Terms</h2>
        <p className="mb-4 text-gray-700">
          By accessing and using this website (bpcorp.eu), you agree to be bound by these Terms of Use and all
          applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using
          or accessing this site.
        </p>

        <h2 className="text-xl font-bold mb-2">2. Purpose of the Website</h2>
        <p className="mb-4 text-gray-700">
          The website is operated by BPC Group ("we," "our," "us"). Its purpose is to provide information about our
          services, including lead generation, Pay-Per-Lead solutions, and related B2B offerings.
        </p>
        <p className="mb-4 text-gray-700">
          The information provided is for general business purposes only and does not constitute professional advice
          unless expressly stated.
        </p>

        <h2 className="text-xl font-bold mb-2">3. Eligibility</h2>
        <p className="mb-4 text-gray-700">
          This website is intended for business use only. By using this site, you confirm that you are acting in a
          professional or business capacity and not as a consumer.
        </p>

        <h2 className="text-xl font-bold mb-2">4. Intellectual Property</h2>
        <p className="mb-4 text-gray-700">
          All content on this website (including but not limited to text, graphics, logos, trademarks, and software) is
          the property of BPC Group or its licensors and is protected by applicable intellectual property laws.
        </p>
        <p className="mb-4 text-gray-700">
          You may not copy, reproduce, modify, distribute, or use any content without prior written consent from BPC
          Group.
        </p>

        <h2 className="text-xl font-bold mb-2">5. Use of the Website</h2>
        <p className="mb-2 text-gray-700">You agree not to:</p>
        <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-1">
          <li>Use the site in any way that may impair its availability or accessibility.</li>
          <li>Engage in data scraping, automated data collection, or reverse engineering without authorization.</li>
          <li>Misrepresent your identity or affiliation when interacting with the site or our company.</li>
        </ul>
        <p className="mb-4 text-gray-700">
          We reserve the right to suspend or terminate access to anyone who violates these Terms.
        </p>

        <h2 className="text-xl font-bold mb-2">6. Service Disclaimer</h2>
        <p className="mb-4 text-gray-700">
          While BPC Group strives to ensure accuracy, we do not warrant that the content on this website is complete,
          reliable, or up to date. All services described on this website are subject to separate contractual agreements.
          Nothing on this site shall be construed as an offer or binding commitment.
        </p>

        <h2 className="text-xl font-bold mb-2">7. Limitation of Liability</h2>
        <p className="mb-4 text-gray-700">
          To the maximum extent permitted by law, BPC Group shall not be liable for any direct, indirect, incidental, or
          consequential damages arising out of your use of this website or reliance on its content.
        </p>

        <h2 className="text-xl font-bold mb-2">8. External Links</h2>
        <p className="mb-4 text-gray-700">
          This website may contain links to third-party websites. BPC Group is not responsible for the content, policies,
          or practices of such external websites.
        </p>

        <h2 className="text-xl font-bold mb-2">9. Privacy</h2>
        <p className="mb-4 text-gray-700">
          Your use of this website is also governed by our Privacy Policy, which explains how we collect, use, and
          protect personal data.
        </p>

        <h2 className="text-xl font-bold mb-2">10. Governing Law</h2>
        <p className="mb-4 text-gray-700">
          These Terms are governed by and construed in accordance with the laws of Hungary and the European Union,
          without regard to conflict of law principles. Any disputes shall be subject to the exclusive jurisdiction of
          the courts of Budapest, Hungary.
        </p>

        <h2 className="text-xl font-bold mb-2">11. Changes to Terms</h2>
        <p className="mb-4 text-gray-700">
          BPC Group reserves the right to revise these Terms of Use at any time without prior notice. The updated version
          will be posted on this page with a new effective date.
        </p>

        <h2 className="text-xl font-bold mb-2">12. Contact Information</h2>
        <address className="not-italic text-gray-700">
          <div className="mb-1">BPC Group</div>
          <div className="mb-1">Email: <a className="text-blue-600 underline" href="mailto:info@bpcorp.eu">info@bpcorp.eu</a></div>
          <div>
            Website: <a className="text-blue-600 underline" href="https://bpcorp.eu" target="_blank" rel="noopener noreferrer">https://bpcorp.eu</a>
          </div>
        </address>
      </section>
    </Container>
  );
}


