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
    },
    {
      ownerName: 'Emily Johnson',
      make: 'Toyota',
      model: 'Camry',
      carYear: 2018,
      issue: 'Brake pad replacement',
      repairPrice: 450
    },
    { 
      ownerName: 'Michael Williams', 
      make: 'Ford', 
      model: 'F-150', 
      carYear: 2012, 
      issue: 'Transmission repair', 
      repairPrice: 800 
    },
    { ownerName: 'Jessica Davis', make: 'Nissan', model: 'Altima', carYear: 2020, issue: 'Flat tire', repairPrice: 300 },
    { ownerName: 'David Thompson', make: 'Chevrolet', model: 'Silverado', carYear: 2014, issue: 'Engine overhaul', repairPrice: 1500 },
    { ownerName: 'Sarah Wilson', make: 'Honda', model: 'CR-V', carYear: 2017, issue: 'Oil change', repairPrice: 200 },
    { ownerName: 'Daniel Anderson', make: 'Ford', model: 'Mustang', carYear: 2016, issue: 'Suspension repair', repairPrice: 950 },
    { ownerName: 'Olivia Martinez', make: 'Toyota', model: 'RAV4', carYear: 2019, issue: 'Clutch replacement', repairPrice: 650 },
    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="page-container min-h-screen">
      <CarTable columns={columns} data={data} />
    </div>
  )
}

