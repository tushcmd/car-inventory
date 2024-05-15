export async function POST() {
    const res = await fetch('http://localhost:8080/', {
      headers: {
        'Content-Type': 'application/json',
      },
    })
   
    return Response.json({ data })
  }