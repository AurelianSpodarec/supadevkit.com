import plugin from 'tailwindcss/plugin'

import { DashboardThemeNames } from './themeNames'
import themeConfig from './themeConfig'

export const theming = plugin(
  function ({ addBase, theme }) {
    addBase({
      ':root': {
        '--border-default': theme('border.lg'),
      },
      [`.${DashboardThemeNames.Light}`]: {
        '--primary': theme('colors.pink.600'),
        '--secondary': theme('colors.white')
      },
      [`.${DashboardThemeNames.Dark}`]: {
        '--primary': theme('colors.green.400'),
        '--secondary': theme('colors.black.550')
      },
    }),
      addBase({
        "html, body": {
          '@apply h-full': {}
        },
        body: {
          '@apply bg-secondary': {}
        }
      })
  },
  {
    theme: {
      ...themeConfig.theme,
    }
  }
)
