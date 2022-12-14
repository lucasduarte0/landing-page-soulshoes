/* eslint-disable no-undef */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#FBFBFB',
          200: '#EAEAEA',
          300: '#DFDFDF',
          400: '#999999',
          500: '#7F7F7F',
          600: '#666666',
          700: '#4C4C4C',
          800: '#333333',
          900: '#191919',
        },
        blue: {
          100: '#E6F0FD',
          200: '#CCE2FC',
          300: '#99C5FA',
          400: '#66A9F7',
          500: '#338CF5',
          600: '#0070F4',
          700: '#0064DA',
          800: '#0059C2',
          900: '#004391',
        },
        teal: {
          100: '#E6FFFA',
          200: '#B2F5EA',
          300: '#81E6D9',
          400: '#4FD1C5',
          500: '#3ABAB4',
          600: '#319795',
          700: '#2C7A7B',
          800: '#285E61',
          900: '#234E52',
        },
        rosa: {
          100: '#fc6596',
          200: '#fc6596',
          300: '#fc6596',
          400: '#fc6596',
          500: '#fc6596',
          600: '#fc6596',
          700: '#fc6596',
          800: '#fc6596',
          900: '#fc6596',
        },
      },
      boxShadow: {
        xs: '0 0 0 1px rgba(0, 0, 0, 0.16)',
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.16)',
        default: '0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.04), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.04), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.02)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.04)',
        outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        none: 'none',
      },
      spacing: {
        '9/16': '56.25%',
        '3/4': '75%',
        '1/1': '100%',
      },
      fontFamily: {
        inter: ['Montserrat','Inter', 'sans-serif'],
        carter: ['Carter One']
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.625rem',
        '5xl': '3.25rem',
        '6xl': '5.5rem',
      },
      inset: {
        '1/2': '50%',
        'full': '100%',
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.4em',
      },
      lineHeight: {
        none: '1',
        tighter: '1.125',
        tight: '1.25',
        snug: '1.375',
        normal: '1.5',
        relaxed: '1.625',
        loose: '2',
        '3': '.75rem',
        '4': '1rem',
        '5': '1.2rem',
        '6': '1.5rem',
        '7': '1.75rem',
        '8': '2rem',
        '9': '2.25rem',
        '10': '2.5rem',
      },
      minWidth: {
        '10': '2.5rem',
        '48': '12rem',
      },
      opacity: {
        '90': '0.9',
      },
      scale: {
        '98': '.98'
      },
      animation: {
        "bounce-slow": 'bouncee 2s ease-in-out infinite',
        "rotate-slow": 'spinn 4s linear infinite',
        float: 'float 3s ease-in-out infinite',
        blow: 'bloww 1.5s ease-in-out infinite',
        pingg: 'pinggg 1.3s ease-in-out infinite'
      },

      keyframes: {
        pinggg: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.03)' },
        },
        bloww: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0%)' },
          '50%': { transform: 'translateY(-5%)' },
        },
        bouncee: {
          '0%': { transform: 'translateY(0%)', 'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'  },
          '50%': { transform: 'translateY(-10%)', 'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)' },
          '100%': { transform: 'translateY(0%)', 'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)' },
        },
        spinn: {
          '0%': { transform: 'rotate(-5deg)', 'animation-timing-function': 'cubic-bezier(0.8, 1, 1, 1)' },
          '20%': { transform: 'rotate(0deg)', 'animation-timing-function': 'cubic-bezier(1, 1, 1, 1)' },
          '40%': { transform: 'rotate(5deg)', 'animation-timing-function': 'cubic-bezier(1, 1, 1, 1)' },
          '60%': { transform: 'rotate(0deg)', 'animation-timing-function': 'cubic-bezier(1, 1, 1, 1)' },
          '100%': { transform: 'rotate(-5deg)', 'animation-timing-function': 'cubic-bezier(1, 1, 1, 0.8)' },
        },
      },
      // keyframes: {
      //   bounce: {
      //     '0%, 100%': { transform: 'translateY(0)' },
      //     '50%': { transform: 'translateY(-5%)' },
      //   }
      // },
      zIndex: {
        '-1': '-1',
      },
      backgroundImage: {
        'banner-1': "url('./img/hero-pattern.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    translate: ['responsive', 'hover', 'focus', 'group-hover'],
    boxShadow: ['responsive', 'hover', 'focus', 'focus-within'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
  
};
