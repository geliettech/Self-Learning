import { NextResponse } from "next/server";

// GET Method
export async function GET() {
  return NextResponse.json({ message: "Hello from API!" });
}

// POST method
export async function POST(req: Request) {
  const data = await req.json();
  const { name, age } = data;

  return NextResponse.json({
    message: `Hello ${name}, this was sent from api`,
  });
}
