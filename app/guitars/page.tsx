"use client"; // Ensure you have the 'use client' directive if using this in Next.js

import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import React from 'react';

const Guitar = () => {
  const guitarTypes = [
    { name: 'Acoustic Guitar', img: '/images/AcousticGuitar.png' },
    { name: 'Electric Guitar', img: '/images/electric-guitar.jpg' },
    { name: 'Bass Guitar', img: '/images/bass-guitar.jpg' },
    { name: 'Classical Guitar', img: '/images/classical-guitar.jpg' },
    { name: '12-String Guitar', img: '/images/12-string-guitar.jpg' },
    { name: 'Travel Guitar', img: '/images/travel-guitar.jpg' },
    { name: 'Resonator Guitar', img: '/images/resonator-guitar.jpg' },
    { name: 'Archtop Guitar', img: '/images/archtop-guitar.jpg' },
    // Add more guitar types as needed
  ];

  return (
    <>
      <Header />
      <div className="container mx-auto py-12">
        <h2 className="text-3xl  text-center mb-8">Types of Guitars</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {guitarTypes.map((guitar, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={guitar.img}
                alt={guitar.name}
                className="w-full h-40 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">
                <h3 className="text-lg font-semibold">{guitar.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Guitar;
