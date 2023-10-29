/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-1": "linear-gradient(99deg, #69B3DA 0%, #4AA3D3 100%)",
      },
      colors: {
        skin: {
          "black-900": "#2A2D2F",
          "black-500": "#636B6F",
          "black-700": "#464C4F",
          "black-300": "#969C9F",
          "black-400": "#82898C",
          "blue-300": "#4AA3D3",
          "blue-50": "#EDF6FB",
          footer: "rgba(237, 246, 251, 0.60)",
          "gradient-1": "linear-gradient(99deg, #69B3DA 0%, #4AA3D3 100%)",
          "line-1": "#EFF0F1",
          "red-600": "#FF4848",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
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
  plugins: [require("tailwindcss-animate")],
};
