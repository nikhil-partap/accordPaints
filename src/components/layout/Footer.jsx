import { CATEGORIES, productsIn } from '../../data/products';

const YEAR = new Date().getFullYear();

function Col({ title, children }) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/45">{title}</p>
      <ul className="mt-5 space-y-3">{children}</ul>
    </div>
  );
}

function Link({ onClick, children }) {
  return (
    <li>
      <button type="button" onClick={onClick} className="cursor-pointer text-left text-[15px] text-white/75 transition-colors hover:text-white">
        {children}
      </button>
    </li>
  );
}

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="inline-flex rounded-2xl bg-white px-4 py-3">
            <img src="/images/brand/accord-logo.png" alt="accord" className="h-8 w-auto" />
          </div>
          <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-white/65">
            Decorative paints, primers and wall care made for Indian homes and Indian weather.
          </p>
          <p className="mt-4 text-sm text-white/45">An ISO 9001:2008 certified company</p>
        </div>

        {CATEGORIES.map((c) => (
          <div key={c.id} className="lg:col-span-2">
            <Col title={c.label}>
              {productsIn(c.id).map((p) => (
                <Link key={p.id} onClick={() => onNavigate({ view: 'product', id: p.id })}>
                  {p.name}
                </Link>
              ))}
            </Col>
          </div>
        ))}

        <div className="lg:col-span-2">
          <Col title="Help">
            <Link onClick={() => onNavigate({ view: 'home', section: 'colours' })}>Colour catalogue</Link>
            <Link onClick={() => onNavigate({ view: 'home', section: 'calculator' })}>Paint calculator</Link>
            <Link onClick={() => onNavigate({ view: 'home', section: 'dealer' })}>Find a dealer</Link>
            <Link onClick={() => onNavigate({ view: 'home', section: 'partner' })}>Become a dealer</Link>
          </Col>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-6 text-sm text-white/45 sm:px-8">
          <span>© {YEAR} Accord Paints. All rights reserved.</span>
          <span>Shades on screen are indicative. Please check a physical shade card.</span>
        </div>
      </div>
    </footer>
  );
}
