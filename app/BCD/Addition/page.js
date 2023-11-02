"use client"
import React, { useState } from 'react';

const BCDAddition = () => {
    const [bcdInput1, setBCDInput1] = useState('');
    const [bcdInput2, setBCDInput2] = useState('');
    const [bcdSum, setBCDSum] = useState('');

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

    const addBCD = () => {
        if (bcdInput1 && bcdInput2) {
            const sum = performBCDAddition(bcdInput1, bcdInput2);
            setBCDSum(sum);
        } else {
            alert("Please enter valid BCD numbers in both inputs.");
        }
    };

    const performBCDAddition = (bcd1, bcd2) => {
        const decimal1 = parseInt(bcd1, 10);
        const decimal2 = parseInt(bcd2, 10);
        const sum = (decimal1 + decimal2).toString();

        return sum.padStart(4, '0');
    };

    return (
        <div className="max-w-md mx-auto p-4 text-white w-full h-full">
            <h2 className="text-2xl font-bold mb-4">BCD Addition</h2>
            <input
                type="text"
                className="w-full p-2 border text-black rounded-md mb-2"
                placeholder="Enter BCD Number 1"
                value={bcdInput1}
                onChange={handleInput1Change}
            />
            <input
                type="text"
                className="w-full p-2 text-black border rounded-md mb-2"
                placeholder="Enter BCD Number 2"
                value={bcdInput2}
                onChange={handleInput2Change}
            />
            <button
                className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                onClick={addBCD}
            >
                Add
            </button>
            <div className="mt-4">BCD Sum: {bcdSum}</div>
        </div>
    );
};

export default BCDAddition;
