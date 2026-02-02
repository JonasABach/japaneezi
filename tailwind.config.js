/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sakura: {
          50: '#fef5f5',
          100: '#fde8e8',
          200: '#fbd5d5',
          300: '#f8b4b4',
          400: '#ed9191',
          500: '#ed9191',
          600: '#ed9191',
          700: '#d47171',
          800: '#b35959',
          900: '#944a4a',
        },
      },
      fontFamily: {
        sans: ['Nunito', 'system-ui', 'sans-serif'],
        display: ['Noto Sans JP', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
