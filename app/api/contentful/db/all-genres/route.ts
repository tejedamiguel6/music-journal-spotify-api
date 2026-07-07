import { NextResponse } from "next/server";
import { CORS_HEADERS } from "@/app/lib/cors";
import { BACKEND_API_URL } from "@/app/lib/backend-api";

export async function GET() {
  try {
    const res = await fetch(`${BACKEND_API_URL}/recently-liked`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": process.env.NEXT_PUBLIC_SPOTIFY_BACKEND_API_KEY || "",
      },
    });

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
      headers: { "Content-Type": "application/json", ...CORS_HEADERS },
    });
  } catch (error) {
    console.error("Error fetching genres from backend", error);
    return new NextResponse(
      JSON.stringify({ error: "Failed to fetch genres" }),
      { status: 500, headers: CORS_HEADERS }
    );
  }
}

export function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS_HEADERS });
}
