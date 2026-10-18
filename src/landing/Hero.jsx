import { ArrowRight, Sofa, Home, PaintRoller, Palette, Calculator, MapPin } from 'lucide-react';

const TILES = [
  { label: 'Interior', icon: Sofa, target: { view: 'home', section: 'products', category: 'interior' } },
  { label: 'Exterior', icon: Home, target: { view: 'home', section: 'products', category: 'exterior' } },
  { label: 'Primers', icon: PaintRoller, target: { view: 'home', section: 'products', category: 'primer' } },
  { label: 'Colour catalogue', icon: Palette, target: { view: 'home', section: 'colours' } },
  { label: 'Paint calculator', icon: Calculator, target: { view: 'home', section: 'calculator' } },
  { label: 'Find a dealer', icon: MapPin, target: { view: 'home', section: 'dealer' } },
];

export default function Hero({ onNavigate }) {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-4 sm:px-8 sm:pt-6">
      <div className="relative overflow-hidden rounded-[2rem] bg-terracotta">
        <img
          src="/images/rooms/hero-living.webp"
          alt="A sunlit Indian living room with a terracotta accent wall"
          className="absolute inset-0 h-full w-full object-cover object-[70%_center]"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/85 to-transparent sm:via-cream/70 lg:via-cream/40" />
        <div className="relative flex min-h-[540px] flex-col justify-center px-6 py-16 sm:min-h-[600px] sm:px-12 lg:min-h-[640px] lg:px-16">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">Paints for Indian homes</p>
          <h1 className="mt-4 max-w-xl font-serif text-[2.9rem] font-semibold leading-[1.05] text-ink sm:text-6xl lg:text-7xl">
            Colours that feel like home.
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft">
            Rich, washable interiors, weather-tough exteriors and the primers that hold it all together.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => onNavigate({ view: 'home', section: 'colours' })}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-forest px-7 py-4 text-base font-semibold text-white shadow-lg shadow-forest/20 transition-colors hover:bg-forest-dark"
            >
              Explore Colours <ArrowRight className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate({ view: 'home', section: 'dealer' })}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-white/80 px-7 py-4 text-base font-semibold text-ink ring-1 ring-ink/15 backdrop-blur transition hover:bg-white"
            >
              <MapPin className="h-5 w-5" /> Find a Dealer
            </button>
          </div>
        </div>
      </div>

      {/* Quick actions */}
      <nav aria-label="Quick links" className="relative z-10 -mt-12 grid grid-cols-3 gap-2.5 px-2 sm:-mt-14 sm:gap-4 sm:px-6 lg:grid-cols-6">
        {TILES.map((t) => (
          <button
            key={t.label}
            type="button"
            onClick={() => onNavigate(t.target)}
            className="group flex cursor-pointer flex-col items-center gap-3 rounded-2xl bg-white px-2 py-5 text-center shadow-[0_10px_30px_-12px_rgba(29,40,35,0.25)] ring-1 ring-stone/70 transition hover:-translate-y-1 hover:ring-forest/40 sm:py-6"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-terracotta-soft text-terracotta transition-colors group-hover:bg-forest group-hover:text-white">
              <t.icon className="h-6 w-6" />
            </span>
            <span className="text-sm font-semibold text-ink sm:text-[15px]">{t.label}</span>
          </button>
        ))}
      </nav>
    </section>
  );
}
