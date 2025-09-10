'use client';

import { useEffect, useRef } from 'react';

type CalendlyInlineProps = {
  url: string;
  height?: number;
  className?: string;
};

export default function CalendlyInline({ url, height = 700, className }: CalendlyInlineProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const Calendly = (window as any).Calendly;
    if (Calendly?.initInlineWidget && containerRef.current) {
      Calendly.initInlineWidget({
        url,
        parentElement: containerRef.current
      });
    }
  }, [url]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ minWidth: '320px', height }}
    />
  );
}


