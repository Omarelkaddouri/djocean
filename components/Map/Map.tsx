"use client";
import React from 'react';
import Translate from '../Map/Translate';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

// Add the keyframes for the staggered animation
const styles = {
  animation: `
    @keyframes fade-in {
      0% {
        opacity: 0;
        transform: translateY(10px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .animate-fade-in {
      opacity: 0;
      animation: fade-in 0.5s forwards;
    }
  `
};

const Map = () => {
  return (
    <>
      <style>{styles.animation}</style> {/* Embedding the styles in the component */}
      <section className="relative mb-12 p-8 bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100 rounded-xl shadow-xl overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('https://path-to-background-image.jpg')" }}></div>

        <h2 className="relative text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
          <Translate word="our_location" />
        </h2>
        <p className="relative text-lg md:text-xl text-gray-600 mb-6 text-center">
          <Translate word="discover_our_location" />
        </p>

        <div className="relative flex flex-col lg:flex-row lg:space-x-8 items-center lg:items-start">
          <div className="w-full lg:w-1/2 h-96 overflow-hidden rounded-lg border border-gray-200 shadow-lg mb-6 lg:mb-0 animate-fade-slide-left">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1720.006191117049!2d-9.561172718874166!3d30.435750909911636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b786ed856f81%3A0xcfee351cdd94fbfc!2sOcean%20Connecting%20sarl!5e0!3m2!1sen!2sma!4v1728567355494!5m2!1sen!2sma"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Our Location on Google Maps"
              aria-label="Map showing our location"
            />
          </div>

          <div className="relative flex flex-col w-full lg:w-1/2 space-y-8 text-center lg:text-left">
            <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <FaMapMarkerAlt className="text-blue-600 text-2xl" />
              <div>
                <p className="text-xl font-semibold text-gray-800"><Translate word="address" /></p>
                <p className="text-gray-600"><Translate word="location_address" /></p> {/* Use the new key */}
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <FaPhoneAlt className="text-green-600 text-2xl" />
              <div>
                <p className="text-xl font-semibold text-gray-800"><Translate word="phone_number" /></p>
                <a href="tel:+212657011638" className="text-blue-600 hover:underline">
                  +212 657 011 638
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md border-l-4 border-red-500 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <FaEnvelope className="text-red-600 text-2xl" />
              <div>
                <p className="text-xl font-semibold text-gray-800"><Translate word="email" /></p>
                <a href="mailto:djstage.ma@gmail.com" className="text-blue-600 hover:underline">
                  djstage.ma@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md border-l-4 border-yellow-500 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <FaClock className="text-yellow-600 text-2xl" />
              <div>
                <p className="text-xl font-semibold text-gray-800"><Translate word="working_hours" /></p>
                <p className="text-gray-600"><Translate word="working_hours_week" /></p>
                <p className="text-gray-600"><Translate word="working_hours_sat" /></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Map;
