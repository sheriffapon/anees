import React from 'react';
import { motion } from 'framer-motion';

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Python', 'Git'];

const Skills = () => {
  return (
    <section id="skills" className="bg-accent text-primary py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="flex flex-wrap justify-center">
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              className="bg-primary text-accent p-4 m-2 rounded"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
