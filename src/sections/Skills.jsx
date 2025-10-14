import React from 'react';
import { motion } from 'framer-motion';

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Python', 'Git'];

const Skills = () => {
  return (
    <motion.section 
      id="skills" 
      className="bg-white text-gray-800 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Skills</h2>
        <div className="flex flex-wrap justify-center">
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              className="bg-indigo-500 text-white p-4 m-2 rounded-lg text-lg font-bold"
              whileHover={{ scale: 1.1, rotate: 5 }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
