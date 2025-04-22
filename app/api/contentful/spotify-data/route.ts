// app/api/contentful/spotify-data/route.js
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request) {
  const headers = {
    "Access-Control-Allow-Origin": "http://localhost:8000",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Credentials": "true",
  };

  try {
    const url = new URL(request.url);

    console.log(url, "this is the URL");
    const dataType = url.searchParams.get("type") || "recent-tracks";

    // Get token directly from cookies
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("spotify_access_token")?.value;

    // console.log("Access Token:--->", accessToken);

    if (!accessToken) {
      return new NextResponse(
        JSON.stringify({
          error:
            "No Spotify token found. Please log in at http://localhost:3000/api/spotify/login",
        }),
        { status: 401, headers }
      );
    }

    // Choose Spotify endpoint based on dataType
    let endpoint = "https://api.spotify.com/v1/me/";
    if (dataType === "top-tracks") {
      endpoint = "https://api.spotify.com/v1/me/top/tracks?limit=20";
    }

    if (dataType === "top-artists") {
      endpoint = "https://api.spotify.com/v1/me/top/artists?limit=20";
    }

    // Forward the request to Spotify
    const response = await fetch(endpoint, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    if (!response.ok) {
      return new NextResponse(
        JSON.stringify({ error: `Spotify API error: ${response.status}` }),
        { status: response.status, headers }
      );
    }

    const data = await response.json();
    return new NextResponse(JSON.stringify(data), { status: 200, headers });
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
      headers,
    });
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:8000",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Credentials": "true",
    },
  });
}
