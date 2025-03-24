import React from 'react';

const Projects = () => {
  // Données de vos projets (à personnaliser)
  const projects = [
    {
      id: 1,
      title: "Application Web",
      description: "Une application web moderne avec React et Node.js",
      technologies: ["React", "Node.js", "MongoDB"],
      imageUrl: "#" // Remplacez par l'URL de votre image
    },
    {
      id: 2,
      title: "Site Vitrine",
      description: "Un site vitrine responsive avec Tailwind CSS",
      technologies: ["HTML", "Tailwind CSS", "JavaScript"],
      imageUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Mes Projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 bg-gray-300 flex items-center justify-center">
                {/* Placeholder pour l'image */}
                <span className="text-gray-500">Image du projet</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Assurez-vous d'avoir cette ligne d'exportation
export default Projects;