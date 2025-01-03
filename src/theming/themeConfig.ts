const themeConfig = {
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        chirp: 'var(--font-chirp)'
      },
      colors: {
        primary: {
          DEFAULT: 'var(--primary)'
        },
        secondary: {
          DEFAULT: 'var(--secondary)'
        },

        // Twitter
        // ===================================================
        twitter: {
          blue: "#1d9bf0",
          yellow: "#ffd400",
          pink: "#f91880",
          purple: "#7856ff",
          orange: "#ff7a00",
          green: "#00ba7c",

          light: "#ffffff",
          dim: "#15202b",
          "lights-out": "#000",

          white: "#ffffff",
          black: "#000000",

          black2: "#0f1419",
          white2: "#f7f9f9",
          white3: "#e7e9ea",

          primary: {
            DEFAULT: 'var(--twitter-primary)'
          },
          bg: {
            DEFAULT: 'var(--twitter-bg)'
          },
          foreground: {
            DEFAULT: 'var(--twitter-foreground)'
          }
        }
      },
      // border: {
      //   DEFAULT: 'var(--border-default)'
      // }
    }
  },
  safelist: [
    'bg-twitter-blue',
    'bg-twitter-yellow',
    'bg-twitter-pink',
    'bg-twitter-purple',
    'bg-twitter-orange',
    'bg-twitter-green',

    'bg-twitter-light',
    'bg-twitter-dim',
    'bg-twitter-lights-out'
  ]
}

export default themeConfig;
