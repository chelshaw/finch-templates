const defaultTheme = require('tailwindcss/defaultTheme')

const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const em = (px, base) => `${round(px / base)}em`

module.exports = {
  // For templates only
  // content: ['./src/*.{html}'],
  content: ['./src/**/*.{html,js}'], // from install tut

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      fontFamily: {
        sans: [
          'Poppins, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        ],
        heading: [
          '"EB Garamond", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
        ],
      },
    },
    extend: {
      colors: {
        'finch-green': '#1F9869',
        'finch-yellow': '#F3C100',
        'finch-red': '#FF0000',
        'finch-blue': '#77C6D8',
        'finch-grey': '#F1F3F3',
        'finch-silver': '#C0C0C0',
        'finch-azure': '#91DFED',
        'finch-peach': '#FF775C',
        'finch-slate': '#7e7f7f',
        'finch-lemongrass': '#a1b128',
        'finch-meadow': '#5ba44b',
        'finch-turf': '#309b61',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.800'),
            a: {
              color: theme('colors.finch-peach'),
              textDecoration: 'underline',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            h1: {
              color: theme('colors.finch-peach'),
              fontWeight: '500',
              fontFamily: theme('fontFamily.heading'),
            },
            h2: {
              fontWeight: '700',
              fontFamily: theme('fontFamily.sans'),
              textTransform: 'uppercase',
              letterSpacing: theme('letterSpacing.wider'),
            },
            h3: {
              fontWeight: '700',
              fontStyle: 'italic',
            },
            blockquote: {
              paddingLeft: 0,
              fontStyle: 'normal',
              fontFamily: theme('fontFamily.heading'),
              color: theme('colors.finch-green'),
              borderLeftWidth: 0,
              borderLeftColor: 'var(--tw-prose-quote-borders)',
              quotes: 'none',
              textAlign: 'center',
            },
          },
        },
        lg: {
          css: {
            h1: {
              fontSize: em(40, 18),
            },
            h2: {
              fontSize: em(18, 18),
            },
            h3: {
              fontSize: em(18, 18),
            },
            blockquote: {
              fontSize: em(30, 18),
              marginTop: em(24, 18),
              marginBottom: em(24, 18),
            },
          },
        },
      }),
    },
  },

  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },

  // plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
  plugins: [],
}
