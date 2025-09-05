import Link from 'next/link';
import type { Route } from 'next';

type Crumb = { href: Route; label: string };
type Props = { items: Crumb[] };

export default function Breadcrumbs({ items }: Props) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm mb-4">
      <ol className="flex gap-2 text-gray-700">
        {items.map((item, i) => (
          <li key={item.href} className="flex items-center">
            {i > 0 && <span className="mx-2">/</span>}
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}


