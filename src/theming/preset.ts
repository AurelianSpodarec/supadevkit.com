import type { Config } from 'tailwindcss'
import { theming } from './theming'

export const preset = {
  darkMode: ['class'],
  content: [],
  plugins: [theming],
} satisfies Config
