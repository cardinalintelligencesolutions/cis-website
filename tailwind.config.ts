import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cis': {
          'primary': '#972027',   // Main CIS red from SVG
          'secondary': '#333333', // Dark gray from SVG
          'light': '#f8f9fa',     // Light background
          'accent': '#dc2626',    // Lighter red accent
          'muted': '#6b7280',     // Muted gray text
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

export default config