// components/LanguageSelector.js

import { useState } from 'react';
import Image from 'next/image';

const languages = [
  { code: 'en', label: 'English', flag: '/images/flags/english-flag.png' },
  { code: 'fr', label: 'French', flag: '/images/flags/french-flag.png' },
  { code: 'العربية', label: 'العربية', flag: '/images/flags/arabic-flag.png' },
];

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
    // Add logic to handle language change, such as updating context or local storage
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="border rounded-md p-2 flex items-center"
      >
        <Image
          src={selectedLanguage.flag}
          alt={selectedLanguage.label}
          width={20}
          height={20}
          className="mr-2"
        />
        {selectedLanguage.label}
      </button>

      {isOpen && (
        <div className="absolute bg-white border rounded-md shadow-md mt-1 w-full z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language)}
              className="flex items-center p-2 w-full text-left hover:bg-gray-200"
            >
              <Image
                src={language.flag}
                alt={language.label}
                width={20}
                height={20}
                className="mr-2"
              />
              {language.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
