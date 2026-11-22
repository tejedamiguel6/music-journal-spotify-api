import { NextResponse } from "next/server";
import { CORS_HEADERS } from "@/app/lib/cors";
import { getArtistStats, getArtistTopTracks } from "@/app/lib/db/queries";

// Listening stats for one artist, for the Contentful app's entry sidebar.
// Read-only: two SELECTs against recently_played, the same queries the
// website's artist page uses, so the numbers match.

const TOP_TRACKS = 3;

function json(body: unknown, status = 200) {
  return NextResponse.json(body, { status, headers: CORS_HEADERS });
}

export async function GET(request: Request) {
  const name = new URL(request.url).searchParams.get("name")?.trim();
  if (!name) return json({ error: "Missing artist name" }, 400);
  if (name.length > 200) return json({ error: "Artist name too long" }, 400);

  // The queries match with ILIKE; escape its wildcards so "%" can't match
  // every artist.
  const pattern = name.replace(/[\\%_]/g, (c) => `\\${c}`);

  try {
    const [stats, tracks] = await Promise.all([
      getArtistStats(pattern),
      getArtistTopTracks(pattern, TOP_TRACKS),
    ]);

    return json({
      artist: name,
      totalPlays: stats?.total_plays ?? 0,
      uniqueTracks: stats?.unique_tracks ?? 0,
      uniqueAlbums: stats?.unique_albums ?? 0,
      firstPlay: stats?.first_play ?? null,
      lastPlay: stats?.last_play ?? null,
      topTracks: tracks.map((t) => ({
        track: t.track_name,
        album: t.album_name,
        coverUrl: t.album_cover_url,
        plays: t.play_count,
      })),
    });
  } catch (error) {
    console.error("artist-stats failed", error);
    return json({ error: "Couldn't load listening stats" }, 500);
  }
}

export function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS_HEADERS });
}
