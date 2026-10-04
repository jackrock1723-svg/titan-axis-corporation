interface TALogoProps {
  size?: number;
  className?: string;
  showMark?: boolean;
  onDark?: boolean;
}

export function TASymbol({ size = 32, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path d="M18 18L32 12L46 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="32" y1="12" x2="32" y2="52" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="14" y1="32" x2="50" y2="32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.45" />
      <circle cx="32" cy="32" r="3.5" fill="currentColor" />
      <path d="M18 46L32 52L46 46" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.55" />
    </svg>
  );
}

export default function TALogo({ size = 32, className = '', showMark = true, onDark = false }: TALogoProps) {
  const titleColor = onDark ? 'text-white' : 'text-ink-900';
  const subColor = onDark ? 'text-white/50' : 'text-gray-400';
  const markColor = onDark ? 'text-gold-300' : 'text-gold-600';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {showMark && (
        <span className={markColor}>
          <TASymbol size={size} />
        </span>
      )}
      <div className="flex flex-col leading-none">
        <span
          className={`font-display font-extrabold tracking-tightest ${titleColor}`}
          style={{ fontSize: size * 0.45, lineHeight: 1 }}
        >
          TITAN AXIS
        </span>
        <span
          className={`font-display font-medium tracking-widest ${subColor}`}
          style={{ fontSize: size * 0.22, letterSpacing: '0.18em', lineHeight: 1.4 }}
        >
          CORPORATION
        </span>
      </div>
    </div>
  );
}
