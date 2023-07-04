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
        light_bg: '#fff',
        light_text: '#2D2D2D',
        light_divider: '#E9E9E9',
        light_input_bg: '#F4F4F4',
        light_iconAndToggleBtnClr: '#757575',
        dark_bg: '#050505',
        dark_text: '#fff',
        dark_divider: '#3A3A3A',
        dark_input_bg: '#1F1F1F',
        dark_iconAndToggleBtnClr: '#A445ED',
      },
      maxWidth: {
        container: '737px',
      },
    },
  },
  plugins: [],
};
