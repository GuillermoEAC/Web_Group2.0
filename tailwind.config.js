// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // PALETA DE COLORES OFICIALES ACTUALIZADA
      colors: {
        brand: {
          // AZUL MARINO OFICIAL (R:0, G:50, B:96) - Fondo, títulos, navegación.
          dark: "#003260",
          // VERDE ESMERALDA (Mantenido) - Acentos, botones primarios.
          green: "#00C87C",
        },

        // Colores de fondos de sección de baja intensidad
        "fomex-bg-light": {
          DEFAULT: "#F4F7FB", // Gris muy claro para secciones
        },

        // Grises para textos (Puedes usar los grises estándar de Tailwind si lo deseas)
        gray: {
          ...require("tailwindcss/colors").gray,
          700: "#4A4A4A", // Gris de texto oficial
          900: "#111827",
        },
      },

      // Configuración de la fuente global (Inter es una excelente opción moderna)
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
