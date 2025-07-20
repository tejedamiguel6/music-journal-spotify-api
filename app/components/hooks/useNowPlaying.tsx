import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function useNowPlaying(refreshMs = 2000) {
  const { data, error } = useSWR(
    "http://localhost:8080/now-listening-to",
    fetcher,
    {
      refreshInterval: refreshMs,
      keepPreviousData: true,
    },
  );

  return { nowPlaying: data as SpotifyNowPlaying | null };
}
