import useSWR from "swr";
import { BACKEND_API_URL } from "@/app/lib/backend-api";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Calendar request failed (${res.status})`);
  return res.json();
};

export interface CalendarDay {
  date: string; // YYYY-MM-DD
  play_count: number;
  total_ms: number;
  top_song_id: string;
  top_track_name: string;
  top_artist_name: string;
  album_cover_url: string;
}

interface CalendarResponse {
  from: string;
  to: string;
  days: CalendarDay[];
}

function lastDayOfMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function pad(n: number): string {
  return String(n).padStart(2, "0");
}

/** Fetches one month of per-day listening data (month is 0-indexed). */
export default function useListeningCalendar(year: number, month: number) {
  const from = `${year}-${pad(month + 1)}-01`;
  const to = `${year}-${pad(month + 1)}-${pad(lastDayOfMonth(year, month))}`;

  const { data, error, isLoading } = useSWR<CalendarResponse>(
    `${BACKEND_API_URL}/calendar?from=${from}&to=${to}`,
    fetcher,
    { keepPreviousData: true, revalidateOnFocus: false },
  );

  // Key days by date string for O(1) lookup while rendering the grid
  const dayMap = new Map<string, CalendarDay>();
  for (const day of data?.days ?? []) {
    dayMap.set(day.date, day);
  }

  return { dayMap, error, isLoading };
}
