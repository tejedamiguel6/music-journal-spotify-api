import { cookies } from "next/headers";

const SPOTIFY_API_URL = "https://api.spotify.com/v1";

async function refreshAccessToken(
  refreshToken: string
): Promise<string | null> {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
      client_id: process.env.SPOTIFY_CLIENT_ID || "",
      client_secret: process.env.SPOTIFY_CLIENT_SECRET || "",
    }),
  });

  if (!response.ok) return null;

  const data = await response.json();
  return data.access_token ?? null;
}

export async function getSpotifyData(endpoint: string) {
  const cookieStore = await cookies();
  let accessToken = cookieStore.get("spotify_access_token")?.value;

  let response = await fetch(`${SPOTIFY_API_URL}/${endpoint}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  if (response.status === 401) {
    // Access token expired — get a fresh one with the refresh token.
    // Cookies can't be written during Server Component render, so the new
    // token is only used for this request.
    const refreshToken = cookieStore.get("spotify_refresh_token")?.value;
    const newToken = refreshToken
      ? await refreshAccessToken(refreshToken)
      : null;

    if (!newToken) {
      return {
        error: "Spotify authentication expired. Log in at /api/spotify/login",
      };
    }

    accessToken = newToken;
    response = await fetch(`${SPOTIFY_API_URL}/${endpoint}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
  }

  if (response.status === 204) return null;

  return response.json();
}

export function getTrackData(trackId: string) {
  return getSpotifyData(`tracks/${trackId}`);
}
