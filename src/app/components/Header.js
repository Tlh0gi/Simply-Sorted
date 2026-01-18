"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-60 h-16 overflow-hidden">
              <Image 
                src="/images/company-logo.jpeg" 
                alt="Simply Sorted Logo" 
                fill
                className="object-contain scale-[4.5]"
                priority
              />
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-black transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-black transition-colors">
              About
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-black transition-colors">
              Services
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-black transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <Link 
            href="/contact"
            className="hidden md:block bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors"
          >
            Get Started
          </Link>

           {/* Mobile menu button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-black focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              // Close icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-3 border-t border-gray-200">
            <Link 
              href="/" 
              className="block px-4 py-2 text-gray-700 hover:bg-beige-light hover:text-black transition-colors rounded"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="block px-4 py-2 text-gray-700 hover:bg-beige-light hover:text-black transition-colors rounded"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link 
              href="/pricing" 
              className="block px-4 py-2 text-gray-700 hover:bg-beige-light hover:text-black transition-colors rounded"
              onClick={closeMenu}
            >
              Services
            </Link>
            <Link 
              href="/contact" 
              className="block px-4 py-2 text-gray-700 hover:bg-beige-light hover:text-black transition-colors rounded"
              onClick={closeMenu}
            >
              Contact
            </Link>
            <Link 
              href="/contact"
              className="block mx-4 mt-4 bg-black text-white text-center px-6 py-3 rounded hover:bg-gray-800 transition-colors"
              onClick={closeMenu}
            >
              Get Started
            </Link>
          </div>
          </div>
      </nav>
    </header>
  );
}