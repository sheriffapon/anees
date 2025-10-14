import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-5 right-5 z-20">
      <motion.button
        className="bg-indigo-500 text-white p-4 rounded-full shadow-lg"
        onClick={toggleChatbot}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Chat
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="bg-white p-4 rounded-lg shadow-lg w-80 h-96 absolute bottom-20 right-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            <h3 className="text-lg font-bold mb-4">Chat with me</h3>
            {/* Add chat content here */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;
