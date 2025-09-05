import Container from '@/components/Container';

export const metadata = { title: 'Terms' };

export default function TermsPage() {
  return (
    <Container>
      <section className="py-12">
        <h1 className="text-3xl font-bold mb-4">Terms of Use</h1>
        <h2 className="text-xl font-bold mb-2">1. Purpose</h2>
        <p className="mb-4 text-gray-700">Placeholder multi-section text.</p>
        <h2 className="text-xl font-bold mb-2">2. Access</h2>
        <p className="mb-4 text-gray-700">Placeholder text.</p>
        <h2 className="text-xl font-bold mb-2">3. Liability</h2>
        <p className="mb-4 text-gray-700">Placeholder text.</p>
      </section>
    </Container>
  );
}


