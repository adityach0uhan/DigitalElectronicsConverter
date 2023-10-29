import React from 'react'
import { useState } from 'react';
import Link from 'next/link'
const Header = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-white-100 p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="text-white text-2xl font-semibold cursor-pointer">Digital Electronics Calculator</div>
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link href="/">
            <div className="text-white cursor-pointer hover:underline">Home</div>
          </Link>
          <Link href="/Modes">
            <div className="text-white cursor-pointer hover:underline">Modes</div>
          </Link>
          <Link href="/about">
            <div className="text-white cursor-pointer hover:underline">About</div>
          </Link>
        </div>
        <div className="md:hidden relative">
          {/* Mobile menu button */}
          <button
            id="mobile-menu-button"
            onClick={toggleMobileMenu}
            className="text-white cursor-pointer w-8 h-8"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className={`h-6 w-6 transition-transform ${mobileMenuOpen ? 'transform rotate-90' : ''
                }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {/* Mobile menu content */}
          <div
            id="mobile-menu"
            className={`absolute top-12 right-0 transform transition-transform ${mobileMenuOpen ? 'scale-100' : 'scale-0'
              } origin-top-right bg-black text-white mt-2 p-2 rounded-lg shadow-lg`}
          >
            <Link href="/">
              <div className=" cursor-pointer hover:bg-white hover:text-black p-2">Home</div>
            </Link>
            <Link href="/Modes">
              <div className=" cursor-pointer hover:bg-white hover:text-black p-2">Modes</div>
            </Link>
            <Link href="/About">
              <div className=" cursor-pointer hover:bg-white hover:text-black p-2">About</div>
            </Link>
          </div>
        </div>
      </div>
    </nav>

  )
}

export default Header