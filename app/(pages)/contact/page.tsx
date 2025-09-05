import Container from '@/components/Container';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact'
};

export default function ContactPage() {
  return (
    <Container>
      <section className="py-12">
        <h1 className="text-3xl font-bold mb-4">Contact</h1>
        <p className="mb-6 text-gray-700">Tell us about your goals, ICP, and current pipeline challenges. We reply within 1 business day.</p>
        <ContactForm />
      </section>
    </Container>
  );
}


