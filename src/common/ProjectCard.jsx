import React from 'react';

function ProjectCard({ src, link, h3, p, description }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p>{p}</p>
      <p className="description">{description}</p>
    </a>
  );
}

export default ProjectCard;
