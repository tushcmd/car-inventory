
"use client"

import { ColumnDef } from "@tanstack/react-table"

import { ArrowUpDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { useRouter } from "next/router"
import { toast } from "../ui/use-toast"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.



export type Car = {
  id: string,
  ownerName: string,
  make: string,
  model: string,
  carYear: number,
  issue: string,
  repairPrice: number
}

const useCarActions = (car: Car) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleEditClick = () => {
    router.push(`/cars/edit/${car.id}`);
  };

  const handleDelete = async () => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:8080/cars/${car.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        toast({
          title: 'Car Deleted',
          description: 'Car Deleted successfully',
        });
        router.refresh(); // Refresh the page after successful deletion
      } else {
        toast({
          title: 'Error',
          description: 'Error deleting car',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Error deleting car',
        variant: 'destructive',
      });
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { handleEditClick, handleDelete, loading };
};

export const columns: ColumnDef<Car>[] = [
  {
    accessorKey: "ownerName",
    header: "Owner",
  },
  {
    accessorKey: "make",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Make
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "model",
    header: "Model",
  },
  {
    accessorKey: "carYear",
    header: "Car Year",
  },
  {
    accessorKey: "issue",
    header: "Issue",
  },
  {
    accessorKey: "repairPrice",
    header: () => <div className="text-right">Repair Price</div>,
    cell: ({ row }) => {
      const repairPrice = parseFloat(row.getValue("repairPrice"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(repairPrice)

      return <div className="text-right font-medium">{formatted}</div>
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {/*<DropdownMenuLabel>Actions</DropdownMenuLabel>*/}
            <DropdownMenuItem
            //onClick={() => navigator.clipboard.writeText(payment.id)}
            //onClick={() router.push('/')}
            >
              Edit
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Delete</DropdownMenuItem>
            {/*<DropdownMenuItem>View payment details</DropdownMenuItem>*/}
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]


{/*

"use client"

import { ColumnDef } from "@tanstack/react-table"

import { ArrowUpDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { toast } from "../ui/use-toast"
import useRouter from "next/router"
import { use } from 'react';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export type Car = {
  ownerName: string,
  make: string,
  model: string,
  carYear: number,
  issue: string,
  repairPrice: number
}

export const columns: ColumnDef<Car>[] = [
  {
    accessorKey: "ownerName",
    header: "Owner",
  },
  {
    accessorKey: "make",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Make
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "model",
    header: "Model",
  },
  {
    accessorKey: "carYear",
    header: "Car Year",
  },
  {
    accessorKey: "issue",
    header: "Issue",
  },
  {
    accessorKey: "repairPrice",
    header: () => <div className="text-right">Repair Price</div>,
    cell: ({ row }) => {
      const repairPrice = parseFloat(row.getValue("repairPrice"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(repairPrice)

      return <div className="text-right font-medium">{formatted}</div>
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original

      const handleClick = async (data: Car) => {
        try {
            const response = await fetch(`http://localhost:8080/cars/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                toast({
                    title: 'Car Edited',
                    description: 'Car Deleted successfully',
                });
                router.push('/');
            } else {
                toast({
                    title: 'Error',
                    description: 'Error deleting car',
                    variant: 'destructive',
                });
            }
        } catch (error) {
            toast({
                title: 'Error',
                description: 'Error deleting car',
                variant: 'destructive',
            });
            console.log(error);
        }
    };


      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            
            <DropdownMenuItem
            //onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Edit
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleClick}>Delete</DropdownMenuItem>
            
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]


*/}

{/*<DropdownMenuItem>View payment details</DropdownMenuItem>*/ }
{/*<DropdownMenuLabel>Actions</DropdownMenuLabel>*/ }