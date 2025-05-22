import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get("code");
  const state = searchParams.get("state");

  // Get stored values from cookies
  const cookieStore = await cookies(); // ✅ no await here
  const storedState = cookieStore.get("spotify_auth_state")?.value;
  const codeVerifier = cookieStore.get("spotify_code_verifier")?.value;

  if (!state || state !== storedState) {
    return NextResponse.redirect(
      new URL("/auth-error?error=state_mismatch", request.url)
    );
  }

  try {
    // Exchange code for tokens
    const tokenResponse = await fetch(
      "https://accounts.spotify.com/api/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          client_id: process.env.NEXT_CLIENT_ID,
          grant_type: "authorization_code",
          code,
          redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI,
          code_verifier: codeVerifier,
        }),
      }
    );

    const tokenData = await tokenResponse.json();

    // Store access token
    cookieStore.set("spotify_access_token", tokenData.access_token, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
      maxAge: tokenData.expires_in,
      path: "/",
    });

    // Store refresh token if available
    if (tokenData.refresh_token) {
      cookieStore.set("spotify_refresh_token", tokenData.refresh_token, {
        httpOnly: true,
        sameSite: "none",
        secure: true,
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
    }

    // Token data log removed for security

    // Use environment variable for redirect URL instead of hardcoded value
    return NextResponse.redirect(
      new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000/", request.url)
    );
  } catch (error) {
    console.error("Authentication error:", error);
    return NextResponse.redirect(
      new URL("/auth-error?error=server_error", request.url)
    );
  }
}
