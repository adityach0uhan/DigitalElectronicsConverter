"use client"
import React from 'react';
import { useState, useEffect } from 'react';
import numberSystemsData from '../public/numberSystem.js';
import Binarypage from './Binary/Binarypage.jsx';

export default function Home() {
 
  useEffect(() => {
    fetch('../public/numberSystem.js')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Handle the JSON data here
        console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

  }, [])

  return (
    <>
      <div className="h-full w-full  flex flex-wrap">
        {/* <Binarypage  /> */}
      </div>
    </>


  )
}
