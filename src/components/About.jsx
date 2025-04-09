import React from 'react';
import profileImage from '../assets/amine1.jpg'; // Importez votre image

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">À propos de moi</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Section Photo */}
          <div className="md:w-1/3 flex justify-center">
            <div className="w-64 h-64 rounded-full bg-gray-100 overflow-hidden border-4 border-blue-100 shadow-lg transition-all hover:shadow-xl hover:border-blue-200">
              <img
                src="/assets/amine1.jpg" 
                alt="Mahamat Allatchi Bougar"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                
              />
            </div>
          </div>
          
          {/* Section Texte */}
          <div className="md:w-2/3">
            <p className="text-lg text-gray-600 mb-6">
              Passionné par le développement web depuis plusieurs années, j'aime créer des solutions innovantes et performantes. 
              Mon expertise couvre à la fois le frontend et le backend.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Diplômé en Informatique, j'ai travaillé sur divers projets allant des sites vitrines aux applications complexes.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">React</span>
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">Node.js</span>
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">Tailwind CSS</span>
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">MongoDB</span>
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">Python</span>
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">Data Science</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;