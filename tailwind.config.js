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
          '100%': {
            'border-radius': '9999px',
            height: '1rem',
            width: '1rem',
          },
        },
      },
      animation: {
        'scale-up': '100ms ease-in forwards scale',
        'chat-box-close': '500ms ease-out forwards chatBoxClose',
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
