import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ share_price: 50 }, { status: 200 });
}
