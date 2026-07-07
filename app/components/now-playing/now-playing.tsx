"use client";
import Image from "next/image";
import useNowPlaying, {
  useLastPlayed,
  LastPlayedTrack,
} from "@/app/hooks/use-now-playing";
import timeAgo from "@/app/lib/utils/time-ago";

const CARD_CLASSES =
  "flex items-center gap-4 w-72 max-w-[calc(100vw-2rem)] rounded-2xl border border-neutral-500/30 bg-[var(--page-background,var(--background))] p-4 shadow-lg";

function formatTime(ms: number) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function LastPlayed({ lastPlayed }: { lastPlayed: LastPlayedTrack | null }) {
  if (!lastPlayed) {
    return (
      <div className={CARD_CLASSES}>
        <Image
          src="/placeholder.svg"
          width={90}
          height={90}
          alt="No song playing"
          className="rounded-full shrink-0"
        />
        <p className="text-sm opacity-70">The record player is quiet…</p>
      </div>
    );
  }

  const genre = lastPlayed.genre?.split(",")[0]?.trim();

  return (
    <div className={CARD_CLASSES}>
      <Image
        src={lastPlayed.album_cover_url || "/placeholder.svg"}
        width={90}
        height={90}
        alt={`Album art for ${lastPlayed.album_name}`}
        className="rounded-full shrink-0"
      />
      <div className="min-w-0 flex-1">
        <p className="text-xs uppercase tracking-widest opacity-60">
          Last spin · {timeAgo(lastPlayed.played_at_ms)}
        </p>
        <p className="truncate font-bold mt-1">{lastPlayed.track_name}</p>
        <p className="truncate text-sm opacity-80">{lastPlayed.artist_name}</p>
        {genre && (
          <span className="inline-block mt-1 text-xs px-2 py-0.5 rounded-full border border-current opacity-60">
            {genre}
          </span>
        )}
      </div>
    </div>
  );
}

export default function NowPlaying() {
  const { track, isLoading } = useNowPlaying();
  const { lastPlayed, isLoading: lastPlayedLoading } = useLastPlayed(
    !track && !isLoading
  );

  // Don't flash the empty state while the first fetch is in flight
  if (!track && (isLoading || lastPlayedLoading)) return null;

  if (!track) return <LastPlayed lastPlayed={lastPlayed} />;

  const progress = track.durationMs
    ? Math.min((track.progressMs / track.durationMs) * 100, 100)
    : 0;

  return (
    <div className={CARD_CLASSES}>
      <Image
        src={track.albumImageUrl || "/placeholder.svg"}
        width={90}
        height={90}
        alt={`Album art for ${track.albumName || track.name}`}
        className={`rounded-full shrink-0 animate-spin-vinyl ${
          track.isPlaying ? "" : "[animation-play-state:paused]"
        }`}
      />

      <div className="min-w-0 flex-1">
        <p className="text-xs uppercase tracking-widest opacity-60">
          {track.isPlaying ? "Now spinning" : "Paused"}
        </p>

        {track.spotifyUrl ? (
          <a
            href={track.spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block truncate font-bold mt-1 hover:underline"
            title={track.name}
          >
            {track.name}
          </a>
        ) : (
          <p className="truncate font-bold mt-1">{track.name}</p>
        )}

        <p className="truncate text-sm opacity-80">
          {track.artists.join(", ")}
        </p>
        {track.albumName && (
          <p className="truncate text-xs opacity-60">{track.albumName}</p>
        )}

        <div className="mt-2">
          <div className="relative h-1 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-current opacity-20" />
            <div
              className="relative h-full rounded-full bg-current transition-[width] duration-1000 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between text-[10px] opacity-60 mt-1">
            <span>{formatTime(track.progressMs)}</span>
            <span>{formatTime(track.durationMs)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
