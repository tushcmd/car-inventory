"use client";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Car = {
  ownerName: string;
  make: string;
  model: string;
  carYear: number;
  issue: string;
  repairPrice: number;
};


export const columns: ColumnDef<Car>[] = [
  {
    accessorKey: "ownerName",
    header: "Owner Name",
  },
  {
    accessorKey: "make",
    header: "Make",
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
    header: "Repair Price",
    cell: ({ row }) => {
      const repairPrice = row.getValue("repairPrice");
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(repairPrice);
      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const car = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(car.ownerName)}
            >
              Copy owner name
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View car details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];