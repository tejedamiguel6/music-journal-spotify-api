import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function useNowPlaying(refreshMs = 2000) {
  ///https://api-spotify-tracks.mtejeda.co/now-listening-to
  const { data } = useSWR(
    "https://api-spotify-tracks.mtejeda.co/now-listening-to",
    fetcher,
    {
      refreshInterval: refreshMs,
      keepPreviousData: true,
    }
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return { nowPlaying: data as any };
}
