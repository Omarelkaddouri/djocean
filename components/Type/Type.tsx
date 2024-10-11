"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

// Define the Type interface for Type objects
interface Type {
  id: number;
  name: string;
  img: string;
}

// Type component
const Type: React.FC = () => {
  const [types, setTypes] = useState<Type[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Dummy local images
  const localImages = [
    { id: 1, name: 'Guitar', img: '/images/guitar_slid.jpg' },
    { id: 2, name: 'Bass', img: '/images/bases_slid.jpg' },
    { id: 3, name: 'Drums', img: '/images/drums_slid.jpg' },
    { id: 4, name: 'DJ Equipment', img: '/images/djs_slid.jpg' },
  ];

  useEffect(() => {
    const fetchTypes = async () => {
      setLoading(true);
      setError(null);
      try {
        // Simulate an API fetch by using local images
        setTypes(localImages);
      } catch (error) {
        console.error("Failed to fetch types:", error);
        setError("Failed to load types. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchTypes();
  }, []);

  // Loader CSS styles
  const loaderStyle = {
    border: '8px solid #f3f3f3', // Light grey
    borderTop: '8px solid #3498db', // Blue
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    animation: 'spin 1s linear infinite',
    margin: 'auto', // Centering
  } as React.CSSProperties;

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  // Error message styling
  const errorStyle = {
    color: 'red',
    textAlign: 'center',
    padding: '12px',
  } as React.CSSProperties;

  // Animation for spinner
  const keyframes = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;

  // Append keyframes to style
  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

  if (loading) {
    return (
      <div style={containerStyle}>
        <div style={loaderStyle}></div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={containerStyle}>
        <p style={errorStyle}>{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Product Types</h2>
      <div className="flex justify-center">
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
    </div>
  );
};

export default Type;
