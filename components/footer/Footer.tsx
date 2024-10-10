"use client";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer 
      className="relative text-white py-12" // Increased vertical padding
      style={{ 
        backgroundImage: "url('/images/footer.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '200px' // Set a minimum height for the footer
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white opacity-20"></div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        
        {/* Left - Logo */}
        <div className="flex items-center space-x-3">
          <img 
            src="/images/main-logo.png" 
            alt="Logo" 
            className="h-[12rem] w-auto" 
          />
        </div>
        
        {/* Center - Copyright and Email */}
        <div className="text-center">
          <p>© 2024 DJStage</p>
          <p>djstage@gmail.com</p>
          <p>+21200000000</p>
        </div>
        
        {/* Right - Social Media Icons */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="text-white h-6 w-6 hover:text-gray-400" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="text-white h-6 w-6 hover:text-gray-400" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="text-white h-6 w-6 hover:text-gray-400" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
