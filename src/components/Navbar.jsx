import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white shadow-lg z-10">
      <div className="flex justify-between items-center p-4 max-w-6xl mx-auto">
        <h1 className="text-xl font-bold text-gray-800">Mon Portfolio</h1>
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-600 hover:text-blue-600">Accueil</a>
          <a href="#about" className="text-gray-600 hover:text-blue-600">À propos</a>
          <a href="#projects" className="text-gray-600 hover:text-blue-600">Projets</a>
          <a href="#skills" className="text-gray-600 hover:text-blue-600">Compétences</a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
        </div>
        <button className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;