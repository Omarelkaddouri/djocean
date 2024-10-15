// components/Map/Map.js
"use client";
import React from 'react';
import Translate from '../Map/Translate'; // Ensure the path is correct

const Map = () => {
  return (
    <>
      <section className="mb-10 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-4xl font-semibold text-gray-800 mb-4 text-center">
          <Translate word="our_location" /> {/* Use Translate component here */}
        </h2>
        <div className="w-full h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1720.006191117049!2d-9.561172718874166!3d30.435750909911636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b786ed856f81%3A0xcfee351cdd94fbfc!2sOcean%20Connecting%20sarl!5e0!3m2!1sen!2sma!4v1728567355494!5m2!1sen!2sma"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Location Map"
          />
        </div>
      </section>
    </>
  );
};

export default Map;
