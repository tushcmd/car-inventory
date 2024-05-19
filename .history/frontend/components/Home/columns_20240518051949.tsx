"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "../ui/use-toast";
import { useRouter } from "next/navigation";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Car = {
  id: string; // Add an 'id' field to your Car type
  ownerName: string;
  make: string;
  model: string;
  carYear: number;
  issue: string;
  repairPrice: number;
};

export const columns: ColumnDef<Car>[] = [
  // ... (other columns)
  {
    id: "actions",
    cell: ({ row }) => {
      const car = row.original;
      const router = useRouter(); // Get the router instance

      const handleDelete = async () => {
        try {
          const response = await fetch(`http://localhost:8080/cars/${car.id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (response.ok) {
            toast({
              title: "Car Deleted",
              description: "Car Deleted successfully",
            });
            router.refresh(); // Refresh the page after successful deletion
          } else {
            toast({
              title: "Error",
              description: "Error deleting car",
              variant: "destructive",
            });
          }
        } catch (error) {
          toast({
            title: "Error",
            description: "Error deleting car",
            variant: "destructive",
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
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleDelete}>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];