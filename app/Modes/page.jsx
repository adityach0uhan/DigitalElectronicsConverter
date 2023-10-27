import React from 'react'

const page = () => {
  return (
    <div className='grid grid-col-1 grid-rows-4 gap-4 text-white pt-10 mt-10 sm:w-screen h-80 w-full justify-items-center'>
          
          <div className='centertheText text-xl hover:text-2xl   md:w-80 rounded'> Binary Mode </div>
          <div className='centertheText text-xl hover:text-2xl   md:w-80 rounded'> Decimal Mode </div>
          <div className='centertheText text-xl hover:text-2xl   md:w-80 rounded'> HexaDecimal Mode </div>
          <div className='centertheText text-xl hover:text-2xl   md:w-80 rounded'> Octal Mode </div>


      </div>
  )
}

export default page