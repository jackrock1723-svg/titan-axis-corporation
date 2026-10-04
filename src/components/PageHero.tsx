import type { ReactNode } from 'react';
import Reveal from './Reveal';

interface PageHeroProps {
  eyebrow: string;
  heading: ReactNode;
  text?: string;
  children?: ReactNode;
}

export default function PageHero({ eyebrow, heading, text, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-gray-100 bg-gray-50/50">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-gold-400/[0.04] blur-3xl" />
      </div>
      <div className="container-base relative py-20 md:py-28 lg:py-32">
        <div className="flex max-w-3xl flex-col gap-5">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gold-400" />
              <span className="eyebrow">{eyebrow}</span>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="heading-xl">{heading}</h1>
          </Reveal>
          {text && (
            <Reveal delay={2}>
              <p className="body-lg max-w-2xl">{text}</p>
            </Reveal>
          )}
          {children && <Reveal delay={3}>{children}</Reveal>}
        </div>
      </div>
    </section>
  );
}
