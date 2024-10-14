// components/Type/Type.tsx

"use client"; // This line enables client-side rendering

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

// Define the Type interface for Type objects
interface Type {
  id: number;
  title: string; // This should match the property name in your API data
  image: string; // This should match the property name in your API data
}

const Type: React.FC = () => {
  const [types, setTypes] = useState<Type[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTypes = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch('/api/types'); // Using the internal API route
        const data = await response.json();

        if (data.success) {
          // Map the API response to the Type structure
          const fetchedTypes = data.types.map((item: any) => ({
            id: item.id,
            title: item.title,
            image: item.image,
          }));

          setTypes(fetchedTypes);
        } else {
          throw new Error('Failed to fetch types');
        }
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
            <Link href={`/categories/${type.id}`}>
              <img
                src={type.image}
                alt={type.title}
                className="w-full h-40 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">
                <h3 className="text-lg font-semibold">{type.title}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Type;
