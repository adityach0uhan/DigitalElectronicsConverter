'use client'
import React, { useEffect, useState } from 'react'
import Cards from '@/components/Cards'
import numberSystemsData from '../../public/numberSystem'
const page = () => {
  const [binaryNum, setbinaryNum] = useState([])
  useEffect(() => {
    setbinaryNum(numberSystemsData.number_systems[0].conversions)
  }, [])
  return (
    <>
      <div className='w-full h-full pt-6 bg-green-700'>
        <h3>{numberSystemsData.number_systems[0].name}</h3>
        <Cards/>
        {
          binaryNum.forEach(item => {
           { console.log(item)}
            <Cards item={item}/>
          })
        }

      </div>




    </>
  )
}

export default page