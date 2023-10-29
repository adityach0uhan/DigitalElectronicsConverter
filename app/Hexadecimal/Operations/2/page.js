"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Hexa2Decimal = () => {
    const [hexadecimalInput, setHexadecimalInput] = useState('');
    const [decimalOutput, setDecimalOutput] = useState('');

    const handleInputChange = (e) => {
        const input = e.target.value;
        if (isValidHexadecimal(input)) {
            setHexadecimalInput(input.toUpperCase());
            convertToDecimal(input);
        } else if (e.nativeEvent.inputType === 'deleteContentBackward') {
            setHexadecimalInput('');
            setDecimalOutput('');
        } else {
            setHexadecimalInput('');
            alert("Invalid Input");
            setDecimalOutput('');
        }
    };

    const isValidHexadecimal = (input) => /^[0-9A-Fa-f]*$/.test(input);

    const convertToDecimal = (hexadecimalInput) => {
        if (hexadecimalInput === '') {
            setDecimalOutput('');
        } else {
            const decimalValue = parseInt(hexadecimalInput, 16);
            setDecimalOutput(decimalValue);
        }
    };

    return (
        <>
            <div className='text-white flex m-auto my-10 flex-col align-center justify-center md:w-1/3'>
                <h2 className='text-center text-xl md:text-2xl py-10'>Hexadecimal to Decimal</h2>
                <div className='centertheText'>
                    <input
                        className='text-black p-1 md:p-2 rounded md:text-xl'
                        type="text"
                        placeholder="Enter a hexadecimal number"
                        value={hexadecimalInput}
                        onChange={handleInputChange}
                    />
                    <div className='py-7 md:text-xl'>
                        Decimal Output: {decimalOutput}
                    </div>
                    <Link href="/Hexadecimal">
                        <button className='bg-white text-black p-1 px-3 rounded'>Go Back</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Hexa2Decimal;
