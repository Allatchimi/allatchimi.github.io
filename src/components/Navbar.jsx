import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white shadow-md z-10 py-2"> {/* Réduction du padding vertical */}
      <div className="flex justify-between items-center px-0.5 max-w-7xl mx-auto"> {/* Suppression du padding général */}
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-gray-800">Allatchimi-Portfolio</span>{/* Texte plus petit */} 
        <div className="hidden md:flex space-x-6"> {/* Espacement réduit entre liens */}
          <a href="#home" className="text-sm text-gray-600 hover:text-blue-600">Accueil</a> {/* Texte plus petit */}
          <a href="#about" className="text-sm text-gray-600 hover:text-blue-600">À propos</a>
          <a href="#projects" className="text-sm text-gray-600 hover:text-blue-600">Projets</a>
          <a href="#skills" className="text-sm text-gray-600 hover:text-blue-600">Compétences</a>
          <a href="#contact" className="text-sm text-gray-600 hover:text-blue-600">Contact</a>
        </div>
        <button className="md:hidden p-1"> {/* Bouton menu plus compact */}
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;