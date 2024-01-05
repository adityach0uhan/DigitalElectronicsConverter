"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Hexa2Binary = () => {
    const [hexadecimalInput, setHexadecimalInput] = useState('');
    const [binaryOutput, setBinaryOutput] = useState('');

    const handleInputChange = (e) => {
        const input = e.target.value;
        if (isValidHexadecimal(input)) {
            setHexadecimalInput(input.toUpperCase());
            convertToBinary(input);
        } else if (e.nativeEvent.inputType === 'deleteContentBackward') {
            setHexadecimalInput('');
            setBinaryOutput('');
        } else {
            setHexadecimalInput('');
            alert("Invalid Input");
            setBinaryOutput('');
        }
    };

    const isValidHexadecimal = (input) => /^[0-9A-Fa-f]*$/.test(input);

    const convertToBinary = (hexadecimalInput) => {
        if (hexadecimalInput === '') {
            setBinaryOutput('');
        } else {
            const decimalValue = parseInt(hexadecimalInput, 16);
            const binary = decimalValue.toString(2);
            setBinaryOutput(binary);
        }
    };

    return (
        <>
            <div className='text-black flex m-auto my-10 flex-col align-center justify-center md:w-1/3'>
                <h2 className='text-center text-xl md:text-2xl py-10'>Hexadecimal to Binary</h2>
                <div className='centertheText'>
                    <input
                        className='text-black p-1 md:p-2 rounded md:text-xl'
                        type="text"
                        placeholder="Enter a hexadecimal number"
                        value={hexadecimalInput}
                        onChange={handleInputChange}
                    />
                    <div className='py-7 md:text-xl'>
                        Binary Output: {binaryOutput}
                    </div>
                    <Link href="/Hexadecimal">
                        <button className='bg-white text-black p-1 px-3 rounded'>Go Back</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Hexa2Binary;
