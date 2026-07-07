import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { BACKEND_API_URL } from "@/app/lib/backend-api";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get("code");
  const state = searchParams.get("state");

  // Get stored values from cookies
  const cookieStore = await cookies();
  const storedState = cookieStore.get("spotify_auth_state")?.value;

  if (!state || state !== storedState) {
    return NextResponse.redirect(
      new URL("/auth-error?error=state_mismatch", request.url)
    );
  }

  try {
    // Exchange code for tokens (standard flow with client_secret)
    const tokenResponse = await fetch(
      "https://accounts.spotify.com/api/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          grant_type: "authorization_code",
          code: code || "",
          redirect_uri: process.env.SPOTIFY_REDIRECT_URI || "",
          client_id: process.env.SPOTIFY_CLIENT_ID || "",
          client_secret: process.env.SPOTIFY_CLIENT_SECRET || "",
        }),
      }
    );

    const tokenData = await tokenResponse.json();

    // Store access token
    cookieStore.set("spotify_access_token", tokenData.access_token, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: tokenData.expires_in,
      path: "/",
    });

    // Store refresh token if available
    if (tokenData.refresh_token) {
      cookieStore.set("spotify_refresh_token", tokenData.refresh_token, {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });

      try {
        // Send refresh token to Go backend
        await fetch(`${BACKEND_API_URL}/save-refresh`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ refresh_token: tokenData.refresh_token }),
        });
      } catch (error) {
        console.error("Error saving refresh token to Go backend:", error);
      }
    }

    // Token data log removed for security

    // Use environment variable for redirect URL instead of hardcoded value
    return NextResponse.redirect(
      new URL(
        process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000/",
        request.url
      )
    );
  } catch (error) {
    console.error("Authentication error:", error);
    return NextResponse.redirect(
      new URL("/auth-error?error=server_error", request.url)
    );
  }
}
