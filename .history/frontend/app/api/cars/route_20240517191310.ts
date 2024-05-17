import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Forward the request to your backend at http://localhost:8080/cars
    const response = await fetch('http://localhost:8080/cars');

    if (!response.ok) {
      console.error('Error fetching cars:', response.status);
      return NextResponse.json({ error: 'Error fetching cars' }, { status: response.status });
    }

    const data = await response.json();
    console.log('Data received from backend:', data);

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}