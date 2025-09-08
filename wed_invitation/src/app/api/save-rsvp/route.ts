// import { NextResponse, NextRequest } from "next/server";

// export const runtime = "edge";

// export async function GET(
//   req: NextRequest,
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   context: any
// ) {
//   try {
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     const db = (context as any).env?.RSVP_DB;
    
//     if (!db) {
//       return NextResponse.json({ error: "DB not available" });
//     }

//     // Check if table exists
//     const tables = await db.prepare(
//       "SELECT name FROM sqlite_master WHERE type='table' AND name='rsvp'"
//     ).first();

//     if (!tables) {
//       return NextResponse.json({ 
//         error: "Table 'rsvp' does not exist",
//         suggestion: "Run your migration script"
//       });
//     }

//     // Check table schema
//     const schema = await db.prepare("PRAGMA table_info(rsvp)").all();
    
//     // Try to get existing records
//     const records = await db.prepare("SELECT * FROM rsvp LIMIT 5").all();

//     return NextResponse.json({
//       table_exists: !!tables,
//       schema: schema,
//       sample_records: records,
//       record_count: records.length
//     });

//   } catch (err) {
//     return NextResponse.json({
//       error: err instanceof Error ? err.message : String(err)
//     });
//   }
// }

// export async function POST(
//   req: NextRequest,
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   context: any
// ) {
//   try {
//     const body: {
//       name: string;
//       phone: string;
//       attend: string;
//       comment: string;
//     } = await req.json();

//     const { name, phone, attend, comment } = body;

//     // Check if context and env exist
//     if (!context) {
//       return NextResponse.json(
//         { success: false, error: "No context available" },
//         { status: 500 }
//       );
//     }

//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     const env = (context as any).env;
//     if (!env) {
//       return NextResponse.json(
//         { success: false, error: "No env in context" },
//         { status: 500 }
//       );
//     }

//     const db = env.RSVP_DB;
//     if (!db) {
//       return NextResponse.json(
//         { success: false, error: "RSVP_DB not found in env" },
//         { status: 500 }
//       );
//     }

//     // Test the database connection first
//     try {
//       const testResult = await db.prepare("SELECT 1 as test").first();
//       console.log("DB test result:", testResult);
//     } catch (dbTestError) {
//       return NextResponse.json(
//         { 
//           success: false, 
//           error: "DB connection failed", 
//           details: dbTestError instanceof Error ? dbTestError.message : String(dbTestError)
//         },
//         { status: 500 }
//       );
//     }

//     // Try the insertion
//     const result = await db
//       .prepare(
//         `INSERT INTO rsvp (name, phone, attend, comment) VALUES (?, ?, ?, ?)`
//       )
//       .bind(name, phone, attend, comment)
//       .run();

//     console.log("Insert result:", result);

//     return NextResponse.json({ 
//       success: true, 
//       result: result,
//       insertedId: result.meta?.last_row_id 
//     });

//   } catch (err) {
//     // More detailed error logging
//     const errorMessage = err instanceof Error ? err.message : String(err);
//     const errorStack = err instanceof Error ? err.stack : undefined;
    
//     console.error("Detailed error:", {
//       message: errorMessage,
//       stack: errorStack,
//       error: err
//     });

//     return NextResponse.json(
//       { 
//         success: false, 
//         error: errorMessage,
//         stack: errorStack,
//         type: typeof err
//       },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse, NextRequest } from "next/server";

export const runtime = "edge";

// Declare the global D1 database
declare const RSVP_DB: D1Database;

export async function POST(req: NextRequest) {
  try {
    const body: {
      name: string;
      phone: string;
      attend: string;
      comment: string;
    } = await req.json();

    const { name, phone, attend, comment } = body;

    // Check if global RSVP_DB is available
    if (typeof RSVP_DB === 'undefined') {
      return NextResponse.json(
        { success: false, error: "RSVP_DB global not available" },
        { status: 500 }
      );
    }

    // Test database connection
    const testResult = await RSVP_DB.prepare("SELECT 1 as test").first();
    console.log("DB test:", testResult);

    const result = await RSVP_DB
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