"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Decimal2Hexadecimal = () => {
    const [decimalInput, setDecimalInput] = useState('');
    const [hexadecimalOutput, setHexadecimalOutput] = useState('');

    const handleInputChange = (e) => {
        const input = e.target.value;
        if (isValidDecimal(input)) {
            setDecimalInput(input);
            convertToHexadecimal(input);
        } else if (e.nativeEvent.inputType === 'deleteContentBackward') {
            setDecimalInput('');
            setHexadecimalOutput('');
        } else {
            setDecimalInput('');
            alert("Invalid Input");
            setHexadecimalOutput('');
        }
    };

    const isValidDecimal = (input) => /^[0-9]*$/.test(input);

    const convertToHexadecimal = (decimalInput) => {
        if (decimalInput === '') {
            setHexadecimalOutput('');
        } else {
            const decimalValue = parseInt(decimalInput, 10);
            const hexadecimal = decimalValue.toString(16).toUpperCase();
            setHexadecimalOutput(hexadecimal);
        }
    };

    return (
        <>
            <div className='text-black flex m-auto my-10 flex-col align-center justify-center md:w-1/3'>
                <h2 className='text-center text-xl md:text-2xl py-10'>Decimal to Hexadecimal</h2>
                <div className='centertheText'>
                    <input
                        className='text-black p-1 md:p-2 rounded md:text-xl'
                        type="text"
                        placeholder="Enter a decimal number"
                        value={decimalInput}
                        onChange={handleInputChange}
                    />
                    <div className='py-7 md:text-xl'>
                        Hexadecimal Output: {hexadecimalOutput}
                    </div>
                    <Link href="/Decimal">
                        <button className='bg-white text-black p-1 px-3 rounded'>Go Back</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Decimal2Hexadecimal;
