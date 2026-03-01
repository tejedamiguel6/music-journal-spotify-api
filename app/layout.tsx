import type { Metadata } from "next";
import { Almendra } from "next/font/google";
import "./globals.css";
import Navigation from "./components/navigation/navigation";

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
      </body>
    </html>
  );
}
