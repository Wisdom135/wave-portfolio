import React from 'react';

const Projects = () => {
  const projects = [
    { title: "Project 1", description: "Description of project 1", link: "#" },
    { title: "Project 2", description: "Description of project 2", link: "#" },
    { title: "Project 3", description: "Description of project 3", link: "#" },
    { title: "Project 4", description: "Description of project 4", link: "#" },
  ];

  return (
    <section id="projects" className="p-10">
      <h2 className="text-4xl mb-6">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="p-5 border rounded shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="mt-2">{project.description}</p>
            <a href={project.link} className="text-blue-500 hover:underline mt-2 inline-block">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;