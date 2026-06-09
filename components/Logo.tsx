export default function Logo({ className = 'h-6 w-auto' }: { className?: string }) {
  return (
    <span
      className={className}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}
      aria-label="Align"
    >
      <span
        style={{
          fontFamily: "'Press Start 2P', monospace",
          fontSize: '0.92rem',
          color: '#4A2E7A',
          letterSpacing: '0.02em',
          lineHeight: 1,
        }}
      >
        align
      </span>
      <svg viewBox="0 0 7 6" width="14" height="12" shapeRendering="crispEdges" aria-hidden="true">
        <rect x="1" y="0" width="2" height="1" fill="#FF5FB0" />
        <rect x="4" y="0" width="2" height="1" fill="#FF5FB0" />
        <rect x="0" y="1" width="7" height="2" fill="#FF5FB0" />
        <rect x="1" y="3" width="5" height="1" fill="#FF5FB0" />
        <rect x="2" y="4" width="3" height="1" fill="#FF5FB0" />
        <rect x="3" y="5" width="1" height="1" fill="#FF5FB0" />
      </svg>
    </span>
  )
}
