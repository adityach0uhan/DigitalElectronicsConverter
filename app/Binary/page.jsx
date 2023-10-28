"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import numberSystemsData from '../../public/numberSystem';
import Binarypage from './Binarypage';
const Page = () => {
  const [BinaryData, setBinaryData] = useState([])
  useEffect(() => {
    async function fetchData() {
      try {
        setBinaryData(numberSystemsData.number_systems[0])
      } catch (error) {
        console.error('Error fetching file data:', error);
      }
    }
    fetchData();
  },[])

  return (
    <div className='text-white text-center'>
       {BinaryData.length !== 0 ? (
          <Binarypage binaryData={BinaryData} /> 
        ) : (
          "Binary Component is loading"
        )} 

    </div>
  )
}

export default Page