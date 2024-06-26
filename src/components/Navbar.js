import Link from 'next/link'

const Navbar = () => {
  return (
       <nav className='w-screen  p-4 md:p-8 px-5  md:px-10 flex justify-between border-b-2 border-b-gray-300'>
            <h1  className=" text-lg md:text-2xl font-semibold text-orange-800 tracking-wide">ForeCastify</h1>
            <div className=' space-x-3 md:space-x-5 text-xs sm:text-sm md:text-lg'> 
              <Link href='/' className='hover:text-orange-900 hover:opacity-80'>Home</Link>
                  <Link href='/about' className='hover:text-orange-900 hover:opacity-80'>About</Link>
                  <Link href='/services'  className='hover:text-orange-900 hover:opacity-80'>Services</Link>
                  <Link href='/contact'  className='hover:text-orange-900 hover:opacity-80'>Contact</Link>

            </div>
       </nav>
  )
}

export default Navbar