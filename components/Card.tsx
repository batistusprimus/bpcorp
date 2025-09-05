import { ReactNode } from 'react';

type Props = { children: ReactNode; className?: string };

export default function Card({ children, className }: Props) {
  return (
    <div className={`border border-gray-300 p-4 md:p-6 bg-white ${className ?? ''}`}>{children}</div>
  );
}


