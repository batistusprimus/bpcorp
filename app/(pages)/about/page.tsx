import Container from '@/components/Container';
import Section from '@/components/Section';
import { organizationJsonLd } from '@/lib/schemas';

export const metadata = {
  title: 'About'
};

export default function AboutPage() {
  const jsonLd = organizationJsonLd();
  return (
    <Container>
      <section className="py-12">
        <h1 className="text-3xl font-bold mb-4">À propos</h1>
        <p className="mb-3 text-gray-700">Nous aidons les équipes B2B à construire des machines de demande réplicables, en payant uniquement à la performance.</p>
        <p className="mb-3 text-gray-700">Notre modèle combine une stratégie senior avec une exécution rigoureuse et une mesure transparente.</p>
        <p className="mb-6 text-gray-700">Des missions lean, rapides à démarrer, et focalisées sur les résultats business.</p>

        <Section title="Zones d’intervention">
          <ul className="list-disc pl-6">
            <li>Union européenne</li>
            <li>Amérique du Nord</li>
          </ul>
        </Section>

        <Section title="Ce que nous ne faisons pas">
          <ul className="list-disc pl-6">
            <li>Pas de campagnes à faible intention</li>
            <li>Pas de promesses irréalistes</li>
            <li>Pas de données non conformes</li>
          </ul>
        </Section>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </section>
    </Container>
  );
}


