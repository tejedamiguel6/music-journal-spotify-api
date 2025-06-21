import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function useNowPlaying(refreshMs = 2000) {
  const { data, error } = useSWR("/api/spotify/now-playing", fetcher, {
    refreshInterval: refreshMs,
    keepPreviousData: true,
  });

  return { nowPlaying: data as SpotifyNowPlaying | null };
}
