"use client";
import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

const Checkout = () => {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState(''); // New state for address
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Guitar',
      price: 200,
      quantity: 1,
    },
    {
      id: 2,
      name: 'Bass',
      price: 150,
      quantity: 2,
    }
  ]);

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleWhatsAppClick = () => {
    const message = `Hi! I'm interested in the following items:\n` +
                    cartItems.map(item => `${item.name} - Quantity: ${item.quantity}`).join('\n') + 
                    `\nTotal Price: $${totalPrice}\n` + 
                    `Name: ${name}\nCountry: ${country}\nCity: ${city}\nAddress: ${address}`; // Include new fields
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/+212623092102?text=${encodedMessage}`; // Replace with your WhatsApp number

    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <Header />
      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-5xl font-bold text-center text-gray-800 mb-10">Checkout</h1>

          <form className="bg-white p-6 rounded-md shadow-md">
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="country">Country</label>
              <input
                type="text"
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded-md"
                required
              />
            </div>

            <h2 className="text-lg font-semibold text-gray-800 mb-4">Items in your cart:</h2>
            <ul className="mb-4">
              {cartItems.map(item => (
                <li key={item.id} className="flex justify-between mb-2">
                  <span>{item.name}</span>
                  <span>${item.price} x {item.quantity}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">Total Price: ${totalPrice}</h2>

            <button
              type="button"
              onClick={handleWhatsAppClick}
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
            >
              Complete Checkout via WhatsApp
            </button>
          </form>

          <div className="mt-4 text-center">
            <Link href="/cart" className="text-blue-500 hover:underline">Go back to cart</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
