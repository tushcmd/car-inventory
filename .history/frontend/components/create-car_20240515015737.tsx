'use client'

import { z } from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


const formSchema = z.object({
    ownerName: z.string().min(1, 'Owner name is required'),
    make: z.string().min(1, 'Make is required'),
    model: z.string().min(1, 'Model is required'),
    carYear: z.number().positive('Car year must be a positive number'),
    issue: z.string().min(1, 'Issue is required'),
    repairPrice: z.number().nonnegative('Repair price must be a non-negative number'),
})


export default function CreateCar() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            ownerName: "",
            make: "",
            model: "",
            carYear: 2018,
            issue: "",
            repairPrice: 0,
        },
    })


    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
    return (
        <div className="flex items-center py-4 flex-row justify-between">
            <Form {...form}>
                <form ></form>
            </Form>
        </div>
    )
}


{/*
'use client';

import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Toaster, Toast } from '@/components/ui/toaster';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import Create from '../../.history/frontend/app/create/page_20240512025654';

const carSchema = z.object({
  ownerName: z.string().min(1, 'Owner name is required'),
  make: z.string().min(1, 'Make is required'),
  model: z.string().min(1, 'Model is required'),
  carYear: z.number().positive('Car year must be a positive number'),
  issue: z.string().min(1, 'Issue is required'),
  repairPrice: z.number().nonnegative('Repair price must be a non-negative number'),
});

type Car = z.infer<typeof carSchema>;

const CreateCar = () => {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<Car>({
    resolver: zodResolver(carSchema),
  });

  const onSubmit = async (data: Car) => {
    try {
      const response = await fetch('http://localhost:8080/cars', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        Toast({
          title: 'Car Created',
          description: 'Car Created successfully',
          variant: 'success',
        });
        router.push('/');
      } else {
        Toast({
          title: 'Error',
          description: 'Error creating car',
          variant: 'destructive',
        });
      }
    } catch (error) {
      Toast({
        title: 'Error',
        description: 'Error creating car',
        variant: 'destructive',
      });
      console.log(error);
    }
  };

  return (
    <div className="container flex flex-col gap-6 mx-auto">
      <Toaster />
      <Button variant="ghost" onClick={() => router.back()}>
        <ArrowLeft className="mr-2 h-4 w-4" />
        Go Back
      </Button>
      <h1 className="text-3xl font-bold">Create Car</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <label htmlFor="ownerName" className="text-right">Owner Name</label>
          <input
            id="ownerName"
            type="text"
            {...register('ownerName')}
            className={`col-span-3 border border-gray-300 rounded-md px-4 py-2 ${errors.ownerName ? 'border-red-500' : ''}`}
          />
          {errors.ownerName && <span className="col-span-4 text-red-500">{errors.ownerName.message}</span>}
        </div>
        //... (other input fields) 
        <Button type="submit">Save</Button>
      </form>
    </div>
  );
};

export default CreateCar;

*/}