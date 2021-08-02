const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // https://brand.amazon.com/amazon-parent/brand-guidelines/color/
        smile: '#FF9900',
        'squid-ink': '#232F3E',
        white: '#ffffff',
        sky: '#00464F',
        storm: '#6C7778',
        summit: '#D5DBDB',
        snow: '#EAEDED',
        poseidon: '#005276',
        aqua: '#008296',
        iris: '#9CD5F3',
        mist: '#A8DFEE',
        wave: '#008577',
        typhoon: '#049796',
        lagoon: '#36C2B4',
        seafoam: '#A6E7CE',
        forest: '#538000',
        jungle: '#ADE422',
        honeysuckle: '#94ED88',
        dew: '#E4FDBF',
        incandescence: '#FF6138',
        summer: '#FFC400',
        poppy: '#FEE600',
        nectar: '#FFEBB7',
        aurora: '#A90067',
        coral: '#FF7676',
        primrose: '#FFCFCF',
        'desert-rose': '#ECD8DA',
        gamma: '#8c297d',
        lumos: '#CB2FBF',
        lavender: '#E5D0E6',
        quartz: '#FCE8F3',
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus', 'group-focus'],
    },
  },
  plugins: [],
}
