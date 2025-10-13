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
  try {
    const res = await fetch(`http://localhost:8080/recently-liked`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("Incoming origin:", request.headers.get("origin!!!!***8")); // useful for debugging

    const data = await res.json();

    const uniqueGenres: string[] = [
      ...new Set(
        data.data
          .flatMap((item: { genre: string }) => item.genre.split(","))
          .map((genre: string) => genre.trim()) as string[]
      ),
    ].splice(0, 200);

    return new NextResponse(JSON.stringify(uniqueGenres), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...buildCORSHeaders(),
      },
    });
  } catch (error) {
    console.log(error, "Error fetching genres from DB");
    return new NextResponse(
      JSON.stringify({ error: "Failed to fetch genres" }),
      {
        status: 500,
        headers: buildCORSHeaders(),
      }
    );
  }
}

export function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: buildCORSHeaders(),
  });
}
