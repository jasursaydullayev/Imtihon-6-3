import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: { 
        'btn-color-dark': 'rgba(255, 255, 255, 1)',
        'btn-dark': 'rgba(43, 56, 68, 1)',
        'bg-body': 'rgba(32, 44, 54, 1)',
        'dark-bg-nav-color': 'rgb(43, 56, 68, 1)'
      }
    },
  },
  plugins: [daisyui],
}

