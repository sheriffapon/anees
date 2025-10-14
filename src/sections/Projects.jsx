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
    <section id="projects" className="bg-primary text-accent py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="bg-accent text-primary p-4 rounded"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img src={project.image} alt={project.title} className="mb-4" />
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <a href={project.link} className="text-secondary">View on GitHub</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
