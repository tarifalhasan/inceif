import { Inter, Open_Sans, Playfair_Display, Poppins } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
export const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const open_sans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
  // weight: ["300", "400", "500", "700", "800"],
});
export const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  // weight: ["400", "500", "700", "800"],
});

export const gilroy = localFont({
  src: "./Gilroy-Bold.ttf",
  variable: "--font-gilroy",
  display: "swap",
});
