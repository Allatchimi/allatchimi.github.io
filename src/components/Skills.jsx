import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
        { name: "Tailwind CSS", level: 85 },
        { name: "TypeScript", level: 70 }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Python", level: 80 },
        { name: "MongoDB", level: 70 },
        { name: "SQL", level: 65 },
        { name: "REST APIs", level: 80 }
      ]
    },
    {
      category: "Data Science",
      skills: [
        { name: "Pandas", level: 75 },
        { name: "NumPy", level: 70 },
        { name: "Matplotlib", level: 65 },
        { name: "Scikit-learn", level: 60 },
        { name: "Data Visualization", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Mes Compétences
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Section technologies */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center text-gray-800 mb-8">
            Technologies que j'utilise
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "React", "JavaScript", "Node.js", "Python", "MongoDB",
              "Tailwind CSS", "Git", "Vite", "Pandas", "NumPy"
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-blue-100 text-blue-800 px-6 py-3 rounded-full font-medium hover:bg-blue-200 transition duration-300"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;