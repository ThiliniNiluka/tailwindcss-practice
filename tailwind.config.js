/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Inter"',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      translate: {
        '-657': '-657px',  // Define custom translation value
      },
      // screens: {
      //   'sm': {'min': '640px', 'max': '767px'},
      //   // => @media (min-width: 640px and max-width: 767px) { ... }
  
      //   'md': {'min': '768px', 'max': '1023px'},
      //   // => @media (min-width: 768px and max-width: 1023px) { ... }
  
      //   'lg': {'min': '1024px', 'max': '1279px'},
      //   // => @media (min-width: 1024px and max-width: 1279px) { ... }
  
      //   'xl': {'min': '1280px', 'max': '1535px'},
      //   // => @media (min-width: 1280px and max-width: 1535px) { ... }
  
      //   '2xl': {'min': '1536px'},
      //   // => @media (min-width: 1536px) { ... }
      // },
      // screens: {
      //   'tablet': '640px',
      //   // => @media (min-width: 640px) { ... }
  
      //   'laptop': '1024px',
      //   // => @media (min-width: 1024px) { ... }
  
      //   'desktop': '1280px',
      //   // => @media (min-width: 1280px) { ... }
      // },
      // spacing: {
      //   '2.5rem': '2.5rem', // Extend spacing scale for `gap-y-10` and `mb-10`
      // },
      // gridTemplateColumns: {
      //   // Extend grid columns to include 3 columns layout as in `grid-cols-3`
      //   '3': 'repeat(3, minmax(0, 1fr))',
      // },
      screens: {
        'xs': '475px', // Custom breakpoint for smaller screens
      },
    },
  },
  variants: {},
  plugins: [],
}
