"use client";
import Image from "next/image";
import useNowPlaying from "../hooks/useNowPlaying";

export default function NowPlaying() {
  const { nowPlaying } = useNowPlaying();
  const item = nowPlaying?.data?.item;
  const album = item?.album;
  const artist = album?.artists?.[0]?.name || "Unknown";

  if (!item) {
    return (
      <div className="w-28">
        <Image
          src="/placeholder.png"
          width={100}
          height={100}
          alt="Placeholder image"
          className="rounded-full"
        />
        <div className="text-center flex items-center justify-center">
          <p className="mt-4">No song playing</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-28">
      <Image
        src={album?.images?.[0]?.url || "/placeholder.png"}
        width={100}
        height={100}
        alt={`Album art for ${album?.name || "Unknown"}`}
        className="rounded-full animate-spin-vinyl"
      />
      <div className="text-center flex items-center justify-center">
        <p className="mt-4">Artist: {artist}</p>
      </div>
    </div>
  );
}
