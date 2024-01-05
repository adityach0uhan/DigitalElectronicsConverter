import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className='grid grid-col-1 grid-rows-4 gap-4 text-black pt-10 mt-10 sm:w-screen h-80 w-full justify-items-center'>

      <Link href="/Binary"><div className='centertheText text-xl hover:text-2xl   md:w-80 rounded'> Binary Mode </div></Link>
      <Link href="/Decimal"><div className='centertheText text-xl hover:text-2xl   md:w-80 rounded'> Decimal Mode </div></Link>
      <Link href="/Octal"><div className='centertheText text-xl hover:text-2xl   md:w-80 rounded'> Octal Mode </div></Link>
      <Link href="/Hexadecimal"><div className='centertheText text-xl hover:text-2xl   md:w-80 rounded'> Hexadecimal Mode </div></Link>


    </div>
  )
}

export default page