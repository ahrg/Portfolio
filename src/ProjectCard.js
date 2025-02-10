import React from 'react';
import './ProjectCard.css';


const ProjectCard = ({ title, description, imageUrl }) => {
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
        <button className="btn primary">Live Demo</button>
        <button className="btn secondary">View Code</button>
      </div>
    </div>
  );
};

export default ProjectCard;