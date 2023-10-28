"use client"
import React, { useState } from 'react';
import Link from 'next/link';
const BinaryToOctalConverter = () => {
  const [binaryInput, setBinaryInput] = useState('');
  const [octalOutput, setOctalOutput] = useState('');

  const handleInputChange = (e) => {
    const input = e.target.value;

    // Check if the input is a valid binary value (0 or 1)
    if (/^[01]+$/.test(input)) {
      setBinaryInput(input);
      convertToOctal(input);
    } else if (e.nativeEvent.inputType === 'deleteContentBackward') {
      // Handle backspace key press
      setBinaryInput('');
      setOctalOutput('');
    } else {
      // If the input is invalid, don't update the state
      setBinaryInput('');
      alert('Invalid Input');
      setOctalOutput('');
    }
  };

  const convertToOctal = (binaryInput) => {
    if (binaryInput === '') {
      setOctalOutput('');
    } else {
      // Pad the binary input to have a length multiple of 3
      const paddedBinary = binaryInput.padStart(
        Math.ceil(binaryInput.length / 3) * 3,
        '0'
      );

      let octal = '';
      for (let i = 0; i < paddedBinary.length; i += 3) {
        const chunk = paddedBinary.slice(i, i + 3);
        const decimal = parseInt(chunk, 2);
        octal += decimal.toString(8);
      }

      setOctalOutput(octal);
    }
  };

  return (
    <div className="text-white flex m-auto my-10 flex-col align-center justify-center md:w-1/3">
      <h2 className="text-center text-xl md:text-2xl py-10">Binary to Octal</h2>
      <div className="centertheText">
        <input
          className="text-black p-1 md:p-2 rounded md:text-xl"
          type="text"
          placeholder="Enter a binary number"
          value={binaryInput}
          onChange={handleInputChange}
        />
        <div className="py-7 md:text-xl">
          Octal Output: {octalOutput}
        </div>
        <Link href="/Binary">
          <button className='bg-white text-black p-1 px-3 rounded ' >Go Back</button></Link>
      </div>
    </div>
  );
};

export default BinaryToOctalConverter;
