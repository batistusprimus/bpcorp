import type { Metadata } from 'next';
import '@/styles/globals.css';
import { createDefaultMetadata } from '@/lib/seo';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Script from 'next/script';

export const metadata: Metadata = createDefaultMetadata();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <Script id="calendly-badge-init" strategy="afterInteractive">
          {`
            window.addEventListener('load', function () {
              if (typeof Calendly !== 'undefined' && Calendly.initBadgeWidget) {
                Calendly.initBadgeWidget({
                  url: 'https://calendly.com/baptiste-bpcorp/30min',
                  text: 'Schedule time with me',
                  color: '#0069ff',
                  textColor: '#ffffff',
                  branding: true
                });
              }
            });
          `}
        </Script>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}


