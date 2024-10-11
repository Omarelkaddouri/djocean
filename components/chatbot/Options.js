// components/chatbot/Options.js

import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';

// Style for the options container and buttons
const styles = {
  optionsContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '10px',
    borderRadius: '8px',
    padding: '15px',
    backgroundColor: '#007bff', // Primary color
    color: '#fff',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)', // Shadow for depth
  },
  optionButton: {
    backgroundColor: 'transparent',
    border: '2px solid #fff', // Border for better visibility
    color: '#fff',
    padding: '12px',
    borderRadius: '8px',
    margin: '8px 0',
    cursor: 'pointer',
    transition: 'all 0.3s ease', // Smooth transition for effects
    fontSize: '16px', // Larger font size
    fontWeight: 'bold', // Bold text
    outline: 'none', // Remove outline
  },
  optionButtonHover: {
    backgroundColor: '#0056b3', // Darker shade for hover
    transform: 'scale(1.05)', // Slightly enlarge button on hover
  },
  optionButtonActive: {
    backgroundColor: '#0056b3', // Active state
    color: '#fff',
    transform: 'scale(0.95)', // Slightly shrink button when active
  },
};

const Options = (props) => {
  const options = [
    { text: "Guitars", handler: () => handleOptionSelect("Guitars"), id: 1 },
    { text: "Basses", handler: () => handleOptionSelect("Basses"), id: 2 },
    { text: "Drums", handler: () => handleOptionSelect("Drums"), id: 3 },
  ];

  const handleOptionSelect = (option) => {
    let message;

    // Set message based on selected option
    switch (option) {
      case "Guitars":
        message = createChatBotMessage("You selected Guitars. Types include: Acoustic, Electric, Bass.");
        break;
      case "Basses":
        message = createChatBotMessage("You selected Basses. Types include: Electric Bass, Double Bass, Fretless Bass.");
        break;
      case "Drums":
        message = createChatBotMessage("You selected Drums. Types include: Acoustic Drums, Electronic Drums, Hand Drums.");
        break;
      default:
        message = createChatBotMessage("Please select a valid option.");
    }

    // Update the chatbot state with the message
    props.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  return (
    <div style={styles.optionsContainer}>
      {options.map((option) => (
        <button
          key={option.id}
          onClick={option.handler}
          style={styles.optionButton}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = styles.optionButtonHover.backgroundColor)}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          onMouseDown={(e) => (e.currentTarget.style.transform = styles.optionButtonActive.transform)}
          onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          {option.text}
        </button>
      ))}
    </div>
  );
};

export default Options;
