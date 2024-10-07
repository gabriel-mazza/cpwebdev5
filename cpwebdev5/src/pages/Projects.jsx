import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'Projeto Python',
    description: 'Projeto em python menu interativo',
    githubLink: 'https://github.com/gabriel-mazza/SPRINT3PY',
  },
  {
    title: 'Projeto Mahindra',
    description: 'Projeto site de transmissão com loja e corridas de formula E',
    githubLink: 'https://github.com/gabriel-mazza/sprintvercel',
  },
  
];

const Projects = () => {
  return (
    <div className="container mx-auto p-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          githubLink={project.githubLink}
        />
      ))}
    </div>
  );
};

export default Projects;
