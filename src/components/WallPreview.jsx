const MASK = 'url(/images/rooms/interior-bedroom-wallmask.png)';
const maskStyle = { WebkitMaskImage: MASK, maskImage: MASK, WebkitMaskSize: '100% 100%', maskSize: '100% 100%' };

// Bedroom photo whose feature wall is recoloured to `shade` using a pre-cut wall mask.
export default function WallPreview({ shade, caption = 'Feature wall', className = '' }) {
  return (
    <div className={`relative overflow-hidden rounded-[2rem] bg-stone shadow-[0_30px_60px_-30px_rgba(29,40,35,0.45)] ${className}`}>
      <img
        src="/images/rooms/interior-bedroom.webp"
        alt={`Bedroom with the feature wall shown in ${shade.name}`}
        loading="lazy"
        className="block aspect-[3/2] w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 mix-blend-color transition-colors duration-500" style={{ ...maskStyle, backgroundColor: shade.hex }} />
      <div className="pointer-events-none absolute inset-0 opacity-55 transition-colors duration-500" style={{ ...maskStyle, backgroundColor: shade.hex }} />
      <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-2xl bg-white/95 p-2 pr-5 shadow-lg backdrop-blur">
        <span className="h-11 w-11 rounded-xl ring-1 ring-black/10" style={{ backgroundColor: shade.hex }} />
        <span className="leading-tight">
          <span className="block font-semibold text-ink">{shade.name}</span>
          <span className="block text-sm text-muted">{caption}</span>
        </span>
      </div>
    </div>
  );
}
