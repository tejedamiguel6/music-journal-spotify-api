import { Almendra } from "next/font/google";
import Navigation from "@/app/components/navigation/navigation";

const almendraFont = Almendra({
  subsets: ["latin"],
  weight: "700",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${almendraFont.className} w-full`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
