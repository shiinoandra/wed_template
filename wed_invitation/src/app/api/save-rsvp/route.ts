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

      // Generate readable timestamp
      const now = new Date();
      const timestamp = now.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }); 
      // Example: "09 September 2025"

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
        `INSERT INTO guest (name, phone, attend, comment,timestamp) VALUES (?, ?, ?, ?)`
      )
      .bind(name, phone, attend, comment,timestamp)
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

export async function GET(req: NextRequest) {
  try {
    // Get Cloudflare request context
    const { env } = getRequestContext();
    if (!env.RSVP_DB) {
      return NextResponse.json(
        { success: false, error: "RSVP_DB not found in environment" },
        { status: 500 }
      );
    }

    const db = env.RSVP_DB;

    // Fetch all RSVP records
    const rsvps = await db
      .prepare("SELECT * FROM guest")
      .all();

    // Get total count
    const countResult = await db
      .prepare("SELECT COUNT(*) as total FROM guest")
      .first();

    return NextResponse.json({
      success: true,
      data: rsvps.results,
      total: countResult?.total || 0,
      count: rsvps.results?.length || 0
    });

  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    console.error("Error fetching RSVPs:", errorMessage);
    
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}