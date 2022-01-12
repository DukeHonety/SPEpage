function range(start, end, increment = 1) {
  const count = Math.floor((end - start + increment) / increment);
  return Array(count).fill(0).map((_, idx) => start + idx * increment);
}
const maxPageSpace = 1200;

module.exports = {
  content: ["./*.{html,js}"],
  extend:{

  },
  theme: {
    extend: {
      inset: {
        '3px': '3px',
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
      },
      primary: {
        DEFAULT: "#9b9e9a",
        100: "#66a7c5",
        200: "#243036",
        300: "#f34041",
      }
    },
    fontSize: {
      ...range(5, 140).reduce((merged, f) => ({ ...merged, [f]: `${f}px`}), {})
    },
    spacing: {
      'spaneW': '300px',
      'infoBtnW': '107px',
      ...range(0, 100, 10).reduce((merged, f)=>({...merged, [`${f}p`]: `${f}px`}), {}),
    },
    container: {

    },
  },
  plugins: [],
}
