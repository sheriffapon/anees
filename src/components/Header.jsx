import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">My Portfolio</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/about" className="hover:text-indigo-500">About</Link></li>
            <li><Link to="/projects" className="hover:text-indigo-500">Projects</Link></li>
            <li><Link to="/skills" className="hover:text-indigo-500">Skills</Link></li>
            <li><Link to="/contact" className="hover:text-indigo-500">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
