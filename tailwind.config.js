const defaultTheme = require('tailwindcss/defaultTheme')
const BASE = 18
const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const em = (px, base) => `${round(px / base)}em`

module.exports = {
  // For templates only
  content: ['./src/**/*.html', './index.html'], // remove index for prod

  theme: {
    // spacing: {
    //   '1': '1rem',
    //   '2': '2rem',
    //   '3': '3rem',
    //   '4': '4rem',
    //   '5': '5rem',
    //   '6': '6rem',
    // },
    // container: {
    // center: true,
    // fontFamily: {
    //   sans: [
    //     'Poppins, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    //   ],
    //   heading: [
    //     '"EB Garamond", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
    //   ],
    // },
    // },
    fontFamily: {
      // Original: Sofia Pro
      sans: [
        // 'Poppins, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      ],
      // Original: Adobe Garamond Pro
      serif: [
        '"EB Garamond"',
        // 'Playfair Display',
        'Cambria',
        '"Times New Roman"',
        'Times',
        'serif',
      ],
    },
    extend: {
      backgroundImage: {
        'section-pattern': 'url("/assets/section-pattern.png")',
        'faq-section': 'url("/assets/faq-pattern-finch.png")',
        'our-team': 'url("/assets/our-team-pattern-finch.png")',
        blog: 'url("/assets/blog-pattern-finch.png")',
        'blog-heading': 'url("/assets/blog-header-pattern-finch.png")',
      },
      maxWidth: { page: '1440px' },
      animation: {
        'spin-slow': 'spin 18s linear infinite',
        scroll: 'scroll 15s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'], // Original: Sofia Pro @ 800/900
        heading: [
          // Original: Albra
          '"Playfair Display"',
          '"EB Garamond"',
          'Georgia',
          'Cambria',
          '"Times New Roman"',
          'Times',
          'serif',
        ],
      },
      padding: {
        xs: '0.5rem',
        sm: '1rem',
        md: '3rem',
        lg: '6rem',
        xl: '10rem',
        '2xl': '16rem',
        first: '7rem', // ~114px for navbar height
      },
      colors: {
        'finch-green': '#1F9869',
        'finch-yellow': '#F3C100',
        'finch-red': '#FF0000',
        'finch-blue': '#77C6D8',
        'finch-grey': '#F1F3F3',
        'finch-silver': '#C0C0C0',
        'finch-azure': '#0700d6', //'#91DFED',
        'finch-peach': '#ec7d60', //'#FF775C',
        'finch-slate': '#7e7f7f',
        'finch-lemongrass': '#a1b128',
        'finch-meadow': '#5ba44b',
        'finch-turf': '#309b61',
        'finch-forest': '#003b2b',
        'finch-sand': '#f1daba',
        'finch-grape': '#4c53a0',
      },
      fontSize: {
        xxl: [em(60, BASE), 0.9812], // h1 (wise guide heading)
        xl: [em(43, BASE), 1.0296], // h2
        lg: [em(40, BASE), 1.0296], // h3
        md: [em(24, BASE), 1.4], // intro
        p: [em(20, BASE), 1.4], // intro
      },
      /* Used in typography plugin
      typography: (theme) => ({
        DEFAULT: {
          css: {
            body: {
              fontFamily: theme('fontFamily.serif'),
            },
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
      }),*/
    },
  },

  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },

  plugins: [],
}
