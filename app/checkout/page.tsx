"use client";
import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import Modal from '@/components/Modal/Modal'; // Import the Modal component

const Checkout = () => {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showModal, setShowModal] = useState(false); // State for modal visibility

  const [cartItems] = useState([
    { id: 1, name: 'Guitar', price: 200, quantity: 1 },
    { id: 2, name: 'Bass', price: 150, quantity: 2 }
  ]);

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckoutSubmit = () => {
    // Here you could also handle sending data to your server if needed
    setSuccessMessage("Checkout successful! Thank you for your order.");
    setShowModal(true); // Show the modal on successful checkout
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close the modal
    setSuccessMessage(''); // Clear the success message if needed
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
              <label className="block text-gray-700" htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              onClick={handleCheckoutSubmit}
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
            >
              Complete Checkout
            </button>
          </form>

          <div className="mt-4 text-center">
            <Link href="/cart" className="text-blue-500 hover:underline">Go back to cart</Link>
          </div>
        </div>
      </div>

      {/* Render the modal if showModal is true */}
      {showModal && (
        <Modal message={successMessage} onClose={handleCloseModal} />
      )}

      <Footer />
    </>
  );
};

export default Checkout;
