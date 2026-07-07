import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { CORS_HEADERS } from "@/app/lib/cors";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("spotify_access_token")?.value;

    if (!accessToken) {
      return new NextResponse(
        JSON.stringify({
          error: "No Spotify token found. Please log in at /api/spotify/login",
        }),
        { status: 401, headers: CORS_HEADERS }
      );
    }

    const response = await fetch("https://api.spotify.com/v1/me", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    const data = await response.json();
    return new NextResponse(JSON.stringify(data), {
      status: 200,
      headers: CORS_HEADERS,
    });
  } catch (error: unknown) {
    console.error("Error at profile route:", error);
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
