import { ReactNode } from 'react';

type Props = { title: string; description?: string; children?: ReactNode };

export default function Section({ title, description, children }: Props) {
  return (
    <section className="py-8 md:py-12">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {description ? <p className="mb-6 text-gray-700">{description}</p> : null}
      {children}
    </section>
  );
}


