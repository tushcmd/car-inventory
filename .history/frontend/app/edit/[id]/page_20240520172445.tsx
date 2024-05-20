
'use client';

import { useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Spinner from '@/components/ui/spinner';
import { toast } from "@/components/ui/use-toast"
import { useRouter } from 'next/navigation';
import useSWR from 'swr';

const carSchema = z.object({
  ownerName: z.string().min(1, 'Owner name is required'),
  make: z.string().min(1, 'Make is required'),
  model: z.string().min(1, 'Model is required'),
  carYear: z.number().positive('Car year must be a positive number'),
  issue: z.string().min(1, 'Issue is required'),
  repairPrice: z.number().nonnegative('Repair price must be a non-negative number'),
});

type Car = z.infer<typeof carSchema>;

const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
};

interface EditCarPageProps {
  params: {
    id: string;
  };
}

const EditCarPage: React.FC<EditCarPageProps> = ({ params }) => {
  const { id } = params;
  const { data: carData, isLoading, error } = useSWR(`http://localhost:8080/cars/${id}`, fetcher);
  const router = useRouter();
  const form = useForm<Car>({
    resolver: zodResolver(carSchema),
  });

  console.log(carData)

  useEffect(() => {
    if (carData) {
      form.reset({
        ownerName: carData.ownerName,
        make: carData.make,
        model: carData.model,
        carYear: carData.carYear,
        issue: carData.issue,
        repairPrice: carData.repairPrice,
      });
    }
  }, [carData, form]);

  if (isLoading) return <Spinner />;
  if (error) return <div>Error fetching car data.</div>;
  if (!carData) return <div>Loading...</div>;

  const onSubmit = async (data: Car) => {
    try {
      const response = await fetch(`http://localhost:8080/cars/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: 'Car Edited',
          description: 'Car Edited successfully',
        });
        router.push('/');
      } else {
        toast({
          title: 'Error',
          description: 'Error updating car',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Error updating car',
        variant: 'destructive',
      });
      console.log(error);
    }
  };

  return (
    <div className="create-edit-page-container min-h-screen">
      <div className="container flex flex-col gap-6 mx-auto">
        <h1 className="text-3xl font-bold">Edit Car</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="ownerName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Owner Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Muturi David" {...field} />
                  </FormControl>
                  <FormDescription>Enter the owner&apos;s name</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="make"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Car Make</FormLabel>
                  <FormControl>
                    <Input placeholder="Jeep" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="model"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Car Model</FormLabel>
                  <FormControl>
                    <Input placeholder="Wrangler" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="carYear"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Car Year</FormLabel>
                  <FormControl>
                    <Input type='number' placeholder="2018" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="issue"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Car issue</FormLabel>
                  <FormControl>
                    <Input placeholder="Oil Change" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="repairPrice"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Repair Price</FormLabel>
                  <FormControl>
                    <Input type='number' placeholder="2000" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            {/* ... (other form fields) */}
            <Button type="submit">Save</Button>
          </form>
        </Form>
      </div>

    </div>
  );
};

export default EditCarPage;
{/*
'use client';

//import EditCar from '@/components/edit-car';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Spinner from '@/components/ui/spinner';
import { toast } from "@/components/ui/use-toast"
import { useRouter } from 'next/navigation';
import useSWR from 'swr';

const carSchema = z.object({
  ownerName: z.string().min(1, 'Owner name is required'),
  make: z.string().min(1, 'Make is required'),
  model: z.string().min(1, 'Model is required'),
  carYear: z.number().positive('Car year must be a positive number'),
  issue: z.string().min(1, 'Issue is required'),
  repairPrice: z.number().nonnegative('Repair price must be a non-negative number'),
});

type Car = z.infer<typeof carSchema>;

const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
};

interface EditCarPageProps {
  params: {
    id: string;
  };
}

interface EditCarPageProps {
  params: {
    id: string;
  };
}


const EditCarPage: React.FC<EditCarPageProps> = ({ params }) => {
  const { id } = params;
  const { data: carData, isLoading, error } = useSWR(`http://localhost:8080/cars/${id}`, fetcher);
  const router = useRouter();
  const form = useForm<Car>({
    resolver: zodResolver(carSchema),
  });

  if (isLoading) return <Spinner />;
  if (error) return <div>Error fetching car data.</div>;
  if (!carData) return <div>Loading...</div>;


  // Set the form values when the car data is fetched
  form.reset({
    ownerName: carData.ownerName,
    make: carData.make,
    model: carData.model,
    carYear: carData.carYear,
    issue: carData.issue,
    repairPrice: carData.repairPrice,
  });

  const onSubmit = async (data: Car) => {
    try {
      const response = await fetch(`http://localhost:8080/cars/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: 'Car Edited',
          description: 'Car Edited successfully',
        });
        router.push('/');
      } else {
        toast({
          title: 'Error',
          description: 'Error updating car',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Error updating car',
        variant: 'destructive',
      });
      console.log(error);
    }
  };
  return (
    <div className="create-edit-page-container min-h-screen">
      <div className="container flex flex-col gap-6 mx-auto">
        <h1 className="text-3xl font-bold">Edit Car</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="ownerName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Owner Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Muturi David" {...field} />
                  </FormControl>
                  <FormDescription>Enter the owner&apos;s name</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="make"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Car Make</FormLabel>
                  <FormControl>
                    <Input placeholder="Jeep" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="model"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Car Model</FormLabel>
                  <FormControl>
                    <Input placeholder="Wrangler" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="carYear"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Car Year</FormLabel>
                  <FormControl>
                    <Input type='number' placeholder="2018" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="issue"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Car issue</FormLabel>
                  <FormControl>
                    <Input placeholder="Oil Change" {...field} />
                  </FormControl>
                  
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="repairPrice"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Repair Price</FormLabel>
                  <FormControl>
                    <Input type='number' placeholder="2000" {...field} />
                  </FormControl>
                  
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Save</Button>
          </form>
        </Form>
      </div>

      
    </div>
  );
};

export default EditCarPage;
*/}

{/*
import EditCarPage from './page';

interface EditCarPageProps {
  params: {
    id: string;
  };
}

export default function EditCar({ params }: EditCarPageProps) {
  return <EditCarPage params={params} />;
}

*/}

{/*<EditCar params={params} />*/ }