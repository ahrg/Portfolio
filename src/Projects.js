import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = ({ ProjectCardInfo }) => {
    const cardComponent = ProjectCardInfo.map((user, i) => {
        return <ProjectCard key={i} id={ProjectCardInfo[i].id} title={ProjectCardInfo[i].title} description={ProjectCardInfo[i].description} imageUrl={ProjectCardInfo[i].imageUrl} />
    })

    return (
        <div className="projects" style={{overflowY: 'scroll', border: '1px solid black', height: '800px'}}>
            {cardComponent}
        </div>
    );
    }

    export default Projects;