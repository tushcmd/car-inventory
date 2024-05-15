'use client';

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
import { toast } from "./ui/use-toast"
import { useRouter } from 'next/navigation';

const carSchema = z.object({
  ownerName: z.string().min(1, 'Owner name is required'),
  make: z.string().min(1, 'Make is required'),
  model: z.string().min(1, 'Model is required'),
  carYear: z.number().int().gte(1900, 'Car year must be after a year after 1900'),
  issue: z.string().min(1, 'Issue is required'),
  repairPrice: z.number().nonnegative('Repair price must be a non-negative number'),
});

type Car = z.infer<typeof carSchema>;

export default function CreateCar () {
  const router = useRouter();
  const form = useForm<Car>({
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
        toast({
          title: 'Car Created',
          description: 'Car Created successfully',
        })
        router.push('/');
      } else {
        toast({
          title: 'Error',
          description: 'Error creating car',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Error creating car',
        variant: 'destructive',
      });
      console.log(error);
    }
  };


  return (
    <div className="container flex flex-col gap-6 mx-auto">

      <h1 className="text-3xl font-bold">Create Car</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="ownerName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Owner Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
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
                <FormDescription>Enter the car make</FormDescription>
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
                <FormDescription>Enter the model</FormDescription>
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
                <FormDescription>Enter the car year</FormDescription>
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
                <FormDescription>Enter the car issue</FormDescription>
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
                  <Input type='number' placeholder="0" {...field} />
                </FormControl>
                <FormDescription>Enter the repair price</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* ... (other form fields) */}
          <Button type="submit">Save</Button>
        </form>
      </Form>
    </div>
  );
};

{/*
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { DefaultValues, useForm } from "react-hook-form"
import { z } from "zod"

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
import router from "next/router"
import { toast } from "./ui/use-toast"


const formSchema = z.object({
  ownerName: z.string().min(1, {
    message: 'Owner name is required'
  }),
  make: z.string().min(1, {
    message: 'Make is required'
  }),
  model: z.string().min(1, {
    message: 'Model is required'
  }),
  carYear: z.number().positive({
    message: 'Car year must be a positive number',
  }),
  issue: z.string().min(1, {
    message: 'Issue is required',
  }),
  repairPrice: z.number().nonnegative({
    message: 'Repair price must be a non-negative number',
  }),
})

export function CreateCar() {
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
    const postValues = async (data: values) => {
      try {
        const response = await fetch('http://localhost:8080/cars', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        if (response.ok) {
          toast({
            title: 'Car Created',
            description: 'Car Created successfully',
          })
          router.push('/');
        } else {
          toast({
            title: 'Error',
            description: 'Error creating car',
            variant: 'destructive',
          });
        }
      } catch (error) {
        toast({
          title: 'Error',
          description: 'Error creating car',
          variant: 'destructive',
        });
        console.log(error);
      }
    };
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          ownerName="Car Owner"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="tushcmd" {...field} />
              </FormControl>
              <FormDescription>
                Public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

*/}
{/*

'use client'
import { useRouter } from 'next/navigation'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"

const formSchema = z.object({
  ownerName: z.string().min(1, 'Owner name is required'),
  make: z.string().min(1, 'Make is required'),
  model: z.string().min(1, 'Model is required'),
  carYear: z.number().positive('Car year must be a positive number'),
  issue: z.string().min(1, 'Issue is required'),
  repairPrice: z.number().nonnegative('Repair price must be a non-negative number'),
})

type Car = z.infer<typeof formSchema>;

export default function CreateCar() {
  const router = useRouter()
  const { toast } = useToast()
  const { register, handleSubmit, formState: { errors } } = useForm<Car>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ownerName: "",
      make: "",
      model: "",
      carYear: 2018,
      issue: "",
      repairPrice: 0,
    },
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
        toast({
          title: 'Car Created',
          description: 'Car Created successfully',
        })
        router.push('/');
      } else {
        toast({
          title: 'Error',
          description: 'Error creating car',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Error creating car',
        variant: 'destructive',
      });
      console.log(error);
    }
  };

  return (
    <div className="flex items-center py-4 flex-row justify-between">
      <Form>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={register}
            name="ownerName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Owner Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormDescription>Enter the owner's name</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  )
}
*/}
{/*

'use client'


import { useRouter } from 'next/navigation'
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
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"


const formSchema = z.object({
    ownerName: z.string().min(1, 'Owner name is required'),
    make: z.string().min(1, 'Make is required'),
    model: z.string().min(1, 'Model is required'),
    carYear: z.number().positive('Car year must be a positive number'),
    issue: z.string().min(1, 'Issue is required'),
    repairPrice: z.number().nonnegative('Repair price must be a non-negative number'),
})

//type Car = z.infer<typeof formSchema>;


export default function CreateCar() {
    //1. Define your form.
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
    },

    // 2. Define a submit handler.
    //function onSubmit(values: z.infer<typeof formSchema>) {
    //    // Do something with the form values.
    //    // ✅ This will be type-safe and validated.
    //    console.log(values)
    //}

    const router = useRouter()
    const { toast } = useToast()
    const { register, handleSubmit, formState: { errors } } = useForm<form>({
        resolver: zodResolver(formSchema),
    });
    const onSubmit = async (data: form) => {
        try {
            const response = await fetch('http://localhost:8080/cars', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                toast({
                    title: 'Car Created',
                    description: 'Car Created successfully',
                })
                router.push('/');
            } else {
                toast({
                    title: 'Error',
                    description: 'Error creating car',
                    variant: 'destructive',
                });
            }
        } catch (error) {
            toast({
                title: 'Error',
                description: 'Error creating car',
                variant: 'destructive',
            });
            console.log(error);
        }
    };
    return (

        <div className="flex items-center py-4 flex-row justify-between">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="ownerName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Owner Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="John Doe" {...field} />
                                </FormControl>
                                <FormDescription>Enter the owner's name</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </form>
            </Form>
        </div>
    )
}


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