"use client"
import React, { useState } from 'react';

const BCDSubtraction = () => {
    const [binaryInput1, setBinaryInput1] = useState('');
    const [binaryInput2, setBinaryInput2] = useState('');
    const [xs3Result, setXS3Result] = useState('');

    const handleInput1Change = (e) => {
        const input = e.target.value;
        if (isValidBinary(input)) {
            setBinaryInput1(input);
        } else {
            setBinaryInput1('');
            alert("Invalid binary input");
        }
    };

    const handleInput2Change = (e) => {
        const input = e.target.value;
        if (isValidBinary(input)) {
            setBinaryInput2(input);
        } else {
            setBinaryInput2('');
            alert("Invalid binary input");
        }
    };

    const isValidBinary = (input) => /^[01]+$/.test(input);

    const subtractXS3 = () => {
        if (binaryInput1 && binaryInput2) {
            const result = performXS3Subtraction(binaryInput1, binaryInput2);
            setXS3Result(result);
        } else {
            alert("Please enter valid binary numbers in both inputs.");
        }
    };

    const performXS3Subtraction = (binary1, binary2) => {
        if (binary1.length !== binary2.length) {
            alert("Binary numbers must have the same length for XS-3 subtraction.");
            return '';
        }

        const result = [];

        let borrow = 0;
        for (let i = binary1.length - 1; i >= 0; i--) {
            const digit1 = parseInt(binary1[i]);
            const digit2 = parseInt(binary2[i]) + borrow;

            if (digit1 >= digit2) {
                result[i] = (digit1 - digit2).toString();
                borrow = 0;
            } else {
                result[i] = (digit1 + 2 - digit2).toString();
                borrow = 1;
            }
        }

        return result.join('');
    };

    return (
        <div className="max-w-md text-white mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">XS-3 Subtraction</h2>
            <input
                type="text"
                className="w-full p-2 border text-black rounded-md mb-2"
                placeholder="Enter Binary Number 1"
                value={binaryInput1}
                onChange={handleInput1Change}
            />
            <input
                type="text"
                className="w-full p-2 border rounded-md text-black mb-2"
                placeholder="Enter Binary Number 2"
                value={binaryInput2}
                onChange={handleInput2Change}
            />
            <button
                className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                onClick={subtractXS3}
            >
                Subtract
            </button>
            <div className="mt-4 text-black ">XS-3 Result: {xs3Result}</div>
        </div>
    );
};

export default BCDSubtraction;
