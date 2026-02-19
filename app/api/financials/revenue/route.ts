import { NextResponse } from 'next/server';

export async function GET() {
  const now = new Date();
  return NextResponse.json({ revenue: 1000000 }, { status: 200 });
}
