import React from 'react';

const Header = () => {
  return (
    <header className="bg-primary text-accent p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold">Sheriff Abdulraheem</a>
        <div>
          <a href="#about" className="mx-2">About</a>
          <a href="#projects" className="mx-2">Projects</a>
          <a href="#skills" className="mx-2">Skills</a>
          <a href="#contact" className="mx-2">Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
