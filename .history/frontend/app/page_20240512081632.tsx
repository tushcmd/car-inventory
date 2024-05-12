//import Main from "@/components/Main";
import { Car, columns } from "@/components/Home/columns"
import { CarTable } from "@/components/Home/car-table"

async function getData(): Promise<Car[]> {
  // Fetch data from your API here.
  return [
    {
      ownerName: 'John Smith',
      make: 'Honda',
      model: 'Civic',
      carYear: 2015,
      issue: 'Engine failure',
      repairPrice: 1200,
    }
    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="page-container min-h-screen">
      <DataTable columns={columns} data={data} />
    </div>
  )
}

