"use server";
import { getArtistTopTracks, getArtistStats } from "@/app/lib/db/queries";
import { unstable_cache } from "next/cache";

const getCachedArtistHistory = unstable_cache(
  async (artistName: string) => {
    const [tracks, stats] = await Promise.all([
      getArtistTopTracks(artistName),
      getArtistStats(artistName),
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
    };
  },
  ["artist-history"],
  {
    revalidate: 604800,
    tags: ["artist-history"],
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
