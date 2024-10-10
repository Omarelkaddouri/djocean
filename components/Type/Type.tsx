"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface Type {
  id: number;
  name: string;
  img: string;
}

const Type: React.FC = () => {
  const [types, setTypes] = useState<Type[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTypes = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/photos?_limit=4");

        if (!response.ok) {
          console.log("https://jsonplaceholder.typicode.com/photos?_limit=4");
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        const formattedTypes = data.map((item: any) => ({
          id: item.id,
          name: `Type ${item.id}`, // Placeholder name
          img: item.url,
        }));

        setTypes(formattedTypes);
      } catch (error) {
        console.error("Failed to fetch types:", error);
        setError("Failed to load types. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchTypes();
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
