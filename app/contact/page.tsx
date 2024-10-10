"use client";
import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Here you can handle form submission (e.g., send data to an API)
    // For demonstration, we'll just log the data
    console.log({ name, email, message });
    
    // Simulate a network request
    setTimeout(() => {
      alert('Message sent!');
      setIsSubmitting(false);
      setName('');
      setEmail('');
      setMessage('');
    }, 1000);
  };

  return (
    <>
    <Header />
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-10">Contact Us</h1>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
          <div className="mb-6">
            <label htmlFor="name" className="block text-lg font-semibold text-gray-800 mb-2">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-lg font-semibold text-gray-800 mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-lg font-semibold text-gray-800 mb-2">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              // rows="5"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full p-3 text-white font-semibold rounded-md ${isSubmitting ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        <div className="mt-10 text-center">
          <Link href="/" className="text-lg text-blue-500 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Contact;
