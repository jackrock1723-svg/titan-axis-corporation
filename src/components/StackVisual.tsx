import type { LucideIcon } from 'lucide-react';
import Reveal from './Reveal';

interface StackVisualProps {
  steps: { label: string; icon?: LucideIcon }[];
  animateFlow?: boolean;
  onDark?: boolean;
}

export default function StackVisual({ steps, animateFlow = true, onDark = false }: StackVisualProps) {
  const stepBg = onDark ? 'bg-ink-800/60' : 'bg-white';
  const stepBorder = onDark ? 'border-white/10' : 'border-gray-200';
  const stepHover = onDark ? 'hover:border-gold-400/30 hover:bg-ink-700/60' : 'hover:border-gold-300 hover:bg-gold-50/30';
  const labelColor = onDark ? 'text-white' : 'text-ink-900';
  const iconColor = onDark ? 'text-gold-400' : 'text-gold-600';
  const numColor = onDark ? 'text-gold-400/40' : 'text-gold-600/50';
  const lineBg = onDark ? 'bg-white/10' : 'bg-gray-200';

  return (
    <div className="flex flex-col items-center">
      {steps.map((step, i) => {
        const Icon = step.icon;
        return (
          <Reveal key={step.label} delay={((i % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6}>
            <div className="flex flex-col items-center">
              <div className={`group relative flex w-full max-w-xs flex-col items-center gap-2 rounded-xl border ${stepBorder} ${stepBg} px-6 py-5 transition-all duration-300 ${stepHover}`}>
                <div className="flex items-center gap-3">
                  {Icon && <Icon size={18} strokeWidth={1.5} className={iconColor} />}
                  <span className={`text-sm font-semibold uppercase tracking-wider ${labelColor}`}>{step.label}</span>
                </div>
                <span className={`absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold ${numColor}`}>
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className="relative h-8 w-px">
                  <div className={`absolute inset-0 w-px ${lineBg}`} />
                  {animateFlow && (
                    <div
                      className="absolute inset-0 w-px bg-gradient-to-b from-gold-400/60 via-gold-400/20 to-transparent"
                      style={{
                        animation: 'dash-flow 2s linear infinite',
                        animationDelay: `${i * 0.2}s`,
                      }}
                    />
                  )}
                </div>
              )}
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
