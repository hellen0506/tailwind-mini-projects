/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    
      "src/**/*.html"
  ],
  theme: {
    fontFamily: {
      barlow: ['Barlow Condensed', 'sans-serif'],
      baijam: ['Bai Jamjuree', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'pattern-quote': "url('./../images/testimonial/bg-pattern-quotation.svg')",
        'clipboard-header-dt': "url('./../images/clipboard/bg-header-desktop.png')",
        'clipboard-header-mb': "url('./../images/clipboard/bg-header-mobile.png')",
      },
      maxWidth: {
        'custom': '1220px',
      },
      colors: {
        'purple-light': '#829b9a',
      }
    },
  },
  plugins: [],
}
