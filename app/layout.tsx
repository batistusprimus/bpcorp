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
      <head>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      </head>
      <body>
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
        <Script id="calendly-badge-init" strategy="afterInteractive">
          {`
            (function() {
              function initCalendlyBadge() {
                if (typeof Calendly !== 'undefined' && Calendly.initBadgeWidget) {
                  Calendly.initBadgeWidget({
                    url: 'https://calendly.com/baptiste-bpcorp/30min',
                    text: 'Meet with the team',
                    color: '#0069ff',
                    textColor: '#ffffff',
                    branding: true
                  });
                }
              }
              initCalendlyBadge();
              window.addEventListener('load', initCalendlyBadge);
            })();
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


