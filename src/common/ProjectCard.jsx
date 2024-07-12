<<<<<<< HEAD
import React from "react";
import PropTypes from "prop-types";

function ProjectCard({ title, image }) {
  return (
    <div className="projectCard">
      <img src={image} alt={title} className="projectImage" />
      <h2 className="projectTitle">{title}</h2>
=======
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
>>>>>>> 85e2e2aa893684adda1fa221700a03e2b58fa8a5
    </div>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ProjectCard;
