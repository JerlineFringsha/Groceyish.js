/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        button: '#116530', 
        primary: '#478c5c', 
      },
      backgroundImage: {
        'custom-image': "url('/Rectangle.png')",
    },
    },
  },
  plugins: [],
}

