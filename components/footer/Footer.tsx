"use client"; // Ensure you have the 'use client' directive if using this in Next.js

import Link from 'next/link'; // Correct import statement
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <h4 className="text-3xl font-bold mb-2">djstage</h4>
          <p className="text-sm text-gray-300">Your one-stop shop for musical instruments and gear.</p>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-8 md:space-y-0 space-y-4">
          <Link href="/about" className="px-4 py-2 hover:text-blue-400 transition duration-300">About Us</Link>
          <Link href="/services" className="px-4 py-2 hover:text-blue-400 transition duration-300">Services</Link>
          <Link href="/contact" className="px-4 py-2 hover:text-blue-400 transition duration-300">Contact</Link>
          <Link href="/privacy" className="px-4 py-2 hover:text-blue-400 transition duration-300">Privacy Policy</Link>
        </div>
      </div>
      <div className="text-center mt-6 border-t border-gray-700 pt-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Music Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
