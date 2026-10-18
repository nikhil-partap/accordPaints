import { useState } from 'react';
import { Palette, Calculator as CalcIcon, Store } from 'lucide-react';
import { ACCORD_PRODUCTS } from '../data/products';
import { SectionHead } from './SectionHead';

const STEPS = [
  { icon: Palette, title: 'Choose your colour', body: 'Browse shades and preview them on a wall.' },
  { icon: CalcIcon, title: 'Estimate your paint', body: 'Know how many litres to buy before you shop.' },
  { icon: Store, title: 'Buy from a dealer', body: 'Get it tinted and advice from a dealer near you.' },
];

// Conservative coverage (sq.ft per litre per coat) from the product's coverage text, e.g. "140 - 170 sq.ft / Litre".
const coverageOf = (p) => Number((p.coverage.match(/\d+/) || [120])[0]);
const litreSizes = (p) =>
  p.packSizes.map((s) => Number(s.replace(/[^\d.]/g, ''))).filter(Boolean).sort((a, b) => b - a);

function packPlan(litres, sizes) {
  let left = litres;
  const out = [];
  for (const s of sizes) {
    const n = Math.floor(left / s);
    if (n > 0) {
      out.push(`${n} × ${s} L`);
      left -= n * s;
    }
  }
  if (left > 0) out.push(`1 × ${sizes[sizes.length - 1]} L`);
  return out.join(' + ');
}

export default function Calculator() {
  const paintable = ACCORD_PRODUCTS;
  const [productId, setProductId] = useState(paintable[0].id);
  const [area, setArea] = useState(500);
  const [coats, setCoats] = useState(2);
  const product = paintable.find((p) => p.id === productId);
  const litres = Math.max(1, Math.ceil((area * coats) / coverageOf(product)));

  return (
    <section id="calculator" className="mx-auto max-w-7xl px-5 pt-24 sm:px-8 lg:pt-28">
      <SectionHead eyebrow="How it works" title="From idea to finished wall" align="center" />
      <ol className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-3">
        {STEPS.map((s, i) => (
          <li key={s.title} className="relative rounded-[1.5rem] bg-white p-7 ring-1 ring-stone/80">
            <span className="absolute right-6 top-5 font-serif text-5xl font-semibold text-sand">{i + 1}</span>
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest-soft text-forest">
              <s.icon className="h-6 w-6" />
            </span>
            <h3 className="mt-5 text-lg font-semibold text-ink">{s.title}</h3>
            <p className="mt-1.5 text-[15px] leading-relaxed text-ink-soft">{s.body}</p>
          </li>
        ))}
      </ol>

      <div className="mx-auto mt-10 grid max-w-5xl overflow-hidden rounded-[2rem] bg-forest text-white lg:grid-cols-5">
        <div className="p-8 sm:p-10 lg:col-span-3">
          <h3 className="font-serif text-3xl font-semibold">Paint calculator</h3>
          <p className="mt-2 text-white/70">A quick estimate for one room or a whole house.</p>

          <label className="mt-8 block text-sm font-medium text-white/80" htmlFor="calc-product">Product</label>
          <select
            id="calc-product"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            className="mt-2 w-full cursor-pointer rounded-xl bg-white/10 px-4 py-3.5 text-base text-white ring-1 ring-white/20 focus:outline-none focus:ring-white/60"
          >
            {paintable.map((p) => (
              <option key={p.id} value={p.id} className="text-ink">
                {p.name}
              </option>
            ))}
          </select>

          <div className="mt-6 flex items-baseline justify-between">
            <label htmlFor="calc-area" className="text-sm font-medium text-white/80">Wall area</label>
            <span className="font-serif text-2xl">{area.toLocaleString('en-IN')} sq.ft</span>
          </div>
          <input
            id="calc-area"
            type="range"
            min="50"
            max="5000"
            step="50"
            value={area}
            onChange={(e) => setArea(Number(e.target.value))}
            className="mt-3 w-full cursor-pointer accent-white"
          />
          <p className="mt-2 text-sm text-white/55">A 12 × 12 ft room with a 10 ft ceiling has about 480 sq.ft of wall.</p>

          <div className="mt-6 grid grid-cols-2 gap-2" role="group" aria-label="Number of coats">
            {[1, 2].map((n) => (
              <button
                key={n}
                type="button"
                aria-pressed={coats === n}
                onClick={() => setCoats(n)}
                className={`cursor-pointer rounded-xl px-4 py-3 text-left transition ${
                  coats === n ? 'bg-white text-forest' : 'ring-1 ring-white/25 hover:ring-white/60'
                }`}
              >
                <span className="block font-semibold">{n} coat{n > 1 ? 's' : ''}</span>
                <span className="block text-sm opacity-70">{n === 1 ? 'Repaint, same colour' : 'Recommended'}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center bg-forest-dark p-8 sm:p-10 lg:col-span-2">
          <p className="text-sm text-white/60">You’ll need about</p>
          <p className="mt-1 font-serif text-6xl font-semibold">{litres} L</p>
          <p className="mt-3 text-white/80">{packPlan(litres, litreSizes(product))}</p>
          <p className="mt-6 border-t border-white/15 pt-6 text-sm leading-relaxed text-white/55">
            Based on {coverageOf(product)} sq.ft per litre per coat on a smooth, primed surface. Actual use varies with
            surface and application.
          </p>
        </div>
      </div>
    </section>
  );
}
