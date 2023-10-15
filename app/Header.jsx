"use client"
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Header = () => {
  return (
    <>
      <Navbar bg="light" className='flex ' data-bs-theme="light">
        <Navbar.Brand>
          <Link className='text-black' href="/">
            Digital Calculator
          </Link>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Link className='text-black mx-4' href="/">
            Home
          </Link>
          <Link className='text-black mx-4' href="/modes">
            Modes
          </Link>
          <Link className='text-black mx-4' href="/about">
            About
          </Link>
        </Nav>
      </Navbar>
    </>

  )
}

export default Header