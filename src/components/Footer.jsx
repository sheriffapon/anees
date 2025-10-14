import React from 'react';
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-accent p-4">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://instagram.com/Al aponwy Darweesh" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://x.com/aponwy" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://github.com/sheriffapon" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/Sheriff-SA" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
        <p>&copy; 2024 Sheriff Abdulraheem. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
