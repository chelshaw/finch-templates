module.exports = {
  content: ['./src/*.{html,js}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    // colors: {
    // pink: '#ff88a2',
    // blue: '#0700d6',
    // green: '#13ce66',
    // 'gray-dark': '#273444',
    // gray: '#8492a6',
    // 'gray-light': '#d3dce6',
    // },
    fontFamily: {
      sans: [
        'sofia-pro',
        'proxima-nova',
        'Helvetica Neue',
        'Helvetica',
        'Arial',
        'sans-serif',
      ],
      serif: ['adobe-garamond-pro', 'Albra', 'serif'],
    },
    extend: {
      // spacing: {
      //   '128': '32rem',
      //   '144': '36rem',
      // },
      // borderRadius: {
      //   '4xl': '2rem',
      // },
      colors: {
        peach: '#ec7d60',
      },
    },
  },
  plugins: [],
}
