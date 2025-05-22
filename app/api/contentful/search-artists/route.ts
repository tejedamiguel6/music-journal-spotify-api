import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const query = url.searchParams.get("query") || "";
  const type = url.searchParams.get("type") || "artist";

  console.log("Query:--->", query);
  console.log("Type:--->", type);

  console.log("Incoming request from origin:", request.headers.get("origin"));
  const headers = {
    "Access-Control-Allow-Origin": process.env.CONTENTFUL_APP_URL || "http://localhost:8000", // allow Contentful App dev server
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Credentials": "true",
  };

  const cookieStore = await cookies();
  const accessToken = cookieStore.get("spotify_access_token")?.value;
  // Access token log removed for security

  try {
    // make this only for artist so delete the type
    const endpoint = `https://api.spotify.com/v1/search?q=${query}&type=${type}`;

    if (!accessToken) {
      return new NextResponse(
        JSON.stringify({
          error:
            `No Spotify token found. Please log in at ${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/api/spotify/login`,
        }),
        { status: 401, headers }
      );
    }

    const response = await fetch(endpoint, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    const data = await response.json();

    // console.log("Response:-from SEARCH-->", data);

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
      "Access-Control-Allow-Origin": process.env.CONTENTFUL_APP_URL || "http://localhost:8000",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Credentials": "true",
    },
  });
}
