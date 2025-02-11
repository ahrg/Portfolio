import React from 'react';
import './ProjectCard.css';


const ProjectCard = ({ title, description, imageUrl, liveUrl, viewCode }) => {
  return (
    <div className="project-card">
      <div className="content">
        <h2>{title || "Project Title"}</h2>
        <p>{description || "A sleek web application for managing daily tasks and scheduling, built with React and Node.js"}</p>
      </div>
      <div className="image-container">
        <img src={imageUrl} alt="Project preview"/>
      </div>
      <div className="button-container">
        <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="btn primary">Live Demo</a>
        <a href={viewCode} target="_blank" rel="noopener noreferrer" className="btn secondary">View Code</a>
      </div>
    </div>
  );
};

export default ProjectCard;