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
      rubik: ['Rubik', 'sans-serif'],
    },
    extend: {
      backgroundColor:{
        'boots': "#3B3054",
        'cyan-btn':"#2ACFCF",
      },
      backgroundImage: {
        'pattern-quote': "url('./../assets/images/testimonial/bg-pattern-quotation.svg')",
        'clipboard-header-dt': "url('./../assets/images/clipboard/bg-header-desktop.png')",
        'clipboard-header-mb': "url('./../assets/images/clipboard/bg-header-mobile.png')",
        'boost-dt': "url('./../assets/images/shortly/bg-boost-desktop.svg')",
        'boost-mb': "url('./../assets/images/shortly/bg-boost-mobile.svg')",
      },
      maxWidth: {
        'custom': '1220px',
        'md': '1400px',       
        
      },
      colors: {
        'purple-light': '#829b9a',
      }
    },
  },
  plugins: [],
}
