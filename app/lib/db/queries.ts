import { Client, type QueryResultRow } from "pg";

// One connection per query. Cloudflare Workers can't reuse a socket opened
// during a different request, so a shared module-level Pool works for the
// first request and then hangs. A short-lived Client avoids that and behaves
// the same under `next dev`.
async function query<T extends QueryResultRow>(
  text: string,
  values?: unknown[]
): Promise<{ rows: T[] }> {
  const client = new Client({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    ssl: { rejectUnauthorized: false },
  });
  await client.connect();
  try {
    return await client.query<T>(text, values);
  } finally {
    await client.end().catch(() => {});
  }
}

export interface ArtistTrackRow {
  track_name: string;
  album_name: string;
  album_cover_url: string | null;
  played_at: string;
  play_count: number;
}

export interface ArtistStatsRow {
  total_plays: number;
  unique_tracks: number;
  unique_albums: number;
  first_play: string;
  last_play: string;
}

export interface LastPlayedRow {
  track_name: string;
  artist_name: string;
  album_name: string;
  album_cover_url: string | null;
  genre: string | null;
  played_at_ms: number;
}

export async function getLastPlayed(): Promise<LastPlayedRow | null> {
  // album_cover_url is often null in recently_played, so fall back to any
  // cover recorded for the same track (recently_played first, then
  // recently_liked, which reliably has covers).
  const { rows } = await query<LastPlayedRow>(
    `SELECT
      rp.track_name,
      rp.artist_name,
      rp.album_name,
      rp.genre,
      EXTRACT(EPOCH FROM rp.played_at)::float8 * 1000 AS played_at_ms,
      COALESCE(
        rp.album_cover_url,
        (SELECT album_cover_url FROM recently_played
          WHERE track_name = rp.track_name AND album_cover_url IS NOT NULL
          ORDER BY played_at DESC LIMIT 1),
        (SELECT album_cover_url FROM recently_liked
          WHERE track_name = rp.track_name AND album_cover_url IS NOT NULL
          LIMIT 1)
      ) AS album_cover_url
    FROM recently_played rp
    ORDER BY rp.played_at DESC
    LIMIT 1`
  );
  return rows[0] ?? null;
}

export async function getArtistTopTracks(
  artistName: string,
  limit = 13
): Promise<ArtistTrackRow[]> {
  const { rows } = await query<ArtistTrackRow>(
    `SELECT
      track_name,
      album_name,
      MAX(album_cover_url) as album_cover_url,
      MAX(played_at)::text as played_at,
      COUNT(*)::int as play_count
    FROM recently_played
    WHERE artist_name ILIKE $1
    GROUP BY track_name, album_name
    ORDER BY play_count DESC
    LIMIT $2`,
    [artistName, limit]
  );
  return rows;
}

export async function getArtistStats(
  artistName: string
): Promise<ArtistStatsRow> {
  const { rows } = await query<ArtistStatsRow>(
    `SELECT
      COUNT(*)::int as total_plays,
      COUNT(DISTINCT track_name)::int as unique_tracks,
      COUNT(DISTINCT album_name)::int as unique_albums,
      MIN(played_at)::text as first_play,
      MAX(played_at)::text as last_play
    FROM recently_played
    WHERE artist_name ILIKE $1`,
    [artistName]
  );
  return rows[0];
}

/**
 * All-time recorded plays per artist, for a list of artist names.
 * Keys are lowercased names. Artists with no recorded plays are absent.
 */
export async function getArtistPlayCounts(
  artistNames: string[]
): Promise<Map<string, number>> {
  if (artistNames.length === 0) return new Map();
  const { rows } = await query<{ name: string; plays: number }>(
    `SELECT LOWER(artist_name) AS name, COUNT(*)::int AS plays
    FROM recently_played
    WHERE LOWER(artist_name) = ANY($1)
    GROUP BY LOWER(artist_name)`,
    [artistNames.map((name) => name.toLowerCase())]
  );
  return new Map(rows.map((row) => [row.name, row.plays]));
}

/**
 * All-time recorded plays per genre. A play tagged "darkwave, post-punk"
 * counts once for each genre. Keys are lowercased, trimmed genre names.
 */
export async function getGenrePlayCounts(): Promise<Map<string, number>> {
  const { rows } = await query<{ genre: string; plays: number }>(
    `SELECT LOWER(TRIM(g)) AS genre, COUNT(*)::int AS plays
    FROM recently_played, UNNEST(STRING_TO_ARRAY(genre, ',')) AS g
    WHERE genre IS NOT NULL AND genre <> ''
    GROUP BY LOWER(TRIM(g))`
  );
  return new Map(rows.map((row) => [row.genre, row.plays]));
}
