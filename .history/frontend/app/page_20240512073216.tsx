//import Main from "@/components/Main";
import { Payment, columns } from "@/components/Home/columns"
import { DataTable } from "@/components/Home/car-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
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

