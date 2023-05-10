/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      google: {
        'aux-text': '#BDC1C6',
        'footer-text': '#9AA0A6',
        button: '#303134',
        fondo: '#202124',
        footer: '#171717',
        link: '#8AB4F8',
        avatar: '#0097A7',
        border: '#5f6368',
      },
    },
    extend: {},
  },
  plugins: [],
};
