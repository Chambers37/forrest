/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lightGreen: "var(--lightGreen)",
        darkGreen: "var(--darkGreen)",
        greenWhite: "var(--greenWhite)",
        darkerGreen: "var(--darkerGreen)",
      },
    },
  },
  plugins: [],
};
