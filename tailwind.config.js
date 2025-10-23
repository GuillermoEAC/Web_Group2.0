// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // PALETA DE COLORES OFICIALES (RGB Convertido a HEX)
      colors: {
        brand: {
          // AZUL MARINO (R:0, G:0, B:60) - Para títulos, fondos oscuros, botones secundarios.
          dark: "#00003C",
          // VERDE PRINCIPAL (R:0, G:200, B:124) - Para acentos, iconos y botones primarios.
          green: "#00C87C",
        },
        // Colores de fondos de sección de baja intensidad
        "fomex-blue": {
          50: "#eef6ff", // Degradado en inicio
          100: "#e6f0f7", // Fondo Sección Empresas
        },
        "fomex-light": {
          50: "#fff5f5", // Fondo Sección Contacto (el antiguo bg-red-50)
        },
        // Se mantiene el gris para textos generales de forma opcional
        gray: {
          ...require("tailwindcss/colors").gray,
          700: "#374151",
          900: "#111827",
        },
      },
      // Configuración de la fuente global
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
