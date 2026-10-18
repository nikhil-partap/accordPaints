import { useState } from 'react';
import { MapPin, ArrowRight, Handshake, Truck, Palette } from 'lucide-react';

export default function Dealer({ notify }) {
  const [pincode, setPincode] = useState('');
  const valid = /^\d{6}$/.test(pincode);

  return (
    <section className="mx-auto max-w-7xl px-5 pt-24 sm:px-8 lg:pt-28">
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Find a dealer */}
        <div id="dealer" className="rounded-[2rem] bg-white p-8 ring-1 ring-stone/80 sm:p-12">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-terracotta-soft text-terracotta">
            <MapPin className="h-6 w-6" />
          </span>
          <h2 className="mt-6 font-serif text-4xl font-semibold leading-tight text-ink">Find a dealer near you</h2>
          <p className="mt-3 text-lg leading-relaxed text-ink-soft">
            Your local Accord dealer can tint any shade, help you compare products and recommend a painter.
          </p>
          <form
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              if (valid) notify(`Showing Accord dealers near ${pincode}`);
            }}
          >
            <label htmlFor="pincode" className="sr-only">Pincode</label>
            <input
              id="pincode"
              inputMode="numeric"
              maxLength={6}
              placeholder="Enter your 6-digit pincode"
              value={pincode}
              onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
              className="h-14 w-full rounded-full bg-cream sm:flex-1 px-6 text-base text-ink ring-1 ring-stone placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-forest"
            />
            <button
              type="submit"
              disabled={!valid}
              className="h-14 cursor-pointer rounded-full bg-forest px-8 text-base font-semibold text-white transition-colors hover:bg-forest-dark disabled:cursor-not-allowed disabled:opacity-40"
            >
              Search
            </button>
          </form>
        </div>

        {/* Become a dealer */}
        <div id="partner" className="relative overflow-hidden rounded-[2rem] bg-terracotta p-8 text-white sm:p-12">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10" aria-hidden="true" />
          <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
            <Handshake className="h-6 w-6" />
          </span>
          <h2 className="relative mt-6 font-serif text-4xl font-semibold leading-tight">Grow with Accord</h2>
          <p className="relative mt-3 text-lg leading-relaxed text-white/85">
            Accord is expanding. Become a dealer and bring our paints to homes in your city.
          </p>
          <ul className="relative mt-6 space-y-3 text-[15px] text-white/90">
            <li className="flex items-center gap-3"><Truck className="h-5 w-5" /> Dependable supply of fast-moving products</li>
            <li className="flex items-center gap-3"><Palette className="h-5 w-5" /> Shade cards and display material</li>
            <li className="flex items-center gap-3"><Handshake className="h-5 w-5" /> A team that picks up the phone</li>
          </ul>
          <button
            type="button"
            onClick={() => notify('Thanks! The Accord team will get in touch about dealership.')}
            className="relative mt-8 inline-flex cursor-pointer items-center gap-2 rounded-full bg-white px-7 py-4 text-base font-semibold text-terracotta transition-colors hover:bg-cream"
          >
            Enquire about dealership <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
