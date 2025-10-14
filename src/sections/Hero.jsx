import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="bg-primary text-accent h-screen flex items-center">
      <div className="container mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-4"
        >
          Sheriff Abdulraheem
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-2xl mb-8"
        >
          Full Stack Developer & Creative Technologist
        </motion.p>
        <motion.a 
          href="#contact" 
          className="bg-secondary text-primary font-bold py-2 px-4 rounded"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Hire Me
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
