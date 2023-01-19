/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'], // will compile any styles found in html files
  theme: {
    // breakpoints
    screens: {
      sm: '460px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        brightRed: '#DA3B18',
        brightRedLight: '#E2694E',
        BrightRedSupLight: '#E58874',
        darkBlue: '#2238A7',
        darkGreyishBlue: '#5461A2',
        veryDarkBlue: '#132169',
        veryPaleRed: '#F8C5C4',
        veryLightGrey: '#EDEDED',
      },
    },
  },
  plugins: [],
}
