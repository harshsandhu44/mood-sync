import type { Metadata } from "next";
import RootProvider from "@/components/providers/root-provider";
import { fontSans, fontSerif } from "@/lib/fonts";
import { InstallPrompt } from "@/components/install-prompt";
import "./globals.css";

export const metadata: Metadata = {
  title: "MoodSync - A Brainwave Entrainment App",
  description:
    "MoodSync is a brainwave entrainment app that uses binaural beats and isochronic tones to help you relax, focus, and improve your mood.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "MoodSync",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: "MoodSync",
    title: "MoodSync - A Brainwave Entrainment App",
    description:
      "MoodSync is a brainwave entrainment app that uses binaural beats and isochronic tones to help you relax, focus, and improve your mood.",
  },
  twitter: {
    card: "summary",
    title: "MoodSync - A Brainwave Entrainment App",
    description:
      "MoodSync is a brainwave entrainment app that uses binaural beats and isochronic tones to help you relax, focus, and improve your mood.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/icon.svg" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="MoodSync" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#000000" />
      </head>
      <body
        className={`${fontSans.className} ${fontSerif.className} antialiased`}
      >
        <RootProvider>{children}</RootProvider>
        <InstallPrompt />
      </body>
    </html>
  );
}
