import React from "react";
import "./ProjectCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({
  title,
  description,
  technologies,
  link,
  repoLink,
  imageUrl,
}) => {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} className="project-image" />
      <div className="project-content">
        <h2 className="project-title">{title}</h2>
        <p className="project-description">{description}</p>
        <div className="project-technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="project-tech">
              {tech}
            </span>
          ))}
        </div>
        <div className="project-links">
          {link && (
            <a
              href={link}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
              title="Live Demo">
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
          )}
          {repoLink && (
            <a
              href={repoLink}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
              title="View Code on GitHub">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
