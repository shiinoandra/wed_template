export const runtime = 'edge';

import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    // const text = await req.text(); // read raw body first
    // console.log("Raw request body:", text);

    // const body = JSON.parse(text); // parse manually
    // console.log("Parsed JSON:", body);
    const body = await req.json();
    
    const { name, phone, attend, comment } = body;

    // CSV file location (you can change folder if needed)
    const filePath = path.join(process.cwd(), "data.csv");

    // Check if file exists
    try {
      await fs.access(filePath);
    } catch {
      // File does not exist → create it with header row
      const header = "name,phone,attend,comment\n";
      await fs.writeFile(filePath, header, "utf8");
    }

    // Escape any quotes and prepare row
    const escape = (val: string) => `"${val.replace(/"/g, '""')}"`;
    const row = `${escape(name)},${escape(phone)},${escape(attend)},${escape(comment)}\n`;

    // Append the new row
    await fs.appendFile(filePath, row, "utf8");

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error saving RSVP:", error);
    return NextResponse.json(
      { success: false, error: "Failed to save" },
      { status: 500 }
    );
  }
}
