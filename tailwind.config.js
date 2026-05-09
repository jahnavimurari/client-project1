/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8B0000', // Deep Red
          light: '#A52A2A',
          dark: '#5D0000',
        },
        secondary: {
          DEFAULT: '#D4AF37', // Gold
          light: '#F4D03F',
          dark: '#9A7D0A',
        },
        accent: {
          cream: '#F5F5DC',
          orange: '#FF8C00',
        },
        background: {
          dark: '#0A0A0A',
          charcoal: '#1A1A1A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        telugu: ['Gautami', 'sans-serif'], // Generic telugu-like font if available, else fallback
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'scroll': 'scroll 40s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
      }
    },
  },
  plugins: [],
}
