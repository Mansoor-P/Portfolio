import React from 'react';
import styles from "../sections/Projects/ProjectsStyles.module.css"
function ProjectCard({ src, linkGit,linkDemo, h3, p }) {
  return (
    <div className={styles.a}>
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p>{p}</p>
      <button> <a href={linkGit} >GitHub</a></button>
      <button> <a href={linkDemo} >Live Demo</a></button>
    </div>
  );
}

export default ProjectCard;