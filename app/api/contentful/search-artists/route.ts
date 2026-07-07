import { NextResponse } from "next/server";
import { CORS_HEADERS } from "@/app/lib/cors";
import { getSpotifyAccessToken } from "@/app/lib/spotify-token-store";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const query = url.searchParams.get("query") || "";
  const type = url.searchParams.get("type") || "artist";

  const accessToken = await getSpotifyAccessToken();

  try {
    const endpoint = `https://api.spotify.com/v1/search?q=${encodeURIComponent(
      query
    )}&type=${encodeURIComponent(type)}`;

    if (!accessToken) {
      return new NextResponse(
        JSON.stringify({
          error: `No Spotify token found. Please log in at ${
            process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
          }/api/spotify/login`,
        }),
        { status: 401, headers: CORS_HEADERS }
      );
    }

    const response = await fetch(endpoint, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    const data = await response.json();

    return new NextResponse(JSON.stringify(data), {
      status: 200,
      headers: CORS_HEADERS,
    });
  } catch (error) {
    console.error(error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return new NextResponse(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: CORS_HEADERS,
    });
  }
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS_HEADERS });
}
