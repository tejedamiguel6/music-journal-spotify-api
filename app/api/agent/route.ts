import { NextRequest, NextResponse } from "next/server";

import { graph } from "@/app/lib/sql-qa/graph";

export async function POST(req: NextRequest) {
  try {
    const { question } = await req.json();
    console.log("▶︎ incoming Q:", question); // <— add

    const result = await graph.invoke({ question });
    console.log("✔︎ SQL:", result.query); // <— add
    console.log("✔︎ Answer:", result.answer); // <— add

    return NextResponse.json({ answer: result.answer });
  } catch (err) {
    console.error("✖︎ Route error", err); // <— add
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
