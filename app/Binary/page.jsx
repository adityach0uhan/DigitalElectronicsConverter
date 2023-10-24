'use client'
import React, { useEffect, useState } from 'react'
import Cards from '@/components/Cards'
import numberSystemsData from '../../public/numberSystem'
const page = () => {
  const [binaryNum, setbinaryNum] = useState({})


  useEffect(() => {
    console.log(conversions)
    setbinaryNum(numberSystemsData.number_systems[0].conversions)
  }, [])

  return (
    <>
      {
        // binaryNum ? binaryNum.conversions.forEach(conversion => {
        //   console.log("Operation: " + conversion.operation);
        //   console.log("Description: " + conversion.description);
        //   console.log(); // Add a newline for separation
        // }) : ""
        
      }
        
      <div className='w-full h-full pt-6 bg-green-700'>
        <h3>{binaryNum.name}</h3>
        {/* <p>{NumSysData.conversions[0]}</p> */}
        {/* {console.log(NumSysData)}
        {NumSysData.conversions.map((item) => {
          {console.log(item)}
          <Cards data={ item} /> 
        })} */}

      </div>




    </>
  )
}

export default page