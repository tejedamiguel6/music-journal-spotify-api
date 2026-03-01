import { Pool } from "pg";

const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  ssl: { rejectUnauthorized: false },
});

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

export async function getArtistTopTracks(
  artistName: string,
  limit = 13
): Promise<ArtistTrackRow[]> {
  const { rows } = await pool.query<ArtistTrackRow>(
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
  const { rows } = await pool.query<ArtistStatsRow>(
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
