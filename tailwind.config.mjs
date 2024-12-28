/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#0056D2", // Azul usado en los botones y encabezados
        secondary: "#FFEB3B", // Amarillo usado en botones destacados
        grayBg: "#F5F5F5", // Fondo claro de la página
        textPrimary: "#333333", // Texto principal
        textSecondary: "#666666", // Texto secundario
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Ajusta según tus necesidades
      },
      boxShadow: {
        card: "0 4px 6px rgba(0, 0, 0, 0.1)", // Sombra para tarjetas
      },
    },
  },
  plugins: [],
};
