// /app/api/prices/[location]/route.ts
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { location: string } } // Destructuring params to get the location from the dynamic route
) {

  const priceData: { [key: string]: number } = {
    'NewYork': 200,
    'LosAngeles': 180,
    'Chicago': 150,
  };

  const price = priceData["NewYork"] || 100; // Fallback to 100 if the location is not found
  return NextResponse.json({ price });
}
