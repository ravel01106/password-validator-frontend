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
        'ResultValidColor': "#8EE79C",
        'ResultNotValidColor': "#E58585",
      },
      spacing: {
        'mainContainerWidth': '60vw',
        'mainContainerHeigth': '80vh',
        'buttonsContainerWidth': "40vw",
        'subContainerWidth': "32rem",
        'formContainerWidth': "32rem",
        'formContainerHeigth': "55vh",
        '13': "3.25rem",
      },
      borderRadius: {
        'none': '0',
        'medium': '40px',
      },
    },
  },
  plugins: [],
}
