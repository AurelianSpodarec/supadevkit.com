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
