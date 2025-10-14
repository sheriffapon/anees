import React, { useState, useEffect } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const toggleChat = () => setIsOpen(!isOpen);

  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessages = [...messages, { text: inputValue, sender: 'user' }];
      setMessages(newMessages);
      setInputValue('');
      // Simple bot response
      setTimeout(() => {
        setMessages([...newMessages, { text: 'Thanks for your message! I will get back to you shortly.', sender: 'bot' }]);
      }, 1000);
    }
  };

  useEffect(() => {
    if (isOpen) {
      setMessages([{ text: 'Hello! How can I help you today?', sender: 'bot' }]);
    }
  }, [isOpen]);

  return (
    <div>
      <button onClick={toggleChat} className="fixed bottom-4 right-4 bg-secondary text-primary p-4 rounded-full">
        Chat
      </button>
      {isOpen && (
        <div className="fixed bottom-20 right-4 w-80 h-96 bg-accent rounded-lg shadow-lg flex flex-col">
          <div className="p-4 border-b bg-primary text-accent">Chat with my AI assistant</div>
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block p-2 rounded-lg ${msg.sender === 'user' ? 'bg-primary text-accent' : 'bg-gray-200 text-gray-800'}`}>
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <div className="p-4 border-t flex">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              className="flex-1 p-2 border rounded-l-lg"
              placeholder="Type a message..."
            />
            <button onClick={handleSendMessage} className="bg-primary text-accent p-2 rounded-r-lg">Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
