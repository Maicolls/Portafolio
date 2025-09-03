/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    //Lectura de todos los componentes
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
    theme: {
      extend: {
        colors: {
          primary: "#7f5af0",  // violeta eléctrico
          secondary: "#2cb67d", // verde neón
        dark: "#16161a", // fondo oscuro
        light: "#fffffe", // casi blanco
        accent: "#ff8906", // naranja vibrante
      },
      fontFamily: {
        sans: ["'Nunito'", "sans-serif"],
        body: ["'Roboto'", "sans-serif"],
      },
    },
  },
  plugins: [],

};