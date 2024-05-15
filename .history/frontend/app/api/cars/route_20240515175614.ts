//import { NextResponse } from 'next/server';
//
//export async function GET() {
//  // Forward the request to your backend at http://localhost:8080/cars
//  const response = await fetch('http://localhost:8080/cars');
//
//  if (response.ok) {
//    const data = await response.json();
//    return NextResponse.json(data);
//  } else {
//    return NextResponse.json({ error: 'Error fetching cars' }, { status: response.status });
//  }
//}
//
import { NextResponse } from 'next/server';

export async function GET(request: Request) {

  try {
    const response = await fetch('http://localhost:8080/cars', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      return NextResponse.json({ message: 'Car created successfully' });
    } else {
      return NextResponse.json({ error: 'Error fetching car' }, { status: 500 });
    }
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Error creating car' }, { status: 500 });
  }
}