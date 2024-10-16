"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import LanguageSelector from '../LanguageSelector/LanguageSelector'; // Import LanguageSelector
import { useLanguage } from '../../context/LanguageContext'; // Import the language context
import { translate, translateCategory } from '../../translations'; // Import translate and translateCategory functions

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const { language } = useLanguage(); // Get the current language

  const categories = [
    "guitars", 
    "basses", 
    "keys", 
    "wind_instruments",
    "drums_percussion", 
    "pa_lighting", 
    "recording",
    "dj_equipment", 
    "instruments_for_children", 
    "accessories_cables"
  ];

  const filteredCategories = categories.filter(category =>
    category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1127);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow py-5">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <img
                src="/images/main-logo.png"
                alt="Logo"
                className="h-[12rem] w-auto"
              />
            </Link>
          </div>

          {/* Hamburger Icon for Mobile */}
          {isMobile && (
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="md:hidden"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6 text-gray-700" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-gray-700" />
              )}
            </button>
          )}

          {/* Center Navigation Links */}
          <div className="hidden md:flex md:space-x-10">
            <Link href="/" className="text-gray-900 hover:text-gray-700 py-2 px-4">
              {translate('home', language)}
            </Link>
            <Link href="/about" className="text-gray-900 hover:text-gray-700 py-2 px-4">
              {translate('about', language)}
            </Link>
            <Link href="/contact" className="text-gray-900 hover:text-gray-700 py-2 px-4">
              {translate('contact', language)}
            </Link>
          </div>

          {/* Right Icons and Language Selector */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector /> {/* Language Selector for Desktop */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border rounded-md p-2 pl-10 w-64"
              />
              <MagnifyingGlassIcon className="absolute left-2 top-2.5 h-5 w-5 text-gray-500" />
              {searchQuery && (
                <div className="absolute bg-white border rounded-md shadow-md mt-1 w-full z-50">
                  {filteredCategories.length > 0 ? (
                    filteredCategories.map(category => (
                      <Link
                        key={category}
                        href={`/categories/${category}`}
                        className="block px-4 py-2 text-gray-900 hover:bg-gray-200"
                        onClick={() => setSearchQuery('')}
                      >
                        {translateCategory(category, language)} {/* Use translateCategory for translation */}
                      </Link>
                    ))
                  ) : (
                    <div className="px-4 py-2 text-gray-500">No results found</div>
                  )}
                </div>
              )}
            </div>
            <Link href="/cart" aria-label="Shopping Cart">
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
          </div>
          <nav className="flex flex-col space-y-4 px-4 py-2">
            <Link href="/" className="text-gray-900 hover:text-gray-700 py-2 px-4">
              {translate('home', language)}
            </Link>
            <Link href="/about" className="text-gray-900 hover:text-gray-700 py-2 px-4">
              {translate('about', language)}
            </Link>
            <Link href="/contact" className="text-gray-900 hover:text-gray-700 py-2 px-4">
              {translate('contact', language)}
            </Link>

            {/* Language Selector */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Language</h3>
              <LanguageSelector />
            </div>

            {/* Search Bar */}
            <div className="flex items-center space-x-4 mt-4">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search categories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border rounded-md p-2 pl-10 w-full"
                />
                <MagnifyingGlassIcon className="absolute left-2 top-2.5 h-5 w-5 text-gray-500" />
                {searchQuery && (
                  <div className="absolute bg-white border rounded-md shadow-md mt-1 w-full z-50">
                    {filteredCategories.length > 0 ? (
                      filteredCategories.map(category => (
                        <Link
                          key={category}
                          href={`/categories/${category}`}
                          className="block px-4 py-2 text-gray-900 hover:bg-gray-200"
                          onClick={() => setSearchQuery('')}
                        >
                          {translateCategory(category, language)} {/* Use translateCategory for translation */}
                        </Link>
                      ))
                    ) : (
                      <div className="px-4 py-2 text-gray-500">No results found</div>
                    )}
                  </div>
                )}
              </div>
            </div>
            <Link href="/cart" aria-label="Shopping Cart" className="py-2 px-4">
              <ShoppingCartIcon className="h-6 w-6 text-gray-700 hover:text-gray-900 cursor-pointer" />
            </Link>
            {/* Categories List */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Categories</h3>
              <ul className="space-y-2">
                {categories.map(category => (
                  <li key={category}>
                    <Link
                      href={`/categories/${category}`}
                      className="text-gray-900 hover:text-gray-700 block py-1 px-2 rounded-md"
                    >
                      {translateCategory(category, language)} {/* Use translateCategory for translation */}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </aside>
      )}
    </header>
  );
};

export default Header;
