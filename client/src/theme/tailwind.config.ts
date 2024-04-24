import type { Config } from 'tailwindcss'
import daisyui from 'daisyui'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        localMessage: 'var(--local-message)',
        chat1: 'var(--chat1)',
        chat2: 'var(--chat2)',
        chat3: 'var(--chat3)',
        chat4: 'var(--chat4)',
        chat5: 'var(--chat5)',
        chat6: 'var(--chat6)',
        chat7: 'var(--chat7)',
      },
    },
  },
  daisyui: {
    themes: [
      {
        default: {
          primary: '#f472b6',
          secondary: '#fb7185',
          accent: '#f0abfc',
          neutral: '#ca8a04',
          'base-100': '#374151',
          info: '#7dd3fc',
          success: '#a3e635',
          warning: '#f59e0b',
          error: '#ef4444',
          '--local-message': '#14b8a6',
          '--chat1': '#e11d48',
          '--chat2': '#be185d',
          '--chat3': '#a21caf',
          '--chat4': '#2563eb',
          '--chat5': '#047857',
          '--chat6': '#4b5563',
          '--chat7': '#f59e0b',
        },
      },
    ],
  },
  plugins: [daisyui],
} satisfies Config
