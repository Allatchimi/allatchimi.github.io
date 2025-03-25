import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
      <div className="text-center max-w-4xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          Bonjour, je suis <span className="text-blue-600">Mahamat Allatchi Bougar</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-600 mb-8">
          Développeur Backend & Frontend & Data Scientiste
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Je crée des applications web modernes et réactives avec les dernières technologies.
        </p>
        <div className="flex justify-center gap-4">
          <button 
            onClick={() => scrollToSection('projects')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            Voir mes projets
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-transparent hover:bg-blue-600 text-blue-600 hover:text-white font-bold py-3 px-6 border-2 border-blue-600 rounded-lg transition duration-300"
          >
            Me contacter
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;