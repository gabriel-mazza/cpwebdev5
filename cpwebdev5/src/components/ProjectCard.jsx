import React from 'react';

const ProjectCard = ({ title, description, githubLink }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition hover:scale-105 hover:shadow-xl cursor-pointer">
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="text-gray-700">{description}</p>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
