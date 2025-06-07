import type { Metadata } from "next";
import { Crimson_Pro } from "next/font/google";
import RootProvider from "@/components/providers/root-provider";
import "./globals.css";

const fontSerif = Crimson_Pro({
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MoodSync - A Brainwave Entrainment App",
  description:
    "MoodSync is a brainwave entrainment app that uses binaural beats and isochronic tones to help you relax, focus, and improve your mood.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontSerif.className} antialiased`}>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
