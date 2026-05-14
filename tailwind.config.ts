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
        ink: '#1B1813',
        sage: '#7CA481',
        'sage-deep': '#3C5B47',
        'sage-light': '#A8C5AB',
        'sage-wash': '#DCEAD9',
        'sage-tint': '#F5F8F4',
        warm: '#C9824A',
        'warm-light': '#E8C9A8',
        cream: '#F7F2E8',
        'cream-deep': '#E8D9B8',
        muted: '#5C5448',
        soft: '#9A917F',
        hairline: '#EAEAEA',
        whisper: '#F2F2F2',
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
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
