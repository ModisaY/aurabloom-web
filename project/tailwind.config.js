/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFC0CB',
        secondary: '#D8BFD8',
        'text-dark': '#333333',
        'button-pink': '#FF69B4',
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #FFC0CB 0%, #D8BFD8 100%)',
      },
    },
  },
  plugins: [],
};