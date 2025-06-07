import type { Metadata } from "next";
import RootProvider from "@/components/providers/root-provider";
import { fontSans, fontSerif } from "@/lib/fonts";
import "./globals.css";

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
      <body
        className={`${fontSans.className} ${fontSerif.className} antialiased`}
      >
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
