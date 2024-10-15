// components/Map/Translate.js
"use client";
import React from 'react';
import { useLanguage } from '../../context/LanguageContext'; // Importing the LanguageContext

const translations = {
  our_location: {
    en: "Our Location",
    fr: "Notre emplacement",
    ar: "موقعنا",
  },
  // Add more translation keys as needed
};

const Translate = ({ word }) => {
  const { language } = useLanguage(); // Get current language from context

  return (
    <>
      {translations[word] ? translations[word][language] || translations[word]['en'] : word}
    </>
  );
};

export default Translate;
