import EditCar from "@/components/edit-car";
import { Car } from "@/components/Home/columns";

interface FetchedData {
    count: number;
    data: {
      _id: string;
      ownerName: string;
      make: string;
      model: string;
      carYear: number;
      issue: string;
      repairPrice: number;
      createdAt: string;
      updatedAt: string;
      __v: number;
    }[];
  }
  
  //  GET request options
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  };
  
  async function getData(): Promise<Car[]> {
    const response = await fetch(`http://localhost:8080/cars`, requestOptions);
    const data: FetchedData = await response.json();
  
    // Map the fetched data to the expected Car type
    const mappedData: Car[] = data.data.map((item) => ({
      ownerName: item.ownerName,
      make: item.make,
      model: item.model,
      carYear: item.carYear,
      issue: item.issue,
      repairPrice: item.repairPrice,
    }));
  
    return mappedData;
  }

export default function Create() {
    return (
        <div className="create-edit-page-container min-h-screen">
            
            <EditCar data={mappedData}/>
        </div>
    )
}