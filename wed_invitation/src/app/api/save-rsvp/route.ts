import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(req: Request, context: any) {
  try {
    const body: {
      name: string;
      phone: string;
      attend: string;
      comment: string;
    } = await req.json();

    const { name, phone, attend, comment } = body;

    // Use your D1 binding (variable name must match Cloudflare dashboard binding)
    await context.env.RSVP_DB
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
