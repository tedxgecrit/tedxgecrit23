/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "#DA0400",
        deepGrey: "#1B1B1B",
      },
      backgroundImage: {
        coming_soon: "url('/backgrounds/coming-soon.webp')",
        swirls: "url('/backgrounds/swirls.webp')",
        swirls_home: "url('/backgrounds/swirls_home.webp')",
      },
    },
  },
  plugins: [],
};
