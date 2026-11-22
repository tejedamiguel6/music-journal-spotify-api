"use server";
import { getArtistFirstPlay, getArtistTopTracks, getArtistStats } from "@/app/lib/db/queries";
import { unstable_cache } from "next/cache";

const getCachedArtistHistory = unstable_cache(
  async (artistName: string) => {
    const [tracks, stats, firstPlay] = await Promise.all([
      getArtistTopTracks(artistName),
      getArtistStats(artistName),
      getArtistFirstPlay(artistName),
    ]);

    return {
      artist: artistName,
      tracks: tracks.map((t) => ({
        track: t.track_name,
        album: t.album_name,
        album_cover_url: t.album_cover_url,
        played_at: t.played_at,
        play_count: t.play_count,
      })),
      totalPlays: stats.total_plays,
      uniqueTracks: stats.unique_tracks,
      uniqueAlbums: stats.unique_albums,
      dateRange: {
        from: stats.first_play,
        to: stats.last_play,
      },
      firstTrack: firstPlay
        ? { track: firstPlay.track_name, album: firstPlay.album_name }
        : null,
    };
  },
  ["artist-history-v2"],
  {
    revalidate: 3600, // 1 hour, so play counts and dates stay current
    tags: ["artist-history-v2"],
  }
);

export async function fetchArtistHistory(artistName: string) {
  try {
    const result = await getCachedArtistHistory(artistName);
    return result;
  } catch (err) {
    console.error("Error in fetchArtistHistory:", err);
    return {
      error:
        err instanceof Error ? err.message : "Failed to fetch artist history",
    };
  }
}
