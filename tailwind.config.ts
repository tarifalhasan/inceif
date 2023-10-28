import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-1": "linear-gradient(99deg, #69B3DA 0%, #4AA3D3 100%)",
      },
      colors: {
        skin: {
          "black-900": "#2A2D2F",
          "black-500": "#636B6F",
          "black-300": "#969C9F",
          "blue-300": "#4AA3D3",
          "blue-50": "#EDF6FB",
          footer: "rgba(237, 246, 251, 0.60)",
        },
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        poppins: ["var(--font-poppins"],
        playfair: ["var(--font-playfair)"],
        open_sans: ["var(--font-open-sans)"],
        gilroy: ["var(--font-gilroy)"],
      },
      fontSize: {
        "t-32": "2rem",
        "t-70": "4.375rem",
        "t-48": "3rem",
      },
    },
  },
  plugins: [],
};
export default config;
