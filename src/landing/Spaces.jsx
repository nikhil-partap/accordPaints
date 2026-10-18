import { ArrowUpRight } from 'lucide-react';
import { CATEGORIES, productsIn } from '../data/products';
import { SectionHead } from './SectionHead';

export default function Spaces({ onNavigate }) {
  return (
    <section id="spaces" className="mx-auto max-w-7xl px-5 pt-24 sm:px-8 lg:pt-28">
      <SectionHead eyebrow="Everything your walls need" title="Shop by space" />
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {CATEGORIES.map((c, i) => (
          <button
            key={c.id}
            type="button"
            onClick={() => onNavigate({ view: 'home', section: 'products', category: c.id })}
            className={`group relative cursor-pointer overflow-hidden rounded-[1.75rem] text-left ${i === 0 ? 'md:row-span-1' : ''}`}
          >
            <img
              src={c.image}
              alt=""
              loading="lazy"
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:aspect-[3/4]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
              <div>
                <p className="text-sm text-white/75">{productsIn(c.id).length} product{productsIn(c.id).length === 1 ? "" : "s"}</p>
                <h3 className="mt-1 font-serif text-3xl font-semibold text-white">{c.label}</h3>
                <p className="mt-1 text-[15px] text-white/80">{c.blurb}</p>
              </div>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-ink transition-transform group-hover:rotate-45">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
