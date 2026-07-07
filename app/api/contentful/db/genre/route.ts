import { NextResponse } from "next/server";
import { CORS_HEADERS } from "@/app/lib/cors";
import { BACKEND_API_URL } from "@/app/lib/backend-api";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const genre = searchParams.get("name") ?? "synthwave";

  try {
    const res = await fetch(`${BACKEND_API_URL}/genre/${genre}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();

    return new NextResponse(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json", ...CORS_HEADERS },
    });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    return new NextResponse(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: CORS_HEADERS,
    });
  }
}

export function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS_HEADERS });
}
