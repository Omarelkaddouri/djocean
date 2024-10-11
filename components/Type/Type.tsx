"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

// Define the Type interface for Type objects
interface Type {
  id: number;
  name: string;
  img: string;
}

const Type: React.FC = () => {
  const [types, setTypes] = useState<Type[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Local images array
  const localImages = [
    { id: 1, name: 'Type 1', img: '/images/guitar_slid.jpg' },
    { id: 2, name: 'Type 2', img: '/images/bases_slid.jpg' },
    { id: 3, name: 'Type 3', img: '/images/drums_slid.jpg' },
    { id: 4, name: 'Type 4', img: '/images/djs_slid.jpg' },
  ];

  useEffect(() => {
    const loadTypes = () => {
      setLoading(true);
      setError(null);
      try {
        // Use the local images directly
        setTypes(localImages);
      } catch (error) {
        console.error("Failed to load types:", error);
        setError("Failed to load types. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadTypes();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-12">
        <p>Loading types...</p>
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500 text-center py-12">{error}</p>;
  }

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Product Types</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {types.map((type) => (
          <div
            key={type.id}
            className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            <Link href={`/categories/${type.id}`}> {/* Pass the type ID to the category page */}
              <img
                src={type.img}
                alt={type.name}
                className="w-full h-40 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">
                <h3 className="text-lg font-semibold">{type.name}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Type;
