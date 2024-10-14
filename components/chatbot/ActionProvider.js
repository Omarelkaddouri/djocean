// components/chatbot/ActionProvider.js

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet() {
    const message = this.createChatBotMessage("Hello there! How can I help?", { className: 'bot-message' });
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));

    this.showOptions(); // Show options after greeting
  }

  showOptions() {
    const optionsMessage = this.createChatBotMessage("Choose an Option to Explore Musical Instrument Types:", {
      widget: "options",
      className: 'bot-message',
    });

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, optionsMessage],
    }));
  }

  defaultResponse() {
    const typingMessage = this.createChatBotMessage("...", { className: 'typing-indicator' });
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, typingMessage],
    }));

    // Simulate a delay for the bot to respond
    setTimeout(() => {
      const message = this.createChatBotMessage("I'm here to assist you!", { className: 'bot-message' });
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));

      this.showOptions(); // Show options after the default response
    }, 1500); // Adjust delay as needed
  }
}

export default ActionProvider;
