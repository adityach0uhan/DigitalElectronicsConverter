import React from 'react'
import Cards from '@/components/Cards'
import numberSystemsData from '../../public/numberSystem'
const page = () => {
  const data = numberSystemsData.number_systems[0]
  return (
    <>
      <div className='w-96 h-full pt-6 bg-green-700'>
        <h3>{data.name}</h3>
        {data.conversions.map((item) => {
          <Cards data={ item} /> 
        })}

     </div>
      
    
    
    
    </>
  )
}

export default page