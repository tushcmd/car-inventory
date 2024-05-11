

import React from 'react'
import { Button } from './ui/button'
import { Plus } from 'lucide-react'

const Home = () => {
  return (
    <section className='flex flex-col max-w-7xl px-2 w-full'>
        <div>
            <p>
                Cars List
            </p>
            <Button className='inline-flex gap-2'>
                <Plus className="h-4 w-4"/>
                Add Car
            </Button>
        </div>

    </section>
  )
}

export default Home