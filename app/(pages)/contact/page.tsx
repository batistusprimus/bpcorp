import Container from '@/components/Container';
import CalendlyInline from '@/components/CalendlyInline';

export const metadata = {
  title: 'Contact'
};

export default function ContactPage() {
  return (
    <Container>
      <section className="py-12">
        <h1 className="text-3xl font-bold mb-4">Contact</h1>
        <p className="mb-6 text-gray-700">Book an intro call to discuss your goals, ICP and volume targets. Pick a time that works — instant confirmation.</p>
        <div className="mb-10">
          <CalendlyInline url="https://calendly.com/baptiste-bpcorp/30min" height={700} />
        </div>
      </section>
    </Container>
  );
}


