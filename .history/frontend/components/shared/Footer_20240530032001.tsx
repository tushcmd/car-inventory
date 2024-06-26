import React, { FC } from 'react'
import Logo from './Logo'
import Link from 'next/link'

const Footer: FC = () => {
  return (
    <footer className='border-t'>
      <div className='layout-container flex flex-col gap-5 items-center justify-center py-10'>
        <Logo />
        <div className='flex flex-row items-center justify-center gap-5'>
          <p>App version 0.1.0</p>
          <div className='inline-flex p-6 max-w-3xl gap-3'>
            <div>
              <Link
                href="https://github.com/tushcmd/car-inventory"
                target="_blank"
                rel="noreferrer"
                className=""
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
              </Link>
            </div>
            <Link
              className=""
              href="https://tushdev.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>@tush</p>
            </Link>

          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer
