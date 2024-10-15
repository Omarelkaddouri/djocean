"use client";

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Dynamic import for Chatbot component
const ChatbotComponent = dynamic(() => import('../../components/chatbot/ChatbotComponent'), { ssr: false });

// Define the interface for cart items
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Guitar',
      price: 200,
      quantity: 1,
      image: '/images/guitar_slid.jpg',
    },
    {
      id: 2,
      name: 'Bass',
      price: 150,
      quantity: 2,
      image: '/images/bases_slid.jpg',
    },
  ]);

  const handleQuantityChange = (id: number, delta: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + delta } : item
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      <Header />
      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-5xl font-bold text-center text-gray-800 mb-10">Shopping Cart</h1>
          
          {cartItems.length === 0 ? (
            <div className="text-center text-gray-600">
              <p>Your cart is empty.</p>
              <Link href="/" className="text-blue-500 hover:underline">Continue Shopping</Link>
            </div>
          ) : (
            <div>
              <ul className="space-y-4">
                {cartItems.map((item) => (
                  <li key={item.id} className="flex items-center justify-between bg-white p-4 rounded-md shadow-md transition-transform transform hover:scale-105">
                    <div className="flex items-center">
                      <Image src={item.image} alt={item.name} width={80} height={80} className="h-20 w-20 object-cover rounded-md mr-4" />
                      <div>
                        <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                        <p className="text-gray-600">Price: ${item.price}</p>
                        <div className="flex items-center mt-2">
                          <button
                            onClick={() => handleQuantityChange(item.id, -1)}
                            disabled={item.quantity <= 1}
                            className="bg-gray-200 text-gray-600 px-2 py-1 rounded-md transition duration-300 hover:bg-gray-300"
                          >
                            -
                          </button>
                          <span className="mx-2">{item.quantity}</span>
                          <button
                            onClick={() => handleQuantityChange(item.id, 1)}
                            className="bg-gray-200 text-gray-600 px-2 py-1 rounded-md transition duration-300 hover:bg-gray-300"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-red-500 hover:text-red-700 transition duration-300"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-6 text-right">
                <h2 className="text-xl font-semibold text-gray-800">Total: ${totalPrice}</h2>
                <Link href="/checkout" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      <ChatbotComponent />
      <Footer />
    </>
  );
};

export default Cart;
