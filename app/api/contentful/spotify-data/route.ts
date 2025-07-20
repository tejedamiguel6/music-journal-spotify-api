import NodeCache from "node-cache";
import { NextResponse } from "next/server";

const cache = new NodeCache({ stdTTL: 60 }); // 1-minute cache

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "http://localhost:8000",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Credentials": "true",
};

function buildResponse(body, status, extra = {}) {
  return new NextResponse(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...CORS_HEADERS, ...extra },
  });
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type") ?? "recent-tracks";

    // 👉 read cookie straight from the NextRequest
    const accessToken = request.cookies.get("spotify_access_token")?.value;
    if (!accessToken) {
      return buildResponse(
        { error: "No Spotify token. Log in at /api/spotify/login" },
        401
      );
    }

    /* ------------------------------------------------------------------ */
    /*  1. Cache key: user token + type                                   *
    /* ------------------------------------------------------------------ */
    const cacheKey = `${accessToken.slice(0, 12)}:${type}`; // slice to avoid huge keys
    const cached = cache.get(cacheKey);
    if (cached) return buildResponse(cached, 200, { "X-Cache": "HIT" });

    /* ------------------------------------------------------------------ */
    /*  2. Choose Spotify endpoint                                        */
    /* ------------------------------------------------------------------ */
    let endpoint = "https://api.spotify.com/v1/me/";
    switch (type) {
      case "top-tracks":
        endpoint += "top/tracks?limit=40";
        break;
      case "top-artists":
        endpoint += "top/artists?limit=20";
        break;
      default:
        endpoint += "player/recently-played?limit=50";
    }

    /* ------------------------------------------------------------------ */
    /*  3. Forward request                                                */
    /* ------------------------------------------------------------------ */
    const res = await fetch(endpoint, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    if (res.status === 429) {
      const retry = res.headers.get("Retry-After") ?? "60";
      return buildResponse(
        { error: "Rate-limited by Spotify. Try again later." },
        429,
        { "Retry-After": retry }
      );
    }
    if (!res.ok) {
      return buildResponse(
        { error: `Spotify API error: ${res.status}` },
        res.status
      );
    }

    const data = await res.json();
    cache.set(cacheKey, data); // store result
    return buildResponse(data, 200, { "X-Cache": "MISS" });
  } catch (err) {
    console.error("spotify-data route error:", err);
    return buildResponse({ error: err.message }, 500);
  }
}

/* -------- CORS pre-flight ------------------------------------------- */
export function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS_HEADERS });
}
