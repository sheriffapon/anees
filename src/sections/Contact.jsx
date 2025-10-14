import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="bg-primary text-accent py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Contact</h2>
        <p className="mb-8">I'm open to new opportunities. Feel free to reach out to me.</p>
        <motion.a 
          href="mailto:sheriff.apon@gmail.com" 
          className="bg-secondary text-primary font-bold py-3 px-6 rounded-full"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Email Me
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;
