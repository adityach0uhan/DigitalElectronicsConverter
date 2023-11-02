"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import numberSystemsData from '../../public/numberSystem';
import DecimalPage from './DecimalPage';
const Page = () => {
    const [decimalData, setdecimalData] = useState([])
    useEffect(() => {
        async function fetchData() {
            try {
                setdecimalData(numberSystemsData.number_systems[1])
            } catch (error) {
                console.error('Error fetching file data:', error);
            }
        }
        fetchData();
    }, [])

    return (
        <div className='text-white text-center'>
            {decimalData.length !== 0 ? (
                <DecimalPage decimalData={decimalData} />
            ) : (
                "Loading"
            )}

        </div>
    )
}

export default Page