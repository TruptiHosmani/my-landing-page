module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        'off-white': '#fafafa',
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
