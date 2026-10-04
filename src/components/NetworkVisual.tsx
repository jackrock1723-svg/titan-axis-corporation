interface NetworkVisualProps {
  nodes?: { label: string; x: number; y: number }[];
  className?: string;
}

const defaultNodes = [
  { label: 'India', x: 50, y: 30 },
  { label: 'Philippines', x: 75, y: 55 },
  { label: 'Mexico', x: 25, y: 50 },
  { label: 'Canada', x: 30, y: 20 },
  { label: 'Thailand', x: 65, y: 35 },
  { label: 'International', x: 50, y: 75 },
];

export default function NetworkVisual({ nodes = defaultNodes, className = '' }: NetworkVisualProps) {
  const center = { x: 50, y: 50 };

  return (
    <div className={`relative w-full ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-auto" fill="none" aria-label="International markets network visualization">
        <defs>
          <radialGradient id="ng" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#BFA867" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#BFA867" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width="100" height="100" fill="url(#ng)" />

        {/* Rings */}
        <circle cx="50" cy="50" r="35" stroke="#0F2548" strokeWidth="0.3" opacity="0.15" />
        <circle cx="50" cy="50" r="22" stroke="#0F2548" strokeWidth="0.3" opacity="0.1" />

        {/* Connection lines */}
        {nodes.map((node, i) => (
          <line
            key={`line-${i}`}
            x1={center.x}
            y1={center.y}
            x2={node.x}
            y2={node.y}
            stroke="#0F2548"
            strokeWidth="0.4"
            opacity="0.2"
          />
        ))}

        {/* Animated pulse lines */}
        {nodes.map((node, i) => (
          <line
            key={`pulse-${i}`}
            x1={center.x}
            y1={center.y}
            x2={node.x}
            y2={node.y}
            stroke="#BFA867"
            strokeWidth="0.3"
            strokeDasharray="1 3"
            opacity="0.35"
            className="dash-march"
            style={{ animationDelay: `${i * 0.3}s`, animationDuration: '2.5s' }}
          />
        ))}

        {/* Center node */}
        <circle cx="50" cy="50" r="3" fill="#FFFFFF" stroke="#0F2548" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="1.5" fill="#BFA867">
          <animate attributeName="opacity" values="1;0.5;1" dur="3s" repeatCount="indefinite" />
        </circle>

        {/* Market nodes */}
        {nodes.map((node, i) => (
          <g key={`node-${i}`}>
            <circle cx={node.x} cy={node.y} r="2.5" fill="#FFFFFF" stroke="#0F2548" strokeWidth="0.4" />
            <circle cx={node.x} cy={node.y} r="1" fill="#BFA867" opacity="0.8" />
            <text
              x={node.x}
              y={node.y - 4}
              textAnchor="middle"
              fill="#0F2548"
              fontSize="2.5"
              fontWeight="600"
              fontFamily="Manrope, sans-serif"
              letterSpacing="0.1"
            >
              {node.label.toUpperCase()}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
