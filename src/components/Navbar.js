import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
       <nav className='w-screen p-8 px-10 flex justify-between'>
            <h1  className="text-2xl font-semibold text-orange-800 tracking-wide">ForeCastify</h1>
            <div className='space-x-5'> 
                  <Link href='/about' className='hover:text-orange-900 hover:opacity-80'>About</Link>
                  <Link href='/about'  className='hover:text-orange-900 hover:opacity-80'>Services</Link>
                  <Link href='/about'  className='hover:text-orange-900 hover:opacity-80'>Contact</Link>

            </div>
       </nav>
  )
}

export default Navbar