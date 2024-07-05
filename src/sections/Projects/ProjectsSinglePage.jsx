import React from "react";
import { useParams, Link } from "react-router-dom";
import projects from "./ProjectsData";
import styles from "./ProjectsSinglePage.module.css";

const ProjectsSinglePage = () => {
  const { id } = useParams();
  const project = projects.find((project) => project.id === parseInt(id));

  if (!project) {
    return <div className="text-center text-red">Project not found</div>;
  }

  const { title, image, description, techStack, uiFeatures, extraFields } =
    project;

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <h3 className={styles.sidebarTitle}>Projects</h3>
        <ul className={styles.sidebarList}>
          {projects.map((proj) => (
            <li key={proj.id} className={styles.sidebarListItem}>
              <Link to={`/projects/${proj.id}`} className={styles.sidebarLink}>
                {proj.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.mainContent}>
        <h2 className={styles.projectTitle}>{title}</h2>
        <img
          src={image}
          alt={`${title} logo`}
          className={styles.projectImage}
        />
        <p className={styles.projectDescription}>{description}</p>
        <a
          href={extraFields.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.viewProjectLink}
        >
          View Project
        </a>
        <a 
          href={extraFields.links.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.viewProjectLink}
        >
          Live Demo
        </a>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Tech Stack</h3>
          {techStack && (
            <div className={styles.techStackItem}>
              <strong>Frontend:</strong> {techStack.frontend.join(", ")}
            </div>
          )}
          {techStack && (
            <div className={styles.techStackItem}>
              <strong>Backend:</strong> {techStack.backend.join(", ")}
            </div>
          )}
          {techStack && (
            <div className={styles.techStackItem}>
              <strong>Database:</strong> {techStack.database.join(", ")}
            </div>
          )}
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>UI Features</h3>
          <ul>
            {uiFeatures &&
              uiFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default ProjectsSinglePage;
