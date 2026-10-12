export function Section({
  id,
  title,
  lede,
  children,
}: {
  id: string;
  title: string;
  lede?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-rule">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <h2 id={`${id}-title`} className="text-[clamp(2rem,4.5vw,3.25rem)] leading-none font-bold tracking-[-0.03em]">
          {title}
        </h2>
        {lede && <p className="mt-4 max-w-[60ch] text-lg leading-relaxed text-ink-soft">{lede}</p>}
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
