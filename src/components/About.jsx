import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">À propos de moi</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <div className="w-64 h-64 mx-auto rounded-full bg-gray-200 overflow-hidden">
              {/* Remplacez par votre photo */}
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <span className="text-gray-500">Photo</span>
              </div>
            </div>
          </div>
          <div className="md:w-2/3">
            <p className="text-lg text-gray-600 mb-6">
              Passionné par le développement web depuis plusieurs années, j'aime créer des solutions innovantes et performantes. 
              Mon expertise couvre à la fois le frontend et le backend.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Diplômé en [Votre Formation], j'ai travaillé sur divers projets allant des sites vitrines aux applications complexes.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">React</span>
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">Node.js</span>
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">Tailwind</span>
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">MongoDB</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;