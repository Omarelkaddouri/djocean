"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';
import { translate, translateCategory } from '../../translations';

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
  const { language } = useLanguage();

  // Local images array with category keys
  const localImages = [
    { id: 1, name: 'guitars', img: '/images/guitar_slid.jpg' },
    { id: 2, name: 'basses', img: '/images/bases_slid.jpg' },
    { id: 3, name: 'drums_percussion', img: '/images/drums_slid.jpg' },
    { id: 4, name: 'dj_equipment', img: '/images/djs_slid.jpg' },
  ];

  useEffect(() => {
    const loadTypes = () => {
      setLoading(true);
      setError(null);
      try {
        setTypes(localImages);
      } catch (error) {
        console.error("Failed to load types:", error);
        setError(translate("Failed to load types. Please try again later.", language));
      } finally {
        setLoading(false);
      }
    };

    loadTypes();
  }, [language]);

  if (loading) {
    return (
      <div className="text-center py-12">
        <p>{translate("Loading types...", language)}</p>
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500 text-center py-12">{error}</p>;
  }

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        {translate("categories.product_types", language)} {/* Use the nested key */}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {types.map((type) => (
          <div
            key={type.id}
            className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            <Link href={`/categories/${type.id}`}>
              <img
                src={type.img}
                alt={translateCategory(type.name, language)}
                className="w-full h-40 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">
                <h3 className="text-lg font-semibold">{translateCategory(type.name, language)}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Type;
