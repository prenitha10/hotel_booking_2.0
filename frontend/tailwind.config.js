/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.{js,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main_image': "url('./images/main_image.png')",
        'footer':"url('./images/footer.png')", 
        'booking':"url('./images/booking.png')",
        'login': "url('./images/login.png')",
        'book':"url('./images/book.png')",
        'restaurant':"url('./images/restaurant.png')",
      }  
  
    },
    fontFamily:{
      lex:['Lexend Giga'],
      lex_sm:['Lexend'],
    }
  },
  plugins: [],
}

