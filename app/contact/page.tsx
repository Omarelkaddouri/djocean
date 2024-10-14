"use client";
import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState(''); // New state for question
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');

    // Simulate a network request (replace this with your API call)
    console.log({ name, email, question, message });
    setTimeout(() => {
      setSuccessMessage('Your message has been sent successfully!');
      setIsSubmitting(false);
      setName('');
      setEmail('');
      setQuestion('');
      setMessage('');
    }, 1000);
  };

  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12 bg-white shadow-md rounded-lg">
      {/* Image Section */}
      <div className="md:w-1/2 mb-6 md:mb-0">
        <img
          src="/images/contact.svg"
          alt="Contact"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Form Section */}
      <div className="md:w-1/2 w-full px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">Get in Touch</h2>
        <form className="flex flex-col space-y-4">
          <label htmlFor="name" className="font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <label htmlFor="email" className="font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <label htmlFor="question" className="font-medium">
            Your Question
          </label>
          <input
            type="text"
            id="question"
            name="question"
            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <label htmlFor="message" className="font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
            required
          ></textarea>

          <button
            type="submit"
            className="py-3 px-6 bg-blue-600 text-white rounded hover:bg-blue-700 transition font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
      <Footer />
    </>
  );
};

export default Contact;
