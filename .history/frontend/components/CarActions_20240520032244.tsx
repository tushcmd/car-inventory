
'use client';

import { Car } from '@/components/Home/columns'; 
import { Edit, MoreHorizontal, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { toast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface CarActionsProps {
  car: Car;
}

const CarActions: React.FC<CarActionsProps> = ({ car }) => {
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

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0" disabled={loading}>
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={handleEditClick} disabled={loading}>
          <Edit className="mr-2 h-4 w-4" />
          Edit
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleDelete} disabled={loading}>
          <Trash2 className="mr-2 h-4 w-4" />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CarActions;