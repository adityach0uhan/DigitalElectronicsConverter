"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Decimal2Octal = () => {
    const [decimalInput, setDecimalInput] = useState('');
    const [octalOutput, setOctalOutput] = useState('');

    const handleInputChange = (e) => {
        const input = e.target.value;
        if (isValidDecimal(input)) {
            setDecimalInput(input);
            convertToOctal(input);
        } else if (e.nativeEvent.inputType === 'deleteContentBackward') {
            setDecimalInput('');
            setOctalOutput('');
        } else {
            setDecimalInput('');
            alert("Invalid Input");
            setOctalOutput('');
        }
    };

    const isValidDecimal = (input) => /^[0-9]*$/.test(input);

    const convertToOctal = (decimalInput) => {
        if (decimalInput === '') {
            setOctalOutput('');
        } else {
            const decimalValue = parseInt(decimalInput, 10);
            const octal = decimalValue.toString(8);
            setOctalOutput(octal);
        }
    };

    return (
        <>
            <div className='text-black flex m-auto my-10 flex-col align-center justify-center md:w-1/3'>
                <h2 className='text-center text-xl md:text-2xl py-10'>Decimal to Octal</h2>
                <div className='centertheText'>
                    <input
                        className='text-black p-1 md:p-2 rounded md:text-xl'
                        type="text"
                        placeholder="Enter a decimal number"
                        value={decimalInput}
                        onChange={handleInputChange}
                    />
                    <div className='py-7 md:text-xl'>
                        Octal Output: {octalOutput}
                    </div>
                    <Link href="/Decimal">
                        <button className='bg-white text-black p-1 px-3 rounded'>Go Back</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Decimal2Octal;
