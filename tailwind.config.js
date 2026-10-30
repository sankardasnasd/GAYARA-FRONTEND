/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gayara: {
          linen: '#FAF7F2',
          sand: '#ECE5DB',
          terracotta: '#C16A54',
          olive: '#63684B',
          charcoal: '#2B2927',
          ecru: '#E2D9CC'
        }
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}