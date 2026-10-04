import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  heading: ReactNode;
  text?: string;
  align?: 'left' | 'center';
  className?: string;
  onDark?: boolean;
}

export default function SectionHeading({
  eyebrow,
  heading,
  text,
  align = 'left',
  className = '',
  onDark = false,
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'mx-auto text-center items-center' : 'text-left items-start';
  const headingColor = onDark ? 'text-white' : 'text-ink-900';
  const textColor = onDark ? 'text-gray-300' : 'text-gray-600';
  const eyebrowClass = onDark ? 'text-gold-300' : 'text-gold-600';

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignClass} ${className}`}>
      {eyebrow && (
        <div className={`flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
          <span className="h-px w-8 bg-gold-400" />
          <span className={`text-[11px] font-semibold uppercase tracking-widest ${eyebrowClass}`}>{eyebrow}</span>
        </div>
      )}
      <h2 className={`heading-lg ${headingColor}`}>{heading}</h2>
      {text && <p className={`text-lg leading-relaxed ${textColor}`}>{text}</p>}
    </div>
  );
}
