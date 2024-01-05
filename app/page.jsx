"use client"
import React from 'react';
import Link from 'next/link.js';

export default function Home() {

  return (
    <>

      <div className='flex flex-row bg-black-900 flex-wrap'>
        <div className='m-auto text-black text-l md:lg:text-2xl  font-extrabold my-10 text-bold mb-4'>Number System Conversions</div>
        <div className=" w-full justify-center py-1 align-center flex flex-wrap">

          <Link href="/Binary"><div className='centertheText w-32 h-40 text-center md:w-60 hover:bg-blue-300 my-2 mx-2 bg-blue-200 rounded border border-2 border-black lg:text-2xl '>Binary System Conversions</div></Link>

          <Link href="/Decimal"><div className='centertheText w-32 h-40 text-center md:w-60 hover:bg-blue-300 my-2 mx-2 bg-blue-200 rounded border border-2 border-black lg:text-2xl '>Decimal System Conversions</div></Link>

          <Link href="/Octal">
            <div className='centertheText w-32 h-40 text-center md:w-60 hover:bg-blue-300 my-2 mx-2 bg-blue-200 rounded border border-2 border-black lg:text-2xl '>Octal System Conversions</div>
          </Link>

          <Link href="/Hexadecimal"><div className='centertheText w-32 h-40 text-center md:w-60 hover:bg-blue-300 my-2 mx-2 bg-blue-200 rounded border border-2 border-black lg:text-2xl  '>HexaDecimal System Conversions</div></Link>

        </div>
      </div>


      <div className='flex flex-row bg-black-900 flex-wrap'>
        <div className='m-auto text-black text-l md:lg:text-2xl  font-extrabold my-10 text-bold mb-4'>Number System Calculations</div>
        <div className=" w-full justify-center py-1 align-center flex flex-wrap">

          <Link href="/BCD/Addition"><div className='centertheText w-32 h-40 text-center md:w-60 hover:bg-blue-300 my-2 mx-2 bg-blue-200 rounded border border-2 border-black lg:text-2xl '>BCD Addition</div></Link>

          <Link href="/BCD/Subtraction"><div className='centertheText w-32 h-40 text-center md:w-60 hover:bg-blue-300 my-2 mx-2 bg-blue-200 rounded border border-2 border-black lg:text-2xl '>BCD Subtraction </div></Link>

          <Link href="/Excess3"><div className='centertheText w-32 h-40 text-center md:w-60 hover:bg-blue-300 my-2 mx-2 bg-blue-200 rounded border border-2 border-black lg:text-2xl '>Excess 3 </div></Link>
        </div>
      </div>


  















    </>


  )
}
