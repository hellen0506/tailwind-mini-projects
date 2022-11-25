/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    
      "src/**/*.html"
  ],
  theme: {
    fontFamily: {
      barlow: ['Barlow Condensed', 'sans-serif'],
      baijam: ['Bai Jamjuree', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'pattern-quote': "url('./../images/testimonial/bg-pattern-quotation.svg')",
        'clipboard-header-dt': "url('./../images/clipboard/bg-header-desktop.png')",
        'clipboard-header-mb': "url('./../images/clipboard/bg-header-mobile.png')",
      }
    },
  },
  plugins: [],
}
