'use client';

import { useEffect, useRef } from 'react';

type CalendlyInlineProps = {
  url: string;
  height?: number;
  className?: string;
};

type CalendlyAPI = {
  initInlineWidget?: (options: { url: string; parentElement: HTMLElement }) => void;
};

export default function CalendlyInline({ url, height = 700, className }: CalendlyInlineProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const win = window as Window & { Calendly?: CalendlyAPI };

    let isUnmounted = false;

    const tryInit = () => {
      if (isUnmounted || !containerRef.current) return false;
      const Calendly = win.Calendly;
      if (Calendly?.initInlineWidget) {
        Calendly.initInlineWidget({ url, parentElement: containerRef.current });
        return true;
      }
      return false;
    };

    if (tryInit()) return;

    const intervalId = window.setInterval(() => {
      if (tryInit()) {
        window.clearInterval(intervalId);
        window.clearTimeout(timeoutId);
      }
    }, 300);

    const timeoutId = window.setTimeout(() => {
      window.clearInterval(intervalId);
    }, 10000);

    return () => {
      isUnmounted = true;
      window.clearInterval(intervalId);
      window.clearTimeout(timeoutId);
    };
  }, [url]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ minWidth: '320px', height }}
    />
  );
}


