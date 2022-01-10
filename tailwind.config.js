module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      inset: {
        '3px': '3px',
      },
      margin: {
        '20': '20px',
      },
    },
    fontFamily: {
      pontano: ['Pontano Sans', 'sans-serif'],
      lobster2: ['Lobster Two', 'cursive'],
    },
    colors:{
      buttonH:{
        DEFAULT: 'transparent',
        50: '#66a7c5',
        75: '#74D6D2',
        100: '#07A39D',
        200: '#009993',
        300: '#008F89',
        400: '#00857F',
      },
    },
    container: {
    },
  },
  plugins: [],
}
