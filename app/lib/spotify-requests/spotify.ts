import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function getSpotifyData(endpoint: string) {
  const cookieStore = await cookies();
  let accessToken = cookieStore.get("spotify_access_token")?.value;

  // first attempt with current token
  let response = await fetch(`https://api.spotify.com/v1/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (response.status === 401) {
    console.log("Token expired, refreshing token...");

    // call our refresh token
    const refreshResponse = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/api/spotify/refresh`,
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

    // get the new access token
    const refreshData = await refreshResponse.json();
    accessToken = refreshData.access_token;
    // Access token log removed for security

    // try again with the new token
    response = await fetch(`https://api.spotify.com/v1/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }

  return response.json();
}
