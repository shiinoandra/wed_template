import { NextResponse } from "next/server";

// Cloudflare Pages Functions expose env through context
export const runtime = "edge"; // make sure it's edge compatible


export async function GET(req: Request, context: any) {
  const { results } = await context.env.DB.prepare("SELECT * FROM rsvp").all();
  return NextResponse.json(results);
}


export async function POST(req: Request, context: any) {
  try {
    const body = await req.json();
    const { name, phone, attend, comment } = body;

    // Insert into D1
    await context.env.DB.prepare(
      `INSERT INTO rsvp (name, phone, attend, comment) VALUES (?, ?, ?, ?)`
    )
      .bind(name, phone, attend, comment)
      .run();

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error saving RSVP:", error);
    return NextResponse.json(
      { success: false, error: "Failed to save" },
      { status: 500 }
    );
  }
}
