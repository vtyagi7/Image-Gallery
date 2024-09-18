/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'montserrat': ['Montserrat'],
        'playfair':['Playfair Display'],
        'opensans' :['Open Sans'],
        'rob':['Roboto'],
        'lato':['Lato']
      },
      screens: {
        'xxs':'300px',
        'xs': '440px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--gradient-color-stops))',
      }
    },
  },
  plugins: [],
};
