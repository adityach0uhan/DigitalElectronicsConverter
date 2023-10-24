import React from 'react'

const Cards = ({ item }) => {
  console.log(item)
  return (
    <div className='w-48 h-40 bg-pink-600 mx-5 mb-5 my-5 text-center border-solid border-2 border-sky-500 '>

          <div><h3>{item.operation} </h3></div>
          <div>{item.description}</div>
    </div>
  )
}

export default Cards