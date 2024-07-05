import React from "react";
import PropTypes from "prop-types";

function ProjectCard({ title, image }) {
  return (
    <div className="projectCard">
      <img src={image} alt={title} className="projectImage" />
      <h2 className="projectTitle">{title}</h2>
    </div>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ProjectCard;
