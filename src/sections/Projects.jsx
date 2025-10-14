import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'E-commerce Website',
    description: 'A full-featured e-commerce website built with the MERN stack.',
    image: 'https://via.placeholder.com/300',
    link: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase my skills and projects.',
    image: 'https://via.placeholder.com/300',
    link: '#',
  },
  {
    title: 'Task Management App',
    description: 'A simple task management app to help you stay organized.',
    image: 'https://via.placeholder.com/300',
    link: '#',
  },
];

const Projects = () => {
  return (
    <motion.section 
      id="projects" 
      className="bg-gray-100 text-gray-800 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0,0,0,0.1)' }}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img src={project.image} alt={project.title} className="mb-4 rounded-lg" />
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-lg mb-4">{project.description}</p>
              <a href={project.link} className="text-indigo-500 font-bold">View on GitHub</a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
