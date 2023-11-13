/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily : {
        roboto : ['Roboto', "sans-serif"],
        sanSerif : ['Open Sans', "sans-serif"]
      },
      fontSize: {
        '5xl': '3.052rem',
        '7xl' : '4.375rem'
      }
     
    },
  },
  plugins: [],
}
