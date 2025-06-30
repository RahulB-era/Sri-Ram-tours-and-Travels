/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#D90429',
        charcoal: '#333333',
        whatsapp: '#25D366',
      },
      fontFamily: {
        'poppins': ['Poppins', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
      },
      animation: {
        'fadeIn': 'fadeIn 0.6s ease-in-out',
        'slideUp': 'slideUp 0.6s ease-out',
        'zoomIn': 'zoomIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};