import { NextResponse } from "next/server";
import { getLastPlayed } from "@/app/lib/db/queries";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const track = await getLastPlayed();
    return NextResponse.json(
      { track },
      { headers: { "Cache-Control": "public, max-age=60" } }
    );
  } catch (error) {
    console.error("Error fetching last played track:", error);
    return NextResponse.json({ track: null }, { status: 500 });
  }
}
