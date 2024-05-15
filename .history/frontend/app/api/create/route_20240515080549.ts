import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const formData = await request.json();

  try {
    const response = await fetch('http://localhost:8080/cars', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      return NextResponse.json({ message: 'Car created successfully' });
    } else {
      return NextResponse.json({ error: 'Error creating car' }, { status: 500 });
    }
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Error creating car' }, { status: 500 });
  }
}