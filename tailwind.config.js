/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'pink': '#EDA3B5',
      'white': '#FFFFFF',
      'black': '#1B2437',
      'lightBg': '#F6F6F6',
      'gray': {
        1: '#1B2437',
        2: '#EFEFF4',
        3: '#E5E5EA',
        4: '#D1D1D6',
        5: '#C7C7CC',
        6: '#8E8E93',
        7: '#48484A',
      }
    },
    extend: {
      fontSize: {
        'h1': '48px',
        'h2': '34px',
        'h3': '24px',
        'h4': '20px',
        'sub': {
          1: '16px',
          2: '14px',
        },
        'body': '14px',
        'caption': '12px',
        'overline': '10px'
      }
    },
  },
  plugins: [],
}

