import { useState } from 'react';
import { Check, ChevronRight, MapPin, Minus, Plus, Palette, Droplets, Clock, Ruler } from 'lucide-react';
import { ACCORD_PRODUCTS, CATEGORIES } from '../data/products';
import { ALL_SHADES } from '../data/colours';
import WallPreview from '../components/WallPreview';
import { ProductCard } from '../landing/Products';
import { APPLICATION, FAQS, ROYALE_GALLERY, ROYALE_SHADES } from './content';

const coverageLow = (p) => Number((p.coverage.match(/\d+/) || [0])[0]);
const coverageHigh = (p) => Number((p.coverage.match(/\d+\s*-\s*(\d+)/) || [0, coverageLow(p)])[1]);
const litresOf = (size) => Number(size.replace(/[^\d.]/g, ''));

function galleryFor(product) {
  if (product.id === 'accord-royale') return ROYALE_GALLERY;
  const cat = CATEGORIES.find((c) => c.id === product.category);
  return [
    { src: product.image, alt: product.name, cutout: true },
    { src: cat.image, alt: `${cat.label} painted with Accord` },
  ];
}

function Highlights({ product }) {
  const items = [
    { icon: Palette, label: 'Finish', value: product.sheen },
    { icon: Ruler, label: 'Coverage', value: product.coverage },
    { icon: Clock, label: 'Drying', value: product.dryingTime },
    { icon: Droplets, label: 'Thinning', value: product.dilution },
  ];
  return (
    <dl className="grid grid-cols-2 gap-3">
      {items.map((i) => (
        <div key={i.label} className="rounded-2xl bg-white p-4 ring-1 ring-stone/80">
          <dt className="flex items-center gap-2 text-sm text-muted">
            <i.icon className="h-4 w-4 text-terracotta" /> {i.label}
          </dt>
          <dd className="mt-1 text-[15px] font-semibold leading-snug text-ink">{i.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function ProductPage({ product, onNavigate, notify }) {
  const gallery = galleryFor(product);
  const shades = product.id === 'accord-royale' ? ROYALE_SHADES : product.category === 'primer' ? null : ALL_SHADES.slice(0, 8);
  const [imageIndex, setImageIndex] = useState(0);
  const [shade, setShade] = useState(shades ? shades[0] : null);
  const [pack, setPack] = useState(product.packSizes[Math.min(1, product.packSizes.length - 1)]);
  const [qty, setQty] = useState(1);
  const category = CATEGORIES.find((c) => c.id === product.category);
  const image = gallery[imageIndex];
  const litres = litresOf(pack) * qty;

  const pairings =
    product.category === 'primer'
      ? ACCORD_PRODUCTS.filter((p) => p.category !== 'primer').slice(0, 3)
      : [
          ...ACCORD_PRODUCTS.filter((p) => p.category === 'primer').slice(0, 1),
          ...ACCORD_PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id),
        ].slice(0, 3);

  return (
    <main className="pb-24">
      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-5 pt-6 sm:px-8">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
          <li>
            <button type="button" onClick={() => onNavigate({ view: 'home' })} className="cursor-pointer hover:text-ink">Home</button>
          </li>
          <li aria-hidden="true"><ChevronRight className="h-4 w-4" /></li>
          <li>
            <button type="button" onClick={() => onNavigate({ view: 'home', section: 'products', category: product.category })} className="cursor-pointer hover:text-ink">
              {category.label}
            </button>
          </li>
          <li aria-hidden="true"><ChevronRight className="h-4 w-4" /></li>
          <li className="text-ink" aria-current="page">{product.name}</li>
        </ol>
      </nav>

      {/* Buy box */}
      <section className="mx-auto grid max-w-7xl gap-10 px-5 pt-6 sm:px-8 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-7">
          <div
            className="relative flex aspect-square items-center justify-center overflow-hidden rounded-[2rem]"
            style={{ backgroundColor: image.cutout ? product.panel : '#e2d9cb' }}
          >
            {image.cutout ? (
              <img src={image.src} alt={image.alt} className="h-[78%] w-auto object-contain drop-shadow-[0_24px_24px_rgba(0,0,0,0.2)]" />
            ) : (
              <img src={image.src} alt={image.alt} className="h-full w-full object-cover" />
            )}
            {product.isFlagship && (
              <span className="absolute left-5 top-5 rounded-full bg-forest px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">Flagship</span>
            )}
          </div>
          <div className="mt-4 grid grid-cols-4 gap-3">
            {gallery.map((g, i) => (
              <button
                key={g.src}
                type="button"
                onClick={() => setImageIndex(i)}
                aria-label={`Show image ${i + 1}: ${g.alt}`}
                aria-current={i === imageIndex}
                className={`flex aspect-square cursor-pointer items-center justify-center overflow-hidden rounded-2xl ring-offset-2 ring-offset-cream transition ${
                  i === imageIndex ? 'ring-2 ring-ink' : 'opacity-75 hover:opacity-100'
                }`}
                style={{ backgroundColor: g.cutout ? product.panel : '#e2d9cb' }}
              >
                <img src={g.src} alt="" className={g.cutout ? 'h-[80%] w-auto object-contain' : 'h-full w-full object-cover'} />
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-terracotta">{product.series} · {product.category === 'primer' ? 'Primer' : product.category === 'exterior' ? 'Exterior' : 'Interior'}</p>
            <h1 className="mt-3 font-serif text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl">{product.name}</h1>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">{product.tagline}.</p>

            <ul className="mt-6 space-y-2.5">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-[15px] text-ink">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-forest" /> {f}
                </li>
              ))}
            </ul>

            {shades && (
              <div className="mt-8 border-t border-stone pt-6">
                <div className="flex items-baseline justify-between">
                  <p className="text-[15px] font-semibold text-ink">Shade</p>
                  <p className="text-[15px] text-ink-soft">{shade.name}</p>
                </div>
                <div role="radiogroup" aria-label="Shade" className="mt-4 flex flex-wrap gap-3">
                  {shades.map((s) => (
                    <button
                      key={s.name}
                      type="button"
                      role="radio"
                      aria-checked={s.name === shade.name}
                      aria-label={s.name}
                      title={s.name}
                      onClick={() => setShade(s)}
                      className={`h-11 w-11 cursor-pointer rounded-full ring-offset-2 ring-offset-cream transition-transform hover:scale-105 ${
                        s.name === shade.name ? 'ring-2 ring-ink' : 'ring-1 ring-black/10'
                      }`}
                      style={{ backgroundColor: s.hex }}
                    />
                  ))}
                </div>
              </div>
            )}

            <fieldset className="mt-8">
              <legend className="text-[15px] font-semibold text-ink">Pack size</legend>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {product.packSizes.map((s) => (
                  <button
                    key={s}
                    type="button"
                    aria-pressed={s === pack}
                    onClick={() => setPack(s)}
                    className={`cursor-pointer rounded-2xl px-3 py-3 text-center transition ${
                      s === pack ? 'bg-white ring-2 ring-ink' : 'bg-white/60 ring-1 ring-stone hover:ring-ink-soft'
                    }`}
                  >
                    <span className="block text-lg font-semibold text-ink">{s}</span>
                  </button>
                ))}
              </div>
              <p className="mt-3 text-sm text-muted">
                {qty} × {pack} covers about {(coverageLow(product) * litres).toLocaleString('en-IN')}–{(coverageHigh(product) * litres).toLocaleString('en-IN')} sq.ft per coat.
              </p>
            </fieldset>

            <div className="mt-6 flex gap-3">
              <div className="flex items-center rounded-full bg-white ring-1 ring-stone">
                <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} disabled={qty <= 1} aria-label="Decrease quantity" className="flex h-14 w-12 cursor-pointer items-center justify-center disabled:cursor-default disabled:opacity-30">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-8 text-center font-semibold" aria-live="polite">{qty}</span>
                <button type="button" onClick={() => setQty((q) => q + 1)} aria-label="Increase quantity" className="flex h-14 w-12 cursor-pointer items-center justify-center">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <button
                type="button"
                onClick={() => onNavigate({ view: 'home', section: 'dealer' })}
                className="flex h-14 flex-1 cursor-pointer items-center justify-center gap-2 rounded-full bg-forest px-6 text-base font-semibold text-white transition-colors hover:bg-forest-dark"
              >
                <MapPin className="h-5 w-5" /> Find a dealer
              </button>
            </div>
            <button
              type="button"
              onClick={() => notify(`We’ll send you a ${product.name} shade card.`)}
              className="mt-3 h-14 w-full cursor-pointer rounded-full bg-white text-base font-semibold text-ink ring-1 ring-stone transition hover:ring-ink"
            >
              Request a shade card
            </button>
            <p className="mt-4 text-sm text-muted">Prices vary by shade and city. Your dealer will confirm the price and tint it for you.</p>
          </div>
        </div>
      </section>

      {/* At a glance + visualiser */}
      <section className="mx-auto grid max-w-7xl gap-10 px-5 pt-24 sm:px-8 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-terracotta">At a glance</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-ink">Where it works best</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">Ideal for {product.idealFor.toLowerCase()}.</p>
          <div className="mt-8">
            <Highlights product={product} />
          </div>
        </div>
        <div className="lg:col-span-7">
          {shade ? (
            <WallPreview shade={shade} caption={product.name} />
          ) : (
            <img src={category.image} alt={category.label} loading="lazy" className="aspect-[3/2] w-full rounded-[2rem] object-cover" />
          )}
        </div>
      </section>

      {/* Specs + application */}
      <section className="mx-auto grid max-w-7xl gap-16 px-5 pt-24 sm:px-8 lg:grid-cols-2">
        <div>
          <h2 className="font-serif text-3xl font-semibold text-ink">Technical details</h2>
          <dl className="mt-6 divide-y divide-stone border-y border-stone">
            {[
              ['Series', product.series],
              ['Finish', product.sheen],
              ['Coverage', product.coverage],
              ['Drying time', product.dryingTime],
              ['Thinning', product.dilution],
              ['Pack sizes', product.packSizes.join(' · ')],
              ['Ideal for', product.idealFor],
            ].map(([k, v]) => (
              <div key={k} className="grid grid-cols-5 gap-4 py-4">
                <dt className="col-span-2 text-[15px] text-muted">{k}</dt>
                <dd className="col-span-3 text-[15px] text-ink">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div>
          <h2 className="font-serif text-3xl font-semibold text-ink">How to apply</h2>
          <ol className="mt-6 space-y-7">
            {APPLICATION[product.category].map((s, i) => (
              <li key={s.title} className="flex gap-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest-soft font-serif text-lg font-semibold text-forest">{i + 1}</span>
                <div>
                  <h3 className="text-lg font-semibold text-ink">{s.title}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-ink-soft">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-5 pt-24 sm:px-8">
        <h2 className="text-center font-serif text-3xl font-semibold text-ink">Questions, answered</h2>
        <div className="mt-8 divide-y divide-stone rounded-[1.5rem] bg-white px-6 ring-1 ring-stone/80">
          {FAQS[product.category].map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[17px] font-semibold text-ink">
                {f.q}
                <Plus className="h-5 w-5 shrink-0 text-muted transition-transform group-open:rotate-45" />
              </summary>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Goes well with */}
      <section className="mx-auto max-w-7xl px-5 pt-24 sm:px-8">
        <h2 className="font-serif text-3xl font-semibold text-ink">Goes well with</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pairings.map((p) => (
            <ProductCard key={p.id} product={p} onOpen={() => onNavigate({ view: 'product', id: p.id })} />
          ))}
        </div>
      </section>
    </main>
  );
}
