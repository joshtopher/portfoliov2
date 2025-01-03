/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'primary': '#D0CFEC',
      'secondary': '#1e293b',
      'background-color': '#0f172a',
      'text-color': '#f8fafc',
      'blur-color': '#D0CFEC10',
      'dark-color': '#020617A0',
    },
    extend: {
      spacing: {
        '1/10': '10%',
        '1/2': '50%',
        '1/2vw': '50vw',
        '7/10vh': '70vh',
        '120': '600px',
        '1/5': '20%',
        '7/8': '87.5%',
        '1/3': '33.333333%',
      },
      fontSize: {
        'project-card': '17px'
      }
    },
  },
  plugins: [
    
  ],
}