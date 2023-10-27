import Link from 'next/link'
import React from 'react'

const Cards = ({ data ,index }) => {

  return (
    <Link href={`/Binary/Operations/${index+1}`}>
    < div className='centertheText w-52 h-40 flex flex-col mx-5 mb-5 my-5 text-center border-solid border-2 border-sky-700 ' >
      <h3 className='text-xl text-white my-4'>{data.operation}</h3>
      <p className='text-white text-sm p-1'>{data.description}</p>
      </div >
    </Link>
  )
}

export default Cards