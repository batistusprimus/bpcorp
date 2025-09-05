import Container from '@/components/Container';

export const metadata = { title: 'Privacy' };

export default function PrivacyPage() {
  return (
    <Container>
      <section className="py-12">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <h2 className="text-xl font-bold mb-2">1. Data we collect</h2>
        <p className="mb-4 text-gray-700">Placeholder multi-section text.</p>
        <h2 className="text-xl font-bold mb-2">2. Purposes</h2>
        <p className="mb-4 text-gray-700">Placeholder text.</p>
        <h2 className="text-xl font-bold mb-2">3. Your rights</h2>
        <p className="mb-4 text-gray-700">Placeholder text.</p>
      </section>
    </Container>
  );
}


