// components/chatbot/ChatbotComponent.js

"use client"; // Ensure it's a client component

import React, { useState } from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css'; // Import default styles
import './styles/chatbot.css'; // Import your custom CSS file
import config from './ChatbotConfig';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';
import { FaComments } from 'react-icons/fa'; // Import chat icon

function ChatbotComponent() {
  const [isOpen, setIsOpen] = useState(false); // State to track visibility

  const toggleChatbot = () => {
    setIsOpen((prev) => !prev); // Toggle the chatbot visibility
  };

  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: '1000' }}>
      <button
        onClick={toggleChatbot}
        style={{
          backgroundColor: '#376B7E',
          color: '#fff',
          border: 'none',
          borderRadius: '50%',
          padding: '10px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <FaComments size={24} />
      </button>

      {isOpen && (
        <div style={{ maxWidth: '300px', marginTop: '10px' }}>
          <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />
        </div>
      )}
    </div>
  );
}

export default ChatbotComponent;
