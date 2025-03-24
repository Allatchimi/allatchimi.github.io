import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
      <div className="text-center max-w-4xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          Bonjour, je suis <span className="text-blue-600">[Votre Nom]</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-600 mb-8">
          Développeur Full Stack
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Je crée des applications web modernes et réactives avec les dernières technologies.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
          Voir mes projets
        </button>
      </div>
    </section>
  );
};

export default Hero;