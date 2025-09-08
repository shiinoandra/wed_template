import { NextResponse, NextRequest } from "next/server";
import { getRequestContext } from "@cloudflare/next-on-pages";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  try {
    const body: {
      name: string;
      phone: string;
      attend: string;
      comment: string;
    } = await req.json();

    const { name, phone, attend, comment } = body;

    // Get Cloudflare context
    const { env } = getRequestContext();
    const db = env.RSVP_DB as D1Database;

    await db
      .prepare(
        `INSERT INTO rsvp (name, phone, attend, comment) VALUES (?, ?, ?, ?)`
      )
      .bind(name, phone, attend, comment)
      .run();

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error saving RSVP:", err);
    return NextResponse.json(
      { success: false, error: "Failed to save RSVP" },
      { status: 500 }
    );
  }
}