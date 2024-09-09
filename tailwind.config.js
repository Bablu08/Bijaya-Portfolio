/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        dark1: '#0F0F0F',   // Name it as per your choice (e.g., dark1)
        dark2: '#1E1B1E',
        dark3: '#272427',
        dark4: '#3D3D3D',
        border: '909090',   // Name it as dark2
        purple: '#864BF6',  // Custom purple
        green: '#57C49A',   // Custom green
        yellow: '#F8BF45',  // Custom yellow
        pink: '#EF6B77',    // Custom pink
      },
      borderColor: {
        'custom-gray': '#909090', // Custom border color
      },
      spacing: {
        '4.5': '18px', // Adding custom gap of 18px
          'h-284': '17.75rem', // For height of 284px
          'w-184': '11.5rem',  // For width of 184px
      },
      padding: {
        '18': '18px',
        '20': '20x',
        '30': '30px',
        '35': '35x',
        '44': '44x',
        '50': '50x',
      }
    },
  },
  plugins: [],
}
