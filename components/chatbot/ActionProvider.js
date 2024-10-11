// components/chatbot/ActionProvider.js

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet() {
    const message = this.createChatBotMessage("Hello there! How can I help?");
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));

    this.showOptions(); // Show options after greeting
  }

  showOptions() {
    const optionsMessage = this.createChatBotMessage("Choose an Option to Explore Musical Instrument Types:", {
      widget: "options", // Specify the widget for options
    });

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, optionsMessage],
    }));
  }

  defaultResponse() {
    const message = this.createChatBotMessage("I'm here to assist you!");
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));

    this.showOptions(); // Show options after the default response
  }
}

export default ActionProvider;
