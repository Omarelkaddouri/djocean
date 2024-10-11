// components/chatbot/ChatbotConfig.js

import { createChatBotMessage } from 'react-chatbot-kit';
import Options from './Options'; // Import the Options component

const config = {
  botName: "ChatBot",
  initialMessages: [createChatBotMessage("Hello! How can I assist you?")],
  customComponents: {
    // You can add custom components here if needed
  },
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />, // Render the Options component
      mapStateToProps: ["messages"],
    },
  ],
};

export default config;
