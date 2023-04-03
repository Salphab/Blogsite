/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'h-font': ['"Cormorant Garamond"', 'serif'],
        'body-font':['"Work Sans"', 'sans-serif'],
      },
      screens: {
        'md3':'768px',
        'md2':'896px',
        '3xl': '1525px',
        '4xl': '1708px',
        '5xl': '2049px',
        '6xl': '2732px',
        '7xl': '4553px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
