//import Main from "@/components/Main";
import { Car, columns } from "@/components/Home/columns"
import { CarTable } from "@/components/Home/car-table"

async function getData(): Promise<Car[]> {
  // Fetch data from your API here.
  const response = await fetch(`http://localhost:8080/cars`);
  const data = await response.json();
  return data;
};


export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="page-container min-h-screen">
      <CarTable columns={columns} data={data} />
    </div>
  )
}

