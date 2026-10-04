export default function HeroVisual() {
  return (
    <div className="relative aspect-square w-full max-w-[520px] mx-auto">
      {/* Soft glow */}
      <div className="absolute inset-0 rounded-full bg-gold-400/[0.05] blur-3xl" />

      <svg
        viewBox="0 0 400 400"
        className="relative h-full w-full"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="hg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#BFA867" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#BFA867" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="hline" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0F2548" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#BFA867" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Background grid */}
        {[80, 160, 240, 320].map((p) => (
          <line key={`v${p}`} x1={p} y1="40" x2={p} y2="360" stroke="#E5E7EB" strokeWidth="0.5" />
        ))}
        {[80, 160, 240, 320].map((p) => (
          <line key={`h${p}`} x1="40" y1={p} x2="360" y2={p} stroke="#E5E7EB" strokeWidth="0.5" />
        ))}

        {/* Outer rings */}
        <circle cx="200" cy="200" r="160" stroke="#0F2548" strokeWidth="1" opacity="0.15" />
        <circle cx="200" cy="200" r="120" stroke="#0F2548" strokeWidth="1" opacity="0.1" />
        <circle cx="200" cy="200" r="80" stroke="#0F2548" strokeWidth="1" opacity="0.08" />

        {/* Rotating outer nodes */}
        <g style={{ transformOrigin: '200px 200px' }} className="animate-orbit">
          <circle cx="200" cy="40" r="4" fill="#BFA867" />
          <circle cx="360" cy="200" r="3" fill="#BFA867" opacity="0.6" />
          <circle cx="200" cy="360" r="4" fill="#BFA867" opacity="0.7" />
          <circle cx="40" cy="200" r="3" fill="#BFA867" opacity="0.5" />
        </g>

        {/* Axis lines */}
        <line x1="200" y1="80" x2="200" y2="320" stroke="url(#hline)" strokeWidth="1.5" />
        <line x1="80" y1="200" x2="320" y2="200" stroke="url(#hline)" strokeWidth="1" opacity="0.4" />

        {/* Diagonal connections */}
        <line x1="120" y1="120" x2="280" y2="280" stroke="#0F2548" strokeWidth="0.8" opacity="0.12" />
        <line x1="280" y1="120" x2="120" y2="280" stroke="#0F2548" strokeWidth="0.8" opacity="0.12" />

        {/* Animated flow lines */}
        <line
          x1="200" y1="80" x2="200" y2="320"
          stroke="#BFA867" strokeWidth="1" strokeDasharray="4 8" opacity="0.35"
          className="dash-march"
        />
        <line
          x1="80" y1="200" x2="320" y2="200"
          stroke="#BFA867" strokeWidth="1" strokeDasharray="4 8" opacity="0.25"
          className="dash-march"
          style={{ animationDuration: '3s' }}
        />

        {/* Central core */}
        <circle cx="200" cy="200" r="14" fill="#FFFFFF" stroke="#0F2548" strokeWidth="1.5" />
        <circle cx="200" cy="200" r="6" fill="#BFA867">
          <animate attributeName="r" values="5;7;5" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.6;1" dur="3s" repeatCount="indefinite" />
        </circle>

        {/* Connection nodes */}
        {[
          [200, 80], [320, 200], [200, 320], [80, 200],
          [120, 120], [280, 120], [280, 280], [120, 280],
        ].map(([x, y], i) => (
          <g key={i}>
            <line x1="200" y1="200" x2={x} y2={y} stroke="#0F2548" strokeWidth="0.6" opacity="0.15" />
            <circle cx={x} cy={y} r="5" fill="#FFFFFF" stroke="#0F2548" strokeWidth="1" opacity="0.5" />
            <circle cx={x} cy={y} r="2" fill="#BFA867" opacity="0.7" />
          </g>
        ))}
      </svg>
    </div>
  );
}
