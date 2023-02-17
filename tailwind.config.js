/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        scale: {
          '0%': { transform: 'scale(1.0)' },
          '100%': { transform: 'scale(1.03)' },
        },
        chatBoxClose: {
          '0%': { 'border-radius': '0px', height: '16rem', width: '16rem' },
          '25%': { height: '16rem', width: '16rem', 'border-radius': '256px' },
          '50%': { height: '8rem', width: '8rem', 'border-radius': '512px' },
          '75%': { height: '4rem', width: '4rem', 'border-radius': '1024px' },
          '100%': {
            'border-radius': '9999px',
            height: '3rem',
            width: '3rem',
          },
        },
        'opacity-to-zero': {
          '0%': { opacity: 1 },
          '85%': { opacity: 0 },
          '100%': { display: 'none' },
        },
        'opacity-to-one': {
          '0%': { display: 'none' },
          '50%': { opacity: 0.5 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        'scale-up': '100ms ease-in forwards scale',
        'chat-box-close': '300ms ease-out forwards chatBoxClose',
        'opacity-to-zero': '200ms ease-in forwards opacity-to-zero',
        'opacity-to-one': '1000ms ease-in forwards opacity-to-one',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
  },
};
