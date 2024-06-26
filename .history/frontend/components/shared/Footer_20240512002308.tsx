import React, { FC } from 'react'
import Logo from './Logo'

const Footer: FC = () => {
  return (
    <footer className='border-t'>
        <div className='layout-container flex flex-col gap-5 items-center  justify-center py-10'>
            <Logo />
            <p>App version 0.1.0</p>
        </div>

    </footer>
  )
}

export default Footer