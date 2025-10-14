import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="bg-accent text-primary py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="md:w-1/2 p-4"
          >
            <p className="mb-4">I am a passionate Full Stack Developer with experience in building modern web applications. I specialize in React, Node.js, and the MERN stack. I am a quick learner and always eager to take on new challenges.</p>
            <motion.a 
              href="/resume.pdf" 
              className="bg-primary text-accent font-bold py-2 px-4 rounded"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              download
            >
              Download Resume
            </motion.a>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="md:w-1/2 p-4"
          >
            <img src="https://avatars.githubusercontent.com/u/89633994?v=4" alt="Sheriff Abdulraheem" className="rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
