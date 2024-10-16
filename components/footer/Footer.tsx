"use client";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
     <footer
      className="relative text-white py-12"
      style={{
        backgroundImage: "url('/images/footer.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '250px',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        {/* Left - Logo */}
        <div className="flex items-center space-x-3">
          <img 
            src="/images/main-logo.png" 
            alt="Logo" 
            className="h-[11rem] w-auto" 
          />
        </div>

        {/* Center - Contact Info */}
        <div className="text-center text-lg font-light">
          <p>&copy; {currentYear} DJStage</p>
          <p>Email: <a href="mailto:djstage.ma@gmail.com" className="hover:underline">djstage.ma@gmail.com</a></p>
          <p>Phone: <a href="tel:+212657011638" className="hover:underline">+212 657 011 638</a></p>
        </div>

        {/* Right - Social Media Links */}
        <div className="flex space-x-6">
          <a
            href="https://www.facebook.com/marocdjstage"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="transition-colors duration-300 hover:text-gray-300"
          >
            <FontAwesomeIcon icon={faFacebook} className="h-6 w-6" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="transition-colors duration-300 hover:text-gray-300"
          >
            <FontAwesomeIcon icon={faTwitter} className="h-6 w-6" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="transition-colors duration-300 hover:text-gray-300"
          >
            <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
