"use client";
import { useState } from 'react';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import dynamic from 'next/dynamic';
import Translate from './Translate'; // Adjust the path as needed

const ChatbotComponent = dynamic(() => import('../../components/chatbot/ChatbotComponent'), { ssr: false });

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Add explicit type for 'e'
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');

    try {
      console.log({ name, email, question, message });
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSuccessMessage('success_message'); // Set translation key as string
      setName('');
      setEmail('');
      setQuestion('');
      setMessage('');
    } catch (error) {
      console.error("Failed to send message", error);
      setSuccessMessage('error_message'); // Set error translation key
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12 bg-white shadow-md rounded-lg">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img
            src="/images/contact.svg"
            alt="Contact"
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="md:w-1/2 w-full px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
            <Translate word="get_in_touch" />
          </h2>
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <label htmlFor="name" className="font-medium">
              <Translate word="name" />
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <label htmlFor="email" className="font-medium">
              <Translate word="email" />
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <label htmlFor="question" className="font-medium">
              <Translate word="your_question" />
            </label>
            <input
              type="text"
              id="question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <label htmlFor="message" className="font-medium">
              <Translate word="message" />
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              required
            ></textarea>

            <button
              type="submit"
              className="py-3 px-6 bg-blue-600 text-white rounded hover:bg-blue-700 transition font-semibold"
              disabled={isSubmitting}
            >
              {isSubmitting ? <Translate word="sending" /> : <Translate word="send_message" />}
            </button>

            {successMessage && (
              <p className="text-green-500 font-semibold mt-4">
                <Translate word={successMessage} />
              </p>
            )}
          </form>
        </div>
      </div>
      <ChatbotComponent />
      <Footer />
    </>
  );
};

export default Contact;
