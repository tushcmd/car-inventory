

import React from 'react'
import { Button } from './ui/button'
import { Plus } from 'lucide-react'
import CarTable from './Home/CarTable'

const Main = () => {
  return (
    <section className='flex flex-col max-w-7xl px-2 w-full'>
        <div className='flex flex-row justify-between p-4'>
            <p>
                Cars List
            </p>
            <Button className='inline-flex gap-2'>
                <Plus className="h-4 w-4"/>
                Add Car
            </Button>
        </div>
        <div>
            <CarTable />
        </div>

    </section>
  )
}

export default Main