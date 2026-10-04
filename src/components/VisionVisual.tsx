import Reveal from './Reveal';

interface VisionVisualProps {
  pillars: string[];
  result: string;
  onDark?: boolean;
}

export default function VisionVisual({ pillars, result, onDark = false }: VisionVisualProps) {
  const pillarBorder = onDark ? 'border-gold-400/20' : 'border-gold-300/60';
  const pillarBg = onDark ? 'bg-gold-400/[0.04]' : 'bg-gold-50/60';
  const pillarText = onDark ? 'text-gold-300' : 'text-gold-700';
  const resultBorder = onDark ? 'border-gold-400/30' : 'border-gold-400/40';
  const resultBg = onDark ? 'bg-gradient-to-b from-gold-400/[0.08] to-transparent' : 'bg-gradient-to-b from-gold-50 to-white';
  const resultText = onDark ? 'text-white' : 'text-ink-900';
  const resultLabel = onDark ? 'text-gold-400' : 'text-gold-600';
  const plusColor = onDark ? 'text-gold-400/50' : 'text-gold-500/50';

  return (
    <div className="flex flex-col items-center gap-6 py-8">
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
        {pillars.map((p, i) => (
          <Reveal key={p} delay={((i + 1) as 1 | 2 | 3)} className="flex items-center gap-4 sm:gap-6">
            <div className={`flex h-24 w-24 flex-col items-center justify-center rounded-2xl border ${pillarBorder} ${pillarBg} sm:h-28 sm:w-28`}>
              <span className={`text-sm font-bold uppercase tracking-wider ${pillarText} sm:text-base`}>{p}</span>
            </div>
            {i < pillars.length - 1 && (
              <span className={`text-2xl font-light ${plusColor}`}>+</span>
            )}
          </Reveal>
        ))}
      </div>

      <Reveal delay={4}>
        <div className="my-2 w-48 max-w-full">
          <div className="hairline" />
          <div className="mt-2 text-center text-xs font-bold tracking-widest text-gold-500/50">==========</div>
        </div>
      </Reveal>

      <Reveal delay={5}>
        <div className={`relative flex flex-col items-center gap-2 rounded-2xl border ${resultBorder} ${resultBg} px-10 py-7 sm:px-16 sm:py-8`}>
          <span className={`text-xs font-semibold uppercase tracking-widest ${resultLabel}`}>Result</span>
          <span className={`text-xl font-extrabold uppercase tracking-tightest ${resultText} sm:text-2xl`}>{result}</span>
          <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-gold-400/10 animate-pulse-soft" style={{ animationDuration: '4s' }} />
        </div>
      </Reveal>
    </div>
  );
}
