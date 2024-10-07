// components/header/Header.tsx
"use client"; // Ensure this is a Client Component

import { useState } from 'react';
import Link from 'next/link';
import { MagnifyingGlassIcon, UserCircleIcon, ShoppingCartIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0" >
            <Link className="navbar-brand" href="/">
              <img src="images/main-logo.png" alt="Logo"  style={{ height: "100px", width: "140px" }} className="logo" />
            </Link>
           
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? (
                <XMarkIcon className="h-6 w-6 text-gray-700" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Center Navigation Links */}
          <div className="hidden md:flex md:space-x-10">
            <Link href="/" className="text-gray-900 hover:text-gray-700 py-2 px-4">Home</Link>
            <Link href="/about" className="text-gray-900 hover:text-gray-700 py-2 px-4">About</Link>
            <Link href="/contact" className="text-gray-900 hover:text-gray-700 py-2 px-4">Contact</Link>
          </div>

          {/* Right Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <select className="border rounded-md p-2">
                <option value="en">EN</option>
                <option value="fr">FR</option>
                <option value="es">ES</option>
              </select>
            </div>
            <Link href="/search" className="p-2" aria-label="Search">
              <MagnifyingGlassIcon className="h-6 w-6 text-gray-700 hover:text-gray-900 cursor-pointer" />
            </Link>
            <Link href="/login" className="p-2" aria-label="Login">
              <UserCircleIcon className="h-6 w-6 text-gray-700 hover:text-gray-900 cursor-pointer" />
            </Link>
            <Link href="/cart" className="p-2" aria-label="Shopping Cart">
              <ShoppingCartIcon className="h-6 w-6 text-gray-700 hover:text-gray-900 cursor-pointer" />
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div style={{ marginTop: '30px' }} className={`md:hidden flex flex-col bg-white shadow-md w-full ${isOpen ? 'block' : 'hidden'}`}>
          <Link href="/" className="text-gray-900 hover:text-gray-700 py-2 px-4">Home</Link>
          <Link href="/about" className="text-gray-900 hover:text-gray-700 py-2 px-4">About</Link>
          <Link href="/contact" className="text-gray-900 hover:text-gray-700 py-2 px-4">Contact</Link>
          <Link href="/search" className="p-2" aria-label="Search">
              <MagnifyingGlassIcon className="h-6 w-6 text-gray-700 hover:text-gray-900 cursor-pointer" />
            </Link>
            <Link href="/login" className="p-2" aria-label="Login">
              <UserCircleIcon className="h-6 w-6 text-gray-700 hover:text-gray-900 cursor-pointer" />
            </Link>
            <Link href="/cart" className="p-2" aria-label="Shopping Cart">
              <ShoppingCartIcon className="h-6 w-6 text-gray-700 hover:text-gray-900 cursor-pointer" />
            </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
