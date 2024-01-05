"use client"
import React, { useState } from 'react';

const BCDSubtraction = () => {
  const [bcdInput1, setBCDInput1] = useState('');
  const [bcdInput2, setBCDInput2] = useState('');
  const [bcdResult, setBCDResult] = useState('');

  const handleInput1Change = (e) => {
    const input = e.target.value;
    if (isValidBCD(input)) {
      setBCDInput1(input);
    } else {
      setBCDInput1('');
      alert("Invalid BCD Input");
    }
  };

  const handleInput2Change = (e) => {
    const input = e.target.value;
    if (isValidBCD(input)) {
      setBCDInput2(input);
    } else {
      setBCDInput2('');
      alert("Invalid BCD Input");
    }
  };

  const isValidBCD = (input) => /^[0-9]{1,4}$/.test(input);

  const subtractBCD = () => {
    if (bcdInput1 && bcdInput2) {
      const result = performBCDSubtraction(bcdInput1, bcdInput2);
      setBCDResult(result);
    } else {
      alert("Please enter valid BCD numbers in both inputs.");
    }
  };

  const performBCDSubtraction = (bcd1, bcd2) => {
    const result = [];

    let borrow = 0;
    for (let i = bcd1.length - 1; i >= 0; i--) {
      const digit1 = parseInt(bcd1[i]);
      const digit2 = parseInt(bcd2[i]) + borrow;

      if (digit1 >= digit2) {
        result[i] = (digit1 - digit2).toString();
        borrow = 0;
      } else {
        result[i] = (digit1 + 10 - digit2).toString();
        borrow = 1;
      }
    }

    return result.join('');
  };

  return (
    <div className="max-w-md text-black mx-auto p-4 w-full">
      <h2 className="text-2xl   font-bold mb-4">BCD Subtraction</h2>
      <input
        type="text"
        className="w-full p-2 border text-black rounded-md mb-2"
        placeholder="Enter BCD Number 1"
        value={bcdInput1}
        onChange={handleInput1Change}
      />
      <input
        type="text"
        className="w-full p-2 border rounded-md text-black mb-2"
        placeholder="Enter BCD Number 2"
        value={bcdInput2}
        onChange={handleInput2Change}
      />
      <button
        className="w-full bg-blue-500 text-black p-2 rounded-md hover:bg-blue-600"
        onClick={subtractBCD}
      >
        Subtract
      </button>
      <div className="mt-4 text-black">BCD Result: {bcdResult}</div>
    </div>
  );
};

export default BCDSubtraction;
