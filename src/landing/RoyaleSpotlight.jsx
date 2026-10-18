import { ArrowRight, Sparkles, Droplets, Leaf } from 'lucide-react';

const POINTS = [
  { icon: Sparkles, title: 'Velvet dead-matte', body: 'Under 3% sheen for a glare-free, luxurious wall.' },
  { icon: Droplets, title: 'Washable', body: 'Wipe-clean, burnish-resistant finish.' },
  { icon: Leaf, title: 'Low odour', body: 'Rooms are ready to live in sooner.' },
];

export default function RoyaleSpotlight({ onNavigate }) {
  return (
    <section className="mx-auto max-w-7xl px-5 pt-24 sm:px-8 lg:pt-28">
      <div className="grid overflow-hidden rounded-[2rem] bg-forest text-white lg:grid-cols-2">
        <div className="relative min-h-[360px]">
          <img
            src="/images/accord_royale_pedestal.jpg"
            alt="Accord Royale Matte tin on a stone pedestal"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Flagship · Imperial Series</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-[1.08] sm:text-5xl">Accord Royale Matte</h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-white/75">
            Our most refined interior finish: ultra-dense pigments laid down in a velvet matte that makes every
            colour look deeper.
          </p>
          <ul className="mt-8 grid gap-5 sm:grid-cols-3">
            {POINTS.map((p) => (
              <li key={p.title}>
                <p.icon className="h-6 w-6 text-gold" />
                <p className="mt-3 font-semibold">{p.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-white/65">{p.body}</p>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => onNavigate({ view: 'product', id: 'accord-royale' })}
            className="mt-10 inline-flex w-fit cursor-pointer items-center gap-2 rounded-full bg-white px-7 py-4 text-base font-semibold text-forest transition-colors hover:bg-cream"
          >
            Discover Royale <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
