"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import numberSystemsData from '../../public/numberSystem';
import OcatalPage from './OctalPage';
const Page = () => {
  const [OctalData, setOctalData] = useState([])
  useEffect(() => {
    async function fetchData() {
      try {
        setOctalData(numberSystemsData.number_systems[2])
      } catch (error) {
        console.error('Error fetching file data:', error);
      }
    }
    fetchData();
  },[])

  return (
    <div className='text-black text-center'>
       {OctalData.length !== 0 ? (
          <OcatalPage ocatalData={OctalData} /> 
        ) : (
          "Binary Component is loading"
        )} 

    </div>
  )
}

export default Page