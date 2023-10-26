"use client"
import React from 'react';
import { useState, useEffect } from 'react';
import numberSystemsData from '../public/numberSystem.js';
import Binarypage from './Binary/Binarypage.jsx';

export default function Home() {

  const [BinaryData, setBinaryData] = useState([])
  const [DecimalData, setDecimalData] = useState([])
  const [OctalData, setOctalData] = useState([])
  const [HexaData, setHexaData] = useState([])


  useEffect(() => {

    async function fetchData() {
      try {
        setBinaryData(numberSystemsData.number_systems[0])
        setDecimalData(numberSystemsData.number_systems[1])
        setOctalData(numberSystemsData.number_systems[2])
        setHexaData(numberSystemsData.number_systems[3])
      } catch (error) {
        console.error('Error fetching file data:', error);
      }
    }
    fetchData();
  }, [])

  return (
    <>
      <div className="h-full w-full  flex flex-wrap">
        {BinaryData.length !== 0 ? (
          <Binarypage binaryData={BinaryData} /> 
        ) : (
          "Binary Component is loading"
        )}

        
      </div>
    </>


  )
}
