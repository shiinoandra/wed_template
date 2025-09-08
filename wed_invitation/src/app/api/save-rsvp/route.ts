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

    // Get Cloudflare request context
    const { env } = getRequestContext();
    
    if (!env.RSVP_DB) {
      return NextResponse.json(
        { success: false, error: "RSVP_DB not found in environment" },
        { status: 500 }
      );
    }

    const db = env.RSVP_DB;

    // Test database connection
    const testResult = await db.prepare("SELECT 1 as test").first();
    console.log("DB test:", testResult);

    const result = await db
      .prepare(
        `INSERT INTO rsvp (name, phone, attend, comment) VALUES (?, ?, ?, ?)`
      )
      .bind(name, phone, attend, comment)
      .run();

    return NextResponse.json({ success: true, result });

  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    console.error("Error:", errorMessage);
    
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}