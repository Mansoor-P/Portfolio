import React from 'react';
import styles from './ProjectsStyles.module.css';
import shopping from '../../assets/shopping.gif';
import food from '../../assets/food.gif';
import portfolio from '../../assets/portfolio.gif';
import jobsearching from '../../assets/jobsearching.gif';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={jobsearching}
          link="https://github.com/Mansoor-P/jobsmicroservices"
          h3="Job Searching"
          // p="jobapi"
          description="A project focused on job searching with API integration."
        />
        <ProjectCard
          src={shopping}
          link="https://github.com/Mansoor-P/E-Commerce-Website"
          h3="Shopping"
          // p="Shopping"
          description="An e-commerce project for shopping various products."
        />
        <ProjectCard
          src={food}
          link="https://github.com/Mansoor-P/food-delivery-app"
          h3="Food Shop"
          // p="Food Shop"
          description="An online platform for ordering food items."
        />
        <ProjectCard
          src={portfolio}
          link="https://github.com/Mansoor-P/Portfolio"
          h3="Portfolio App"
          // p="Portfolio App"
          description="An application for showcasing personal or professional portfolios."
        />
      </div>
    </section>
  );
}

export default Projects;
