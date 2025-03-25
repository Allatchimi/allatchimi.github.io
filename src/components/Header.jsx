import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm fixed w-full z-10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">Allatchimi-Portfolio</h1>
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-600 hover:text-blue-600 transition">Accueil</a>
          <a href="#about" className="text-gray-600 hover:text-blue-600 transition">À propos</a>
          <a href="#projects" className="text-gray-600 hover:text-blue-600 transition">Projets</a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600 transition">Contact</a>
        </nav>
        <button className="md:hidden text-gray-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header; // L'exportation par défaut est cruciale