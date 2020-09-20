module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Comfortaa', '--apple-system', 'sans-serif'],
      },
      animation: {
       wiggle: 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        }
      }
    },
  },
  variants: {
    backgroundColor: ['hover', 'responsive', ' focus', 'dark', 'dark-hover'],
    textColor: ['hover', 'responsive', 'focus', 'dark', 'dark-hover'],
  },
  plugins: [require('tailwindcss-dark-mode')()],
}
