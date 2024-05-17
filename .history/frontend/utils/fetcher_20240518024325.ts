// fetcher.ts
const fetcher = async (url: string) => {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('An error occurred while fetching the data.');
    }
    return await response.json();
  };
  
  export default fetcher;