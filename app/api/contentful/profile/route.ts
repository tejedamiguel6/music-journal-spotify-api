import { NextRequest, NextResponse } from "next/server";

import { cookies } from "next/headers";

export async function GET(request: NextRequest) {
  const headers = {
    "Access-Control-Allow-Origin": "http://localhost:8000",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Credentials": "true",
  };

  try {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("spotify_access_token")?.value;
    const endpoint = `https://api.spotify.com/v1/me`;

    if (!accessToken) {
      return new NextResponse(
        JSON.stringify({
          error:
            "No Spotify token found. Please log in at http://localhost:3000/api/spotify/login",
        }),
        { status: 401, headers }
      );
    }

    const response = await fetch(endpoint, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    const data = await response.json();
    console.log("Response:-from PROFILE-->", data);
    return new NextResponse(JSON.stringify(data), { status: 200, headers });
  } catch (error: any) {
    console.log("error at profile route", error);
    return new Response(JSON.stringify({ error: error.message }));
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
