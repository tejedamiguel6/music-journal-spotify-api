import { NextResponse } from "next/server";

const ALLOWED_ORIGIN =
  process.env.CONTENTFUL_APP_URL || "http://localhost:8000";

const buildCORSHeaders = () => ({
  "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Credentials": "true",
});

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const genre = searchParams.get("name") ?? "synthwave";

  console.log("Incoming origin:", request.headers.get("origin")); // useful for debugging

  try {
    const res = await fetch(`https://api-spotify-tracks.mtejeda.co/genre/${genre}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    return new NextResponse(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...buildCORSHeaders(),
      },
    });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    return new NextResponse(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: buildCORSHeaders(),
    });
  }
}

export function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: buildCORSHeaders(),
  });
}
