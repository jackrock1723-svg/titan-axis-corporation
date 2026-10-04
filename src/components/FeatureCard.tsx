import type { LucideIcon } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';

interface FeatureCardProps {
  number?: string;
  title: string;
  description: string;
  icon?: LucideIcon;
  to?: string;
  delay?: 1 | 2 | 3 | 4 | 5 | 6;
}

export default function FeatureCard({
  number,
  title,
  description,
  icon: Icon,
  to,
  delay,
}: FeatureCardProps) {
  const content = (
    <>
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-4">
          {number && (
            <span className="text-xs font-bold tracking-widest text-gold-600">{number}</span>
          )}
          {Icon && (
            <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-gold-600 transition-colors duration-300 group-hover:border-gold-300 group-hover:bg-gold-50">
              <Icon size={20} strokeWidth={1.5} />
            </span>
          )}
        </div>
        {to && (
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-all duration-300 group-hover:border-gold-400 group-hover:text-gold-600 group-hover:translate-x-0.5">
            <ArrowRight size={14} />
          </span>
        )}
      </div>
      <div className="mt-5 flex flex-col gap-2">
        <h3 className="heading-sm">{title}</h3>
        <p className="text-sm leading-relaxed text-gray-500">{description}</p>
      </div>
    </>
  );

  const classes =
    'group relative flex h-full flex-col rounded-2xl border border-gray-200/80 bg-white p-7 transition-all duration-500 ease-smooth hover:border-gold-300 hover:shadow-lg hover:shadow-gray-200/50 hover:-translate-y-0.5';

  if (to) {
    return (
      <Reveal delay={delay} as="article">
        <Link to={to} className={classes}>
          {content}
          <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-gold-400/50 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
        </Link>
      </Reveal>
    );
  }

  return (
    <Reveal delay={delay} as="article" className={classes}>
      {content}
    </Reveal>
  );
}
