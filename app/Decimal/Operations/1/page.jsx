"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Decimal2Binary = () => {
    const [decimalInput, setDecimalInput] = useState('');
    const [binaryOutput, setBinaryOutput] = useState('');

    const handleInputChange = (e) => {
        const input = e.target.value;
        if (isValidDecimal(input)) {
            setDecimalInput(input);
            convertToBinary(input);
        } else if (e.nativeEvent.inputType === 'deleteContentBackward') {
            setDecimalInput('');
            setBinaryOutput('');
        } else {
            setDecimalInput('');
            alert("Invalid Input");
            setBinaryOutput('');
        }
    };

    const isValidDecimal = (input) => /^[0-9]*$/.test(input);

    const convertToBinary = (decimalInput) => {
        if (decimalInput === '') {
            setBinaryOutput('');
        } else {
            const decimalValue = parseInt(decimalInput, 10);
            const binary = decimalValue.toString(2);
            setBinaryOutput(binary);
        }
    };

    return (
        <>
            <div className='text-black flex m-auto my-10 flex-col align-center justify-center md:w-1/3'>
                <h2 className='text-center text-xl md:text-2xl py-10'>Decimal to Binary</h2>
                <div className='centertheText'>
                    <input
                        className='text-black p-1 md:p-2 rounded md:text-xl'
                        type="text"
                        placeholder="Enter a decimal number"
                        value={decimalInput}
                        onChange={handleInputChange}
                    />
                    <div className='py-7 md:text-xl'>
                        Binary Output: {binaryOutput}
                    </div>
                    <Link href="/Decimal">
                        <button className='bg-white text-black p-1 px-3 rounded'>Go Back</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Decimal2Binary;
