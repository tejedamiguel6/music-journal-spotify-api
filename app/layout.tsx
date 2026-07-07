import type { Metadata } from "next";
import { Almendra } from "next/font/google";
import "./globals.css";
import Navigation from "./components/navigation/navigation";
import NowPlaying from "./components/now-playing/now-playing";

const almendraFont = Almendra({
  subsets: ["latin"],
  weight: "700",
});

export const metadata: Metadata = {
  title: "Music Journal",
  description: "A personal music journal powered by Spotify",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${almendraFont.className} antialiased`}>
        <Navigation />
        {children}
        <div className="fixed bottom-4 right-4 z-50">
          <NowPlaying />
        </div>
      </body>
    </html>
  );
}
