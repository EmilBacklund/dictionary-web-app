/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './src/styles/*.css'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#A445ED',
        secondaryText: '#757575',
        listDot: '#8F19E8',
        headerDivider: '#E9E9E9',
      },
      maxWidth: {
        container: '737px',
      },
    },
  },
  plugins: [],
};
