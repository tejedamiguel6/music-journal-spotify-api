// Server-only: forwards a new Spotify refresh token to the Go backend.
// BACKEND_API_KEY must stay server-side (never NEXT_PUBLIC_), because the
// backend uses it to protect write endpoints such as /save-refresh.
import { BACKEND_API_URL } from "@/app/lib/backend-api";

export async function saveRefreshTokenToBackend(refreshToken: string) {
  const apiKey = process.env.BACKEND_API_KEY;
  if (!apiKey) {
    console.error("BACKEND_API_KEY is not set; refresh token not saved to backend");
    return;
  }

  const res = await fetch(`${BACKEND_API_URL}/save-refresh`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-API-Key": apiKey },
    body: JSON.stringify({ refresh_token: refreshToken }),
  });
  if (!res.ok) {
    console.error(`Backend rejected refresh token save (${res.status})`);
  }
}
