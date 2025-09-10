import Container from '@/components/Container';
import ContactForm from '@/components/ContactForm';
import Script from 'next/script';

export const metadata = {
  title: 'Contact'
};

export default function ContactPage() {
  return (
    <Container>
      <section className="py-12">
        <h1 className="text-3xl font-bold mb-4">Contact</h1>
        <p className="mb-6 text-gray-700">Tell us about your goals, ICP, and current pipeline challenges. We reply within 1 business day.</p>
        <div className="mb-10">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/baptiste-bpcorp/30min"
            style={{ minWidth: '320px', height: '700px' }}
          />
          <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
        </div>
        <ContactForm />
      </section>
    </Container>
  );
}


