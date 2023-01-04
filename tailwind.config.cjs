/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        blue: "#0a1a44",
        cyan: "#00c4cc",
      },
      fontFamily: {
        montserrat: "Montserrat",
      },
    },
  },
  plugins: [],
};
