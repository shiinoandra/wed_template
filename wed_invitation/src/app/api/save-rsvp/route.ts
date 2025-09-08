import { NextResponse, NextRequest } from "next/server";

export const runtime = "edge";

export async function POST(
  req: NextRequest,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  context: any
) {
  try {
    const body: {
      name: string;
      phone: string;
      attend: string;
      comment: string;
    } = await req.json();

    const { name, phone, attend, comment } = body;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const db = (context as any).env?.RSVP_DB;
    
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