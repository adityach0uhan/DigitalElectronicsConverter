import Link from 'next/link'
import React from 'react'

const Cards = ({ data, index, NumSys }) => {

  return (
    <Link href={`/${NumSys}/Operations/${index+1}`}>
    < div className='centertheText w-52 h-40 flex flex-col mx-5 mb-5 my-5 text-center border-solid border-2 border-sky-700 ' >
      <h3 className='text-xl text-black my-4'>{data.operation}</h3>
        <p className='text-black text-sm p-1'>{data.description}</p>
        <div></div>
      </div >
    </Link>
  )
}

export default Cards