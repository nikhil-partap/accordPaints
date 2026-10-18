import { useState } from 'react';
import { Check } from 'lucide-react';
import { COLOUR_FAMILIES } from '../data/colours';
import { SectionHead } from './SectionHead';
import WallPreview from '../components/WallPreview';

function isLight(hex) {
  const n = parseInt(hex.slice(1), 16);
  const r = n >> 16, g = (n >> 8) & 255, b = n & 255;
  return 0.299 * r + 0.587 * g + 0.114 * b > 170;
}

export default function Colours() {
  const [familyId, setFamilyId] = useState(COLOUR_FAMILIES[0].id);
  const family = COLOUR_FAMILIES.find((f) => f.id === familyId);
  const [shade, setShade] = useState(COLOUR_FAMILIES[0].shades[0]);

  return (
    <section id="colours" className="mt-24 bg-sand/60 py-20 lg:mt-28 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <SectionHead eyebrow="Colour visualiser" title="See it on your wall">
            Pick a shade and watch the feature wall change. Every colour can be tinted at your nearest Accord dealer.
          </SectionHead>

          <div role="tablist" aria-label="Colour families" className="no-scrollbar mt-8 flex gap-2 overflow-x-auto">
            {COLOUR_FAMILIES.map((f) => (
              <button
                key={f.id}
                role="tab"
                type="button"
                aria-selected={f.id === familyId}
                onClick={() => {
                  setFamilyId(f.id);
                  setShade(f.shades[0]);
                }}
                className={`shrink-0 cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  f.id === familyId ? 'bg-ink text-white' : 'bg-white text-ink-soft ring-1 ring-stone hover:ring-ink-soft'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div role="radiogroup" aria-label="Shades" className="mt-6 grid grid-cols-3 gap-3">
            {family.shades.map((s) => {
              const active = s.name === shade.name;
              return (
                <button
                  key={s.name}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  onClick={() => setShade(s)}
                  className={`cursor-pointer overflow-hidden rounded-2xl bg-white text-left ring-offset-2 ring-offset-sand transition ${
                    active ? 'ring-2 ring-ink' : 'ring-1 ring-stone hover:ring-ink-soft'
                  }`}
                >
                  <span className="relative block h-16 sm:h-20" style={{ backgroundColor: s.hex }}>
                    {active && (
                      <Check className={`absolute right-2 top-2 h-5 w-5 ${isLight(s.hex) ? 'text-ink' : 'text-white'}`} />
                    )}
                  </span>
                  <span className="block px-3 py-2.5">
                    <span className="block truncate text-sm font-semibold text-ink">{s.name}</span>
                    <span className="block text-xs uppercase text-muted">{s.hex}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-7">
          <WallPreview shade={shade} />
          <p className="mt-4 text-sm text-muted">Preview is indicative. Please check a physical shade card before you buy.</p>
        </div>
      </div>
    </section>
  );
}
