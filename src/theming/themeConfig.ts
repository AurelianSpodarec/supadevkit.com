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
        poppins: 'var(--font-poppins)',
        orbitron: 'var(--font-orbitron)',
        geistMono: 'var(--font-geist-mono)',
        geistSans: 'var(--font-geist-sans)',
      },
      colors: {
        primary: {
          DEFAULT: 'var(--primary)'
        },
        secondary: {
          DEFAULT: 'var(--secondary)'
        },
      },
    }
  },
  safelist: []
}

export default themeConfig;
