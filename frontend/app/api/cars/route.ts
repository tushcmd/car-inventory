import { NextResponse } from 'next/server';

export async function GET() {
  // Forward the request to your backend at http://localhost:8080/cars
  const response = await fetch('http://localhost:8080/cars');

  if (response.ok) {
    const data = await response.json();
    return NextResponse.json(data);
  } else {
    return NextResponse.json({ error: 'Error fetching cars' }, { status: response.status });
  }
}