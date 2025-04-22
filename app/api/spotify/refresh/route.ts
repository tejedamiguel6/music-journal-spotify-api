import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore = await cookies();
  const refreshToken = cookieStore.get("spotify_refresh_token")?.value;

  console.log("Refresh attempt - token present:", !!refreshToken);
  console.log(
    "Refresh attempt - token preview:",
    refreshToken ? `${refreshToken.substring(0, 10)}...` : null
  );

  if (!refreshToken) {
    return NextResponse.json({ error: "No refresh token found" });
  }

  try {
    const response = await fetch(`https://accounts.spotify.com/api/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: refreshToken,
        client_id: process.env.NEXT_CLIENT_ID || "",
        client_secret: process.env.NEXT_CLIENT_SECRET || "",
      }),
    });

    const data = await response.json();
    console.log("Refresh response:", data);

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to refresh token" },
        { status: response.status }
      );
    }

    // update the access token
    cookieStore.set("spotify_access_token", data.access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: data.expires_in,
      path: "/",
    });

    // update the refresh token if it was returned
    if (data.refresh_token) {
      cookieStore.set("spotify_refresh_token", data.refresh_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 30 * 24 * 60 * 60, // 30 days
        path: "/",
      });
    }

    // Always return success response whether refresh token was updated or not
    return NextResponse.json({
      success: true,
      expires_in: data.expires_in,
      access_token: data.access_token,
    });
  } catch (error) {
    console.error("Error refreshing token:", error);
    return NextResponse.json({ error: "Error refreshing token" });
  }
}
