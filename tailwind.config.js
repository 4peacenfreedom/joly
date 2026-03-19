/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'joly-verde':  '#464c2d',
        'joly-dorado': '#f0a047',
        'joly-gris':   '#ceccd2',
        'joly-taupe':  '#9d9483',
        'joly-fondo':  '#f8f7f5',
      },
      fontFamily: {
        'lato':       ['Lato', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'cinzel':     ['Cinzel Decorative', 'serif'],
      },
    },
  },
  plugins: [],
}
