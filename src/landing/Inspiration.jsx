import { SectionHead } from './SectionHead';

const ROOMS = [
  {
    title: 'A warm dining room',
    image: '/images/rooms/dining-haldi.webp',
    shades: [
      { name: 'Haldi Gold', hex: '#D9A441' },
      { name: 'Ivory Silk', hex: '#F1EADB' },
    ],
    className: 'md:col-span-2 md:row-span-2',
    ratio: 'aspect-[4/3] md:aspect-auto md:h-full',
  },
  {
    title: 'A calm bedroom',
    image: '/images/rooms/interior-bedroom.webp',
    shades: [
      { name: 'Sage Veil', hex: '#9AAE97' },
      { name: 'Cotton White', hex: '#F6F3EC' },
    ],
    ratio: 'aspect-[4/3]',
  },
  {
    title: 'A playful kids’ room',
    image: '/images/rooms/kids-blue.webp',
    shades: [
      { name: 'Powder Blue', hex: '#C9D8E3' },
      { name: 'Haldi Gold', hex: '#D9A441' },
    ],
    ratio: 'aspect-[4/3]',
  },
];

export default function Inspiration() {
  return (
    <section id="inspiration" className="mx-auto max-w-7xl px-5 pt-24 sm:px-8 lg:pt-28">
      <SectionHead eyebrow="Inspiration" title="Rooms to fall in love with">
        Real-life colour pairings to start your own palette.
      </SectionHead>
      <div className="mt-10 grid gap-5 md:grid-cols-3 md:grid-rows-2">
        {ROOMS.map((r) => (
          <figure key={r.title} className={`group relative overflow-hidden rounded-[1.75rem] bg-sand ${r.className || ''}`}>
            <img
              src={r.image}
              alt={r.title}
              loading="lazy"
              className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${r.ratio}`}
            />
            <figcaption className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-3 rounded-2xl bg-white/95 px-4 py-3 backdrop-blur">
              <span className="font-semibold text-ink">{r.title}</span>
              <span className="flex items-center gap-2">
                {r.shades.map((s) => (
                  <span key={s.name} title={s.name} className="h-7 w-7 rounded-full ring-2 ring-white shadow" style={{ backgroundColor: s.hex }} />
                ))}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
