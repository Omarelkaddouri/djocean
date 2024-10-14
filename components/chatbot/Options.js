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
    color: '#fff',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)', // Shadow for depth
  },
  optionButton: {
    backgroundColor: 'rgb(62 62 62)',
    border: '2px solid #fff',
    color: '#fff',
    padding: '12px',
    borderRadius: '8px',
    // margin: '8px 0',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '13px',
    fontWeight: 'bold',
    outline: 'none',
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
        message = createChatBotMessage("You selected Guitars. Types include: Acoustic, Electric, Bass.", { className: 'bot-message' });
        break;
      case "Basses":
        message = createChatBotMessage("You selected Basses. Types include: Electric Bass, Double Bass, Fretless Bass.", { className: 'bot-message' });
        break;
      case "Drums":
        message = createChatBotMessage("You selected Drums. Types include: Acoustic Drums, Electronic Drums, Hand Drums.", { className: 'bot-message' });
        break;
      default:
        message = createChatBotMessage("Please select a valid option.", { className: 'bot-message' });
    }

    // Update the contact message to be clickable
    const contactMessage = createChatBotMessage(
      <span>
        For more information, contact us at: <a href="tel:+212657011638" style={{ color: 'dark', textDecoration: 'none' }}>+212657011638</a>
      </span>,
      { className: 'bot-message' }
    );

    // Update the chatbot state with the messages
    props.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message, contactMessage],
    }));
  };

  return (
    <div style={styles.optionsContainer}>
      {options.map((option) => (
        <button
          key={option.id}
          onClick={option.handler}
          style={styles.optionButton}
        >
          {option.text}
        </button>
      ))}
    </div>
  );
};

export default Options;
