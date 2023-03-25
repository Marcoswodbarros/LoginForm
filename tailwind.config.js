module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        background: '#191816',
        formBackground: '#24221f',
        primaryColor: '#ffc632',
        textBase: '#afb6c2',
        textTitle: '#d4ccb6',
      },

      fontFamily: {
        openSans: 'Open',
      },

      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
}
