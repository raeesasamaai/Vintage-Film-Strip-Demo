/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0D0A07',
        sepia: '#704214',
        parchment: '#F5E6CC',
        rose: '#9A6F6C',
        gold: '#BFA181',
        cream: '#FFF8EA',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Lora', 'Georgia', 'serif'],
        script: ['Great Vibes', 'cursive'],
      },
      boxShadow: {
        vintage: '0 25px 70px rgba(0,0,0,0.45)',
        glow: '0 0 60px rgba(191,161,129,0.25)',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { opacity: '0.65', transform: 'translateY(0)' },
          '50%': { opacity: '1', transform: 'translateY(6px)' },
        },
        grainShift: {
          '0%': { transform: 'translate(0,0)' },
          '100%': { transform: 'translate(-10px,6px)' },
        },
      },
      animation: {
        breathe: 'breathe 1.8s ease-in-out infinite',
        grainShift: 'grainShift 4s steps(6) infinite',
      },
    },
  },
  plugins: [],
};
