export function SectionHead({ eyebrow, title, children, light = false, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && (
        <p className={`text-sm font-semibold uppercase tracking-[0.16em] ${light ? 'text-white/60' : 'text-terracotta'}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`mt-3 font-serif text-4xl font-semibold leading-[1.1] sm:text-5xl ${light ? 'text-white' : 'text-ink'}`}>
        {title}
      </h2>
      {children && (
        <p className={`mt-4 text-lg leading-relaxed ${light ? 'text-white/75' : 'text-ink-soft'}`}>{children}</p>
      )}
    </div>
  );
}
