import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section 
      id="hero" 
      className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white h-screen flex items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto text-center">
        <motion.h1 
          className="text-5xl font-bold mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Sheriff Abdulraheem
        </motion.h1>
        <motion.p 
          className="text-2xl mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Full Stack Developer & Creative Technologist
        </motion.p>
        <motion.a 
          href="#contact" 
          className="bg-white text-indigo-500 font-bold py-3 px-6 rounded-full"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Hire Me
        </motion.a>
      </div>
    </motion.section>
  );
};

export default Hero;
