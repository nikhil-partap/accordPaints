import { ACCORD_PRODUCTS } from '../data/products';

// URLs: "/" (home) and "/products/<id>" (product page). Old "#accord-royale" links open Royale.
export function viewFromLocation() {
  const path = window.location.pathname.toLowerCase();
  const hash = window.location.hash.toLowerCase();
  if (hash.includes('royale') || path.includes('royale')) return { view: 'product', id: 'accord-royale' };
  const m = path.match(/^\/products?\/([^/]+)/);
  if (m && ACCORD_PRODUCTS.some((p) => p.id === m[1])) return { view: 'product', id: m[1] };
  if (path.startsWith('/product')) return { view: 'product', id: 'accord-royale' };
  return { view: 'home' };
}

export const pathFor = (route) => (route.view === 'product' ? `/products/${route.id}` : '/');
