"use client"
import React from 'react'
import { useState } from 'react';
import Link from 'next/link';

const DecimaltoBinary = () => {

  const [decimalInput, setDecimalInput] = useState('');
  const [binaryOutput, setBinaryOutput] = useState('');

  
  const handleInputChange = (e) => {
    const input = e.target.value;

    // Check if the input is a valid decimal value (0-15)
    if (!isNaN(input) && parseInt(input, 10) >= 0 && parseInt(input, 10) <= 15) {
      setDecimalInput(input);
      convertToBinary(input);
    } else if (e.nativeEvent.inputType === 'deleteContentBackward') {
      // Handle backspace key press
      setDecimalInput('');
      setBinaryOutput('');
    } else {
      // If the input is invalid, don't update the state
      setDecimalInput('');
      alert("Invalid Input")
      setBinaryOutput('');
    }
  };


  const convertToBinary = (decimalInput) => {
    if (decimalInput === '') {
      setBinaryOutput('');
    } else {
      let binary = parseInt(decimalInput, 10).toString(2);
      binary = binary.padStart(4, '0');
      binary = binary.slice(-4);
      setBinaryOutput(binary);
    };
  };

  return (
    <>
    <div className='text-white flex m-auto my-10  flex-col align-center justify-center md:w-1/3'>

      <h2 className='text-center text-xl md:text-2xl py-10'>Decimal to Binary </h2>

      <div className=' centertheText'  >

        <input
          className='text-black p-1 md:p-2 rounded md:text-xl'
          type="text"
          placeholder="Enter a decimal number"
          value={decimalInput}
          onChange={handleInputChange} />
        <div className='py-7 md:text-xl'>
          Binary Output  : {binaryOutput}
          </div>
          <Link href="/Binary">
            <button className='bg-white text-black p-1 px-3 rounded ' >Go Back</button></Link>
      </div>



    </div>
  </>
  )
}

export default DecimaltoBinary