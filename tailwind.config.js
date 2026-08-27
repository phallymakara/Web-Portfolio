/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Kantumruy Pro"', '"Kantumruy"', '"Inter"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Kantumruy Pro"', '"Kantumruy"', 'ui-monospace', 'monospace'],
        khmer: ['"Kantumruy Pro"', '"Kantumruy"', 'sans-serif'],
      },
      colors: {
        zinc: {
          950: '#09090b',
        }
      },
      boxShadow: {
        none: 'none',
      }
    },
  },
  plugins: [],
}
