/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0A1A3A',
          900: '#0F2548',
          800: '#1B3A5F',
          700: '#2C4A6E',
          600: '#3D5A80',
          500: '#50709E',
        },
        gold: {
          50: '#FBF8F0',
          100: '#F5F0E1',
          200: '#E8DCBE',
          300: '#D4C294',
          400: '#BFA867',
          500: '#A8904A',
          600: '#8B7536',
          700: '#6D5B2A',
          800: '#4E411E',
          900: '#2E2812',
        },
        cream: '#0F2548',
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.03em',
        wider: '0.04em',
        widest: '0.12em',
      },
      maxWidth: {
        container: '1200px',
        'container-wide': '1320px',
      },
      transitionDuration: {
        400: '400ms',
        600: '600ms',
        800: '800ms',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-blur': {
          '0%': { opacity: '0', filter: 'blur(8px)' },
          '100%': { opacity: '1', filter: 'blur(0)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        'dash-flow': {
          '0%': { strokeDashoffset: '40' },
          '100%': { strokeDashoffset: '0' },
        },
        'orbit': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'fade-in-blur': 'fade-in-blur 0.5s ease-out forwards',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        'dash-flow': 'dash-flow 2s linear infinite',
        'orbit': 'orbit 40s linear infinite',
      },
    },
  },
  plugins: [],
};
