import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import crypto from 'crypto';

// Generate random string helper
const generateRandomString = (length: number) => {
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const values = crypto.getRandomValues(new Uint8Array(length));
  return values.reduce((acc, x) => acc + possible[x % possible.length], "");
}

export async function GET() {
  const clientId = process.env.SPOTIFY_CLIENT_ID ?? "";
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI ?? "";

  // Generate state for CSRF protection
  const state = generateRandomString(16);

  // Store state in cookies
  const cookieStore = await cookies();
  cookieStore.set("spotify_auth_state", state, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 10 * 60, // 10 minutes
    path: "/",
  });

  // Build the authorization URL (standard flow, no PKCE)
  const params = new URLSearchParams({
    response_type: "code",
    client_id: clientId,
    scope: "user-read-private user-read-email user-library-read user-top-read user-read-currently-playing user-read-recently-played",
    redirect_uri: redirectUri,
    state: state
  });

  return NextResponse.redirect(
    `https://accounts.spotify.com/authorize?${params.toString()}`
  );
}