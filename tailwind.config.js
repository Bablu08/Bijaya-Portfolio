/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        dark1: '#0F0F0F',   // Name it as per your choice (e.g., dark1)
        dark2: '#1E1B1E',   // Name it as dark2
        purple: '#864BF6',  // Custom purple
        green: '#57C49A',   // Custom green
        yellow: '#F8BF45',  // Custom yellow
        pink: '#EF6B77',    // Custom pink
      },
      spacing: {
        '4.5': '18px', // Adding custom gap of 18px
      },
      padding: {
        '37': '37px',
        '30': '30px',
      }
    },
  },
  plugins: [],
}

