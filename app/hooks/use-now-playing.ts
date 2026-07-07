import useSWR from "swr";
import { BACKEND_API_URL } from "@/app/lib/backend-api";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export interface NowPlayingTrack {
  name: string;
  artists: string[];
  albumName?: string;
  albumImageUrl?: string;
  durationMs: number;
  progressMs: number;
  isPlaying: boolean;
  spotifyUrl?: string;
}

interface SpotifyArtist {
  name: string;
}

// Shape of the Spotify "currently playing" object proxied by the Go backend
interface RawNowPlaying {
  is_playing?: boolean;
  progress_ms?: number;
  item?: {
    name: string;
    duration_ms?: number;
    artists?: SpotifyArtist[];
    external_urls?: { spotify?: string };
    album?: {
      name?: string;
      artists?: SpotifyArtist[];
      images?: Array<{ url: string }>;
    };
  };
}

export default function useNowPlaying(refreshMs = 2000) {
  const { data, isLoading } = useSWR(
    `${BACKEND_API_URL}/now-listening-to`,
    fetcher,
    {
      refreshInterval: refreshMs,
      keepPreviousData: true,
    }
  );

  const raw: RawNowPlaying | null = data?.data ?? null;
  const item = raw?.item;

  const track: NowPlayingTrack | null = item
    ? {
        name: item.name,
        artists: (item.artists ?? item.album?.artists ?? []).map(
          (artist) => artist.name
        ),
        albumName: item.album?.name,
        albumImageUrl: item.album?.images?.[0]?.url,
        durationMs: item.duration_ms ?? 0,
        progressMs: raw?.progress_ms ?? 0,
        isPlaying: raw?.is_playing ?? true,
        spotifyUrl: item.external_urls?.spotify,
      }
    : null;

  return { track, isLoading };
}

export interface LastPlayedTrack {
  track_name: string;
  artist_name: string;
  album_name: string;
  album_cover_url: string | null;
  genre: string | null;
  played_at_ms: number;
}

/** Fallback for when nothing is playing: latest row from the Neon DB. */
export function useLastPlayed(enabled: boolean) {
  const { data, isLoading } = useSWR(
    enabled ? "/api/last-played" : null,
    fetcher,
    {
      refreshInterval: 60_000,
      keepPreviousData: true,
    }
  );

  return {
    lastPlayed: (data?.track ?? null) as LastPlayedTrack | null,
    isLoading: enabled && isLoading,
  };
}
