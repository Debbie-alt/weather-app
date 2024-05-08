import Navbar from '@/components/Navbar'
import React from 'react'

const contact = () => {
  return (

    <>
    <Navbar/>
    <div className="w-screen flex flex-col items-center py-5 space-y-5">
                     <h1 className="font-semibold text-center text-2xl">Contact us at:</h1>
                     <p className="w-[60vw] text-center">Have feedback or questions about ForeCastify? We'd love to hear from you! Contact us at funmmy565@gmail.com or connect with us on social media.</p>
      
       </div>
    </>
  )
}

export default contact