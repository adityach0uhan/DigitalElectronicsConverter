"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const OctalToDecimal = () => {
  const [octalInput, setOctalInput] = useState('');
  const [decimalOutput, setDecimalOutput] = useState('');

  const handleInputChange = (e) => {
    const input = e.target.value;

    // Check if the input is a valid octal value (0-7)
    if (/^[0-7]*$/.test(input)) {
      setOctalInput(input);
      convertToDecimal(input);
    } else if (e.nativeEvent.inputType === 'deleteContentBackward') {
      // Handle backspace key press
      setOctalInput('');
      setDecimalOutput('');
    } else {
      // If the input is invalid, don't update the state
      setOctalInput('');
      alert('Invalid Input');
      setDecimalOutput('');
    }
  };

  const convertToDecimal = (octalInput) => {
    if (octalInput === '') {
      setDecimalOutput('');
    } else {
      const decimal = parseInt(octalInput, 8);
      setDecimalOutput(decimal);
    }
  };

  return (
    <>
      <div className="text-white flex m-auto my-10 flex-col align-center justify-center md:w-1/3">
        <h2 className="text-center text-xl md:text-2xl py-10">Octal to Decimal</h2>
        <div className="centertheText">
          <input
            className="text-black p-1 md:p-2 rounded md:text-xl"
            type="text"
            placeholder="Enter an octal number"
            value={octalInput}
            onChange={handleInputChange}
          />
          <div className="py-7 md:text-xl">
            Decimal Output: {decimalOutput}
          </div>
          <Link href="/Octal">
            <button className="bg-white text-black p-1 px-3 rounded">Go Back</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default OctalToDecimal;
