// app/music-journal/top-items/[...slug]/action.ts
"use server";
import { graph } from "@/app/lib/sql-qa/graph";
import { unstable_cache } from "next/cache";

// Create a cached version of the graph invocation
const getCachedArtistHistory = unstable_cache(
  async (artistName: string) => {
    // console.log("Generating new result for:", artistName);

    const { summary, error } = await graph.invoke({
      question: "top 13 tracks with play counts",
      artist_name: artistName,
    });

    if (error) {
      throw new Error(error);
    }

    let parsed: any;
    try {
      parsed = JSON.parse(summary);
    } catch {
      throw new Error("Summary was not valid JSON.");
    }

    const { artist, tracks, total_plays, date_range } = parsed;

    return {
      artist,
      tracks, // array for table rows
      totalPlays: total_plays,
      uniqueTracks: new Set(tracks.map((t: any) => t.track)).size,
      uniqueAlbums: new Set(tracks.map((t: any) => t.album)).size,
      dateRange: date_range,
    };
  },
  ["artist-history"], // Cache key prefix
  {
    revalidate: 604800, // 1 week in seconds
    tags: ["artist-history"], // For manual invalidation if needed
  },
);

export async function fetchArtistHistory(artistName: string) {
  // console.log("Fetching artist history for:", artistName);

  try {
    // USE the cached function instead of calling graph directly
    const result = await getCachedArtistHistory(artistName);
    // console.log("Successfully fetched (cached or fresh) for:", artistName);
    return result;
  } catch (err) {
    console.error("Error in fetchArtistHistory:", err);
    return {
      error:
        err instanceof Error ? err.message : "Failed to fetch artist history",
    };
  }
}
