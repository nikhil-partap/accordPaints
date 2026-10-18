import { useEffect, useState } from 'react';
import { ChevronDown, Menu, X, MapPin, ShieldCheck } from 'lucide-react';
import { CATEGORIES, productsIn } from '../../data/products';

const NAV = [
  { label: 'Colours', target: { view: 'home', section: 'colours' } },
  { label: 'Inspiration', target: { view: 'home', section: 'inspiration' } },
  { label: 'Paint Calculator', target: { view: 'home', section: 'calculator' } },
  { label: 'Find a Dealer', target: { view: 'home', section: 'dealer' } },
];

export default function Header({ onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const go = (target) => {
    setMenuOpen(false);
    setProductsOpen(false);
    onNavigate(target);
  };

  return (
    <>
      {/* Utility bar */}
      <div className="bg-forest text-[13px] text-white/85">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-5 sm:px-8">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5" /> An ISO 9001:2008 certified company
          </span>
          <div className="hidden items-center gap-5 sm:flex">
            <button type="button" onClick={() => go({ view: 'home', section: 'dealer' })} className="flex cursor-pointer items-center gap-1.5 hover:text-white">
              <MapPin className="h-3.5 w-3.5" /> Find a Dealer
            </button>
            <button type="button" onClick={() => go({ view: 'home', section: 'partner' })} className="cursor-pointer hover:text-white">
              Become a Dealer
            </button>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 bg-cream/95 backdrop-blur-md transition-shadow ${
          scrolled ? 'shadow-[0_1px_0_rgba(29,40,35,0.08),0_8px_24px_-12px_rgba(29,40,35,0.15)]' : ''
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              go({ view: 'home' });
            }}
            aria-label="Accord Paints home"
          >
            <img src="/images/brand/accord-logo.png" alt="accord" className="h-9 w-auto" />
          </a>

          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            <div className="relative" onMouseEnter={() => setProductsOpen(true)} onMouseLeave={() => setProductsOpen(false)}>
              <button
                type="button"
                aria-expanded={productsOpen}
                onClick={() => setProductsOpen((o) => !o)}
                className="flex cursor-pointer items-center gap-1 rounded-full px-4 py-2 text-[15px] font-medium text-ink-soft hover:text-ink"
              >
                Products <ChevronDown className={`h-4 w-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
              </button>
              {productsOpen && (
                <div className="absolute left-0 top-full w-[620px] pt-2">
                  <div className="grid grid-cols-3 gap-6 rounded-3xl bg-white p-6 shadow-2xl ring-1 ring-stone">
                    {CATEGORIES.map((c) => (
                      <div key={c.id}>
                        <button
                          type="button"
                          onClick={() => go({ view: 'home', section: 'products', category: c.id })}
                          className="cursor-pointer text-sm font-semibold uppercase tracking-wider text-forest hover:underline"
                        >
                          {c.label}
                        </button>
                        <ul className="mt-3 space-y-2">
                          {productsIn(c.id).map((p) => (
                            <li key={p.id}>
                              <button
                                type="button"
                                onClick={() => go({ view: 'product', id: p.id })}
                                className="cursor-pointer text-left text-[15px] text-ink-soft hover:text-ink"
                              >
                                {p.name}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {NAV.map((l) => (
              <button
                key={l.label}
                type="button"
                onClick={() => go(l.target)}
                className="cursor-pointer rounded-full px-4 py-2 text-[15px] font-medium text-ink-soft hover:text-ink"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => go({ view: 'home', section: 'colours' })}
              className="hidden cursor-pointer rounded-full bg-forest px-5 py-2.5 text-[15px] font-semibold text-white transition-colors hover:bg-forest-dark sm:inline-flex"
            >
              Explore Colours
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-ink hover:bg-sand lg:hidden"
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-x-0 bottom-0 top-[72px] z-40 overflow-y-auto bg-cream px-5 pb-10 pt-2 lg:hidden">
          <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-muted">Products</p>
          <div className="mt-2 grid gap-1">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => go({ view: 'home', section: 'products', category: c.id })}
                className="cursor-pointer border-b border-stone py-4 text-left font-serif text-2xl text-ink"
              >
                {c.label}
              </button>
            ))}
            {NAV.map((l) => (
              <button
                key={l.label}
                type="button"
                onClick={() => go(l.target)}
                className="cursor-pointer border-b border-stone py-4 text-left font-serif text-2xl text-ink"
              >
                {l.label}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => go({ view: 'home', section: 'colours' })}
            className="mt-8 w-full cursor-pointer rounded-full bg-forest px-6 py-4 text-base font-semibold text-white"
          >
            Explore Colours
          </button>
        </div>
      )}
    </>
  );
}
