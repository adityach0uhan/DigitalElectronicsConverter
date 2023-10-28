"use client"
import React, { useState } from 'react';
import Link from 'next/link';
const BinaryToDecimalConverter = () => {
    const [binaryInput, setBinaryInput] = useState('');
    const [decimalOutput, setDecimalOutput] = useState('');

    const handleInputChange = (e) => {
        const input = e.target.value;

        // Check if the input is a valid binary value (0 or 1)
        if (/^[01]+$/.test(input)) {
            setBinaryInput(input);
            convertToDecimal(input);
        } else if (e.nativeEvent.inputType === 'deleteContentBackward') {
            // Handle backspace key press
            setBinaryInput('');
            setDecimalOutput('');
        } else {
            // If the input is invalid, don't update the state
            setBinaryInput('');
            alert('Invalid Input');
            setDecimalOutput('');
        }
    };

    const convertToDecimal = (binaryInput) => {
        if (binaryInput === '') {
            setDecimalOutput('');
        } else {
            const decimal = parseInt(binaryInput, 2);
            setDecimalOutput(decimal);
        }
    };

    return (
        <div className="text-white flex m-auto my-10 flex-col align-center justify-center md:w-1/3">
            <h2 className="text-center text-xl md:text-2xl py-10">Binary to Decimal</h2>
            <div className="centertheText">
                <input
                    className="text-black p-1 md:p-2 rounded md:text-xl"
                    type="text"
                    placeholder="Enter a binary number"
                    value={binaryInput}
                    onChange={handleInputChange}
                />
                <div className="py-7 md:text-xl">
                    Decimal Output: {decimalOutput}
                </div>
                <Link href="/Binary">
                    <button className='bg-white text-black p-1 px-3 rounded ' >Go Back</button></Link>            </div>
        </div>
    );
};

export default BinaryToDecimalConverter;
