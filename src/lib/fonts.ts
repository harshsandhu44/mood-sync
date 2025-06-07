import { Crimson_Pro, Rubik } from "next/font/google";

export const fontSerif = Crimson_Pro({
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const fontSans = Rubik({
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
