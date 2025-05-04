/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        'primary-light': ['Khand_300Light'],
        'primary-regular': ['Khand_400Regular'],
        'primary-medium': ['Khand_500Medium'],
        'primary-semibold': ['Khand_600SemiBold'],
        'primary-bold': ['Khand_700Bold'],

        'secondary-light': ['Hind_300Light'],
        'secondary-regular': ['Hind_400Regular'],
        'secondary-medium': ['Hind_500Medium'],
        'secondary-semibold': ['Hind_600SemiBold'],
        'secondary-bold': ['Hind_700Bold'],
      },
      colors: {
        primary: '#2563EB',
      },
    },
  },
  plugins: [],
};
