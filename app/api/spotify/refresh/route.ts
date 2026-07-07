import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { BACKEND_API_URL } from "@/app/lib/backend-api";
import { saveTokens } from "@/app/lib/spotify-token-store";

export async function GET() {
  const cookieStore = await cookies();
  const refreshToken = cookieStore.get("spotify_refresh_token")?.value;

  // Refresh attempt logs removed for security

  if (!refreshToken) {
    return NextResponse.json({ error: "No refresh token found" });
  }

  try {
    const response = await fetch(`https://accounts.spotify.com/api/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: refreshToken,
        client_id: process.env.SPOTIFY_CLIENT_ID || "",
        client_secret: process.env.SPOTIFY_CLIENT_SECRET || "",
      }),
    });

    const data = await response.json();
    // Refresh response log removed for security

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to refresh token" },
        { status: response.status }
      );
    }

    saveTokens({
      accessToken: data.access_token,
      expiresIn: data.expires_in,
      refreshToken: data.refresh_token,
    });

    // update the access token
    cookieStore.set("spotify_access_token", data.access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: data.expires_in,
      path: "/",
    });

    // update the refresh token if it was returned
    if (data.refresh_token) {
      cookieStore.set("spotify_refresh_token", data.refresh_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 30 * 24 * 60 * 60, // 30 days
        path: "/",
      });

      // Tell the Go backend about the new refresh token
      await fetch(`${BACKEND_API_URL}/save-refresh`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refresh_token: data.refresh_token }),
      }).catch(console.error);
    }

    // Always return success response whether refresh token was updated or not
    return NextResponse.json({
      success: true,
      expires_in: data.expires_in,
      // access_token removed from response for security
    });
  } catch (error) {
    console.error("Error refreshing token:", error);
    return NextResponse.json({ error: "Error refreshing token" });
  }
}
