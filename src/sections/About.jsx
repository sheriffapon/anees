import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section 
      id="about" 
      className="bg-white text-gray-800 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 p-4"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <img src="https://avatars.githubusercontent.com/u/89633994?v=4" alt="Sheriff Abdulraheem" className="rounded-lg shadow-lg" />
          </motion.div>
          <motion.div 
            className="md:w-1/2 p-4"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <p className="text-lg mb-4">I am a passionate Full Stack Developer with a love for creating beautiful and functional web applications. I have a strong background in JavaScript, React, and Node.js, and I'm always looking for new ways to improve my skills.</p>
            <p className="text-lg">When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee.</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
