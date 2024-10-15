"use client";
import Link from 'next/link';
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from '../../context/LanguageContext'; // Adjust the import path as needed
import { translate } from '../../translations'; // Adjust the import path as needed

const About = () => {
  const { language } = useLanguage();

  return (
    <div>
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-5xl font-bold text-center text-gray-800 mb-10 drop-shadow-lg">
            {translate('about', language)} DJStage
          </h1>

          {/* Who We Are Section */}
          <motion.section 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }} 
            className="mb-10 p-6 bg-white rounded-lg shadow-lg transform transition-all hover:shadow-2xl duration-300"
          >
            <h2 className="text-4xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-400 pb-2">
              {translate('who_we_are', language)} {/* Add translation for this key */}
            </h2>
            <div className="flex flex-col md:flex-row items-center md:space-x-6">
              <img
                src="/images/Orchestra-amico.svg"
                alt="Musicians"
                style={{ height: "250px" }}
                className="rounded-lg shadow-md mb-4 md:mb-0"
              />
              <div className="text-lg text-gray-700">
                <p className="mb-4">
                  {translate('who_we_are_description_1', language)} {/* Add translation for this key */}
                </p>
                <p className="mb-4">
                  {translate('who_we_are_description_2', language)} {/* Add translation for this key */}
                </p>
              </div>
            </div>
          </motion.section>

          {/* Our Mission Section */}
          <motion.section 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }} 
            className="mb-10 p-6 bg-white rounded-lg shadow-lg transform transition-all hover:shadow-2xl duration-300"
          >
            <h2 className="text-4xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-400 pb-2">
              {translate('our_mission', language)} {/* Add translation for this key */}
            </h2>
            <div className="flex flex-col md:flex-row items-center md:space-x-6">
              <img
                src="/images/band-amico.svg"
                alt="Concert"
                style={{ height: "250px" }}
                className="rounded-lg shadow-md mb-4 md:mb-0"
              />
              <p className="text-lg text-gray-700">
                {translate('our_mission_description', language)} {/* Add translation for this key */}
              </p>
            </div>
          </motion.section>

          {/* Our Values Section */}
          <motion.section 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }} 
            className="mb-10 p-6 bg-white rounded-lg shadow-lg transform transition-all hover:shadow-2xl duration-300"
          >
            <h2 className="text-4xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-400 pb-2">
              {translate('our_values', language)} {/* Add translation for this key */}
            </h2>
            <ul className="list-disc pl-5 text-lg text-gray-700 space-y-2">
              <li>{translate('value_customer_satisfaction', language)}</li> {/* Add translation for this key */}
              <li>{translate('value_quality', language)}</li> {/* Add translation for this key */}
              <li>{translate('value_community', language)}</li> {/* Add translation for this key */}
              <li>{translate('value_innovation', language)}</li> {/* Add translation for this key */}
            </ul>
          </motion.section>

          {/* What You Can Expect Section */}
          <motion.section 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }} 
            className="mb-10 p-6 bg-white rounded-lg shadow-lg transform transition-all hover:shadow-2xl duration-300"
          >
            <h2 className="text-4xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-400 pb-2">
              {translate('what_you_can_expect', language)} {/* Add translation for this key */}
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              {translate('expectation_intro', language)} {/* Add translation for this key */}
            </p>
            <ul className="list-disc pl-5 text-lg text-gray-700 space-y-2">
              <li>{translate('expectation_item_1', language)}</li> {/* Add translation for this key */}
              <li>{translate('expectation_item_2', language)}</li> {/* Add translation for this key */}
              <li>{translate('expectation_item_3', language)}</li> {/* Add translation for this key */}
              <li>{translate('expectation_item_4', language)}</li> {/* Add translation for this key */}
            </ul>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default About;
