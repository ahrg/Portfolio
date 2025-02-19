import React from 'react';
import './ProjectCard.css';


const ProjectCard = ({ title, description, imageUrl, liveUrl, viewCode }) => {
  return (
    <div className="project-card">
      <div className="content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="image-container">
        <img src={imageUrl} alt="Project preview"/>
      </div>
      <div className="button-container">
        <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="btn primary">Se Demo</a>
        <a href={viewCode} target="_blank" rel="noopener noreferrer" className="btn secondary">Se Kode</a>
      </div>
    </div>
  );
};

export default ProjectCard;