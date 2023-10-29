"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import numberSystemsData from '../../public/numberSystem';
import Hexadecimal from './Hexadecimal';
const Page = () => {
  const [HexaData, setHexaData] = useState([])
  useEffect(() => {
    async function fetchData() {
      try {
        setHexaData(numberSystemsData.number_systems[3])
      } catch (error) {
        console.error('Error fetching file data:', error);
      }
    }
    fetchData();
  }, [])

  return (
    <div className='text-white text-center'>
      {HexaData.length !== 0 ? (
        <Hexadecimal HexaData={HexaData} />
      ) : (
        "Binary Component is loading"
      )}

    </div>
  )
}

export default Page