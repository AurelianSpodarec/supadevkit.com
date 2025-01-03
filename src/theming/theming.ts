import plugin from 'tailwindcss/plugin'

import { DashboardThemeNames, TwitterThemeNames, TwitterThemePrimary } from './themeNames'
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
      [`.${DashboardThemeNames.Theme1}`]: {
        '--primary': theme('colors.yellow.400'),
        '--secondary': theme('colors.blue.500')
      },
      [`.${DashboardThemeNames.Theme2}`]: {
        '--primary': theme('colors.yellow.300'),
        '--secondary': theme('colors.purple.900')
      },
      [`.${DashboardThemeNames.Theme3}`]: {
        '--primary': theme('colors.yellow.300'),
        '--secondary': theme('colors.purple.900')
      },
      // Twitter
      // ===============================================================

      // Twitter Theme
      [`.${TwitterThemeNames.Default}`]: {
        '--twitter-bg': theme('colors.twitter.white'),
        '--twitter-foreground': theme('colors.twitter.black2')
      },
      [`.${TwitterThemeNames.Dim}`]: {
        '--twitter-bg': theme('colors.twitter.dim'),
        '--twitter-foreground': theme('colors.twitter.white2')
      },
      [`.${TwitterThemeNames.LightsOut}`]: {
        '--twitter-bg': theme('colors.twitter.black'),
        '--twitter-foreground': theme('colors.twitter.white3')
      },
      // TwitterThemePrimary
      [`.${TwitterThemePrimary.Blue}`]: {
        '--twitter-primary': theme('colors.twitter.blue'),
      },
      [`.${TwitterThemePrimary.Yellow}`]: {
        '--twitter-primary': theme('colors.twitter.yellow'),
      },
      [`.${TwitterThemePrimary.Pink}`]: {
        '--twitter-primary': theme('colors.twitter.pink'),
      },
      [`.${TwitterThemePrimary.Purple}`]: {
        '--twitter-primary': theme('colors.twitter.purple'),
      },
      [`.${TwitterThemePrimary.Orange}`]: {
        '--twitter-primary': theme('colors.twitter.orange'),
      },
      [`.${TwitterThemePrimary.Green}`]: {
        '--twitter-primary': theme('colors.twitter.green'),
      },
    }),
    addBase({
      "html, body": {
        '@apply h-full' : {}
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
