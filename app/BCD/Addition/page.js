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
        const result = [];

        let carry = 0;
        for (let i = bcd1.length - 1; i >= 0; i--) {
            const digit1 = parseInt(bcd1[i]);
            const digit2 = parseInt(bcd2[i]);
            const digitSum = digit1 + digit2 + carry;

            if (digitSum >= 10) {
                result[i] = (digitSum - 10).toString();
                carry = 1;
            } else {
                result[i] = digitSum.toString();
                carry = 0;
            }
        }

        if (carry === 1) {
            alert("BCD overflow: The result is not a valid BCD.");
            return '';
        }

        return result.join('');
    };

    return (
        <div className="max-w-md mx-auto p-4">
            <h2 className="text-2xl text-white font-bold mb-4">BCD Addition</h2>
            <input
                type="text"
                className="w-full p-2 text-black border rounded-md mb-2"
                placeholder="Enter BCD Number 1"
                value={bcdInput1}
                onChange={handleInput1Change}
            />
            <input
                type="text"
                className="w-full text-black p-2 border rounded-md mb-2"
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
