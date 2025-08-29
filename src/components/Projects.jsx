import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Application E-commerce",
      description: "Une plateforme e-commerce complète avec React, Node.js et MongoDB",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      image: "/assets/project1.jpg",
      link: "#"
    },
    {
      id: 2,
      title: "Portfolio Personnel",
      description: "Site portfolio responsive avec animations modernes",
      technologies: ["React", "Vite", "Tailwind CSS"],
      image: "/assets/project2.jpg",
      link: "#"
    },
    {
      id: 3,
      title: "Application de Gestion de Tâches",
      description: "Application de productivité avec fonctionnalités avancées",
      technologies: ["React", "Firebase", "Material-UI"],
      image: "/assets/project3.jpg",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Mes Projets
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">
                  {project.title}
                </span>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a
                  href={project.link}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition duration-300"
                >
                  Voir le projet
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;