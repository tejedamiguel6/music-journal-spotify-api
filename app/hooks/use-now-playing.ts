import useSWR from "swr";
import { BACKEND_API_URL } from "@/app/lib/backend-api";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function useNowPlaying(refreshMs = 2000) {
  const { data } = useSWR(`${BACKEND_API_URL}/now-listening-to`, fetcher, {
    refreshInterval: refreshMs,
    keepPreviousData: true,
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return { nowPlaying: data as any };
}
