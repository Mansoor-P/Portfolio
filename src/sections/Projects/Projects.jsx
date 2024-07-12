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
<<<<<<< HEAD
        {projects.map((project) => (
          <Link to={`/projects/${project.id}`} key={project.id}>
            <ProjectCard title={project.title} image={project.image} />
          </Link>
        ))}
=======
        <ProjectCard
          src={job}
          linkGit="https://mj-career.netlify.app/"
          linkDemo="https://mj-career.netlify.app/"
          h3="Job Searching Portal"
          p=" A dynamic web application "
        />
        <ProjectCard
          src={food}
          linkGit="https://github.com/Mansoor-P/food-delivery-app"
          linkDemo="https://mansoorfoodapp.netlify.app/"
          h3="Food  Delivering App"
          p="Hamburger Restaurant"
        />
        <ProjectCard
          src={portfolio}
          linkGit="https://github.com/Mansoor-P/Portfolio"
          linkDemo="https://mansoorsportfolio.netlify.app/"
          h3="Portfolio"
          p="portfolio"
        />
        <ProjectCard
          src={Ecart}
          linkGit="https://github.com/Mansoor-P/E-Commerce-Website"
          linkDemo=""
          h3="E-Cart"
          p="E-cart"
        />
        <ProjectCard
          src={Hotel}
          linkGit="https://github.com/Mansoor-P/hotel_booking"
          linkDemo=""
          h3="Hotel Booking Aeb App"
          p="Hotel Booking Aeb App"
        />
>>>>>>> 85e2e2aa893684adda1fa221700a03e2b58fa8a5
      </div>
    </section>
  );
}

export default Projects;
