"use client"; // Ensure you have the 'use client' directive if using this in Next.js

import React from 'react';

const categories = [
  {
    name: 'Guitars',
    img: '/images/various-types-guitars.png',
    link: '/guitars',
  },
  {
    name: 'Drums',
    img: '/images/drum-kit-dark-background-with-stage-lighting-copy-space.jpg',
    link: '/drums',
  },
  {
    name: 'Pianos',
    img: '/images/close-up-musician-playing-piano.jpg',
    link: '/pianos',
  },
  {
    name: 'Violins',
    img: '/images/view-violin-musical-instruments-store.jpg',
    link: '/violins',
  },
  // Add more categories as needed
];

const Categories = () => {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Music Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <a href={category.link}>
              <img
                src={category.img}
                alt={category.name}
                className="w-full h-40 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">
                <h3 className="text-lg font-semibold">{category.name}</h3>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
