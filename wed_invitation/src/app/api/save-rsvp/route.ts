import { NextResponse, NextRequest } from "next/server";

export const runtime = "edge";

// Define the Cloudflare context interface
interface CloudflareContext {
  env: {
    RSVP_DB: D1Database;
  };
  params: Promise<Record<string, string>>;
}

export async function POST(
  req: NextRequest,
  context: CloudflareContext
) {
  try {
    const body: {
      name: string;
      phone: string;
      attend: string;
      comment: string;
    } = await req.json();

    const { name, phone, attend, comment } = body;

    // Access the D1 database from the Cloudflare environment
    const db = context.env.RSVP_DB;
    
    if (!db) {
      throw new Error("Database not available");
    }

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