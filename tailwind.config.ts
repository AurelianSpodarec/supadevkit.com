import { type Config } from 'tailwindcss'
import { preset } from './src/theming/preset'

const config = {
  presets: [preset],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ]
} satisfies Config

export default config
