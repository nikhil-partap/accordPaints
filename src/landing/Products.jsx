import { ArrowRight } from 'lucide-react';
import { ACCORD_PRODUCTS, CATEGORIES } from '../data/products';
import { SectionHead } from './SectionHead';

const FILTERS = [{ id: 'all', label: 'All' }, ...CATEGORIES.map((c) => ({ id: c.id, label: c.label }))];

export function ProductCard({ product, onOpen }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group flex cursor-pointer flex-col overflow-hidden rounded-[1.5rem] bg-white text-left ring-1 ring-stone/80 transition hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(29,40,35,0.35)]"
    >
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden" style={{ backgroundColor: product.panel }}>
        {product.photo ? (
          <img src={product.image} alt={product.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        ) : (
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-[82%] w-auto object-contain drop-shadow-[0_18px_18px_rgba(0,0,0,0.18)] transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-[1.03]"
          />
        )}
        {product.isFlagship && (
          <span className="absolute left-4 top-4 rounded-full bg-forest px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">Flagship</span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm font-medium text-terracotta">{product.category === 'primer' ? 'Primer' : product.series}</p>
        <h3 className="mt-1 text-xl font-semibold text-ink">{product.name}</h3>
        <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-soft">{product.tagline}</p>
        <div className="mt-5 flex items-center justify-between border-t border-stone/70 pt-4">
          <span className="text-sm text-muted">{product.packSizes.join(' · ')}</span>
          <span className="flex items-center gap-1 text-[15px] font-semibold text-forest">
            View <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </button>
  );
}

export default function Products({ onNavigate, filter, onFilter }) {
  const list = filter === 'all' ? ACCORD_PRODUCTS : ACCORD_PRODUCTS.filter((p) => p.category === filter);
  return (
    <section id="products" className="mx-auto max-w-7xl px-5 pt-24 sm:px-8 lg:pt-28">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHead eyebrow="Our range" title="Products" />
        <div role="tablist" aria-label="Filter products" className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:px-0">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              role="tab"
              type="button"
              aria-selected={filter === f.id}
              onClick={() => onFilter(f.id)}
              className={`shrink-0 cursor-pointer rounded-full px-5 py-2.5 text-[15px] font-medium transition-colors ${
                filter === f.id ? 'bg-ink text-white' : 'bg-white text-ink-soft ring-1 ring-stone hover:ring-ink-soft'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <ProductCard key={p.id} product={p} onOpen={() => onNavigate({ view: 'product', id: p.id })} />
        ))}
      </div>
    </section>
  );
}
