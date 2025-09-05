import Link from 'next/link';
import Image from 'next/image';
import Container from './Container';
import { NAV_ITEMS } from '@/data/nav';

export default function Header() {
  return (
    <header className="border-b border-gray-300">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link href="/" aria-label="BPC Group home" className="block">
            <Image src="/logo-full-dark.png" alt="BPC Group" width={120} height={32} priority />
          </Link>
          <nav aria-label="Primary Navigation">
            <ul className="flex gap-6">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link href={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}


