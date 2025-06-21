import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // Ensures the function is always fresh

export default async function getCurrentlyPlaying() {
  const cookieStore = await cookies();
  let accessToken = cookieStore.get("spotify_access_token")?.value;

  let response = await fetch(
    `https://api.spotify.com/v1/me/player/currently-playing`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  if (response.status === 401) {
    console.log("Token expired, refreshing token...");

    const refreshResponse = await fetch(
      "http://localhost:3000/api/spotify/refresh",
      {
        method: "GET",
        credentials: "include",
      }
    );

    if (!refreshResponse.ok) {
      const errorData = await refreshResponse.json();
      return NextResponse.json(
        { error: "Failed to refresh token: " + errorData.error },
        { status: refreshResponse.status }
      );
    }

    const refreshData = await refreshResponse.json();
    accessToken = refreshData.access_token;
    console.log("New access token: FROM GET-TOP-ARTIST FILE", accessToken);

    response = await fetch(
      `https://api.spotify.com/v1/me/player/currently-playing`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    console.log("response from fetch GET-TOP-ARTIST", response);
  }

  if (response.status === 204) {
    return {
      message: "No track is currently playing",
    };
  }
  return response.json();
}
