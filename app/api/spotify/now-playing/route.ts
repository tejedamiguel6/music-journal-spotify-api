// app/api/spotify/now-playing/route.ts
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // disable ISR / caching

async function fetchNowPlaying(accessToken: string) {
  return fetch("https://api.spotify.com/v1/me/player/currently-playing", {
    headers: { Authorization: `Bearer ${accessToken}` },
    cache: "no-store",
  });
}

export async function GET() {
  const cookieStore = await cookies();
  let accessToken = cookieStore.get("spotify_access_token")?.value;

  if (!accessToken) {
    return NextResponse.json({ error: "No access token" }, { status: 401 });
  }

  let res = await fetchNowPlaying(accessToken);

  if (res.status === 401) {
    const refresh = await fetch("http://localhost:3000/api/spotify/refresh", {
      method: "GET",
      credentials: "include",
    });

    if (!refresh.ok) {
      const { error } = await refresh.json();
      return NextResponse.json(
        { error: "Failed to refresh token: " + error },
        { status: refresh.status }
      );
    }

    accessToken = (await refresh.json()).access_token;
    res = await fetchNowPlaying(accessToken);
  }

  if (res.status === 204) return NextResponse.json(null); // nothing playing

  const data = res.status === 204 ? null : await res.json();
  return NextResponse.json(data); // 200
}
