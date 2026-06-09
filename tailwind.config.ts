import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette
        ink: '#4A2E7A',
        sage: '#FF5FB0',
        'sage-deep': '#9B5CFF',
        'sage-light': '#FFB3DE',
        'sage-wash': '#FFE6F4',
        'sage-tint': '#FDF1F9',
        warm: '#9B5CFF',
        'warm-light': '#DAC4FF',
        cream: '#FFFDF9',
        'cream-deep': '#FCEE7A',
        muted: '#8B6FB8',
        soft: '#B49ED6',
        hairline: '#B59BD8',
        whisper: '#ECE0F8',
      },
      fontFamily: {
        serif: ['VT323', 'var(--font-fraunces)', 'monospace'],
        pixel: ["'Press Start 2P'", 'monospace'],
        sans: ['var(--font-inter-tight)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'container': '1200px',
      },
    },
  },
  plugins: [],
}
export default config
