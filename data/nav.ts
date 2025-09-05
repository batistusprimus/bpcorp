import type { Route } from 'next';

export type NavItem = { path: Route; label: string };

export const NAV_ITEMS: NavItem[] = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/verticals', label: 'Verticals' },
  { path: '/brands', label: 'Brands' },
  { path: '/cases', label: 'Cases' },
  { path: '/contact', label: 'Contact' }
];


