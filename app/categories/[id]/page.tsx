"use client"; // This should be a client component

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; // Use next/navigation to access URL parameters
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import Link from 'next/link'; // Import Link for navigation
import Image from 'next/image'; // Import Next.js Image component
import dynamic from 'next/dynamic';

// Make sure the path includes the full filename
const ChatbotComponent = dynamic(() => import('../../../components/chatbot/ChatbotComponent'), { ssr: false });

interface Photo {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const TypePage: React.FC = () => {
  const params = useParams(); // Get all parameters from the URL
  const typeId = params.id; // Extract the typeId parameter

  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=4'); // Fetch photos from the API
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Photo[] = await response.json();
        setPhotos(data);
      } catch {
        setError('Failed to load photos');
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <>
      <Header />
      <div className="text-center py-12">
        <h1 className="text-3xl font-bold">Category: {typeId}</h1> {/* Displaying the typeId as the category name */}
        <p className="mt-4">You are viewing type: {typeId}</p>
        {loading && <p>Loading photos...</p>}
        {error && <p className="text-red-500">{error}</p>}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {photos.map((photo) => (
            <Link key={photo.id} href={`/product/${photo.id}`} className="border rounded-lg p-4 block hover:shadow-lg transition-shadow duration-200">
              <Image src={photo.thumbnailUrl} alt={photo.title} width={150} height={150} className="w-full h-auto rounded" />
              <h2 className="mt-2 text-lg">{photo.title}</h2>
            </Link>
          ))}
        </div>
      </div>
      <ChatbotComponent />
      <Footer />
    </>
  );
};

export default TypePage;
