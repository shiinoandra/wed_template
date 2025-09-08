import { NextResponse } from "next/server";
import { getRequestContext } from "@cloudflare/next-on-pages";

export const runtime = "edge"; // required for D1

export async function POST(req: Request) {
  try {
    const body: {
      name: string;
      phone: string;
      attend: string;
      comment: string;
    } = await req.json();

    const { name, phone, attend, comment } = body;

    // Correctly typed DB binding
    const db = getRequestContext().env.DB as D1Database;

    await db
      .prepare(
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
