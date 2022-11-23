/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    
      "src/**/*.html"
  ],
  theme: {
    fontFamily: {
      barlow: ['Barlow Condensed', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'pattern-quote': "url('./../images/testimonial/bg-pattern-quotation.svg')",
      }
    },
  },
  plugins: [],
}
