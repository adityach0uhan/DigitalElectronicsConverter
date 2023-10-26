import React from 'react'
const Cards = ({ data , key }) => {

  return (
    < div className='w-52 h-40 flex flex-col mx-5 mb-5 my-5 text-center border-solid border-2 border-sky-700 ' >
      <h3 className='text-xl text-white my-4'>{data.operation}</h3>
      <p className='text-white text-sm p-1'>{data.description}</p>
    </div >
  )
}

export default Cards