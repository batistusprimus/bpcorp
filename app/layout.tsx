import type { Metadata } from 'next';
import '@/styles/globals.css';
import { createDefaultMetadata } from '@/lib/seo';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = createDefaultMetadata();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}


