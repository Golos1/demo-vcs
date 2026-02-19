import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ debt: 5000000 }, { status: 200 });
}
