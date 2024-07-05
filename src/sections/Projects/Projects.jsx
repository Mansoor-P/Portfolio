import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../../common/ProjectCard";
import projects from "./ProjectsData";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        {projects.map((project) => (
          <Link to={`/projects/${project.id}`} key={project.id}>
            <ProjectCard title={project.title} image={project.image} />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Projects;
