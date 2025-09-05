import Link from 'next/link';
import Container from './Container';
import { CONTACT_EMAIL, ORG_NAME } from '@/data/site';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-300 mt-12">
      <Container>
        <div className="py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-sm text-gray-700">© {ORG_NAME} {year}</div>
          <div className="flex gap-6 text-sm">
            <Link href="/legal/terms">Terms</Link>
            <Link href="/legal/privacy">Privacy</Link>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}


