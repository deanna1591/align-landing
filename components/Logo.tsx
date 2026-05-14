export default function Logo({ className = 'h-6 w-auto' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 60"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Align"
    >
      <text
        x="0"
        y="44"
        fontFamily="Fraunces, Georgia, serif"
        fontStyle="italic"
        fontSize="44"
        fontWeight="500"
        fill="#1B1813"
      >
        Align
      </text>
      <g transform="translate(72, 16)">
        <path
          d="M0 -4 L1.2 -1.2 L4 0 L1.2 1.2 L0 4 L-1.2 1.2 L-4 0 L-1.2 -1.2 Z"
          fill="#7CA481"
        />
      </g>
      <g transform="translate(82, 8)">
        <path
          d="M0 -2 L0.6 -0.6 L2 0 L0.6 0.6 L0 2 L-0.6 0.6 L-2 0 L-0.6 -0.6 Z"
          fill="#7CA481"
          opacity="0.7"
        />
      </g>
    </svg>
  )
}
