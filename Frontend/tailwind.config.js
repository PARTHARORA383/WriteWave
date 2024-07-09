/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust the paths to match your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        // heading: ['Merriweather', 'serif'],
        // body: ['Lato', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        supabaseGray: {
          100: '#f7f7f8',
          200: '#eaeaea',
          300: '#d8d8d8',
          400: '#b8b8b8',
          500: '#888888',
          600: '#666666',
          700: '#444444',
          800: '#333333',
          900: '#111111',
        },
       
        notionDarkText: '#E3E4E8',
        notionDarkAccent: '#3399FF',

        notionGray : '#181818'
      },
    },
  },
  darkMode: 'class', // or 'media' if you prefer
  plugins: [],
}
