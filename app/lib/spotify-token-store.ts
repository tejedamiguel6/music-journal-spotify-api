import { promises as fs } from "fs";
import path from "path";
import { cookies } from "next/headers";

// The Contentful app calls these APIs from an iframe on app.contentful.com,
// where the browser never attaches our SameSite=Lax auth cookies. Tokens
// captured during the OAuth callback are kept server-side so those
// cross-site requests can still authenticate.

type TokenState = {
  accessToken: string | null;
  accessTokenExpiresAt: number;
  refreshToken: string | null;
};

// globalThis so the store survives dev-server hot reloads, which
// re-evaluate this module.
const globalScope = globalThis as typeof globalThis & {
  __spotifyTokenStore?: TokenState;
};

const state: TokenState = (globalScope.__spotifyTokenStore ??= {
  accessToken: null,
  accessTokenExpiresAt: 0,
  refreshToken: null,
});

const TOKEN_FILE = path.join(process.cwd(), ".spotify-tokens.json");

export function saveTokens(tokens: {
  accessToken: string;
  expiresIn?: number;
  refreshToken?: string | null;
}) {
  state.accessToken = tokens.accessToken;
  state.accessTokenExpiresAt =
    Date.now() + ((tokens.expiresIn ?? 3600) - 60) * 1000;

  if (tokens.refreshToken) {
    state.refreshToken = tokens.refreshToken;
    // Best effort: lets the login survive a server restart. Fails on
    // read-only filesystems (e.g. Vercel), where the cookie flow applies.
    fs.writeFile(
      TOKEN_FILE,
      JSON.stringify({ refreshToken: tokens.refreshToken })
    ).catch(() => {});
  }
}

async function loadPersistedRefreshToken(): Promise<string | null> {
  try {
    const raw = await fs.readFile(TOKEN_FILE, "utf8");
    return JSON.parse(raw).refreshToken ?? null;
  } catch {
    return null;
  }
}

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
  if (!data.access_token) return null;

  saveTokens({
    accessToken: data.access_token,
    expiresIn: data.expires_in,
    refreshToken: data.refresh_token,
  });

  return data.access_token;
}

async function getStoredAccessToken(): Promise<string | null> {
  if (state.accessToken && Date.now() < state.accessTokenExpiresAt) {
    return state.accessToken;
  }

  const refreshToken =
    state.refreshToken ?? (await loadPersistedRefreshToken());
  if (!refreshToken) return null;

  state.refreshToken = refreshToken;
  return refreshAccessToken(refreshToken);
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
