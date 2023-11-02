"use client"
import React from 'react';
import Link from 'next/link.js';

export default function Home() {

  return (
    <>

      <div className='flex flex-row bg-black-900 flex-wrap'>
        <div className='m-auto text-white text-l md:text-2xl font-extrabold my-10 text-bold mb-4'>Number System Conversions</div>
        <div className=" w-full justify-center py-1 align-center flex flex-wrap">

          <Link href="/Binary"><div className='centertheText w-32 h-40 text-center md:w-60 hover:bg-violet-600 my-2 mx-2 bg-blue-400 rounded'>Binary System Conversions</div></Link>

          <Link href="/Decimal"><div className='centertheText w-32 h-40 text-center md:w-60 hover:bg-violet-600 my-2 mx-2 bg-blue-400 rounded'>Decimal System Conversions</div></Link>

          <Link href="/Octal">
            <div className='centertheText w-32 h-40 text-center md:w-60 hover:bg-violet-600 my-2 mx-2 bg-blue-400 rounded'>Octal System Conversions</div>
          </Link>

          <Link href="/Hexadecimal"><div className='centertheText w-32 h-40 text-center md:w-60 hover:bg-violet-600 my-2 mx-2 bg-blue-400 rounded'>HexaDecimal System Conversions</div></Link>

        </div>
      </div>


      <div className='flex flex-row bg-black-900 flex-wrap'>
        <div className='m-auto text-white text-l md:text-2xl font-extrabold my-10 text-bold mb-4'>Number System Calculations</div>
        <div className=" w-full justify-center py-1 align-center flex flex-wrap">

          <Link href="/BCD/Addition"><div className='centertheText w-32 h-40 text-center md:w-60 hover:bg-violet-600 my-2 mx-2 bg-blue-400 rounded'>BCD Addition</div></Link>

          <Link href="/BCD/Subtraction"><div className='centertheText w-32 h-40 text-center md:w-60 hover:bg-violet-600 my-2 mx-2 bg-blue-400 rounded'>BCD Subtraction </div></Link>

        </div>
      </div>


  















    </>


  )
}
