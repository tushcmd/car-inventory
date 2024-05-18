//using swr to revalidate data immediately after change HAHA TUSH IS GENIUS
'use client'

import { Car, columns } from "@/components/Home/columns";
import { CarTable } from "@/components/Home/car-table";
import Lambo from "@/components/lambo";

import useSWR from 'swr';
import fetcher from "@/utils/fetcher";

//import gearSpinner from "@/components/gear-spinner";

interface FetchedData {
  count: number;
  data: {
    _id: string;
    ownerName: string;
    make: string;
    model: string;
    carYear: number;
    issue: string;
    repairPrice: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }[];
}

export default function Page() {
  const { data, error } = useSWR<FetchedData>('http://localhost:8080/cars', fetcher);

  if (error) return <div className="page-container min-h-screen items-center justify-center">An error occurred while fetching the data.</div>;
  if (!data) return <div className="page-container min-h-screen items-center justify-center gap-6">
    <p className="text-xl">Loading, please wait...</p>
    <GearSpinner />
  </div>;

  // Map the fetched data to the expected Car type
  const mappedData: Car[] = data.data.map((item) => ({
    ownerName: item.ownerName,
    make: item.make,
    model: item.model,
    carYear: item.carYear,
    issue: item.issue,
    repairPrice: item.repairPrice,
  }));

  return (
    <div className="page-container min-h-screen">
      <Lambo />
      <CarTable columns={columns} data={mappedData} />
    </div>
  );
}

{/*
//using plain fetch
import { Car, columns } from "@/components/Home/columns";
import { CarTable } from "@/components/Home/car-table";
import Lambo from "@/components/lambo";

interface FetchedData {
  count: number;
  data: {
    _id: string;
    ownerName: string;
    make: string;
    model: string;
    carYear: number;
    issue: string;
    repairPrice: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }[];
}

//  GET request options
const requestOptions = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  },
};

async function getData(): Promise<Car[]> {
  const response = await fetch(`http://localhost:8080/cars`, requestOptions);
  const data: FetchedData = await response.json();

  // Map the fetched data to the expected Car type
  const mappedData: Car[] = data.data.map((item) => ({
    ownerName: item.ownerName,
    make: item.make,
    model: item.model,
    carYear: item.carYear,
    issue: item.issue,
    repairPrice: item.repairPrice,
  }));

  return mappedData;
}

export default async function Page() {
  const data = await getData();

  return (
    <div className="page-container min-h-screen">
      <Lambo />
      <CarTable columns={columns} data={data} />
    </div>
  );
}

*/}


{/*

import { Car, columns } from "@/components/Home/columns"
import { CarTable } from "@/components/Home/car-table"
import Lambo from "@/components/lambo";

//async function getData(): Promise<Car[]> {
//  // Fetch data from your API here.
//  const response = await fetch(`http://localhost:8080/cars`);
//  const data = await response.json();
//
//  console.log(data)
//  
//
//  return data;
//};

//  GET request options
const requestOptions = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  },
};

async function getData(): Promise<Car[]> {
  const res = await fetch(`http://localhost:8080/cars`, requestOptions)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  const data = await res.json();
  console.log(data)
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  
  return data;

}


export default async function Page() {
  const data = await getData()

  return (
    <div className="page-container min-h-screen">
      <Lambo />
      <CarTable columns={columns} data={data} />
      
    </div>
  )
}

*/}


//  return [
//    {
//      ownerName: 'John Smith',
//      make: 'Honda',
//      model: 'Civic',
//      carYear: 2015,
//      issue: 'Engine failure',
//      repairPrice: 1200,
//    },
//    {
//      ownerName: 'Emily Johnson',
//      make: 'Toyota',
//      model: 'Camry',
//      carYear: 2018,
//      issue: 'Brake pad replacement',
//      repairPrice: 450
//    },
//    {
//      ownerName: 'Michael Williams',
//      make: 'Ford',
//      model: 'F-150',
//      carYear: 2012,
//      issue: 'Transmission repair',
//      repairPrice: 800
//    },
//    { ownerName: 'Jessica Davis', make: 'Nissan', model: 'Altima', carYear: 2020, issue: 'Flat tire', repairPrice: 300 },
//    { ownerName: 'David Thompson', make: 'Chevrolet', model: 'Silverado', carYear: 2014, issue: 'Engine overhaul', repairPrice: 1500 },
//    { ownerName: 'Sarah Wilson', make: 'Honda', model: 'CR-V', carYear: 2017, issue: 'Oil change', repairPrice: 200 },
//    { ownerName: 'Daniel Anderson', make: 'Ford', model: 'Mustang', carYear: 2016, issue: 'Suspension repair', repairPrice: 950 },
//    { ownerName: 'Olivia Martinez', make: 'Toyota', model: 'RAV4', carYear: 2019, issue: 'Clutch replacement', repairPrice: 650 },
//    { ownerName: 'Matthew Hernandez', make: 'Nissan', model: 'Rogue', carYear: 2013, issue: 'Timing belt replacement', repairPrice: 1100 },
//    { ownerName: 'Sophia Garcia', make: 'Hyundai', model: 'Sonata', carYear: 2021, issue: 'Battery replacement', repairPrice: 380 },
//    { ownerName: 'Andrew Rodriguez', make: 'Jeep', model: 'Wrangler', carYear: 2011, issue: 'Engine rebuild', repairPrice: 1300 },
//    { ownerName: 'Isabella Gonzalez', make: 'Subaru', model: 'Outback', carYear: 2018, issue: 'Alternator replacement', repairPrice: 550 },
//    { ownerName: 'Joshua Perez', make: 'Chevrolet', model: 'Malibu', carYear: 2015, issue: 'Transmission overhaul', repairPrice: 900 },
//    { ownerName: 'Emma Sanchez', make: 'Kia', model: 'Sorento', carYear: 2022, issue: 'Tire rotation', repairPrice: 250 },
//    { ownerName: 'Christopher Ramirez', make: 'Ford', model: 'Explorer', carYear: 2010, issue: 'Engine replacement', repairPrice: 1400 },
//    { ownerName: 'Abigail Flores', make: 'Hyundai', model: 'Elantra', carYear: 2017, issue: 'Brake caliper replacement', repairPrice: 600 },
//    { ownerName: 'Jacob Rivera', make: 'Chevrolet', model: 'Impala', carYear: 2014, issue: 'Starter replacement', repairPrice: 750 },
//    { ownerName: 'Mia Torres', make: 'Mazda', model: 'CX-5', carYear: 2019, issue: 'Wheel alignment', repairPrice: 350 },
//    { ownerName: 'William Gomez', make: 'Toyota', model: 'Sienna', carYear: 2012, issue: 'Head gasket replacement', repairPrice: 1050 },
//    { ownerName: 'Sophia Diaz', make: 'Ford', model: 'Escape', carYear: 2016, issue: 'Spark plug replacement', repairPrice: 400 },
//    { ownerName: 'Andrew Clark', make: 'BMW', model: '3 Series', carYear: 2015, issue: 'Engine failure', repairPrice: 1200 },
//    { ownerName: 'Isabella Lewis', make: 'Honda', model: 'Accord', carYear: 2018, issue: 'Brake pad replacement', repairPrice: 450 },
//    { ownerName: 'Joshua Walker', make: 'Toyota', model: 'Tundra', carYear: 2012, issue: 'Transmission repair', repairPrice: 800 },
//    { ownerName: 'Emma Hall', make: 'Nissan', model: 'Maxima', carYear: 2020, issue: 'Flat tire', repairPrice: 300 },
//    { ownerName: 'Christopher Young', make: 'Chevrolet', model: 'Tahoe', carYear: 2014, issue: 'Engine overhaul', repairPrice: 1500 },
//    { ownerName: 'Abigail Allen', make: 'Mazda', model: 'CX-9', carYear: 2017, issue: 'Oil change', repairPrice: 200 },
//    { ownerName: 'Jacob King', make: 'Ford', model: 'F-250', carYear: 2016, issue: 'Suspension repair', repairPrice: 950 },
//    { ownerName: 'Mia Wright', make: 'Toyota', model: 'Highlander', carYear: 2019, issue: 'Clutch replacement', repairPrice: 650 },
//    { ownerName: 'William Scott', make: 'Nissan', model: 'Pathfinder', carYear: 2013, issue: 'Timing belt replacement', repairPrice: 1100 },
//    { ownerName: 'Sophia Green', make: 'Hyundai', model: 'Tucson', carYear: 2021, issue: 'Battery replacement', repairPrice: 380 },
//    { ownerName: 'Andrew Baker', make: 'Jeep', model: 'Grand Cherokee', carYear: 2011, issue: 'Engine rebuild', repairPrice: 1300 },
//    { ownerName: 'Isabella Adams', make: 'Subaru', model: 'Forester', carYear: 2018, issue: 'Alternator replacement', repairPrice: 550 },
//    { ownerName: 'Joshua Nelson', make: 'Chevrolet', model: 'Cruze', carYear: 2015, issue: 'Transmission overhaul', repairPrice: 900 },
//    { ownerName: 'Emma Carter', make: 'Kia', model: 'Optima', carYear: 2022, issue: 'Tire rotation', repairPrice: 250 },
//    { ownerName: 'Christopher Mitchell', make: 'Ford', model: 'Edge', carYear: 2010, issue: 'Engine replacement', repairPrice: 1400 },
//    { ownerName: 'Abigail Roberts', make: 'Hyundai', model: 'Kona', carYear: 2017, issue: 'Brake caliper replacement', repairPrice: 600 },
//    { ownerName: 'Jacob Turner', make: 'Chevrolet', model: 'Equinox', carYear: 2014, issue: 'Starter replacement', repairPrice: 750 },
//    { ownerName: 'Mia Phillips', make: 'Mazda', model: 'Mazda3', carYear: 2019, issue: 'Wheel alignment', repairPrice: 350 },
//    // ...
//  ]
//};
//
