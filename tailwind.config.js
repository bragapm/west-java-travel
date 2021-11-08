const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '22': '5.6rem',
       },
      scale: {
        '60': '.60',
      },
      animation: {
        'autoscroll': 'autoscroll 60s linear infinite',
        'autoscrollmobile': 'autoscrollmobile 30s linear infinite',
      },
      keyframes: {
        autoscroll: {
          '0%': {
            transform: 'translate3d(0, 0, 0)'
          },
          '100%': {
            transform: 'translate3d(-2302px, 0, 0)'
          }
        },
        autoscrollmobile: {
          '0%': {
            transform: 'translate3d(0, 0, 0)'
          },
          '100%': {
            transform: 'translate3d(-1151px, 0, 0)'
          }
        }
      },
      borderRadius: {
        '2lg': '0.625rem',
      },
      fontSize: {
        '2.5xl': '1.625rem',
        '4.5xl': '2.813rem',
        '5.5xl': '3.125rem',
        '7.5xl': '5rem',
        '7.7xl': '5.625rem',
      },
      fontFamily: {
        'karla': ['"Karla"'],
        'montserrat': ['"Montserrat"']
      },
      colors: {
        'primary': '#086CB4',
        'secondary': '#011F56',
        'yellow': '#FDD24A',
        'orange': '#FB8500',
        'blue': '#63BFE8',
        'green': '#3BC56D',
        'red': '#E74D4C',
        'bordercolor': '#CBD9EA',
      },
      textColor: {
        'primary': '#086CB4',
        'dark': '#000E22',
        'neutral': '#3C4B62',
        'yellow': '#FCBD0F',
      }
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.text-gradient': {
          'background': '-webkit-linear-gradient(rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.75))',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'filter': 'drop-shadow(0px 5px 5px #000000)',
          'line-height': '1',
        },
        '.bg-glassmorphic': {
          'background': 'rgba(0, 0, 0, 0.22)',
          'border': '1px solid rgba(255, 255, 255, 0.4)',
          'box-sizing': 'border-box',
          'backdrop-filter': 'blur(4px)'
        },
        '.text-shadow': {
          'text-shadow': '0px 4px 11px #000000',
        }
      }

      addUtilities(newUtilities)
    })
  ],
}
