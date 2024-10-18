// app/api/prices/[location]/route.ts
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const location = searchParams.get('location');

  const priceData: { [key: string]: number } = {
    'NewYork': 200,
    'LosAngeles': 180,
    'Chicago': 150,
  };

  const price = priceData[location || 'NewYork'] || 100;
  return NextResponse.json({ price });
}
