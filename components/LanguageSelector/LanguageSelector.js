"use client";
import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '../../context/LanguageContext'; // Import LanguageContext

const languages = [
  { code: 'en', label: 'English', flag: '/images/flags/english-flag.png' },
  { code: 'fr', label: 'French', flag: '/images/flags/french-flag.png' },
  { code: 'ar', label: 'العربية', flag: '/images/flags/arabic-flag.png' },
];

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage(); // Access context
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  const handleLanguageChange = (language) => {
    setLanguage(language.code); // Update context with selected language code
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="border rounded-md p-2 flex items-center"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <Image
          src={languages.find(lang => lang.code === language).flag} // Find the flag based on current language
          alt={languages.find(lang => lang.code === language).label}
          width={20}
          height={20}
          className="mr-2"
        />
        {languages.find(lang => lang.code === language).label}
      </button>

      {isOpen && (
        <div className="absolute bg-white border rounded-md shadow-md mt-1 w-full z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang)}
              className="flex items-center p-2 w-full text-left hover:bg-gray-200"
            >
              <Image
                src={lang.flag}
                alt={lang.label}
                width={20}
                height={20}
                className="mr-2"
              />
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
