import { Almendra } from "next/font/google";

import NowPlaying from "@/app/components/spotify-now-playing/now-playing";

const almendraFont = Almendra({
  subsets: ["latin"],
  weight: "700",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${almendraFont.className} flex flex-col items-center  `}>
      {/* <div className="p-6">
        <NowPlaying />
      </div> */}

      {children}
    </div>
  );
}
