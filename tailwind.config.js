/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1700px',
        'midXl': { min: '1280px', max: '1400px' },
        'fullxl': { min: '1401px', max: '1536px' },
        'minsm': { max: '437px' },
        'maxsm': { min: '438px', max: '640px' },
        'mdxl': { min: '870px', max: '1024px' },
        'xxsm': { max: '320px' },
        'midsm': { min: '392px', max: '437px' },
        'lastsm': { min: '530px', max: '640px' },
        'smlg': { min: '1025px', max: '1100px' },
        'midlg': { min: '1101px', max: '1180px' },
        'fulllg': { min: '1181px', max: '1280px' },
        'extrasmallmid': {min: '437px', max:'529px'}
      }
    },
  },
  plugins: [],
}