/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'buttonColor': "#00E1C6",
        'buttonHover': "#21A091",
        'titleColor' : "#150099",
      },
      spacing: {
        'mainContainerWidth': '60vw',
        'mainContainerHeigth': '80vh',
        'buttonsContainerWidth': "40vw",
        'subContainerWidth': "32rem",
      },
      borderRadius: {
        'none': '0',
        'medium': '40px',
      },
    },
  },
  plugins: [],
}
