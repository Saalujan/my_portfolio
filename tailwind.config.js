/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors:{
          lightHover:"#fcf4ff",
          darkHover:"#2a004a",
          darktheme:"#11001f",
        },
        fontFamily: {
          Ovo: ["Ovo", "serif"],
          Outfit: ["Outfit", "sans-serif"]
        },
        boxShadow: { // Fixed key name
          'black': '0 0 10px rgba(0, 0, 0, 0.5)',
          'white': '0 0 10px rgba(255, 255, 255, 0.5)',
        },
        gridTemplateColumns: {
          'auto': 'repeat(auto-fill, minmax(200px, 1fr))',
        },
      },
    },
    plugins: [],
  };
