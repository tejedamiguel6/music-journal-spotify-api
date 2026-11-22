"use client";

import Image from "next/image";
import useNowPlaying, { useLastPlayed } from "@/app/hooks/use-now-playing";
import timeAgo from "@/app/lib/utils/time-ago";
import { typewriter } from "@/app/lib/fonts";
import styles from "./now-hero.module.css";

type HeroData = {
  label: string;
  live: boolean;
  paused?: boolean;
  track: string;
  artist: string;
  album?: string;
  coverUrl?: string | null;
  genre?: string;
  spotifyUrl?: string;
  progress?: number; // 0..100 while playing
};

function Cover({ url, alt, spinning }: { url?: string | null; alt: string; spinning?: boolean }) {
  return (
    <div className={styles.coverWrap}>
      {/* Blurred copy of the cover behind it: a soft glow in the album's own colors */}
      {/* Same `sizes` as the cover below, so the browser downloads the image once */}
      {url && (
        <Image
          src={url}
          alt=""
          fill
          sizes="(max-width: 768px) 80vw, 420px"
          className={styles.glow}
          aria-hidden
        />
      )}
      <div className={`${styles.cover} ${spinning ? styles.coverLive : ""}`}>
        <Image
          src={url || "/placeholder.svg"}
          alt={alt}
          fill
          sizes="(max-width: 768px) 80vw, 420px"
          priority
        />
      </div>
    </div>
  );
}

export default function NowHero() {
  const { track, isLoading } = useNowPlaying();
  const { lastPlayed, isLoading: lastPlayedLoading } = useLastPlayed(!track && !isLoading);

  let data: HeroData | null = null;

  if (track) {
    data = {
      label: track.isPlaying ? "Now spinning" : "Paused",
      live: true,
      paused: !track.isPlaying,
      track: track.name,
      artist: track.artists.join(", "),
      album: track.albumName,
      coverUrl: track.albumImageUrl,
      spotifyUrl: track.spotifyUrl,
      progress: track.durationMs
        ? Math.min((track.progressMs / track.durationMs) * 100, 100)
        : undefined,
    };
  } else if (lastPlayed) {
    data = {
      label: `Last spin · ${timeAgo(lastPlayed.played_at_ms)}`,
      live: false,
      track: lastPlayed.track_name,
      artist: lastPlayed.artist_name,
      album: lastPlayed.album_name,
      coverUrl: lastPlayed.album_cover_url,
      genre: lastPlayed.genre?.split(",")[0]?.trim() || undefined,
    };
  }

  // Keep the space reserved while loading so the page doesn't jump
  if (!data) {
    const loading = isLoading || lastPlayedLoading;
    return (
      <section className={styles.hero} aria-busy={loading}>
        <Cover alt="" />
        <div className={styles.text}>
          <p className={`${styles.label} ${typewriter.className}`}>
            {loading ? "Tuning in…" : "The record player is quiet"}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.hero} aria-label="What I'm listening to">
      <Cover
        url={data.coverUrl}
        alt={`Album art for ${data.album || data.track}`}
        spinning={data.live && !data.paused}
      />

      <div className={styles.text}>
        <p className={`${styles.label} ${typewriter.className}`}>
          {data.live && !data.paused && <span className={styles.dot} aria-hidden />}
          {data.label}
        </p>

        <h2 className={styles.track}>
          {data.spotifyUrl ? (
            <a href={data.spotifyUrl} target="_blank" rel="noopener noreferrer">
              {data.track}
            </a>
          ) : (
            data.track
          )}
        </h2>

        <p className={styles.artist}>{data.artist}</p>

        <div className={`${styles.meta} ${typewriter.className}`}>
          {data.album && <span>{data.album}</span>}
          {data.genre && <span className={styles.genre}>{data.genre}</span>}
        </div>

        {data.progress !== undefined && (
          <div className={styles.progress} aria-hidden>
            <div className={styles.progressFill} style={{ width: `${data.progress}%` }} />
          </div>
        )}
      </div>
    </section>
  );
}
