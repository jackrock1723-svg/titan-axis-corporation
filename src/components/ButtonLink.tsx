import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'md' | 'lg';

interface ButtonLinkProps {
  to: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  onClick?: () => void;
}

const variants: Record<Variant, string> = {
  primary:
    'bg-ink-900 text-white hover:bg-ink-800 font-semibold border border-ink-900 hover:border-ink-800',
  secondary:
    'border border-gray-200 text-ink-900 hover:border-gold-400 hover:text-gold-600 bg-white hover:bg-gold-50/50',
  ghost:
    'text-gold-600 hover:text-gold-700 font-semibold',
};

const sizes: Record<Size, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
};

export default function ButtonLink({
  to,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
}: ButtonLinkProps) {
  const isExternal = to.startsWith('http') || to.startsWith('mailto:');
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-300 ease-smooth tracking-wide ${variants[variant]} ${sizes[size]} ${className}`;

  if (isExternal) {
    return (
      <a href={to} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={classes} onClick={onClick}>
      {children}
    </Link>
  );
}
