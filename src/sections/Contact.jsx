import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.section 
      id="contact" 
      className="bg-gray-100 text-gray-800 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Contact</h2>
        <p className="mb-8 text-lg">I'm open to new opportunities. Feel free to reach out to me.</p>
        <motion.a 
          href="mailto:sheriff.apon@gmail.com" 
          className="bg-indigo-500 text-white font-bold py-4 px-8 rounded-full"
          whileHover={{ scale: 1.1, boxShadow: '0px 5px 15px rgba(0,0,0,0.2)' }}
          whileTap={{ scale: 0.9 }}
        >
          Email Me
        </motion.a>
      </div>
    </motion.section>
  );
};

export default Contact;
