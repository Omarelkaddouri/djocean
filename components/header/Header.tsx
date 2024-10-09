"use client"; // Ensure this is a Client Component

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { MagnifyingGlassIcon, UserCircleIcon, ShoppingCartIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Check screen width to enable mobile view toggle
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1127);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="bg-white shadow" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link className="navbar-brand" href="/">
              <img src="images/main-logo.png" alt="Logo" style={{ height: "100px", width: "140px" }} className="logo" />
            </Link>
          </div>

          {/* Hamburger Icon for Mobile */}
          {isMobile && (
            <button onClick={toggleMenu} aria-label="Toggle menu" className="md:hidden">
              {isOpen ? (
                <XMarkIcon className="h-6 w-6 text-gray-700" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-gray-700" />
              )}
            </button>
          )}

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
      </nav>

      {/* Aside Menu for Mobile */}
      {isMobile && isOpen && (
        <aside className="fixed inset-y-0 left-0 w-3/4 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto max-h-screen">
          <div className="flex justify-between items-center p-4">
            <h2 className="text-xl font-semibold">Menu</h2>
            <button onClick={toggleMenu} aria-label="Close menu">
              <XMarkIcon className="h-6 w-6 text-gray-700" />
            </button>
          </div>
          <nav className="flex flex-col space-y-4 px-4 py-2">
            <Link href="/" className="text-gray-900 hover:text-gray-700 py-2 px-4">Home</Link>
            <Link href="/about" className="text-gray-900 hover:text-gray-700 py-2 px-4">About</Link>
            <Link href="/contact" className="text-gray-900 hover:text-gray-700 py-2 px-4">Contact</Link>
          </nav>
          <nav className="flex flex-col space-y-4 px-4 py-2">
            <Link href="/categories/guitars" className="text-gray-900 hover:text-gray-700 py-2 px-4">Guitars</Link>
            <Link href="/categories/basses" className="text-gray-900 hover:text-gray-700 py-2 px-4">Basses</Link>
            <Link href="/categories/keys" className="text-gray-900 hover:text-gray-700 py-2 px-4">Keys</Link>
            <Link href="/categories/wind-instruments" className="text-gray-900 hover:text-gray-700 py-2 px-4">Wind Instruments</Link>
            <Link href="/categories/drums-percussion" className="text-gray-900 hover:text-gray-700 py-2 px-4">Drums & Percussion</Link>
            <Link href="/categories/pa-lighting" className="text-gray-900 hover:text-gray-700 py-2 px-4">PA & Lighting</Link>
            <Link href="/categories/recording" className="text-gray-900 hover:text-gray-700 py-2 px-4">Recording</Link>
            <Link href="/categories/dj-equipment" className="text-gray-900 hover:text-gray-700 py-2 px-4">DJ Equipment</Link>
            <Link href="/categories/instruments-for-children" className="text-gray-900 hover:text-gray-700 py-2 px-4">Instruments for Children</Link>
            <Link href="/categories/accessories-cables" className="text-gray-900 hover:text-gray-700 py-2 px-4">Accessories & Cables</Link>
          </nav>
        </aside>
      )}

      {/* Desktop Categories Navigation */}
      {!isMobile && (
        <nav className="bg-gray-800" style={{ marginTop: '26px' }}>
          <div className="max-w-screen-xl mx-auto flex justify-between items-center">
            <div className="flex space-x-4">
              <Link href="/categories/guitars" className="text-white hover:bg-gray-700 py-2 px-4 rounded-md">Guitars</Link>
              <Link href="/categories/basses" className="text-white hover:bg-gray-700 py-2 px-4 rounded-md">Basses</Link>
              <Link href="/categories/keys" className="text-white hover:bg-gray-700 py-2 px-4 rounded-md">Keys</Link>
              <Link href="/categories/wind-instruments" className="text-white hover:bg-gray-700 py-2 px-4 rounded-md">Wind Instruments</Link>
              <Link href="/categories/drums-percussion" className="text-white hover:bg-gray-700 py-2 px-4 rounded-md">Drums & Percussion</Link>
              <Link href="/categories/pa-lighting" className="text-white hover:bg-gray-700 py-2 px-4 rounded-md">PA & Lighting</Link>
              <Link href="/categories/recording" className="text-white hover:bg-gray-700 py-2 px-4 rounded-md">Recording</Link>
              <Link href="/categories/dj-equipment" className="text-white hover:bg-gray-700 py-2 px-4 rounded-md">DJ Equipment</Link>
              <Link href="/categories/instruments-for-children" className="text-white hover:bg-gray-700 py-2 px-4 rounded-md">Instruments for Children</Link>
              <Link href="/categories/accessories-cables" className="text-white hover:bg-gray-700 py-2 px-4 rounded-md">Accessories & Cables</Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
