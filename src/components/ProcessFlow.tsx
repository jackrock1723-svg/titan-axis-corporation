import type { LucideIcon } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import Reveal from './Reveal';

interface ProcessFlowProps {
  steps: { label: string; icon?: LucideIcon }[] | string[];
  direction?: 'horizontal' | 'vertical';
  delayStep?: boolean;
  onDark?: boolean;
}

export default function ProcessFlow({ steps, direction = 'horizontal', delayStep = true, onDark = false }: ProcessFlowProps) {
  const isVertical = direction === 'vertical';
  const stepBg = onDark ? 'bg-ink-800' : 'bg-white';
  const stepBorder = onDark ? 'border-white/10' : 'border-gray-200';
  const stepHover = onDark ? 'hover:border-gold-400/40' : 'hover:border-gold-300';
  const stepText = onDark ? 'text-white' : 'text-ink-900';
  const iconColor = onDark ? 'text-gold-400' : 'text-gold-600';
  const numColor = onDark ? 'text-gold-400/70' : 'text-gold-600';
  const lineColor = onDark ? 'bg-white/10' : 'bg-gray-200';
  const arrowColor = onDark ? 'text-gray-600' : 'text-gray-300';

  if (isVertical) {
    return (
      <div className="flex flex-col">
        {steps.map((step, i) => {
          const label = typeof step === 'string' ? step : step.label;
          const Icon = typeof step === 'string' ? null : step.icon;
          return (
            <Reveal key={label} delay={delayStep ? ((i % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6 : undefined}>
              <div className="flex items-stretch gap-4">
                <div className="flex flex-col items-center">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${stepBorder} ${stepBg} ${iconColor} transition-colors duration-300 ${stepHover}`}>
                    {Icon ? <Icon size={18} strokeWidth={1.5} /> : <span className="text-sm font-bold">{i + 1}</span>}
                  </div>
                  {i < steps.length - 1 && (
                    <div className={`relative w-px flex-1 ${lineColor} my-1`}>
                      <div className="absolute inset-0 w-px bg-gradient-to-b from-gold-400/40 to-transparent animate-pulse-soft" style={{ animationDuration: '2s' }} />
                    </div>
                  )}
                </div>
                <div className="flex-1 pb-6 pt-2">
                  <span className={`text-sm font-semibold uppercase tracking-wider ${stepText}`}>{label}</span>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-stretch gap-3">
      {steps.map((step, i) => {
        const label = typeof step === 'string' ? step : step.label;
        const Icon = typeof step === 'string' ? null : step.icon;
        return (
          <Reveal key={label} delay={delayStep ? ((i % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6 : undefined} className="flex items-center gap-3">
            <div className={`flex items-center gap-3 rounded-xl border ${stepBorder} ${stepBg} px-4 py-3 transition-all duration-300 ${stepHover}`}>
              {Icon ? (
                <Icon size={16} strokeWidth={1.5} className={iconColor} />
              ) : (
                <span className={`text-xs font-bold ${numColor}`}>{String(i + 1).padStart(2, '0')}</span>
              )}
              <span className={`text-sm font-semibold uppercase tracking-wider ${stepText} whitespace-nowrap`}>{label}</span>
            </div>
            {i < steps.length - 1 && (
              <ChevronRight size={16} className={`${arrowColor} shrink-0 hidden sm:block`} />
            )}
          </Reveal>
        );
      })}
    </div>
  );
}
