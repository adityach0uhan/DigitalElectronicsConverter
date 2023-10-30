"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const OctalToHexadecimal = () => {
  const [octalInput, setOctalInput] = useState('');
  const [hexadecimalOutput, setHexadecimalOutput] = useState('');

  const handleInputChange = (e) => {
    const input = e.target.value;

    // Check if the input is a valid octal value (0-7)
    if (/^[0-7]*$/.test(input)) {
      setOctalInput(input);
      convertToHexadecimal(input);
    } else if (e.nativeEvent.inputType === 'deleteContentBackward') {
      // Handle backspace key press
      setOctalInput('');
      setHexadecimalOutput('');
    } else {
      // If the input is invalid, don't update the state
      setOctalInput('');
      alert('Invalid Input');
      setHexadecimalOutput('');
    }
  };

  const convertToHexadecimal = (octalInput) => {
    if (octalInput === '') {
      setHexadecimalOutput('');
    } else {
      const decimal = parseInt(octalInput, 8);
      const hexadecimal = decimal.toString(16);
      setHexadecimalOutput(hexadecimal);
    }
  };

  return (
    <>
      <div className="text-white flex m-auto my-10 flex-col align-center justify-center md:w-1/3">
        <h2 className="text-center text-xl md:text-2xl py-10">Octal to Hexadecimal</h2>
        <div className="centertheText">
          <input
            className="text-black p-1 md:p-2 rounded md:text-xl"
            type="text"
            placeholder="Enter an octal number"
            value={octalInput}
            onChange={handleInputChange}
          />
          <div className="py-7 md:text-xl">
            Hexadecimal Output: {hexadecimalOutput}
          </div>
          <Link href="/Octal">
            <button className="bg-white text-black p-1 px-3 rounded">Go Back</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default OctalToHexadecimal;
