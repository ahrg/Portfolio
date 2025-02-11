import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = ({ ProjectCardInfo }) => {
    const cardComponent = ProjectCardInfo.map((user, i) => {
        return <ProjectCard 
            key={i} 
            id={ProjectCardInfo[i].id} 
            title={ProjectCardInfo[i].title} 
            description={ProjectCardInfo[i].description} 
            imageUrl={ProjectCardInfo[i].imageUrl} 
            liveUrl={ProjectCardInfo[i].liveUrl} 
            viewCode={ProjectCardInfo[i].viewCode} 
        />
    });

    return (
        <div className="projects">
            {cardComponent}
        </div>
    );
}

export default Projects;