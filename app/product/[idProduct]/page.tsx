"use client"; // This should be a client component

import { useRouter } from 'next/navigation'; // Use next/navigation to access router
import { useState, useEffect } from 'react';
import Link from 'next/link'; // Import Link for navigation
import Image from 'next/image'; // Import Image for optimized images
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import { usePathname } from 'next/navigation'; // Import usePathname
import dynamic from 'next/dynamic';

// Make sure the path includes the full filename
const ChatbotComponent = dynamic(() => import('../../../components/chatbot/ChatbotComponent'), { ssr: false });

// Define a type for the product details
interface Product {
  id: string;
  title: string;
  url: string;
  price: number;
}

// Static product details for demonstration
const staticProduct: Product = {
  id: '1', // Example product ID
  title: 'Sample Product',
  url: 'https://via.placeholder.com/400', // Placeholder image URL
  price: 25.00,
};

const ProductPage = () => {
  const router = useRouter();
  const pathname = usePathname(); // Use usePathname to get the current path
  const [idProduct, setIdProduct] = useState<string | undefined>(undefined); // State for product ID
  const [quantity, setQuantity] = useState(1); // State for quantity
  const [product, setProduct] = useState<Product>(staticProduct); // State for product details


  useEffect(() => {
    // Check if pathname is available and set the product ID based on the pathname
    if (pathname) {
      const pathSegments = pathname.split('/');
      const productIdFromPath = pathSegments[pathSegments.length - 1];
      setIdProduct(productIdFromPath); // Set the product ID state
    }
  }, [pathname]); // Run effect when pathname changes

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Product ID: ${idProduct}, Quantity: ${quantity}`);
    // Handle your submission logic here, e.g., add to cart
  };

  return (
    <>
      <Header />
      <div className="max-w-md mx-auto p-4">
        {/* Product Details */}
        <h1 className="text-2xl font-semibold mb-4">Product: {product.title}</h1>
        <Image
          src={product.url}
          alt={product.title}
          className="w-full h-auto rounded mb-4"
          width={400} // Set the width of the image
          height={400} // Set the height of the image
        />
        <p className="text-gray-700 mb-4">{product.title}</p>
        <p className="text-lg font-semibold mb-4">Price: ${product.price.toFixed(2)}</p> {/* Example price */}

        {/* Quantity Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              min="1"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <Link href="/cart" passHref>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </Link>
        </form>
      </div>
      <ChatbotComponent />
      <Footer />
    </>
  );
};

export default ProductPage;
