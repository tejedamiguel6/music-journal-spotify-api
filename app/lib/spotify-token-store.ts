import { cookies } from "next/headers";
import { getSpotifyRefreshToken } from "@/app/lib/db/queries";
import { saveRefreshTokenToBackend } from "@/app/lib/save-refresh-token";

// The Contentful app calls these APIs from an iframe on app.contentful.com,
// where the browser never attaches our SameSite=Lax auth cookies, so those
// requests need a Spotify token kept on the server.
//
// The long-lived refresh token lives in the database (`spotify_auth`), which
// the Go backend owns. On Cloudflare Workers memory is wiped between requests
// and there is no lasting filesystem, so the database is the only place every
// request can see. This module only ever READS that row; when Spotify issues
// a new refresh token it is handed to the backend through
// saveRefreshTokenToBackend, the same path the OAuth callback and refresh
// routes use.
//
// The short-lived access token is cached in memory: it saves a database read
// and a Spotify call while the same server instance is warm, and costs
// nothing when it isn't. Only the database path below fills this cache, never
// a visitor's cookie, so it always belongs to the account stored in the DB.

type CachedAccessToken = {
  accessToken: string | null;
  expiresAt: number;
};

// globalThis so the cache survives dev-server hot reloads, which
// re-evaluate this module.
const globalScope = globalThis as typeof globalThis & {
  __spotifyTokenStore?: CachedAccessToken;
};

const cache: CachedAccessToken = (globalScope.__spotifyTokenStore ??= {
  accessToken: null,
  expiresAt: 0,
});

async function refreshAccessToken(): Promise<string | null> {
  let refreshToken: string | null;
  try {
    refreshToken = await getSpotifyRefreshToken();
  } catch (error) {
    console.error("Couldn't read the Spotify refresh token from the database", error);
    return null;
  }
  if (!refreshToken) return null;

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
      client_id: process.env.SPOTIFY_CLIENT_ID || "",
      client_secret: process.env.SPOTIFY_CLIENT_SECRET || "",
    }),
    signal: AbortSignal.timeout(10_000),
  });

  if (!response.ok) {
    console.error(`Spotify token refresh failed (${response.status})`);
    return null;
  }

  const data = await response.json();
  if (!data.access_token) return null;

  cache.accessToken = data.access_token;
  cache.expiresAt = Date.now() + ((data.expires_in ?? 3600) - 60) * 1000;

  // Spotify occasionally rotates the refresh token. The old one may stop
  // working, so pass the new one to the backend, which owns the database row.
  if (data.refresh_token && data.refresh_token !== refreshToken) {
    await saveRefreshTokenToBackend(data.refresh_token).catch(console.error);
  }

  return data.access_token;
}

async function getStoredAccessToken(): Promise<string | null> {
  if (cache.accessToken && Date.now() < cache.expiresAt) {
    return cache.accessToken;
  }

  // No sharing of an in-flight refresh between requests: on Workers, waiting
  // on a promise started by another request can hang. A few parallel
  // refreshes right at expiry are harmless.
  return refreshAccessToken();
}

/**
 * Access token for the current request: the auth cookie when present
 * (first-party requests), otherwise the server-side store (cross-site
 * requests from the Contentful iframe, where cookies are never sent).
 */
export async function getSpotifyAccessToken(): Promise<string | null> {
  const cookieStore = await cookies();
  return (
    cookieStore.get("spotify_access_token")?.value ?? getStoredAccessToken()
  );
}
