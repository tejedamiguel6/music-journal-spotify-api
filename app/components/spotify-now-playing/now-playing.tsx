"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import useNowPlaying from "../hooks/useNowPlaying";

type TrackRow = { spotify_song_id: string; play_count: number };

export default function NowPlaying({
  tracksFromDB,
}: {
  tracksFromDB: TrackRow[];
}) {
  const { nowPlaying } = useNowPlaying();

  const [trackPlayCount, setTrackPlayCount] = useState(0);
  const previousTrackId = useRef<string | null>(null);
  const lastSnap = useRef<{ ts: number; progress: number } | null>(null);

  const item = nowPlaying?.item;
  const currentTrackId = item?.id;
  const trackName = item?.name;
  const trackArtistName = item?.artists?.map((a: any) => a.name).join(", ");
  const trackAlbumName = item?.album?.name;
  const trackAlbumCover = item?.album?.images[0].url;
  console.log("GET ALBUM COVER", trackAlbumCover);
  const currentTimestamp = nowPlaying?.timestamp;
  const currentProgress = nowPlaying?.progress_ms ?? 0;

  // last saved row (if any)
  const getLastTrackPlayed = tracksFromDB
    ?.slice()
    .reverse()
    .find((r) => r.spotify_song_id === currentTrackId);

  console.log("getlast track play", getLastTrackPlayed);

  const saveTrackIdtoDB = async (initialCount = 1) => {
    try {
      await fetch("http://localhost:8080/mostPlayedTracks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          spotify_song_id: currentTrackId,
          track_name: trackName,
          artist_name: trackArtistName,
          album_name: trackAlbumName,
          play_count: initialCount,
          album_cover_url: trackAlbumCover,
          first_played: new Date().toISOString(),
          last_played: new Date().toISOString(),
        }),
      });
      setTrackPlayCount(initialCount);
    } catch (err) {
      console.error("Error saving track:", err);
    }
  };

  const updateTrackCount = async (newCount: number) => {
    try {
      await fetch(
        `http://localhost:8080/mostPlayedTracks/track/${currentTrackId}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            play_count: newCount,
            last_played: new Date().toISOString(),
          }),
        }
      );
      setTrackPlayCount(newCount);
    } catch (err) {
      console.error("Error updating play count:", err);
    }
  };

  useEffect(() => {
    if (getLastTrackPlayed) {
      setTrackPlayCount(Math.max(1, getLastTrackPlayed.play_count));
    } else {
      setTrackPlayCount(0);
    }
  }, [currentTrackId, getLastTrackPlayed?.play_count]);

  useEffect(() => {
    if (!currentTrackId || !currentTimestamp) return;

    const sameTrack = previousTrackId.current === currentTrackId;
    let restarted = false;

    if (sameTrack && lastSnap.current) {
      const wasPast10 = lastSnap.current.progress > 10_000;
      const nowBefore5 = currentProgress < 5_000;
      restarted = wasPast10 && nowBefore5;
    }

    if (!sameTrack && previousTrackId.current !== null) {
      // track changed
      if (getLastTrackPlayed) bumpCount();
      else setTrackPlayCount(1);
    } else if (sameTrack && restarted) {
      bumpCount();
    }

    previousTrackId.current = currentTrackId;
    lastSnap.current = { ts: currentTimestamp, progress: currentProgress };
  }, [currentTrackId, currentTimestamp, currentProgress, getLastTrackPlayed]);

  /* bump + decide which API call */
  const bumpCount = () =>
    setTrackPlayCount((prev) => {
      const next = prev + 1;
      if (next === 2 && !getLastTrackPlayed) {
        saveTrackIdtoDB(2).catch(console.error);
      } else if (next > 1) {
        updateTrackCount(next).catch(console.error);
      }
      return next;
    });

  if (!item) {
    return (
      <div className="flex items-center justify-center gap-4 text-gray-500">
        <Image
          src=""
          width={50}
          height={50}
          alt="No track playing"
          className="opacity-40"
        />
        <p className="italic">Nothing playing right now</p>
      </div>
    );
  }

  return (
    <>
      <div className="w-28">
        <Image
          src={item.album.images[0].url}
          width={100}
          height={100}
          alt={`Album art for ${trackName}`}
          className="rounded-full animate-spin-vinyl"
        />

        <div className="text-center flex items-center justify-center">
          <p className="mt-4">{trackArtistName}</p>

          <p className="text-xs text-gray-500  mt-2">{trackName}</p>
          <div className="text-sm italic text-gray-400">
            {trackPlayCount > 1 && <p>⚡️REPLAYED: {trackPlayCount}⚡️</p>}
          </div>
        </div>
      </div>
    </>
  );
}
